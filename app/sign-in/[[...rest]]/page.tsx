import React from "react";
import Image from "next/image";
import { SignIn } from "@clerk/nextjs";
import { ModeToggle } from "@/app/components/Mode";

export default function Page() {
  return (
    <div className="flex flex-col sm:flex-row h-screen w-full items-center justify-between gap-10">
      <div className="bg-[#605bff] rounded-lg w-full h-[96%] sm:w-1/2 p-10 hidden sm:block m-4">
        <div className="bg-[#767EFC] rounded-lg w-full h-full p-8 flex flex-col items-start justify-between gap-12">
          <div className="text-3xl flex items-center justify-center gap-2 bg-white px-4 py-2 rounded-full tracking-tighter font-semibold text-black font-mono">
            <span>
              <Image
                src="/logo.png"
                alt="App Logo"
                className="bg-black rounded-full"
                width={25}
                height={25}
              />
            </span>
            Base
          </div>
          <div className="text-6xl font-medium text-white">
            Generate detailed reports with just one click
          </div>
          <div className="flex place-items-baseline gap-40 justify-between">
            <div>
              <ModeToggle />
            </div>
            <div>
              <Image src="/Team.png" alt="App Logo" width={500} height={500} />
            </div>
          </div>
        </div>
      </div>
      <div className="block sm:hidden bg-[#605bff] w-full h-14 py-2 flex items-center justify-between">
        <div className="text-3xl flex items-center justify-start gap-2 px-4 rounded-full tracking-tighter font-normal text-white font-mono">
          <span>
            <Image
              src="/logo.png"
              alt="App Logo"
              className="bg-black rounded-full"
              width={25}
              height={25}
            />
          </span>
          Base
        </div>
        <div>
          <ModeToggle />
        </div>
      </div>
      <div className="block sm:hidden">
        <div className="flex gap-4">
          <Image src="/Team.png" alt="App Logo" width={500} height={500} />
        </div>
      </div>
      <div className="bg-grey-100 rounded-lg w-full sm:w-1/2 px-6 py-4 text-center ">
        <div className="bg-grey-100 rounded-lg w-full px-6 py-4 text-center">
          <div className="flex items-center justify-center">
            <SignIn />
          </div>
        </div>
      </div>
    </div>
  );
}
