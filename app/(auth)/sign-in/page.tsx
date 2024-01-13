import { Button } from "@/components/ui/button";
import { ChromeIcon, GithubIcon } from "lucide-react";

export default function page() {
  return (
    <>
      <main className="relative flex h-screen items-center justify-center overflow-hidden">
        <div className="drop-shadow-white flex  w-[500px] flex-col gap-3 rounded-2xl bg-textMain p-7 text-bgMain drop-shadow-lg s:w-[390px] xs:w-[330px] xxs:w-[300px]">
          <h1 className="mb-5  font-tek  text-3xl font-bold xs:text-2xl">
            <span className="font-extrabold uppercase text-blueMain">Cine</span>
            Sphere
          </h1>
          <h2 className="text-2xl font-bold s:text-xl xs:text-lg">
            Sign in / up
          </h2>
          <p className="mb-5 text-gray-900 s:text-sm xs:text-xs">
            to continue to{" "}
            <span className="font-bold text-bgMain">CineSphere</span>
          </p>
          <div className="flex flex-col gap-4">
            <Button className="flex  w-[90%] items-center justify-center gap-4 self-center bg-blueMain px-5 py-7 hover:bg-blueMainHover s:w-[80%] s:px-3 s:py-6 s:text-xs">
              <span>
                <GithubIcon className="s:w-5" />
              </span>
              <span className="text-base s:text-sm"> Sign in with Github</span>
            </Button>
            <Button className="flex w-[90%] items-center justify-center gap-4 self-center bg-blueMain px-5 py-7 hover:bg-blueMainHover s:w-[80%] s:px-3 s:py-6 s:text-xs">
              <span>
                <ChromeIcon className="s:w-5" />
              </span>
              <span className="text-base s:text-sm"> Sign in with Chrome</span>
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}
