import NextAuth from 'next-auth'
import AppleProvider from 'next-auth/providers/apple'
import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'
import EmailProvider from 'next-auth/providers/email'
import GithubProvider from 'next-auth/providers/github'
import mongoose from 'mongoose'
import User from '@/models/User'
import payment from '@/models/payment'


export const authoptions = NextAuth({
  providers: [
    // OAuth authentication providers...
   
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
     if(account.provider == "github")
     {
       const client = await mongoose.connect(process.env.MGDB);
       const currentuser = await User.findOne({email :email})
       if(!currentuser){
        const newuser = new User({
          email : email ,
          username : email.split("@")[0],
         })
         await newuser.save()
       }      
      }
      return true
     }
    },
    async session({session , user , token}){
      const dbuser = await user.findOne({email : session.user.email})
      session.user.name = dbuser.username
      console.log(`i am session ${session}`);
      
      return session
    }
})

export {authoptions as GET  ,authoptions as POST}