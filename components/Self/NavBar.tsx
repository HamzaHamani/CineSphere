import React, { useState } from "react";
import { Toggle } from "./Toggle";
import { Button } from "../ui/button";
import SearchInput from "./SearchInput";
import { Search, UserRound } from "lucide-react";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-textMain flex items-start justify-between p-8  font-mono">
      <h1 className="font-tek  text-3xl  font-bold text-[#111111]">
        <span className="text-blueMain font-extrabold uppercase">Cine</span>
        Sphere
      </h1>
      <ul className="flex cursor-pointer items-center justify-center gap-8 text-2xl font-medium  text-[#444444]">
        <li className="ligne text-[#111111]">Home</li>
        <li className="">Watchlist</li>
        <li>About</li>
      </ul>
      <div className="flex items-center justify-center gap-5">
        <Link className="text-bgMain cursor-pointer" href={"/search"}>
          <Search />
        </Link>
        {/* <Toggle /> */}
        <Button className="bg-bgMain hover:bg-bgMainHover">Get Started</Button>
        {/* <UserRound /> */}
      </div>
    </nav>
  );
}
