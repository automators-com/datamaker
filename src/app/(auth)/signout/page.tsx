"use client";
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { signOut, useSession } from "next-auth/react";
import SEO from "../../../components/seo";

export default function Signout() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <>
      <SEO title={`Signed Out`} />
      <div>
        {session?.user?.email ? (
          <div className="flex flex-col items-center justify-center">
            <pre>You are signed in as: {session?.user?.email}</pre>
            <br />
            <button
              className="btn-primary h-10 rounded-md px-4 py-2"
              onClick={() => {
                signOut().catch((err) => console.log(err));
              }}
            >
              Sign Out
            </button>
          </div>
        ) : (
          <pre>You are not signed in.</pre>
        )}
      </div>
    </>
  );
}
