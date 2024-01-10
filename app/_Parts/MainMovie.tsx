import { Button } from "@/components/ui/button";
import { Info, PlusCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

const imageUrl = "https://image.tmdb.org/t/p/original";
export default async function MainMovie() {
  const api_key = process.env.TMDB_API_KEY;
  const res = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${api_key}`,
    { next: { revalidate: 86400000 } },
  );
  const { results } = await res.json();

  const select = results[6];
  return (
    <div
      className="bg-red-30 relative  flex  h-[92vh]  flex-col items-start justify-start bg-cover bg-fixed saturate-50"
      style={{
        backgroundImage: `url(${imageUrl}${select?.backdrop_path})`,
      }}
    >
      {/* black backdrop------------------------- */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent"></div>
      </div>
      {/* black backdrop------------------------- */}

      <div className="z-50 mx-auto mt-36 flex w-[95%] flex-col gap-2 p-2">
        <div>
          <p className="bg-blueMainHover mb-2 w-fit p-2.5 font-bold tracking-widest text-black text-textMain opacity-100">
            #Random Pick
          </p>
          <span className="ligneLongs"></span>
        </div>
        {/* <h3 className="mb-4 text-lg italic">
          Anime/
          {select.release_date ? select.release_date : select.first_air_date}
          /3.5
        </h3> */}
        <h2
          className={`w-[55%] font-pop  font-extrabold ${
            select.title.length <= 8
              ? "text-9xl"
              : select.title.length <= 12
                ? "text-8xl"
                : select.title.length <= 16
                  ? "text-7xl"
                  : "text-7xl"
          }  `}
        >
          {select.title}{" "}
        </h2>
        <p className="mb-4 mt-6 w-[40%] text-lg text-gray-300">
          {select.overview}
        </p>
        <div className="flex items-center  gap-4">
          <Link href="/movie/:id">
            <Button className="bg-blueMainHover flex gap-2 rounded-none px-5  py-8 text-lg text-textMain hover:bg-blueMain ">
              <span>
                <Info className="w-5" />
              </span>{" "}
              Check more
            </Button>
          </Link>
          <Button className="flex gap-2 rounded-none bg-gray-200  px-5 py-8 text-lg text-bgMain  hover:bg-gray-300 ">
            <span>
              <PlusCircle className="w-5" />
            </span>{" "}
            Add to your watch List
          </Button>
        </div>
      </div>
    </div>
  );
}
