// import CardAreas from "../common/ui/card/CardAreas";

import Link from "next/link";

interface ChildProps {
  title: string;
  subtitle: string;
  slug: string;
}

const CardDomain = ({ title, subtitle, slug }: ChildProps) => {
  return (
    <Link
      href={`/domenii-de-practica/${slug}`}
      key={title}
      className="relative transform overflow-hidden rounded-2xl bg-white px-4 py-8 transition duration-300 ease-in-out hover:scale-105"
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
      }}
    >
      <h3 className="leading-10 text-black">{title}</h3>
      <p className="mt-2 text-black">{subtitle}</p>
    </Link>
  );
};

export default CardDomain;
