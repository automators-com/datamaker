"use client";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import Script from "next/script";
import Head from "./head";
import { JetBrains_Mono } from "@next/font/google";
import "./globals.css";

const jetBrains_Mono = JetBrains_Mono({ subsets: ["latin"], display: "swap" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const queryClient = new QueryClient();

  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <html lang="en">
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-8G44GWPK1S"
            strategy="lazyOnload"
          />
          <Script
            id="gtag"
            strategy="lazyOnload"
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-8G44GWPK1S');
            `,
            }}
          />
          <style jsx global>
            {`
              :root {
                --jetbrains-font: ${jetBrains_Mono.style.fontFamily};
              }
            `}
          </style>
          <head>
            <Head />
          </head>
          {children}
        </html>
      </QueryClientProvider>
    </SessionProvider>
  );
}
