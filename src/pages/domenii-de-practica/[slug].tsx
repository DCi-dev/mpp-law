import CTA from "@/components/common/CTA";
import { env } from "@/env/client.mjs";
import { client } from "@/lib/client";
import type { PracticeDomainType } from "@/types/sanity";

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
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <h2
                id="sale-heading"
                className="text-4xl font-bold tracking-tight text-black sm:text-5xl lg:text-6xl"
              >
                {domain.title}
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-xl text-black">
                {domain.subtitle}
              </p>
            </div>
          </section>

          {/* Servicii */}
          <section
            aria-labelledby="testimonial-heading"
            className="relative mx-auto max-w-7xl py-24 px-4 sm:px-6 lg:py-32 lg:px-8"
          >
            <div className="mx-auto max-w-4xl lg:max-w-none">
              <h2
                id="testimonial-heading"
                className="text-5xl font-bold tracking-tight text-black"
              >
                Servicii oferite
              </h2>

              <div className="mt-16 space-y-16 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:space-y-0">
                {domain.text.map((item) => (
                  <blockquote key={item._key} className="sm:flex lg:block">
                    <div className="mt-8 sm:mt-0 sm:ml-6 lg:mt-10 lg:ml-0">
                      <h3 className="text-3xl font-bold text-black">
                        {item.title}
                      </h3>
                      <cite className="mt-4 block text-lg font-semibold not-italic text-black">
                        {item.text}
                      </cite>
                    </div>
                  </blockquote>
                ))}
              </div>
            </div>
          </section>
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
