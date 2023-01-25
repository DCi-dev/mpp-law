import Hero from "@/components/home/Hero";
import PracticeDomain from "@/components/home/PracticeDomain";
import { client } from "@/lib/client";
import type { PracticeDomainType } from "@/types/sanity";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = ({
  practiceDomains,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log(practiceDomains);
  return (
    <>
      <Head>
        <title>MPP-Law</title>
        <meta name="description" content="MPP Law firm" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <PracticeDomain practiceDomains={practiceDomains} />
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const query = '*[_type == "practiceDomain"]';
  const practiceDomains: PracticeDomainType[] = await client.fetch(query);

  return {
    props: { practiceDomains },
  };
};

export default Home;
