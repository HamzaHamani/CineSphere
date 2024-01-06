import React, { useState } from "react";
import { Toggle } from "./Toggle";
import { Button } from "../ui/button";
import SearchInput from "./SearchInput";
import { Search, UserRound } from "lucide-react";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-textMain flex items-start justify-between p-8  font-mono">
      <h1 className="text-textMain text-3xl font-bold">
        <span className="font-mono  text-primaryMain-500">Cine</span>
        Sphere
      </h1>
      <ul className="text-bgMain flex cursor-pointer items-center justify-center gap-8 text-2xl font-medium">
        <li className="text-[#FFC107] ">Home</li>
        <li className="text-textMainHover">Watchlist</li>
        <li>About</li>
      </ul>
      <div className="flex items-center justify-center gap-5">
        <Link className="text-textMain cursor-pointer" href={"/search"}>
          <Search />
        </Link>
        {/* <Toggle /> */}
        <Button>Get Started</Button>
        {/* <UserRound /> */}
      </div>
    </nav>
  );
}
