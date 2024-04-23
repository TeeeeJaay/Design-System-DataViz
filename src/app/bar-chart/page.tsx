"use client";
import { Fragment, useState } from "react";
import PieChart from "./BarChart";
import BarChart from "./BarChart";
import { ToggleSwitch } from "../components/ToggleSwitch";

const product = {
  name: "Søjle diagram",
  version: { name: "1.0", date: "22 april, 2024", datetime: "2024-22-04" },
  type: "Sammenligning",
  typeDescription:
    "Diagrammer som viser forholdet mellem en variable og anden.",
  description:
    "Et søjlediagram eller et pindediagram er et diagram, hvor man gennem højden på søjlerne illustrerer de forskellige varibles værdi. Det mest brugte diagram og også det nemmeste at afkode. ",
  highlights: [
    "- Bruges til at sammenligne variable med en numeral værdi",
    "- Kan sorteres på en meningsfuld måde, eks, høj-lav, a-b etc.",
    "- Er god til at vise forskelle på en måde som er nemt at afkode",
  ],
};

const faqs = [
  {
    question: "Hvad er forskellen på et søjlediagram og et histogram?",
    answer:
      "Selvom de kan se ens ud, repræsenterer et søjlediagram kategoriske data, hvor hver søjle står for en separat kategori, mens et histogram bruges til at repræsentere frekvensfordelinger af kontinuerlige data. I et histogram rører søjlerne ved hinanden, hvilket indikerer rækkevidden af data inden for hvert interval.",
  },
  {
    question:
      "Hvilken type data er mest velegnet til at blive præsenteret i et søjlediagram?",
    answer:
      "Søjlediagrammer er mest velegnede til nominelle eller ordinale kategorier, hvor der er klare adskillelser mellem hver kategori. Eksempler på sådanne data kunne være salgstal fordelt på forskellige produkttyper, antal ansatte i forskellige afdelinger, eller resultaterne af en meningsmåling fordelt på svarmuligheder.",
  },
  {
    question:
      "Hvordan kan man undgå misvisende repræsentationer i søjlediagrammer?",
    answer:
      " For at undgå misvisende repræsentationer i søjlediagrammer, bør man sikre, at y-aksen altid starter ved 0. Dette forhindrer overdreven visuel forstærkning af forskelle mellem søjlerne. Desuden bør man undgå at sammenpresse eller udvide akseskalaerne unødvendigt, da dette kan skabe et fejlagtigt indtryk af dataene.",
  },
];

const relatedChart = [
  {
    id: 1,
    name: "Grupperet søjle diagram",
    category: "Sammenligning",
    href: "https://d3-graph-gallery.com/graph/barplot_grouped_basicWide.html",
    imageSrc: "./clusteredbarchart.png",
    imageAlt: "Grupperet søjle diagram.",
  },
  {
    id: 2,
    name: "Boblediagram",
    category: "Sammenligning",
    href: "https://d3-graph-gallery.com/graph/bubble_basic.html",
    imageSrc: "./bubblechart.png",
    imageAlt: "Boblediagram",
  },
  {
    id: 3,
    name: "Polardiagram",
    category: "Sammenligning",
    href: "https://observablehq.com/@lytol/polar-area-chart",
    imageSrc: "./polarchart.png",
    imageAlt: "Polardiagram",
  },
  // More products...
];

type mydatatype = { name: string; value: number };
const data: mydatatype[] = [
  { name: "Tony", value: 9 },
  { name: "Peter", value: 6 },
  { name: "Pietro", value: 1 },
  { name: "Steve", value: 7 },
  { name: "Thor", value: 8 },
];

export default function BarPage() {
  const [isGridlinesActive, setIsGridlinesActive] = useState(true);
  const [isHoverActive, setIsHoverActive] = useState(true);
  const [isRankedActive, setIsRankedActive] = useState(false);

  const toggleGridlines = () => {
    setIsGridlinesActive(!isGridlinesActive);
  };

  const toggleHover = () => {
    setIsHoverActive(!isHoverActive);
  };

  const toggleRanked = () => {
    setIsRankedActive(!isRankedActive);
  };
  return (
    <main className="mx-auto px-4 pb-24 pt-14 sm:px-6 sm:pb-32 sm:pt-16 lg:max-w-7xl lg:px-8">
      {/* Product */}
      <div className="lg:grid lg:grid-cols-7 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16 ">
        {/* Product image */}
        <div className=" col-span-4 row-span-2">
          <div className=" h-full flex items-center justify-center overflow-hidden rounded-lg shadow border-2 p-10">
            <BarChart
              data={data}
              {...(isGridlinesActive ? { withGridlines: true } : {})}
              {...(isHoverActive ? { withHover: true } : {})}
              {...(isRankedActive ? { ranked: true } : {})}
            ></BarChart>
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
              Highlight ved hover
              <ToggleSwitch onChange={toggleHover} enabled={isHoverActive} />
            </div>
            <div className="flex items-center gap-2">
              Rangeret rækkefølge
              <ToggleSwitch onChange={toggleRanked} enabled={isRankedActive} />
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
          <button
            type="button"
            className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-violet-700 px-8 py-3 text-base font-medium text-white hover:bg-violet-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
          >
            Gå til ren D3.js fil
          </button>
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
