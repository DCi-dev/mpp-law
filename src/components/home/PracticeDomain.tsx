// import CardAreas from "../common/ui/card/CardAreas";

import type { PracticeDomainType } from "@/types/sanity";
import CardDomain from "../common/CardDomain";

function PracticeDomain({ practiceDomains }: PracticeDomainType[]) {
  return (
    <>
      <div className="overflow-hidden bg-white py-10 px-3">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-center text-black">Domenii de practică</h2>
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
    </>
  );
}

export default PracticeDomain;
