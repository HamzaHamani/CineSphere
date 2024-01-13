import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CineSphere/Sign in",
  description: "Sign in to CineSphere",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
