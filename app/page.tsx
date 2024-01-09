import MainMovie from "@/app/_Parts/MainMovie";
export default async function Home() {
  const api_key = process.env.TMDB_API_KEY;
  // const res = await fetch(
  //   `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=2&sort_by=popularity.desc&api_key=${api_key}`,
  // );
  // const data = await res.json();
  // TODO RESET THE DESIGN ,REMOVE CURRECT FIRST PAGE AND MAKE IT AUTOMATICLY HAS THE MOVIES
  return (
    <main className="">
      <MainMovie />
    </main>
  );
}
