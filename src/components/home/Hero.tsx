import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <header className="relative h-screen">
      <div className="bg-gray-100 absolute inset-x-0 bottom-0 h-full" />
      <div className="relative h-full shadow-xl sm:overflow-hidden">
        <div className="absolute inset-0">
          <Image
            className="h-full w-full object-cover"
            src="/assets/images/palatul-culturii-iasi.jpg"
            alt="People working on laptops"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-primary-500 mix-blend-multiply" />
        </div>
        <div className="relative flex h-full flex-col  items-center justify-center px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
          <h1 className="text-center font-bold tracking-tight">
            <span className="mb-4 block text-2xl uppercase text-white sm:text-4xl lg:text-5xl">
              Bun venit la
            </span>
            <span className="block text-4xl text-primary-200 sm:text-5xl lg:text-6xl">
              Manolache Pădurariu & Partners
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-center text-xl text-white sm:max-w-3xl">
            Misiunea noastră este să ne folosim experiența și cunoașterea
            temeinică a teoriei și practicii juridice pentru a oferi soluții
            adaptate situației fiecărui client, cu profesionalism, rigoare și
            integritate.
          </p>
          <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
            <Link
              href="/contact"
              className="flex items-center justify-center rounded-md border border-transparent bg-primary-500 bg-opacity-60 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-70 sm:px-8"
            >
              Cere o consultație
              <ArrowRightIcon className="ml-2 -mr-1 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
