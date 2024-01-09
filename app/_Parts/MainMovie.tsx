import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import React from "react";
export default function MainMovie() {
  return (
    <div
      className=" bg-red-30 relative flex h-[88vh] items-center justify-between bg-cover  bg-fixed"
      style={{
        backgroundImage:
          "url('https://image.tmdb.org/t/p/original/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      home
    </div>
  );
}
