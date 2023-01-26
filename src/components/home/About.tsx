import {
  BoltIcon,
  ChatBubbleBottomCenterTextIcon,
  GlobeAltIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Prezenți în toată țara",
    description:
      "Indiferent de locul în care vă aflați, noi suntem aici pentru a vă oferi asistență juridică de înaltă calitate.",
    icon: GlobeAltIcon,
  },
  {
    name: "Pasiune",
    description:
      "Credem că profesia de avocat este o profesie nobilă şi că trebuie practicată ca atare pentru a nu fi deturnată de la rolul ei social, credem că lucrul cel mai de preţ în relaţia dintre avocat şi client este încrederea reciprocă şi confidenţialitatea, iar avocatul urmează să îşi desfăşoare activitatea numai cu respectarea strictă a deontologiei profesionale, a legii şi strict în interesul clientului.",
    icon: ScaleIcon,
  },
  {
    name: "Echipă tânără și dinamică",
    description:
      "O echipă dinamică, consolidată în timp, formată din profesionişti cu experienţă în litigii şi consultanţă, pregătită pentru a găsi soluţia juridică optimă, adaptată necesităţii clienţilor noştri.",
    icon: BoltIcon,
  },
  {
    name: "Comunicare și îndrumare",
    description:
      "Am format o echipă unită ai căror membri au idealuri comune, pentru a dezvolta relaţii durabile în timp cu clienţii, bazate pe încredere reciprocă şi onestitate, urmărind dezvoltarea societăţii noastre împreună cu dezvoltarea clienţilor săi.",
    icon: ChatBubbleBottomCenterTextIcon,
  },
];

export default function About() {
  return (
    <div className="mb-12 bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="text-lg font-semibold text-black">
            Societatea Civilă Profesională de Avocați
          </p>
          <h2 className="text-gray-900 mt-2 text-3xl font-bold leading-8 tracking-tight sm:text-4xl">
            Manolache, Pădurariu & Partners
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl text-xl lg:mx-auto">
            Pe baza experienţei acumulate, cu imaginaţie şi dăruire, suntem
            mândri să oferim servicii avocaţiale personalizate, adaptate
            condiţiilor actuale.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-primary-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="text-gray-900 ml-16 text-lg font-medium leading-6">
                    {feature.name}
                  </p>
                </dt>
                <dd className="text-gray-500 mt-2 ml-16 text-base">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
