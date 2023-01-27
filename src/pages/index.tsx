import CTA from "@/components/common/CTA";
import About from "@/components/home/About";
import Hero from "@/components/home/Hero";
import PracticeDomain from "@/components/home/PracticeDomain";
import Team from "@/components/home/Team";
import { client } from "@/lib/client";
import type { LawyerType, PracticeDomainType } from "@/types/sanity";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";

interface HomeProps {
  practiceDomains: PracticeDomainType[];
  lawyers: LawyerType[];
}

const Home: NextPage<HomeProps> = ({ practiceDomains, lawyers }) => {
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
        <About />
        <Team lawyers={lawyers} />
        <CTA />
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const query = '*[_type == "practiceDomain"]';
  const practiceDomains: PracticeDomainType[] = await client.fetch(query);

  const lawyerQuery = '*[_type == "lawyer"]';
  const lawyers: LawyerType[] = await client.fetch(lawyerQuery);

  return {
    props: { practiceDomains, lawyers },
  };
};

export default Home;
