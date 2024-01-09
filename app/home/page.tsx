export default function page() {
  // <div class="bg-fixed BG-COVER ..." style="background-image: url(...)"></div>

  return (
    <>
      <div
        className="relative h-[89vh] bg-cover  bg-fixed"
        style={{
          backgroundImage:
            "url('https://image.tmdb.org/t/p/original/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        home
      </div>
      <div className="h-screen">a</div>
    </>
  );
}
