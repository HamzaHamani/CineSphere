import React, { useState } from "react";
import { Toggle } from "./Toggle";
import { Button } from "../ui/button";
import SearchInput from "./SearchInput";
import { Search, UserRound } from "lucide-react";
import Link from "next/link";
import { SideNav } from "./SideNav";

export default function NavBar() {
  return (
    <nav className="flex items-start justify-between bg-textMain p-8  font-mono">
      <h1 className="font-tek  text-3xl  font-bold text-[#111111]">
        <span className="font-extrabold uppercase text-blueMain">Cine</span>
        Sphere
      </h1>
      <ul className="flex cursor-pointer items-center justify-center gap-8 text-2xl font-medium text-[#444444]  lg:hidden">
        <li className="ligne text-[#111111]">Home</li>
        <li className="">Watchlist</li>
        <li>About</li>
      </ul>
      <div className="flex items-center justify-center gap-5 lg:hidden">
        <Link className="cursor-pointer text-bgMain" href={"/search"}>
          <Search />
        </Link>
        {/* <Toggle /> */}
        <Button className="bg-bgMain hover:bg-bgMainHover">Get Started</Button>
        {/* <UserRound /> */}
      </div>
      {/* --------------------SIDE NAV ------------------ */}
      <div className="hidden lg:block">
        <SideNav />
      </div>
    </nav>
  );
}
