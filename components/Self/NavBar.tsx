import React, { useState } from "react";
import { Toggle } from "./Toggle";
import { Button } from "../ui/button";
import SearchInput from "./SearchInput";
import { Search, UserRound } from "lucide-react";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex justify-around p-3">
      <h1 className="text-3xl font-bold">
        <span className="font-mono  text-primaryMain-500">Cine</span>
        Sphere
      </h1>
      <ul className="flex cursor-pointer items-center justify-center gap-8 text-lg font-medium">
        <li className="text-primaryMain-500 ">Home</li>
        <li>Watchlist</li>
        <li>About</li>
      </ul>
      <div className="flex items-center justify-center gap-5">
        <Link className="cursor-pointer" href={"/search"}>
          <Search />
        </Link>
        <Toggle />
        <Button>Get Started</Button>
        {/* <UserRound /> */}
      </div>
    </nav>
  );
}
