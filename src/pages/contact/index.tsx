import { api } from "@/utils/api";
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { z } from "zod";

const Contact: NextPage = () => {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [purpose, setPurpose] = useState<string>("general");
  const [message, setMessage] = useState<string>("");

  const contact = api.contact.contactForm.useMutation();

  function capitalizeWords(str: string) {
    return str.replace(/\b[a-z]/g, function (letter) {
      return letter.toUpperCase();
    });
  }

  const handleSubmit = () => {
    const validFormSchema = z.object({
      name: z.string().min(3).max(50),
      phone: z.string().min(10).max(10),
      purpose: z.string().min(3).max(50),
      message: z.string().min(3).max(500),
    });

    const validForm = validFormSchema.safeParse({
      name,
      phone,
      purpose,
      message,
    });

    if (!validForm.success) {
      toast.error(
        "Ne pare rău, dar nu am primit mesajul! Formularul nu este completat corect!"
      );
      return;
    } else {
      const capPurpose = capitalizeWords(purpose);

      setPurpose(capPurpose);

      contact.mutate({
        name,
        phone,
        purpose,
        message,
      });
      toast.success("Mulțumim pentru mesaj! Te vom contacta în curând!");
    }
  };

  return (
    <>
      <Head>
        <title>MPP-Law - Contact</title>
        <meta name="description" content="MPP Law firm" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative mx-auto mt-16  bg-white  sm:mt-14">
        <h2 className="sr-only">Contactați-ne</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3">
          {/* Contact information */}
          <div className="relative overflow-hidden bg-primary-700 py-10 px-6 sm:px-10 xl:p-12">
            <div
              className="pointer-events-none absolute inset-0 sm:hidden"
              aria-hidden="true"
            >
              <svg
                className="absolute inset-0 h-full w-full"
                width={343}
                height={388}
                viewBox="0 0 343 388"
                fill="none"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                  fill="url(#linear1)"
                  fillOpacity=".1"
                />
                <defs>
                  <linearGradient
                    id="linear1"
                    x1="254.553"
                    y1="107.554"
                    x2="961.66"
                    y2="814.66"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#fff" />
                    <stop offset={1} stopColor="#fff" stopOpacity={0} />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div
              className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 sm:block lg:hidden"
              aria-hidden="true"
            >
              <svg
                className="absolute inset-0 h-full w-full"
                width={359}
                height={339}
                viewBox="0 0 359 339"
                fill="none"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                  fill="url(#linear2)"
                  fillOpacity=".1"
                />
                <defs>
                  <linearGradient
                    id="linear2"
                    x1="192.553"
                    y1="28.553"
                    x2="899.66"
                    y2="735.66"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#fff" />
                    <stop offset={1} stopColor="#fff" stopOpacity={0} />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div
              className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 lg:block"
              aria-hidden="true"
            >
              <svg
                className="absolute inset-0 h-full w-full"
                width={160}
                height={678}
                viewBox="0 0 160 678"
                fill="none"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                  fill="url(#linear3)"
                  fillOpacity=".1"
                />
                <defs>
                  <linearGradient
                    id="linear3"
                    x1="192.553"
                    y1="325.553"
                    x2="899.66"
                    y2="1032.66"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#fff" />
                    <stop offset={1} stopColor="#fff" stopOpacity={0} />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h1 className="text-4xl font-bold text-white">Contact</h1>
            <p className="mt-6 max-w-3xl text-lg text-white">
              Societatea noastră îşi desfăşoră activitatea atât în cadrul
              biroului din Iași cât şi în județele conexe, tocmai pentru a fi
              cât mai aproape de clienţii noştri şi pentru a veni în
              întâmpinarea necesităţilor acestora. Ne puteţi contacta folosind
              informaţiile de mai jos sau formularul de contact.
            </p>
            <dl className="mt-8 space-y-6 text-lg font-bold text-white">
              <dt>
                <span className="sr-only">Adresă</span>
              </dt>
              <dd className="flex text-base">
                <MapPinIcon
                  className=" h-6 w-6 flex-shrink-0"
                  aria-hidden="true"
                />
                <span className="ml-3">Strada Tătărași 9, Iași, România</span>
              </dd>
              <dt>
                <span className="sr-only">Număr de telefon</span>
              </dt>
              <dd className="flex text-base">
                <PhoneIcon
                  className=" h-6 w-6 flex-shrink-0"
                  aria-hidden="true"
                />
                <a className="ml-3" href="tel:+40752 171 727">
                  0752 171 727
                </a>
              </dd>
              <dt>
                <span className="sr-only">Email</span>
              </dt>
              <dd className="flex text-base">
                <EnvelopeIcon
                  className=" h-6 w-6 flex-shrink-0"
                  aria-hidden="true"
                />
                <a className="ml-3" href="mailto:office@mpp.ro">
                  office@mpp.ro
                </a>
              </dd>
            </dl>
            <ul role="list" className="mt-8 flex space-x-12">
              <li>
                <a
                  className="text-white"
                  href="https://www.facebook.com/mpp.law.ro"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path
                      d="M22.258 1H2.242C1.556 1 1 1.556 1 2.242v20.016c0 .686.556 1.242 1.242 1.242h10.776v-8.713h-2.932V11.39h2.932V8.887c0-2.906 1.775-4.489 4.367-4.489 1.242 0 2.31.093 2.62.134v3.037l-1.797.001c-1.41 0-1.683.67-1.683 1.653v2.168h3.362l-.438 3.396h-2.924V23.5h5.733c.686 0 1.242-.556 1.242-1.242V2.242C23.5 1.556 22.944 1 22.258 1"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  className="text-white"
                  href="https://www.facebook.com/mpp.law.ro"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path
                      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24H22.225c.966 0 1.771-.773 1.771-1.729V1.729c0-.956-.805-1.729-1.771-1.729z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact form */}
          <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
            <h3 className="text-gray-900 text-4xl font-bold">
              Lăsați-ne un mesaj
            </h3>
            <form
              action="#"
              method="POST"
              className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
            >
              <div>
                <label
                  htmlFor="last-name"
                  className="text-gray-900 block text-sm font-medium"
                >
                  Nume si prenume
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    placeholder="Introduceți numele și prenumele"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoComplete="family-name"
                    className="border-gray-300 text-gray-900 block w-full rounded-md py-3 px-4 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between">
                  <label
                    htmlFor="phone"
                    className="text-gray-900 block text-sm font-medium"
                  >
                    Număr de telefon
                  </label>
                </div>
                <div className="mt-1">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Introduceți numărul de telefon"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    autoComplete="tel"
                    className="border-gray-300 text-gray-900 block w-full rounded-md py-3 px-4 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    aria-describedby="phone-optional"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="purpose"
                  className="text-gray-900 block text-sm font-medium"
                >
                  Avocați
                </label>
                <div className="mt-1">
                  <select
                    name="purpose"
                    id="purpose"
                    value={purpose}
                    onChange={(e) => setPurpose(e.target.value)}
                    required
                    className="border-gray-300 text-gray-900 block w-full rounded-md py-3 px-4 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  >
                    <option value="General">General</option>
                    <option value="David Padurariu">
                      David Alexandru Pădurariu
                    </option>
                    <option value="Eduard Manolache">Eduard Manolache</option>
                    <option value="Anamaria Bita">Maria-Teodora Bița</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-2">
                <div className="flex justify-between">
                  <label
                    htmlFor="message"
                    className="text-gray-900 block text-sm font-medium"
                  >
                    Message
                  </label>
                  <span id="message-max" className="text-gray-500 text-sm">
                    Max. 500 characters
                  </span>
                </div>
                <div className="mt-1">
                  <textarea
                    required
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Introduceți mesajul"
                    rows={4}
                    className="border-gray-300 text-gray-900 block w-full rounded-md py-3 px-4 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    aria-describedby="message-max"
                  />
                </div>
              </div>
              <div className="sm:col-span-2 sm:flex sm:justify-end">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-primary-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 sm:w-auto"
                >
                  Trimite
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
