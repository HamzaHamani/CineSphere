import { Button } from "@/components/ui/button";
import React from "react";
// import "@/app/globals.css";

export default function MainMovie() {
  return (
    <div className=" bg-red-30 relative mx-auto flex h-[88vh] w-[90%] items-center  justify-between ">
      <div className=" flex flex-col  justify-between gap-3 ">
        <div className="-mt-24 w-[100%]">
          <h1 className="text-textMain text-8xl font-bold">Welcome.</h1>
          <h1 className="text-textMain mt-3 w-[90%] text-6xl font-bold">
            Millions of movies, TV shows to discover. Explore now.
          </h1>
        </div>
      </div>
      <div className="h-[500px] w-[1300px]   object-contain">
        {/* eslint-disable-next-line */}
        <img
          className="object-cover"
          //   className="w-[30%] self-end"
          //   width={"80%"}
          src="https://image.tmdb.org/t/p/original//tRS6jvPM9qPrrnx2KRp3ew96Yot.jpg"
        />
      </div>
    </div>
  );
}
