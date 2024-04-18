"use client";
import { Fragment, useState } from "react";
import PieChart from "./PieChart";
import { ToggleSwitch } from "../components/ToggleSwitch";

const product = {
  name: "Circle Diagram",
  version: { name: "1.0", date: "4 Marts, 2024", datetime: "2021-06-05" },
  description:
    "Et lagkagediagram er et statistisk diagram der gengiver relative størrelser grafisk i en cirkel. Hver størrelse repræsenteres af et cirkeludsnit hvis areal angiver størrelsen proportionalt. Lagekagediagrammer kritiseres ofte, med rette, for at være svære at afkode.",
  highlights: [
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
    question: "What format are these icons?",
    answer:
      "The icons are in SVG (Scalable Vector Graphic) format. They can be imported into your design tool of choice and used directly in code.",
  },
  {
    question: "Can I use the icons at different sizes?",
    answer:
      "Yes. The icons are drawn on a 24 x 24 pixel grid, but the icons can be scaled to different sizes as needed. We don't recommend going smaller than 20 x 20 or larger than 64 x 64 to retain legibility and visual balance.",
  },
  // More FAQs...
];

const relatedChart = [
  {
    id: 1,
    name: "Histogram",
    category: "Fordeling",
    href: "#",
    imageSrc:
      "https://media.geeksforgeeks.org/wp-content/uploads/20231004173705/Histogram.webp",
    imageAlt: "Histogram.",
  },
  // More products...
];

const data = [
  { name: "Mark", value: 0.25 },
  { name: "Robert", value: 0.25 },
  { name: "Emily", value: 0.125 },
  { name: "Marion", value: 0.125 },
  { name: "Nicolas", value: 0.25 },
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
              percentageLabel
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

              <p className="mt-2 text-sm text-gray-500">
                Version {product.version.name} (Updated{" "}
                <time dateTime={product.version.datetime}>
                  {product.version.date}
                </time>
                )
              </p>
            </div>
            <p className="mt-6 text-gray-500">{product.description}</p>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
              <button
                type="button"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                Kopier ren D3.js
              </button>
              <button
                type="button"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-50 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                Se kode
              </button>
            </div>
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
        <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10">
          {relatedChart.map((product) => (
            <a
              href={product.href}
              key={product.id}
              className="group hover:bg-blue-100 w-fit p-2 rounded-lg"
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
