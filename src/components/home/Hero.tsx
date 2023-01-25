import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <section className="flex h-full min-h-screen items-center justify-center overflow-hidden bg-hero-image bg-cover bg-center">
        <div className="pt-22 max-w-7xl px-8">
          <div className="mx-auto text-center">
            <p className="max-w-4xl  text-5xl font-light uppercase text-white">
              Bun venit la
            </p>
            <h1 className="mb-4 max-w-4xl text-9xl font-bold uppercase leading-none tracking-tight text-primary-500">
              Mpp
            </h1>
            <p className="mb-6 max-w-4xl text-2xl font-light  text-white ">
              Misiunea noastră este să ne folosim experiența și cunoașterea
              temeinică a teoriei și practicii juridice pentru a oferi soluții
              adaptate situației fiecărui client, cu profesionalism, rigoare și
              integritate.
            </p>
            <Link href="/contact">
              <button
                className="mr-3 mb-8 inline-flex transform items-center justify-center rounded-lg 
							bg-primary-500 px-5 py-3 text-center text-base font-bold uppercase text-black 
							transition duration-300 ease-in-out hover:scale-105 hover:bg-white focus:ring-4 focus:ring-primary-300"
              >
                Cere o consultație
                <ArrowRightIcon className="ml-2 -mr-1 h-5 w-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
