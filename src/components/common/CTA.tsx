import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";

const CTA = () => {
  return (
    <div className="relative bg-primary-500">
      <div className="bg-indigo-600 h-56 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
        <Image
          className="h-full w-full object-cover"
          width={1920}
          height={1080}
          src="/assets/images/about-office.jpg"
          alt=""
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl">
            Doriți să planificăm o întâlnire?
          </h2>
          <p className="mt-3 text-lg text-black">
            Suntem doar la un mesaj distanță.
          </p>
          <div className="mt-8">
            <div className="inline-flex rounded-md shadow">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-primary-900 hover:bg-black hover:text-white"
              >
                Cere o consultație
                <ArrowTopRightOnSquareIcon
                  className="-mr-1 ml-3 h-5 w-5"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
