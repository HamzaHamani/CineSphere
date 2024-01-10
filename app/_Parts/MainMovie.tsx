import { Button } from "@/components/ui/button";
import { Clock12, ExternalLink, Info } from "lucide-react";
import Link from "next/link";
import React from "react";
export default function MainMovie() {
  return (
    <div
      className="bg-red-30 relative  flex  h-[92vh]  flex-col items-start justify-start bg-cover bg-fixed saturate-50"
      style={{
        backgroundImage:
          "url('https://image.tmdb.org/t/p/original/xJHokMbljvjADYdit5fK5VQsXEG.jpg')",
      }}
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent"></div>
      </div>
      <div className="z-50 mx-auto mt-36 flex w-[95%] flex-col gap-2 p-2">
        <div>
          <p className="bg-blueMainHover mb-2 w-fit p-2.5 font-bold tracking-widest text-black text-textMain opacity-100">
            #Recomended
          </p>
          <span className="ligneLongs"></span>
        </div>
        <h3 className="mb-4 text-lg italic">Anime/2014-11-05/3.5</h3>
        <h2 className="w-[60%] font-pop text-8xl font-extrabold ">
          Spider-Man: Across the Spider-Verse
        </h2>
        <p className="mb-4 mt-6 w-[40%] text-base text-gray-300">
          After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly
          neighborhood Spider-Man is catapulted across the Multiverse, where he
          encounters the Spider Society, a team of Spider-People charged with
          protecting the Multiverse’s very existence. But when the heroes clash
          on how to handle a new threat, Miles finds himself pitted against the
          other Spiders and must set out on his own to save those he loves most.
        </p>
        <div className="flex items-center  gap-4">
          <Link href="/movie/:id">
            <Button className="hover:bg-blueMainHover flex gap-2 rounded-none  bg-blueMain px-5 py-8 text-lg ">
              <span>
                <Info className="w-5" />
              </span>{" "}
              Check more
            </Button>
          </Link>
          <Button className=" bg-blueMainHover flex gap-2  rounded-none px-5 py-8 text-lg text-textMain ">
            <span>
              <Clock12 className="w-5" />
            </span>{" "}
            Add to your watch List
          </Button>
        </div>
      </div>
    </div>
  );
}
