import {
  Bell,
  CalendarDays,
  ChartNoAxesColumn,
  Database,
  FileText,
  LayoutDashboard,
  Settings,
} from "lucide-react";
import React from "react";
import { ModeToggle } from "./Mode";
import Image from "next/image";

const SideNav = () => {
  return (
    <nav className="w-[20%] overflow-hidden hidden h-full p-8 sm:flex flex-col justify-between border-r-[1px] border-gray-300 dark:bg-black">
      <div>
        <div className="text-3xl flex items-center justify-start gap-2 px-4 rounded-full tracking-tighter font-normal text-primary dark:text-white font-mono">
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
        <div className="px-4 w-full h-2/3 flex flex-col gap-5 mt-10">
          <div className="flex items-center gap-2 py-3 px-2 text-lg text-gray-600 hover:bg-secondary rounded-lg cursor-pointer ">
            <LayoutDashboard /> Dashboard
          </div>
          <div className="flex items-center gap-2 py-3 px-2 text-lg cursor-pointer text-[#605bff] bg-[#605bff] bg-opacity-15 rounded-md">
            <ChartNoAxesColumn /> Upload
          </div>
          <div className="flex items-center gap-2 py-3 px-2 text-lg text-gray-600 hover:bg-secondary rounded-lg cursor-pointer ">
            <Database />
            Invoice
          </div>
          <div className="flex items-center gap-2 py-3 px-2 text-lg text-gray-600 hover:bg-secondary rounded-lg cursor-pointer ">
            <FileText />
            Schedule
          </div>
          <div className="flex items-center gap-2 py-3 px-2 text-lg text-gray-600 hover:bg-secondary rounded-lg cursor-pointer ">
            <CalendarDays />
            Calender
          </div>
          <div className="flex items-center gap-2 py-3 px-2 text-lg text-gray-600 hover:bg-secondary rounded-lg cursor-pointer ">
            <Bell />
            Notification
          </div>
          <div className="flex items-center gap-2 py-3 px-2 text-lg text-gray-600 hover:bg-secondary rounded-lg cursor-pointer ">
            <Settings />
            Settings
          </div>
        </div>
      </div>
      <div className="px-6">
        <ModeToggle />
      </div>
    </nav>
  );
};

export default SideNav;
