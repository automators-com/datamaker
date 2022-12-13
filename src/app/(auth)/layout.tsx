"use client";

import "../globals.css";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row">
      <main className="min-h-screen w-full overflow-auto">{children}</main>
    </div>
  );
}
