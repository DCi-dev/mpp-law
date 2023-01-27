import CTA from "@/components/common/CTA";
import { env } from "@/env/client.mjs";
import { client } from "@/lib/client";
import type { LawyerType, PracticeDomainType } from "@/types/sanity";
import {
  CalendarIcon,
  EnvelopeIcon,
  PhoneIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import type { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

type ChildProps = {
  lawyer: LawyerType;
};

const Lawyer = ({ lawyer }: ChildProps) => {
  const img: string = lawyer.image.asset._ref;
  const imageSrc: string = img
    .replace(
      "image-",
      `https://cdn.sanity.io/images/${env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${env.NEXT_PUBLIC_SANITY_DATASET}/`
    )
    .replace("-jpg", ".jpg");

  return (
    <>
      <Head>
        <title>MPP-{lawyer.title}</title>
        <meta name="description" content="MPP Law firm" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative pt-16">
        {/* Profile */}
        <section className="bg-white">
          <div
            className="mx-auto my-8 max-w-screen-xl items-center gap-8 py-8 px-4 sm:py-16 md:grid md:grid-cols-2 lg:px-6 xl:gap-16"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
            }}
          >
            <Image
              src={imageSrc}
              alt={`avocat ${lawyer.name}`}
              width={500}
              height={500}
              className="rounded-full"
            />
            {/* Prezentare avocat */}
            <div className="mt-4 md:mt-0">
              <h2 className="mb-4 text-4xl font-bold tracking-tight text-black ">
                {lawyer.name}
              </h2>
              <p className="mb-6 text-xl text-black md:text-2xl ">
                {lawyer.position}
              </p>

              <p className="mb-6 flex flex-row items-center justify-start font-bold text-black md:text-lg">
                <EnvelopeIcon className="mr-1 h-5 w-5" />
                Email:
                <a href={`mailto:${lawyer.email}`} data-rel="external">
                  <span className="ml-2 font-bold text-black hover:text-primary-500 hover:underline">
                    {lawyer.email}
                  </span>
                </a>
              </p>
              <p className="mb-6 flex flex-row items-center justify-start font-bold text-black md:text-lg">
                <PhoneIcon className="mr-1 h-5 w-5" />
                Telefon:
                <a href={`tel:+4${lawyer.phone}`} data-rel="external">
                  <span className="ml-2 font-bold text-black hover:text-primary-500 hover:underline">
                    {lawyer.phone}
                  </span>
                </a>
              </p>
              <ul className="mb-6 flex space-x-4 sm:mt-0 ">
                <li>
                  <Link href={lawyer.facebook}>
                    <div className="cursor-pointer font-bold text-black hover:text-primary-500">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        aria-hidden="true"
                      >
                        <path
                          d="M22.258 1H2.242C1.556 1 1 1.556 1 2.242v20.016c0 .686.556 1.242 1.242 1.242h10.776v-8.713h-2.932V11.39h2.932V8.887c0-2.906 1.775-4.489 4.367-4.489 1.242 0 2.31.093 2.62.134v3.037l-1.797.001c-1.41 0-1.683.67-1.683 1.653v2.168h3.362l-.438 3.396h-2.924V23.5h5.733c.686 0 1.242-.556 1.242-1.242V2.242C23.5 1.556 22.944 1 22.258 1"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href={lawyer.linkedin}>
                    <div className="cursor-pointer font-bold text-black hover:text-primary-500">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        aria-hidden="true"
                      >
                        <path
                          d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24H22.225c.966 0 1.771-.773 1.771-1.729V1.729c0-.956-.805-1.729-1.771-1.729z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </Link>
                </li>
              </ul>
              <p className="mb-6 font-bold text-black md:text-lg">
                Domenii de practică:
              </p>
              <div className="mb-6 grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-2 ">
                {lawyer.domain.map((item: PracticeDomainType) => (
                  <Link
                    key={item._id}
                    href={`/domenii-de-practica/${item.slug.current}`}
                  >
                    <p className="mb-6 flex cursor-pointer flex-row items-center justify-start text-black hover:underline md:text-lg">
                      <StarIcon className="mr-1 h-5 w-5" />
                      {item.title}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Description */}
        <section className="bg-white text-center">
          <div className="max-w-screen-7xl mx-auto py-8 px-4 sm:py-16 lg:px-6">
            <h2 className="mb-12 text-3xl font-bold leading-none tracking-tight text-black md:text-4xl xl:text-5xl">
              Biografie
            </h2>
            <p className="mb-6 font-light text-white  md:text-lg">
              {lawyer.bio}
            </p>
            <div className="grid grid-cols-1 gap-8 px-6 pb-10  lg:grid-cols-2 lg:pb-10">
              <div
                className="overflow-hidden bg-white sm:rounded-md"
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
                }}
              >
                <ul role="list" className="divide-y divide-primary-200">
                  <h2 className="my-12 text-3xl font-bold leading-none tracking-tight text-black md:text-4xl xl:text-5xl">
                    Educație
                  </h2>
                  {lawyer.education.map((item) => (
                    <li key={item._key}>
                      <div className="px-4 py-4 sm:px-6">
                        <div className="flex items-center justify-between">
                          <h3 className="truncate text-2xl font-bold text-black">
                            {item.title}
                          </h3>
                          <div className="ml-2 flex flex-shrink-0 text-black">
                            <CalendarIcon
                              className=" mr-1.5 h-5 w-5 flex-shrink-0"
                              aria-hidden="true"
                            />
                            <p>
                              <time dateTime={item.date}>{item.date}</time>
                            </p>
                          </div>
                        </div>
                        <div className="mt-2 sm:flex sm:justify-between">
                          <div className="sm:flex">
                            <p className="mt-2 flex items-center text-lg text-black sm:mt-0 sm:ml-6">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="overflow-hidden bg-white sm:rounded-md"
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
                }}
              >
                <ul role="list" className="divide-y divide-primary-200">
                  <h2 className="my-12 text-3xl font-bold leading-none tracking-tight text-black md:text-4xl xl:text-5xl">
                    Carieră
                  </h2>
                  {lawyer.career.map((item) => (
                    <li key={item._key}>
                      <div className="px-4 py-4 sm:px-6">
                        <div className="flex items-center justify-between">
                          <h3 className="truncate text-2xl font-bold text-black">
                            {item.title}
                          </h3>
                          <div className="ml-2 flex flex-shrink-0 text-black">
                            <CalendarIcon
                              className=" mr-1.5 h-5 w-5 flex-shrink-0"
                              aria-hidden="true"
                            />
                            <p>
                              <time dateTime={item.date}>{item.date}</time>
                            </p>
                          </div>
                        </div>
                        <div className="mt-2 sm:flex sm:justify-between">
                          <div className="sm:flex">
                            <p className="mt-2 flex items-center text-lg text-black sm:mt-0 sm:ml-6">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
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

export const getStaticPaths: GetStaticPaths = async () => {
  const query = `*[_type == "lawyer"] {slug { current}}`;
  const lawyers: LawyerType[] = await client.fetch(query);
  const paths = lawyers.map((lawyer: LawyerType) => ({
    params: { slug: lawyer.slug.current },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const lawyerQuery = `*[_type == "lawyer" && slug.current == "${
    params?.slug as string
  }"][0]{
    ...,
    domain[]->{
    ...,
  }
  }`;
  const lawyer: LawyerType = await client.fetch(lawyerQuery);

  return {
    props: { lawyer },
  };
};

export default Lawyer;
