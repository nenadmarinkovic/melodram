import Head from "next/head";
import Banner from "../components/Banner";
import About from "../components/About";
import Cover from "../components/Cover";
import MapContainer from "../components/MapContainer";
import CoverDown from "../components/CoverDown";
import Offer from "../components/Offer";
import Reasons from "../components/Reasons";
import Footer from "../components/Footer";
import GlobalStyle from "../styles/globalStyles";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Melodram"
        description="Melodram - muzička radionica klavira, solfeđa, kao i rada sa pevačkim društvima."
        canonical="https://www.melodram.rs/"
        openGraph={{
          url: "https://www.melodram.rs/",
          title: "Melodram",
          description:
            "Muzička radionica klavira, solfeđa, kao i rada sa pevačkim društvima",
          images: [
            {
              url:
                "https://melodram.rs/_next/image?url=%2Fcover-min.jpg&w=3840&q=75",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
            },
            {
              url:
                "https://melodram.rs/_next/image?url=%2Fcover-min.jpg&w=3840&q=75",
              width: 900,
              height: 800,
              alt: "Og Image Alt Second",
            },
          ],
          site_name: "Melodram",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <Head>
        <title>Мелодрам - Радионица клавира и солфеђа</title>
        <link rel="icon" href="/piano.png" />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <meta property="og:title" content="Melodram" key="title" />
        <meta property="og:image" content="/cover-min.jpg" />
      </Head>
      <GlobalStyle />
      <Banner />
      <About />
      <Cover />
      <Reasons />
      <Offer />
      <CoverDown />
      <MapContainer />
      <Footer />
    </>
  );
}
