import type { PracticeDomainType } from "@/types/sanity";
import CardDomain from "../common/CardDomain";

function PracticeDomain({
  practiceDomains,
}: {
  practiceDomains: PracticeDomainType[];
}): JSX.Element {
  return (
    <div className="overflow-hidden bg-white py-10 px-3">
      <div className="mx-auto max-w-7xl text-center">
        <div className="lg:text-center">
          <h2 className="text-gray-900 mt-2 text-3xl font-bold leading-8 tracking-tight sm:text-4xl">
            Domenii de practică
          </h2>
          <p className="mt-4 text-lg font-semibold text-black">
            MPP profesează în următoarele domenii de practică:
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-6 px-6 pb-10 md:grid-cols-2  lg:pb-10 xl:grid-cols-4">
            {practiceDomains.map((item: PracticeDomainType) => (
              <CardDomain
                title={item.title}
                subtitle={item.subtitle}
                slug={item.slug.current}
                key={item._id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PracticeDomain;
