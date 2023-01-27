import type { LawyerType } from "@/types/sanity";

import Image from "next/image";
import CardLawyer from "../common/CardLawyer";

export default function Team({
  lawyers,
}: {
  lawyers: LawyerType[];
}): JSX.Element {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="relative bg-primary-800 pb-32">
        <div className="absolute inset-0">
          <Image
            className="h-full w-full object-cover"
            src="/assets/images/about-office.jpg"
            alt=""
            width={1920}
            height={1080}
          />
          <div
            className="absolute inset-0 bg-primary-800 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Echipa noastră
          </h2>
        </div>
      </div>

      {/* Overlapping cards */}
      <section
        className="relative z-10 mx-auto -mt-32 max-w-7xl px-4 pb-32 sm:px-6 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <h2 className="sr-only" id="contact-heading">
          Contactați-ne
        </h2>
        <div className="grid grid-cols-1 gap-y-20 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-10">
          {lawyers.map((lawyer) => (
            <CardLawyer
              key={lawyer._id}
              title={lawyer.position}
              name={lawyer.name}
              slug={lawyer.slug.current}
              image={lawyer.image.asset._ref}
              facebook={lawyer.facebook}
              linkedin={lawyer.linkedin}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
