import CardDomain from "@/components/common/CardDomain";
import CTA from "@/components/common/CTA";
import About from "@/components/home/About";
import { client } from "@/lib/client";
import type { PracticeDomainType } from "@/types/sanity";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

interface DomainsPageProps {
  domains: PracticeDomainType[];
}

const DomainsPage: NextPage<DomainsPageProps> = ({ domains }) => {
  return (
    <>
      <Head>
        <title>MPP-Law - Domenii de practică</title>
        <meta name="description" content="MPP Law firm" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="pt-16">
        {/* Hero */}
        <div className="relative mb-32 bg-white">
          {/* Background image and overlap */}
          <div
            aria-hidden="true"
            className="absolute inset-0 hidden sm:flex sm:flex-col"
          >
            <div className="relative w-full flex-1 bg-primary-800">
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src="/assets/images/about-office.jpg"
                  alt="Domenii de practică"
                  className="h-full w-full object-cover object-center"
                  width={1920}
                  height={1080}
                />
              </div>
              <div className="absolute inset-0 bg-primary-900 opacity-50" />
            </div>
            <div className="h-32 w-full bg-white md:h-40 lg:h-48" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 pb-96 text-center sm:px-6 sm:pb-0 lg:px-8">
            {/* Background image and overlap */}
            <div
              aria-hidden="true"
              className="absolute inset-0 flex flex-col sm:hidden"
            >
              <div className="relative w-full flex-1 bg-primary-800">
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src="/assets/images/about-office.jpg"
                    alt="Domenii de practică - MPP Law"
                    className="h-full w-full object-cover object-center"
                    width={1920}
                    height={1080}
                  />
                </div>
                <div className="absolute inset-0 bg-primary-900 opacity-50" />
              </div>
              <div className="h-48 w-full bg-white" />
            </div>
            <div className="relative py-28">
              <h1 className="text-6xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                Domenii de practică
              </h1>
              <div className="mt-4 sm:mt-6">
                <h2 className="inline-block py-3 px-8 text-3xl font-medium text-white ">
                  Servicii juridice de la A la Z
                </h2>
              </div>
              <div className="mt-4 sm:mt-6">
                <p className="inline-block py-3 px-8 text-lg font-medium text-white ">
                  Echipa Manolache, Pădurariu & Partners are capacitatea
                  profesională de a aborda chestiuni din orice domeniu al
                  dreptului, de la civil și comercial până la dreptul penal,
                  administrativ sau fiscal. Calificarea profesională de excepție
                  a membrilor echipei și existența unor departamente
                  specializate ne permit să abordăm cauze complexe în cel mai
                  eficient mod, chiar și atunci când dosarul impune soluționarea
                  unor probleme ce aparțin unor ramuri diferite ale dreptului.
                </p>
              </div>
            </div>
          </div>

          <section
            aria-labelledby="collection-heading"
            className="relative -mt-96 sm:mt-0"
          >
            <h2 id="collection-heading" className="sr-only">
              Domenii de activitate
            </h2>
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-y-10 px-4 md:grid-cols-2 md:gap-5 lg:grid-cols-4 lg:gap-10 lg:gap-y-20">
              {domains.map((item: PracticeDomainType) => (
                <CardDomain
                  title={item.title}
                  subtitle={item.subtitle}
                  slug={item.slug.current}
                  key={item._id}
                />
              ))}
            </div>
          </section>
        </div>

        <About />

        {/* CTA */}
        <CTA />
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const query = '*[_type == "practiceDomain"]';
  const domains: PracticeDomainType[] = await client.fetch(query);

  return {
    props: { domains },
  };
};

export default DomainsPage;
