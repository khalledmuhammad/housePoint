import Head from "next/head";
import { useRouter } from "next/router";

const Seo = ({ pageTitle, font, pageDesc, Keyword }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta charSet="latin1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "House Point Egypt",
      "url": "https://house-point.vercel.app/",
      "sameAs": [
        "https://www.facebook.com/profile.php?id=100084298338831",
        "https://www.instagram.com/housepointegypt/",
        "https://twitter.com/housepointegypt",
        "https://www.youtube.com/channel/UC5029dOLeVYEtDSl20_CKeQ",
        "https://www.linkedin.com/in/house-point-egypt-7a856310a/"
      ]
    }`,
          }}
        ></script>
        <script type="application/Id+json" 
         dangerouslySetInnerHTML={{
          __html: `
          {
            "@context": "http://schema.org/",
            "@type": "Product",
            "name": "",
            "description": "",
            "image":[ "" ],
            "sku": "REF5654",
            "mpn": "5654",
            "brand": {
                "name": "House Point Egypt",
                "@type": "RealEstateAgent",
                "image": "",
                 "address": {
                    "@type": "PostalAddress",
                        "addressLocality": "Maadi",
                        "addressRegion": "Cairo",
                        "postalCode": "11728",
                        "streetAddress": "Building #29 Road 13 Cross 86 - Ground floor, office no.1 - Maadi Sarayat, Cairo. Egypt",
                        "addressCountry": "Egypt"
                      },
                      "priceRange": "$$",
                      "telephone": "01221187659"
            },
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "reviewCount":  "1"         },
        "offers": {
          "@type": "Offer",
            "url" : "https://housepointegypt.com",
                    "priceCurrency": "Egp",
                      "price": "30000",
                        "priceValidUntil": "2021-01-01",
                          "itemCondition": "http://schema.org/UsedCondition",
                            "availability": "http://schema.org/InStock",
                              "seller": {
                  "@type": "Organization",
                    "name": "House point Egypt"
                }
              },
               "review":
                {
                    "@type": "Review",
                    "reviewRating":
                    {
                        "@type": "Rating",
                        "ratingValue": "5",
                        "bestRating": "5"
                    },
                    "author": {
                        "@type": "Person",
                        "name": "House point Egypt"
                    }
                }
        }
  `,
        }}
      ></script>


        <title>
          {pageTitle
            ? pageTitle
            : "Apartments And Villas For Rent and Sale in Maadi, Katameya and New Cairo | House Point Egypt"}
        </title>
        <meta
          name="description"
          content={
            pageDesc
              ? pageDesc
              : "Apartments and Villas For Rent and Sale in Maadi, Katameya in Cairo Egypt. Our Company House Point Egypt Real Estate in Maadi provide You Furnished Apartments, Villas, Penthouses and Ground Floors in Maadi Sarayat, Maadi Degla and Old Maadi."
          }
        />

        <link rel="canonical" href={`${router.asPath}`} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={router.asPath} />
        <meta
          property="twitter:title"
          content={
            pageTitle
              ? pageTitle
              : "Apartments And Villas For Rent and Sale in Maadi, Katameya and New Cairo | House Point Egypt"
          }
        />
        <meta
          property="twitter:description"
          content={
            pageDesc
              ? pageDesc
              : "Apartments and Villas For Rent and Sale in Maadi, Katameya in Cairo Egypt. Our Company House Point Egypt Real Estate in Maadi provide You Furnished Apartments, Villas, Penthouses and Ground Floors in Maadi Sarayat, Maadi Degla and Old Maadi."
          }
        />
        <meta property="twitter:image" />

        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="keywords"
          content={
            Keyword
              ? Keyword
              : "maadi, rent maadi, rent in maadi, katameya heights, rent, apartment, villa, ground-floor, penthouse, rentals, maadi sarayat, maadi degla, apartment for rent in maadi, villa for rent in maadi, villa for rent in katameya heights,villa for sale in katameya heights, office space, maadi rentals,katameya heights rentals, maadi for rent, ktameya heights for rent, Cairo Governorate, Egypt"
          }
        />
        <meta name="ibthemes" content="ATFN" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {font && <link href={font} rel="stylesheet" />}
        <link rel="icon" href="favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
    </>
  );
};
export default Seo;
