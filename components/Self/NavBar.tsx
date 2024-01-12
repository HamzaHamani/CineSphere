import { Button } from "../ui/button";
import SearchInput from "./SearchInput";
import { Search, UserRound } from "lucide-react";
import Link from "next/link";
import { SideNav } from "./SideNav";

export default function NavBar() {
  return (
    <nav className="flex items-start justify-between  bg-transparent  p-5  font-pop text-textMain">
      <h1 className="font-tek  text-2xl  font-bold ">
        <span className="font-extrabold uppercase text-blueMain">Cine</span>
        Sphere
      </h1>
      <ul className="flex cursor-pointer items-center justify-center gap-8 font-pop text-xl font-medium  lg:hidden">
        <li className="ligne">Home</li>
        <li className="">Watchlist</li>
        <li>About</li>
      </ul>
      <div className="flex items-center justify-center gap-5 lg:hidden">
        <Link className="cursor-pointer text-bgMain" href={"/search"}>
          <Search />
        </Link>
        {/* <Toggle /> */}
        <Button className="bg-blueMain font-bold  hover:bg-blueMainHover">
          Get Started
        </Button>
        {/* <UserRound /> */}
      </div>
      {/* --------------------SIDE NAV ------------------ */}
      <div className="hidden lg:block">
        <SideNav />
      </div>
    </nav>
  );
}
