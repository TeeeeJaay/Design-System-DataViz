"use client";
import { Fragment, useState } from "react";
import LineChart from "./LineChart";
import { mydatatype } from "@/types";
import { ToggleSwitch } from "../components/ToggleSwitch";

const product = {
  name: "Linjediagram",
  type: "Tendenser",
  typeDescription: "Diagrammer som viser hvordan tid påvirker en variable",
  version: { name: "1.0", date: "22. april, 2024", datetime: "2024-22-04" },
  description:
    "Et linjediagram viser ændringer over tid i kvantitative værdier for forskellige kategorier, arrangeret langs en tidslig x-akse. Værdierne plottes som forbundne linjer, der fremhæver tendenser mellem datapunkter, og flere kategorier kan vises samtidigt med unikke linjer for hver.",
  highlights: [
    "- Er god til at vise tendeser som ændre sig over tid",
    "- For mange linjer kan gøre diagrammet rodet og vanskeligt at aflæse.",
    "- Tidsintervallet på x-aksen skal passe til det formål, diagrammet tjener",
  ],
};

const faqs = [
  {
    question:
      "Hvordan påvirker manglende data præsentationen i et linjediagram?",
    answer:
      "Manglende data kan skabe huller eller afskårne linjer i et linjediagram, hvilket kan forvirre seeren eller lede til misforståelser af dataenes tendenser. Det er vigtigt at håndtere manglende data korrekt, enten ved at interpolere værdierne for at skabe en kontinuerlig linje eller ved tydeligt at markere, hvor data mangler, så læseren er opmærksom på dette",
  },
  {
    question: "Hvordan påvirker outliers præsentationen i et linjediagram?",
    answer:
      "Outliers kan have en stor indvirkning på skalaen og den generelle fortolkning af et linjediagram. De kan trække grafens visuelle fokus væk fra de generelle trends og gøre det svært at se de underliggende mønstre. I sådanne tilfælde kan det være nyttigt at identificere og måske endda fjerne outliers, eller du kan bruge en alternativ skala, som logaritmisk skala, for bedre at kunne inkludere dem uden at forstyrre grafens læsbarhed.",
  },
  {
    question:
      "Hvordan anvender man flere linjer i et diagram uden at skabe forvirring?",
    answer:
      "Når du anvender flere linjer i et linjediagram, er nøglen til at undgå forvirring at bruge klare, distinkte farver eller linjetyper for hver linje. Sørg for, at hver linje kan identificeres entydigt gennem en legende. Overvej også muligheden for at gruppere relaterede linjer sammen eller at bruge interaktivitet til at lade brugerne vælge, hvilke linjer de ønsker at se, når diagrammet vises digitalt.",
  },
];

const relatedChart = [
  {
    id: 1,
    name: "Arealdiagram",
    category: "Trendenser",
    href: "https://d3-graph-gallery.com/graph/area_basic.html",
    imageSrc: "./areachart.png",
    imageAlt: "arealdiagram.",
  },
  {
    id: 2,
    name: "Stacked arealdiagram",
    category: "Trendenser",
    href: "https://d3-graph-gallery.com/graph/stackedarea_basic.html",
    imageSrc: "./stackedarea.png",
    imageAlt: "stacked arealdiagram",
  },
];
// Define the structure of the data object
interface Data {
  MCU: mydatatype[];
  DCEU: mydatatype[];
}

// Declare the data object with the correct TypeScript syntax
const data: Data = {
  MCU: [
    { name: "2008", value: 2 },
    { name: "2009", value: 0 },
    { name: "2010", value: 1 },
    { name: "2011", value: 2 },
    { name: "2012", value: 1 },
    { name: "2013", value: 2 },
    { name: "2014", value: 2 },
    { name: "2015", value: 2 },
    { name: "2016", value: 2 },
    { name: "2017", value: 3 },
    { name: "2018", value: 3 },
    { name: "2019", value: 3 },
    { name: "2020", value: 0 },
    { name: "2021", value: 4 },
    { name: "2022", value: 2 },
    { name: "2023", value: 3 },
  ],
  DCEU: [
    { name: "2008", value: 0 },
    { name: "2009", value: 0 },
    { name: "2010", value: 0 },
    { name: "2011", value: 0 },
    { name: "2012", value: 0 },
    { name: "2013", value: 1 },
    { name: "2014", value: 0 },
    { name: "2015", value: 0 },
    { name: "2016", value: 2 },
    { name: "2017", value: 2 },
    { name: "2018", value: 1 },
    { name: "2019", value: 1 },
    { name: "2020", value: 2 },
    { name: "2021", value: 1 },
    { name: "2022", value: 2 },
    { name: "2023", value: 2 },
  ],
};

