"use client";

import "../globals.css";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row">
      <main className="flex min-h-screen w-full flex-col items-center justify-center bg-red-500">
        {children}
      </main>
    </div>
  );
}
