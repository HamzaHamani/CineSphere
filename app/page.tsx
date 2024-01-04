import Image from "next/image";
import { cache } from "react";

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

  return (
    <main>
      {/* {data.results?.map((e: any) => (
        <p key={e.id}>{e.original_title}</p>
      ))} */}
      <p>asd</p>
    </main>
  );
}
