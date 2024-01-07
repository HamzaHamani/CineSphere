import { Button } from "@/components/ui/button";
import React from "react";
const OPTIONS = {};
const SLIDE_COUNT = 3;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function MainMovie() {
  return (
    <div className=" bg-red-30 relative mx-auto flex h-[88vh] w-[90%] items-center  justify-between ">
      <div className=" flex flex-col  justify-between gap-3 ">
        <div className=" w-[100%]">
          <h1 className="text-textMain text-9xl font-bold leading-[100px]">
            Welcome.
          </h1>
          <h1 className="text-textMain mt-3 w-[90%] text-9xl font-bold leading-[115px]">
            Discover endless movies, TV shows, and all the insider info on casts
            and crews. <br></br>
            <span className="dive text-blueMain font-tek">Dive in now!</span>
          </h1>
        </div>
      </div>
    </div>
  );
}
