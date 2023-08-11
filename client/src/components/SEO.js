import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({ dynamicTitle }) => {
  return (
    <Helmet>
      <title>{dynamicTitle}</title>
      <meta name="author" content="" />
      <meta
        name="description"
        content="Successo - Job Portal With Career Guidelines"

      />
      <meta
        name="keywords"
        content="Guidance, Career, Tech, AI-Assistance, One-2-One mentorship, Job Listings"
      />
      {/* Open Graph (Facebook) : */}
      <meta property="og:title" content="Successo" />
      <meta
        property="og:description"
        content="Successo - Job Portal With Career Guidelines"

      />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Successo" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter : */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content="Successo" />
      <meta
        property="twitter:description"
        content="Successo - Job Portal With Career Guidelines"

      />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Favicon : */}
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>

    </Helmet>
  );
};

export default SEO;
