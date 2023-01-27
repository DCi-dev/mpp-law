import CTA from "@/components/common/CTA";
import Team from "@/components/home/Team";
import { client } from "@/lib/client";
import type { LawyerType } from "@/types/sanity";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

interface HomeProps {
  lawyers: LawyerType[];
}

const TeamPage: NextPage<HomeProps> = ({ lawyers }) => {
  return (
    <>
      <Head>
        <title>Echipa MPP</title>
        <meta name="description" content="MPP Law firm" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* Hero */}
        <div className="relative bg-primary-800">
          <div className="absolute inset-0">
            <Image
              className="h-full w-full object-cover"
              src="/assets/images/about-office.jpg"
              alt="Echipa MPP"
              width={1920}
              height={1080}
            />
            <div
              className="absolute inset-0 bg-primary-800 mix-blend-multiply"
              aria-hidden="true"
            />
          </div>
          <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Echipă & Cariere
            </h1>
            <p className="mt-6 max-w-3xl text-xl text-primary-100">
              Mattis amet hendrerit dolor, quisque lorem pharetra. Pellentesque
              lacus nisi urna, arcu sociis eu. Orci vel lectus nisl eget eget ut
              consectetur. Sit justo viverra non adipisicing elit distinctio.
            </p>
          </div>
        </div>
        {/* Section */}
        <section className="lg:relative">
          <div className="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-48 lg:text-left">
            <div className="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
              <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                <span className="block xl:inline">
                  Succesul clienților noștri{" "}
                </span>{" "}
                <span className="block text-primary-600 xl:inline">
                  este succesul nostru.
                </span>
              </h1>
              <p className="mx-auto mt-3 max-w-md text-lg text-black sm:text-xl md:mt-5 md:max-w-3xl">
                O echipă complexă, formată din specialiști în toate ramurile
                dreptului, este pregătită să te asiste.
              </p>
              <p className="mx-auto mt-3 max-w-md text-lg text-black sm:text-xl md:mt-5 md:max-w-3xl">
                Prin continuă dezvoltare și specializare, am creat în cadrul
                societății Manolache, Pădurariu & Partners o echipă modernă,
                creativă și profesionistă, în care experiența partenerilor
                seniori se îmbină cu dăruirea și entuziasmul tinerilor avocați.
              </p>
              <p className="mx-auto mt-3 max-w-md text-lg text-black sm:text-xl md:mt-5 md:max-w-3xl">
                Cu o vastă experiență academică și practică, echipa noastră
                poate aborda probleme din toate ramurile dreptului.
              </p>
            </div>
          </div>
          <div className="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
              alt="Echipa Manolache Padurariu & Partners"
            />
          </div>
        </section>
        {/* Team */}
        <Team lawyers={lawyers} />
        {/* Careers */}
        <section>
          <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
              <div className="relative z-10 lg:py-16">
                <div className="relative h-64 sm:h-80 lg:h-full">
                  <img
                    alt="Cariere Manolache Padurariu & Partners"
                    src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="relative flex items-center bg-primary-500">
                <span className="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 lg:bg-primary-500"></span>

                <div className="p-8 sm:p-16 lg:p-24">
                  <h2 className="text-4xl font-bold tracking-tight text-black sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                    Cariere
                  </h2>

                  <p className="mx-auto mt-3 max-w-md text-lg text-black sm:text-xl md:mt-5 md:max-w-3xl">
                    Societatea Manolache, Pădurariu & Partners oferă un mediu de
                    lucru profesionist și, în același timp, prietenos, atât
                    pentru avocații începători, cât și pentru cei care au
                    acumulat deja experiență în această profesie.
                  </p>
                  <p className="mx-auto mt-3 max-w-md text-lg text-black sm:text-xl md:mt-5 md:max-w-3xl">
                    Suntem în permanență în căutare de avocați care împărtășesc
                    valorile şi principiile noastre, talentați și determinați să
                    obțină rezultate excelente în domeniu, pentru fiecare client
                    alături de care lucrăm. Dacă vrei să te alături celei mai
                    mari echipe de avocatură din Iași, într-un mediu în care vei
                    permanent provocat la dezvoltare profesională, dacă crezi că
                    ai entuziasmul, pregătirea profesională, rigoarea și ambiția
                    de a reuși în carieră, e momentul să ne dai un semn!
                  </p>
                  <p className="mx-auto mt-3 max-w-md text-lg text-black sm:text-xl md:mt-5 md:max-w-3xl">
                    Trimite-un un CV, însoțit de o scrisoare de intenție care să
                    descrie motivele pentru care vrei să ni te alături, la
                    adresa de email{" "}
                    <a href="mailto:office@mpp.ro" className="font-bold">
                      office@mpp.ro
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CTA */}
        <CTA />
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const lawyerQuery = '*[_type == "lawyer"]';
  const lawyers: LawyerType[] = await client.fetch(lawyerQuery);

  return {
    props: { lawyers },
  };
};

export default TeamPage;
