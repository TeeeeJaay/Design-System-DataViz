"use client";
import { Fragment, useState } from "react";
import PieChart from "./PieChart";
import { ToggleSwitch } from "../components/ToggleSwitch";

const product = {
  name: "Cirkel Diagram",
  type: "Del-til-helhed",
  typeDescription: "Diagrammer som viser forholdet mellem en del og helheden.",
  version: { name: "1.0", date: "22 April, 2024", datetime: "2024-22-04" },
  description:
    "Et cirkel diagram er et statistisk diagram viser en cirkel. Hver størrelse repræsenteres af et cirkeludsnit hvis areal angiver den enkelte varibles del af helheden.",
  highlights: [
    "- Kritiseret for at være svær at afkode, brug derfor med omhu",
    "- Bruges til at sammenligne variable med en numeral værdi, omregnet til procent",
    "- Bør ikke bruges ved mere end 5 variable",
    "- Er god til at vise store forskelle, (5% vs. 25%), men ikke mere diskrete (10% og 15%)",
  ],
  imageSrc:
    "https://static.vecteezy.com/system/resources/thumbnails/007/515/936/small/business-circle-timeline-infographic-icons-designed-for-abstract-background-template-milestone-element-modern-diagram-process-technology-digital-marketing-data-presentation-chart-vector.jpg",
  imageAlt: "Et cirkel diagram.",
};

const faqs = [
  {
    question: "Hvad er ulemperne ved at bruge cirkeldiagrammer?",
    answer:
      "En af ulemperne ved cirkeldiagrammer er, at det kan være svært at aflæse præcise forskelle mellem sektorer, især hvis de er næsten lige store. Derudover kan det blive uoverskueligt, hvis der er for mange kategorier, eller hvis nogle kategorier er meget små, da det kan gøre det svært at skelne mellem dem.",
  },
  {
    question: "Hvilke typer data er bedst repræsenteret med et cirkeldiagram?",
    answer:
      "Cirkeldiagrammer er mest effektive, når du har et begrænset antal kategorier (typisk mindre end syv), og hver kategori repræsenterer en del af en helhed, som f.eks. markedsandele, befolkningsfordeling efter alder eller stemmefordeling i et valg.",
  },
  // More FAQs...
];

const relatedChart = [
  {
    id: 1,
    name: "Treemap",
    type: "Del-til-helhed",
    href: "https://d3-graph-gallery.com/treemap.html",
    imageSrc: "./treemap.png",
    imageAlt: "tree map",
  },
  {
    id: 2,
    name: "Waffle chart",
    type: "Del-til-helhed",
    href: "https://observablehq.com/@analyzer2004/waffle-chart",
    imageSrc: "./wafflechart.png",
    imageAlt: "waffle chart",
  },
  {
    id: 3,
    name: "Stacked bar chart",
    type: "Del-til-helhed og Sammenligning",
    href: "https://d3-graph-gallery.com/graph/barplot_stacked_basicWide.html",
    imageSrc: "./stackedbar.png",
    imageAlt: "stackedbar chart",
  },
  // More products...
];

type mydatatype = { name: string; value: number };

const data: mydatatype[] = [
  { name: "Fase 1", value: 6 },
  { name: "Fase 2", value: 6 },
  { name: "Fase 3", value: 11 },
  { name: "Fase 4", value: 15 },
];

export default function PiePage() {
  const [isLegendActive, setIsLegendActive] = useState(true);
  const [isLabelsActive, setIsLabelsActive] = useState(false);
  const [isHoverActive, setIsHoverActive] = useState(true);

  const toggleLegend = () => {
    setIsLegendActive(!isLegendActive);
  };

  const toggleLabels = () => {
    setIsLabelsActive(!isLabelsActive);
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
          <div className=" h-full flex flex-col items-center justify-center overflow-hidden rounded-lg shadow border-2">
            <PieChart
              width={500}
              height={500}
              data={data}
              {...(isLabelsActive ? { withLabels: true } : {})}
              {...(isLegendActive ? { withLegend: true } : {})}
              {...(isHoverActive ? { withHover: true } : {})}
            ></PieChart>
          </div>
          <div className="flex w-full justify-center gap-4 p-2">
            <div className="flex items-center gap-2">
              Legend?
              <ToggleSwitch onChange={toggleLegend} enabled={isLegendActive} />
            </div>
            <div className="flex items-center gap-2">
              Labels?
              <ToggleSwitch onChange={toggleLabels} enabled={isLabelsActive} />
            </div>
            <div className="flex items-center gap-2">
              Highlight ved hover
              <ToggleSwitch onChange={toggleHover} enabled={isHoverActive} />
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
            className="flex mt-10 w-full items-center justify-center rounded-md border border-transparent bg-violet-700 px-8 py-3 text-base font-medium text-white hover:bg-violet-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
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
                ></div>
              </div>
              <div className="mt-4 flex items-center justify-between space-x-8 text-base font-medium text-gray-900">
                <h3>{product.name}</h3>
              </div>
              <p className="mt-1 text-sm text-gray-500">{product.type}</p>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
