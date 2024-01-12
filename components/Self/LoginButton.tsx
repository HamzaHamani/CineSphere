// mark as client component
"use client";

// importing necessary functions
import { useSession, signIn, signOut } from "next-auth/react";

export default function LoginButton() {
  // extracting data from usesession as session
  const { data: session } = useSession();

  // checking if sessions exists
  if (session) {
    return <button onClick={() => signOut()}>Sign out</button>;
  }

  return (
    <>
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
