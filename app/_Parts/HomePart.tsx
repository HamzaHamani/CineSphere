import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import React from "react";
import "@/app/globals.css";
export default function Homepart() {
  return (
    <div className=" bg-red-30 relative mx-auto flex h-[88vh] w-[90%]  items-center  justify-between ">
      <div className=" flex flex-col  justify-between gap-3 ">
        <div className=" w-[100%]">
          <h1 className="text-9xl font-bold leading-[100px] text-textMain xxl:text-8xl xl:text-8xl md:text-7xl sm:text-6xl s:text-5xl">
            Welcome.
          </h1>
          <h2 className=" mt-3 w-[90%] text-9xl font-bold leading-[115px]  text-textMain xxl:text-8xl xl:text-7xl lg:w-[100%] lg:text-7xl md:text-[45px] sm:text-4xl s:text-3xl ">
            Discover endless movies, TV shows, and all the insider info on casts
            and crews. <br></br>
            <Link href="/home">
              <span className="dive flex font-tek text-blueMain transition-all duration-150 ease-linear hover:text-blue-600">
                Dive in now!
                <span>
                  <ExternalLink className="text-lg" />
                </span>
              </span>
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
}
