import type { Metadata } from "next";
import { Poppins, Rubik, Tektur, Antic } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Self/NavBar";
import Wrapper from "./_Parts/Wrapper";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "400", "600", "700", "800", "900"],
});

const tektur = Tektur({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-tek",
});

const antic = Antic({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-antic",
  weight: ["400"],
});
const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rubik",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Wrapper>
      <html lang="en">
        <body
          className={`${poppins.variable} ${rubik.variable} ${tektur.variable} ${antic.variable} light  bg-bgMain font-pop text-textMain transition-all duration-300 ease-linear`}
        >
          <NavBar />
          {children}
        </body>
      </html>
    </Wrapper>
  );
}
