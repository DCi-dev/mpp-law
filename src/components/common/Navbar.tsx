import { Disclosure } from "@headlessui/react";
import { Bars3Icon, PhoneIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

export default function Example() {
  return (
    <Disclosure as="nav" className="fixed z-50 w-screen bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-primary-200 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
                    <span className="sr-only">Deschide Meniul</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-shrink-0 items-center">
                  <Image
                    className="block h-8 w-auto lg:hidden"
                    src="/logo.svg"
                    alt="MPP Law"
                    width={32}
                    height={32}
                  />
                  <Image
                    className="hidden h-8 w-auto lg:block"
                    src="/logo.svg"
                    alt="MPP Law"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="hidden md:ml-6 md:flex md:space-x-8">
                  <Link
                    href="/"
                    className="inline-flex items-center border-b-2 border-primary-500 px-1 pt-1 text-sm font-medium text-black"
                  >
                    Acasă
                  </Link>
                  <a
                    href="/echipa"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-black hover:border-black hover:text-black"
                  >
                    Echipa noastră
                  </a>
                  <a
                    href="/domenii-de-practica"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-black hover:border-black hover:text-black"
                  >
                    Domenii de practică
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-black hover:border-black hover:text-black"
                  >
                    Contact
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <button
                    type="button"
                    className="relative inline-flex items-center gap-2 rounded-md border border-transparent bg-primary-500 px-4 py-2 text-sm font-medium text-black shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                  >
                    <PhoneIcon className="h-5 w-5" aria-hidden="true" />
                    <span>Sună-ne</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 pt-2 pb-3">
              <Disclosure.Button
                as="a"
                href="/"
                className="block border-l-4 border-primary-500 bg-primary-100 py-2 pl-3 pr-4 text-base font-medium text-black sm:pl-5 sm:pr-6"
              >
                Acasă
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/echipa"
                className="hover:bg-blackhover:text-black block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-black hover:border-black sm:pl-5 sm:pr-6"
              >
                Echipa noastră
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/domenii-de-practica"
                className="hover:bg-blackhover:text-black block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-black hover:border-black sm:pl-5 sm:pr-6"
              >
                Domenii de practică
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/contact"
                className="hover:bg-blackhover:text-black block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-black hover:border-black sm:pl-5 sm:pr-6"
              >
                Contact
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
