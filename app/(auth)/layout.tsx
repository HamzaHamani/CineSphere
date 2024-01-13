import type { Metadata } from "next";
import Footer from "@/components/Self/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
