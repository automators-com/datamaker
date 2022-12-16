"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import LandingPage from "./(marketing)/landing/page";

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();

  if (session && session.user) {
    router.push("/templates");
  } else {
    return <LandingPage />;
  }
}
