import Image from "next/image";
import type { SVGProps } from "react";

/* This example requires Tailwind CSS v2.0+ */
const navigation = {
  solutions: [
    {
      name: "Strada Tătărași 9, Iași, România",
      href: "https://goo.gl/maps/Whkh5JptbnuQceRr6",
      icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 512 512" {...props}>
          <path d="M444.52 3.52L28.74 195.42c-47.97 22.39-31.98 92.75 19.19 92.75h175.91v175.91c0 51.17 70.36 67.17 92.75 19.19l191.9-415.78c15.99-38.39-25.59-79.97-63.97-63.97z"></path>
        </svg>
      ),
    },
    {
      name: "0752 171 727",
      href: "tel:+40752171727",
      icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
          <path
            fillRule="evenodd"
            d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
          ></path>
        </svg>
      ),
    },
    {
      name: "office@mpp.ro",
      href: "mailto:office@mpp.ro",
      icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
        </svg>
      ),
    },
  ],
  support: [
    { name: "Pricing", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Guides", href: "#" },
    { name: "API Status", href: "#" },
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Press", href: "#" },
    { name: "Partners", href: "#" },
  ],
  legal: [
    { name: "Claim", href: "#" },
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
  ],
  social: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/mpp.law.ro",
      icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M17.002 2H3a1 1 0 00-1 1v14a1 1 0 001 1h7.535v-6.467h-2.197v-2.46h2.197v-1.734c0-2.1 1.283-3.2 3.2-3.2.957 0 1.867.073 2.096.106v2.43h-1.438c-1.128 0-1.346.538-1.346 1.324v1.5h2.46l-.326 2.46h-2.134v6.467h4.535a1 1 0 001-1V3a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "LinedIn",
      href: "https://www.facebook.com/mpp.law.ro",
      icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

export default function Footer() {
  return (
    <>
      <div className="width-full">
        <iframe
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d678.1954739806168!2d27.59770202927152!3d47.16212589869735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cafb3c3f92e087%3A0x756d32f74aae3f20!2sManolache%2C%20P%C4%83durariu%20%26%20Partners!5e0!3m2!1sen!2sro!4v1674736002122!5m2!1sen!2sro`}
          allowFullScreen={true}
          loading="lazy"
          style={{
            width: "100%",
            minHeight: "20vw",
            border: "0",
          }}
          className="width-full h-auto border-0"
        ></iframe>
      </div>
      <footer className="bg-white" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8 lg:pt-16">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
              <Image
                className="h-28"
                src="/logo.svg"
                alt="Manolache, Pădurariu & Asociații"
                width={200}
                height={50}
              />
              <p className="text-gray-500 text-base italic">
                Soluții juridice adaptate nevoilor fiecărui client, cu
                profesionalism și integritate.
              </p>

              <div className="flex space-x-6">
                {navigation.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="ttext-black hover:text-primary-500"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-8 xl:col-span-2 xl:mt-0">
              <div>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name} className="flex flex-row gap-3">
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                      <a
                        href={item.href}
                        className="text-base font-bold text-primary-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-gray-900 text-base font-bold">Company</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-gray-500 hover:text-gray-900 text-base"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-gray-900 text-base font-bold">Legal</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-gray-500 hover:text-gray-900 text-base"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="border-gray-200 mt-12 border-t pt-8">
            <p className="text-gray-400 text-base xl:text-center">
              &copy; 2023 Manolache Pădurariu & Asociații
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
