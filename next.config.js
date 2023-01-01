/** @type {import('next').NextConfig} */

const { i18n } = require("./next-i18next.config");

const nextConfig = {
  reactStrictMode: false,
  swcMinify: false,
  i18n,
  async rewrites() {
    return [
      {
        source: "/ar/%D9%85%D8%AF%D9%88%D9%86%D9%87",
        destination: "/ar/blog",
        locale: false,
      },
      {
        source: "/ar/%D9%84%D9%84%D8%A7%D9%8A%D8%AC%D8%A7%D8%B1",
        destination: "/ar/for-rent",
        locale: false,
      },
      {
        source: "/ar/%D9%84%D9%84%D8%A8%D9%8A%D8%B9",
        destination: "/ar/for-sale",
        locale: false,
      },
      {
        source: "/ar/%D8%AC%D9%85%D9%8A%D8%B9-%D8%A7%D9%84%D8%B9%D9%82%D8%A7%D8%B1%D8%A7%D8%AA",
        destination: "/ar/AllProperties",
        locale: false,
      },
      {
        source: "/ar/%D8%A7%D8%AA%D8%B5%D9%84-%D8%A8%D9%86%D8%A7",
        destination: "/ar/contact",
        locale: false,
      },

      {
        source: "/ar/%D8%A7%D9%84%D9%82%D8%B7%D8%A7%D9%85%D9%8A%D9%87-%D9%87%D8%A7%D9%8A%D8%AA%D8%B3",
        destination: "/ar/Katameya-Heights",
        locale: false,
      },

      {
        source: "/ar/%D8%A7%D9%84%D9%85%D8%B9%D8%A7%D8%AF%D9%8A",
        destination: "/ar/Maadi",
        locale: false,
      },

      {
        source: "/ar/%D8%A7%D9%84%D9%82%D8%A7%D9%87%D8%B1%D9%87-%D8%A7%D9%84%D8%AC%D8%AF%D9%8A%D8%AF%D9%87",
        destination: "/ar/New-Cairo",
        locale: false,
      },
      {

        source: "/ar/%D9%84%D9%84%D8%A7%D9%8A%D8%AC%D8%A7%D8%B1/%D8%B4%D9%82%D8%A9",
        destination: "/ar/for-rent/Apartment",
        locale: false,
      },

      {
        source: "/ar/%D9%84%D9%84%D8%A7%D9%8A%D8%AC%D8%A7%D8%B1/%D8%B4%D9%82%D8%A9/%D8%A7%D9%84%D9%85%D8%B9%D8%A7%D8%AF%D9%8A",
        destination: "/ar/for-rent/Apartment/Maadi",
        locale: false,
      },

      {
        source: "/ar/%D9%84%D9%84%D8%A7%D9%8A%D8%AC%D8%A7%D8%B1/%D8%B4%D9%82%D8%A9/%D8%A7%D9%84%D9%85%D8%B9%D8%A7%D8%AF%D9%8A/%D9%85%D8%B9%D8%A7%D8%AF%D9%8A-%D8%AF%D8%AC%D9%84%D9%87",
        destination: "/ar/for-rent/Apartment/Maadi/Maadi-Degla",
        locale: false,
      },


      {
        source: "/ar/%D9%84%D9%84%D8%A7%D9%8A%D8%AC%D8%A7%D8%B1/%D8%B4%D9%82%D8%A9/%D8%A7%D9%84%D9%85%D8%B9%D8%A7%D8%AF%D9%8A/%D9%83%D9%88%D8%B1%D9%86%D9%8A%D8%B4-%D8%A7%D9%84%D9%85%D8%B9%D8%A7%D8%AF%D9%8A",
        destination: "/ar/for-rent/Apartment/Maadi/Cornish-Maadi",
        locale: false,
      },


  

      {
        source: "/ar/%D9%84%D9%84%D8%A7%D9%8A%D8%AC%D8%A7%D8%B1/%D8%B4%D9%82%D8%A9/%D8%A7%D9%84%D9%85%D8%B9%D8%A7%D8%AF%D9%8A/%D9%85%D8%B9%D8%A7%D8%AF%D9%8A-%D8%B3%D8%B1%D8%A7%D9%8A%D8%A7%D8%AA",
        destination: "/ar/for-rent/Apartment/Maadi/Maadi-Sarayat",
        locale: false,
      },


      {
        source: "/ar/%D9%84%D9%84%D8%A7%D9%8A%D8%AC%D8%A7%D8%B1/%D8%B4%D9%82%D8%A9/%D8%A7%D9%84%D9%85%D8%B9%D8%A7%D8%AF%D9%8A/%D8%A7%D9%84%D9%85%D8%B9%D8%A7%D8%AF%D9%8A-%D8%A7%D9%84%D8%AC%D8%AF%D9%8A%D8%AF%D9%87",
        destination: "/ar/for-rent/Apartment/Maadi/New-Maadi",
        locale: false,
      },



      {
        source: "/ar/%D9%84%D9%84%D8%A7%D9%8A%D8%AC%D8%A7%D8%B1/%D8%B4%D9%82%D8%A9/%D8%A7%D9%84%D9%85%D8%B9%D8%A7%D8%AF%D9%8A/%D8%A7%D9%84%D9%85%D8%B9%D8%A7%D8%AF%D9%8A-%D8%A7%D9%84%D9%82%D8%AF%D9%8A%D9%85%D9%87",
        destination: "/ar/for-rent/Apartment/Maadi/Old-Maadi",
        locale: false,
      },

      {
        source: "/ar/%D9%84%D9%84%D8%A7%D9%8A%D8%AC%D8%A7%D8%B1/%D8%B4%D9%82%D8%A9/%D8%A7%D9%84%D9%85%D8%B9%D8%A7%D8%AF%D9%8A/%D8%B2%D9%87%D8%B1%D8%A7%D8%A1-%D8%A7%D9%84%D9%85%D8%B9%D8%A7%D8%AF%D9%8A",
        destination: "/ar/for-rent/Apartment/Maadi/Zahraa-Maadi",
        locale: false,
      },

      {
        source: "/ar/%D8%A7%D9%84%D9%82%D8%A7%D9%87%D8%B1%D9%87-%D8%A7%D9%84%D8%AC%D8%AF%D9%8A%D8%AF%D9%87",
        destination: "/ar/for-rent/Apartment/Katameya",
        locale: false,
      },
      {
        source: "/ar/%D8%A7%D9%84%D9%82%D8%A7%D9%87%D8%B1%D9%87-%D8%A7%D9%84%D8%AC%D8%AF%D9%8A%D8%AF%D9%87",
        destination: "/ar/for-rent/Apartment/New-Cairo",
        locale: false,
      },
    
  
    ];
  },
};

module.exports = nextConfig;
