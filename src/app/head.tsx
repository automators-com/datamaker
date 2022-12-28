export default function Head() {
  // get the current environment
  const env = process.env.NODE_ENV;

  // set the domain based on the environment
  let domain = "https://datamaker.app";
  if (env !== "production") {
    domain = "https://dev.datamaker.app";
  }

  return (
    <>
      <title>Datamaker</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta
        name="description"
        content="Effortlessly generate quality test data with datamaker.app"
      />
      <meta property="og:image" content={`${domain}/assets/og-image.png`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <link rel="icon" href="/favicon.ico" />

      <meta property="og:url" content={`${domain}`} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Datamaker" />
      <meta
        property="og:description"
        content="Effortlessly generate quality test data with datamaker.app"
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="datamaker.app" />
      <meta property="twitter:url" content={`${domain}`} />
      <meta name="twitter:title" content="Datamaker" />
      <meta
        name="twitter:description"
        content="Effortlessly generate quality test data with datamaker.app"
      />
      <meta name="twitter:image" content={`${domain}/assets/og-image.png`} />
    </>
  );
}
