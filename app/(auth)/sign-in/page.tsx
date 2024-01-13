import { Button } from "@/components/ui/button";
import { ChromeIcon, Github, GithubIcon } from "lucide-react";
import Link from "next/link";

export default function page() {
  return (
    <>
      <main className="flex h-screen items-center justify-center ">
        <div className="drop-shadow-white flex  w-[500px] flex-col gap-3 rounded-2xl bg-textMain p-7 text-bgMain drop-shadow-lg">
          <h1 className="mb-5  font-tek  text-3xl font-bold">
            <span className="font-extrabold uppercase text-blueMain">Cine</span>
            Sphere
          </h1>
          <h2 className="text-2xl font-bold">Sign in / up</h2>
          <p className="mb-5 text-gray-900">
            to continue to{" "}
            <span className="font-bold text-bgMain">CineSphere</span>
          </p>
          <div className="flex flex-col gap-4">
            <Button className="flex  w-[90%] items-center justify-center gap-4 self-center bg-blueMain px-5 py-7 hover:bg-blueMainHover">
              <span>
                <GithubIcon />
              </span>
              <span className="text-base"> Sign in with Github</span>
            </Button>
            <Button className="flex w-[90%] items-center justify-center gap-4 self-center bg-blueMain px-5 py-7 hover:bg-blueMainHover">
              <span>
                <ChromeIcon />
              </span>
              <span className="text-base"> Sign in with Chrome</span>
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}
