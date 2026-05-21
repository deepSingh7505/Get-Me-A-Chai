import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className=" text-white flex justify-center items-center flex-col min-h-[44vh] gap-3">
        <div className="flex items-center font-bold text-5xl"> Buy Me A chai <span><img src="/tea.gif" alt="" width={88} /></span></div>
        <p className="font-bold text-xl">
          A crowdFunding Platform for creators . Get Funded by your friends and fans .Start Now!
        </p>
        <div className="flex gap-2">
          <button type="button" className="text-white bg-gradient-to-br cursor-pointer from-purple-600 to-blue-500 hover:bg-gradient-to-bl dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5">Start Now</button>
          <button type="button" className="text-white bg-gradient-to-br cursor-pointer from-purple-600 to-blue-500 hover:bg-gradient-to-bl dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5">Read More</button>

        </div>
      </div>
      <div className="bg-white h-1 opacity-10">
      </div>
      <div className="flex flex-col items-center text-white my-7 gap-5 container m-auto">
        <h1 className="text-3xl">Buy a chai for me and fund me</h1>
        <div className="flex justify-between px-5 gap-5 w-full">
          <div className="flex flex-col items-center item space-y-3"><img className=" p-2 bg-slate-500 rounded-full" src="/man.gif" alt="" width={80} />
            <p>Focus On your Project</p>
          </div>
          <div className=" flex flex-col items-center item space-y-3"><img className=" p-2 bg-slate-500 rounded-full" src="/coin.gif" alt="" width={80} />
            <p>Get Fund For Your Project</p>
          </div>
          <div className="flex flex-col items-center item space-y-3"><img className=" p-2 bg-slate-500 rounded-full" src="/group.gif" alt="" width={80} />
            <p>Get Support from Your Loved Once</p>
          </div>
        </div>

      </div>
      <div className="bg-white h-1 opacity-10">
      </div>
      <div>

      <div className="flex flex-col items-center text-white my-5  gap-5 container m-auto">
        <h1 className="text-center  text-3xl font-bold">I Created This Project With Help Of YouTube Tutorial by <Link className="text-white bg-gradient-to-br cursor-pointer from-purple-600 to-blue-500 hover:bg-gradient-to-bl dark:focus:ring-blue-800 font-medium rounded-base text-2xl px-4 py-2.5 text-center leading-5" href="https://www.youtube.com/@CodeWithHarry">Code With Harry</Link></h1>
        <iframe className="my-10 rounded-2xl" width="560" height="315" src="https://www.youtube.com/embed/QtaorVNAwbI?si=hdz-eb7YXqMy1GJo" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
      </div>
      </div>

    </>
  );
}
