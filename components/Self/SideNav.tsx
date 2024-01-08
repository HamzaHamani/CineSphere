import { Separator } from "@/components/ui/separator";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignRight } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export function SideNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignRight className="cursor-pointer text-black" />
      </SheetTrigger>
      <SheetContent className="border-none bg-bgMain">
        <div>
          <h1 className="mb-10 mt-5 font-tek text-5xl  font-bold text-textMain md:text-4xl s:text-3xl">
            <span className="font-extrabold uppercase text-blueMain">Cine</span>
            Sphere
          </h1>
          <Separator className="my-4 mb-10" />

          <ul className="mb-10 mt-4 flex flex-col gap-4 text-2xl">
            <Link href={"/home"}>
              <SheetClose asChild>
                <li>Home</li>
              </SheetClose>
            </Link>
            <Link href={"/search"}>
              <SheetClose asChild>
                <li className="text-gray-300">Search</li>
              </SheetClose>
            </Link>
            <Link href={"/watchList"}>
              <SheetClose asChild>
                <li className="text-gray-300">Watch list</li>
              </SheetClose>
            </Link>
            <Link href={"/about"}>
              <SheetClose asChild>
                <li className="text-gray-300">About</li>
              </SheetClose>
            </Link>
          </ul>
        </div>
        <Separator className="my-4 mb-10" />
        <SheetFooter>
          <Button className="bg-textMain font-bold text-bgMain transition-all duration-75 ease-linear hover:bg-textMainHover">
            Get Started
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
