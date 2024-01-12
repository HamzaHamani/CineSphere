import Homepart from "./_Parts/HomePart";
export default async function Home() {
  // https://api.kinocheck.com/#video , get movie from tmdb and pass it to this website api , we gonna take the yoube video id and pass it to the iframe of embed youtube
  // https://api.kinocheck.de/movies?tmdb_id=299534&language=en

  return (
    <main className="">
      <Homepart />
    </main>
  );
}
