"use client";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return <pre>{JSON.stringify(session)}</pre>;
}