export default function LinePage() {
  const [isGridlinesActive, setIsGridlinesActive] = useState(true);
  const [isCurvedlineActive, setIsCurvedlineActive] = useState(false);
  const [isDotsActive, setIsDotsActive] = useState(true);
  const [isHoverActive, setIsHoverActive] = useState(true);

  const toggleGridlines = () => {
    setIsGridlinesActive(!isGridlinesActive);
  };

  const toggleCurvelines = () => {
    setIsCurvedlineActive(!isCurvedlineActive);
  };
  const toggleDots = () => {
    setIsDotsActive(!isDotsActive);
  };

  const toggleHover = () => {
    setIsHoverActive(!isHoverActive);
  };

  return (
    <main className="mx-auto px-4 pb-24 pt-14 sm:px-6 sm:pb-32 sm:pt-16 lg:max-w-7xl lg:px-8">
      {/* Product */}
      <div className="lg:grid lg:grid-cols-7 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16 ">
        {/* Product image */}
        <div className=" col-span-4 row-span-2">
          <div className=" h-full flex items-center justify-center overflow-hidden rounded-lg shadow border-2 p-10">
            <LineChart
              data={data}
              {...(isHoverActive ? { withHover: true } : {})}
              {...(isGridlinesActive ? { withGridlines: true } : {})}
              {...(isCurvedlineActive ? { withCurveLine: true } : {})}
              {...(isDotsActive ? { withDots: true } : {})}
            />
          </div>
          <div className="flex w-full justify-center gap-4 p-2">
            <div className="flex items-center gap-2">
              Horisontale Grid?
              <ToggleSwitch
                onChange={toggleGridlines}
                enabled={isGridlinesActive}
              />
            </div>
            <div className="flex items-center gap-2">
              Kurvet linje?
              <ToggleSwitch
                onChange={toggleCurvelines}
                enabled={isCurvedlineActive}
              />
            </div>
            <div className="flex items-center gap-2">
              Med cirkler?
              <ToggleSwitch onChange={toggleDots} enabled={isDotsActive} />
            </div>
            <div className="flex items-center gap-2">
              Med hover?{" "}
              <ToggleSwitch
                onChange={toggleHover}
                enabled={isHoverActive}
                disabled={!isDotsActive}
              />
            </div>
          </div>
        </div>

        {/* Product details */}
        <div className="mx-auto sm:mt-16 lg:mt-0 lg:max-w-none col-span-3">
          <div className="flex flex-col">
            <div className="mt-4">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {product.name}
              </h1>
              <h1
                className="text-gray-700 cursor-help"
                title={product.typeDescription}
              >
                {product.type}
              </h1>
              <p className="mt-2 text-sm text-gray-500">
                Version {product.version.name} (Updated{" "}
                <time dateTime={product.version.datetime}>
                  {product.version.date}
                </time>
                )
              </p>
            </div>
            <p className="mt-6 text-gray-500">{product.description}</p>
          </div>
          <div className="border-t border-gray-200 pt-5 mt-5">
            <h3 className="text-sm font-medium text-gray-900">Godt at huske</h3>
            <div className="prose prose-sm mt-4 text-gray-500">
              <ul role="list">
                {product.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
          <a
            target="blank"
            href="https://github.com/TeeeeJaay/Design-System-DataViz/blob/main/src/app/line-chart/vanilla/line-chart.js"
            type="button"
            className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-violet-600 px-8 py-3 text-base font-medium text-white hover:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
          >
            Gå til ren D3.js fil
          </a>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-200 pt-10">
        <h3 className="">Spørgsmål og Svar</h3>

        <dl>
          {faqs.map((faq) => (
            <Fragment key={faq.question}>
              <dt className="mt-5 font-medium text-gray-900">{faq.question}</dt>
              <dd className="prose prose-sm mt-2 max-w-none text-gray-500">
                <p>{faq.answer}</p>
              </dd>
            </Fragment>
          ))}
        </dl>
      </div>

      {/* Related products */}
      <div className="mx-auto col-span-4 mt-20">
        <div className="flex items-center justify-between space-x-4">
          <h2 className="text-lg font-medium text-gray-900">
            Lignede visualiseringer
          </h2>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-10 w-fit sm:grid-cols-4 ">
          {relatedChart.map((product) => (
            <a
              target="_blank"
              href={product.href}
              key={product.id}
              className="group hover:bg-violet-100 w-36 p-2 rounded-lg"
            >
              <div className="aspect-square h-32 overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="object-cover object-center"
                />
                <div
                  className="flex items-end p-4 opacity-0 group-hover:opacity-100"
                  aria-hidden="true"
                >
                  <div className="w-full rounded-md bg-white bg-opacity-75 px-4 py-2 text-center text-sm font-medium text-gray-900 backdrop-blur backdrop-filter">
                    View Product
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between space-x-8 text-base font-medium text-gray-900">
                <h3>{product.name}</h3>
              </div>
              <p className="mt-1 text-sm text-gray-500">{product.category}</p>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
