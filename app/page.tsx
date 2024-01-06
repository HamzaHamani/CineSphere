import MainMovie from "@/app/_Parts/MainMovie";
import Image from "next/image";
import { cache, useEffect } from "react";

export default async function Home() {
  // const res = await fetch(
  //   "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
  //   {
  //     method: "GET",
  //     headers: {
  //       accept: "application/json",
  //       Authorization: USEENV VALUE HERE,
  //     },
  //   }
  // );
  // const data = await res.json();
  // console.log(data.results[0]);
  // console.log(data);
  //TODO ! fix error with auth key in env, and how to use ggogle fonts with tailwid
  return (
    <main className="">
      <MainMovie />
    </main>
  );
}
