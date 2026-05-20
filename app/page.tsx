import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="text-white flex justify-center items-center flex-col h-[44vh]">
        <div className=" font-bold text-3xl"> Buy Me A chai</div>
        <p>
          A crowdFunding Platform for creators . Get Funded by your friends and fans .Start Now!
        </p>
        <div>
          <button>Start Now</button>
        </div>
      </div>
    </>
  );
}
