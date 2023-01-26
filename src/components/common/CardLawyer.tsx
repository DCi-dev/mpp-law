import { env } from "@/env/client.mjs";
import Image from "next/image";
import Link from "next/link";

interface ChildProps {
  title: string;
  name: string;
  slug: string;
  image: string;
  facebook: string;
  linkedin: string;
}

const CardLawyer = ({
  title,
  name,
  slug,
  image,
  facebook,
  linkedin,
}: ChildProps) => {
  const img: string = image;
  const imageSrc: string = img
    .replace(
      "image-",
      `https://cdn.sanity.io/images/${env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${env.NEXT_PUBLIC_SANITY_DATASET}/`
    )
    .replace("-jpg", ".jpg");

  return (
    <li key={name} className="list-none	">
      <div className="space-y-4">
        <Link href={`/echipa/avocati/${slug}`}>
          <div className="aspect-w-3 aspect-h-2">
            <Image
              className="rounded-lg object-cover object-top shadow-lg"
              src={imageSrc}
              alt={name}
              width={300}
              height={200}
            />
          </div>
        </Link>

        <div className="space-y-2">
          <Link
            href={`/echipa/avocati/${slug}`}
            className="space-y-1 text-lg font-medium leading-6"
          >
            <h3 className="text-2xl text-black">{name}</h3>
            <p className="text-md text-black">{title}</p>
          </Link>
          <ul role="list" className="flex space-x-5">
            <li>
              <a
                href={facebook}
                className="text-gray-400 hover:text-primary-500"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-6 w-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M17.002 2H3a1 1 0 00-1 1v14a1 1 0 001 1h7.535v-6.467h-2.197v-2.46h2.197v-1.734c0-2.1 1.283-3.2 3.2-3.2.957 0 1.867.073 2.096.106v2.43h-1.438c-1.128 0-1.346.538-1.346 1.324v1.5h2.46l-.326 2.46h-2.134v6.467h4.535a1 1 0 001-1V3a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href={linkedin}
                className="text-gray-400 hover:text-primary-500"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="h-6 w-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </li>
  );
};

export default CardLawyer;
