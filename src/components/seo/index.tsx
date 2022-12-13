"use client";

import React from "react";
import Head from "next/head";

export default function SEO({ title }: { title: string }) {
  let titleText = `Capacity`;
  if (title) {
    titleText += ` | ${title}`;
  }
  return (
    <Head>
      <title>{titleText}</title>
      <meta name="description" content="The Automators capacity app." />
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="favicon-16x16.png"
      />
      <link rel="manifest" href="site.webmanifest" />
      <link rel="mask-icon" href="safari-pinned-tab.svg" color="#1d1e39" />
      <meta name="msapplication-TileColor" content="#1d1e39" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  );
}
