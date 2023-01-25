import Hero from "@/components/home/Hero";
import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>MPP-Law</title>
        <meta name="description" content="MPP Law firm" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
      </main>
    </>
  );
};

export default Home;
