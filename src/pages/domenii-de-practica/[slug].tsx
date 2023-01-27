import CTA from "@/components/common/CTA";
import { env } from "@/env/client.mjs";
import { client } from "@/lib/client";
import type { PracticeDomainType } from "@/types/sanity";
import { CheckIcon } from "@heroicons/react/24/outline";

import type { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";

type ChildProps = {
  domain: PracticeDomainType;
};

const DomainPage = ({ domain }: ChildProps) => {
  console.log(domain);

  const img: string = domain.image.asset._ref;
  const imageSrc: string = img
    .replace(
      "image-",
      `https://cdn.sanity.io/images/${env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${env.NEXT_PUBLIC_SANITY_DATASET}/`
    )
    .replace("-jpg", ".jpg");

  return (
    <>
      <Head>
        <title>MPP-{domain.title}</title>
        <meta name="description" content="MPP Law firm" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative pt-16">
        <div className="relative overflow-hidden bg-white">
          {/* Decorative background image and gradient */}
          <div aria-hidden="true" className="absolute inset-0">
            <div className="absolute inset-0 mx-auto overflow-hidden">
              <Image
                src={imageSrc}
                alt={domain.title}
                className="h-full w-full object-cover object-center"
                width={1920}
                height={1080}
              />
            </div>
            <div className="absolute inset-0 bg-white bg-opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-600 via-primary-500" />
          </div>

          {/* Hero */}
          <section
            aria-labelledby="sale-heading"
            className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pt-32 text-center sm:px-6 lg:px-8"
          >
            <div className="mx-auto max-w-2xl pb-28 lg:max-w-none">
              <h2
                id="sale-heading"
                className="text-4xl font-bold tracking-tight text-black sm:text-5xl lg:text-6xl"
              >
                {domain.title}
              </h2>
            </div>
          </section>
        </div>

        {/* Servicii */}
        <div className="bg-white">
          <div className="mx-auto  py-16 px-4 sm:px-6 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:py-24 lg:px-8">
            <div>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary-600">
                Servicii oferite
              </h2>
              <p className="text-gray-500 mt-4 text-lg">{domain.subtitle}</p>
            </div>
            <div className="mt-12 lg:col-span-2 lg:mt-0">
              <dl className="sm:grid-col-2 grid space-y-10  sm:gap-x-6 sm:gap-y-10 sm:space-y-0 lg:gap-x-8">
                {domain.text.map((item) => (
                  <div key={item._key} className="relative">
                    <dt>
                      <CheckIcon
                        className="text-green-500 absolute h-6 w-6"
                        aria-hidden="true"
                      />
                      <p className="text-gray-900 ml-9 text-lg font-medium leading-6">
                        {item.title}
                      </p>
                    </dt>
                    <dd className="text-gray-500 mt-2 ml-9 text-base">
                      {item.text}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {/* CTA */}
        <CTA />
      </main>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const query = `*[_type == "practiceDomain"] {slug { current}}`;
  const domains: PracticeDomainType[] = await client.fetch(query);
  const paths = domains.map((domain: PracticeDomainType) => ({
    params: { slug: domain.slug.current },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type == "practiceDomain" && slug.current == "${
    params?.slug as string
  }"][0]`;
  const domain: PracticeDomainType = await client.fetch(query);

  return {
    props: { domain },
  };
};

export default DomainPage;
