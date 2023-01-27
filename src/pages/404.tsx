import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const FourOhFour: NextPage = () => {
  return (
    <>
      <Head>
        <title>MPP-Law</title>
        <meta name="description" content="MPP Law firm" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col bg-white pt-16 lg:relative">
        <div className="flex flex-grow flex-col">
          <main className="flex flex-grow flex-col bg-white">
            <div className="mx-auto flex w-full max-w-7xl flex-grow flex-col px-4 sm:px-6 lg:px-8">
              <div className="my-auto flex-shrink-0 py-16 sm:py-32">
                <p className="text-indigo-600 text-base font-semibold">
                  Error 404
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl">
                  <span className="text-primary-700">
                    Nu ați încălcat legea,
                  </span>
                  <br />
                  dar nu putem găsi ceea ce căutați.
                </h1>
                <p className="mt-2 text-base text-black">
                  Dar nu vă faceți griji, puteți găsi o mulțime de alte lucruri
                  <br />
                  pe pagina noastră de pornire.
                </p>
                <div className="mt-6">
                  <Link
                    href="/"
                    className="text-indigo-600 hover:text-indigo-500 text-base font-medium"
                  >
                    Înapoi acasă
                    <span aria-hidden="true"> &rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
        <div className="hidden lg:absolute lg:inset-y-0 lg:right-0 lg:block lg:w-1/2">
          <Image
            className="absolute inset-0 h-full w-full object-cover"
            src="/assets/images/fourohfour.jpg"
            alt="Four oh four - MPP Law"
            width={1825}
            height={2281}
          />
        </div>
      </div>
    </>
  );
};

export default FourOhFour;
