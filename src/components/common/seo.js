import Head from "next/head";

const Seo = ({ pageTitle, font }) => (
  <>
    <Head>
      	<meta charSet="utf-8" />

      <title>
        {pageTitle && `${pageTitle} || housepoint - Real Estate  }`}
      </title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="keywords"
        content="advanced custom search, agency, agent, business, clean, corporate, directory, google maps, homes, idx agent, listing properties, membership packages, property, real broker, real estate, real estate agent, real estate agency, realtor"
      />
      <meta
        name="description"
        content="FindHouse - Real Estate React Template"
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

export default Seo;
