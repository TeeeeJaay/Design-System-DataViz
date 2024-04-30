"use client";
import { useState } from "react";
import { stringify } from "querystring";
import { ClipboardDocumentCheckIcon } from "@heroicons/react/24/outline";

const seqFiles = [
  {
    title: "Blå sekventielle -Enkelt hue",
    code: 'const BlueColors = d3.scaleLinear().domain([1,12]).range([{"#F7FBFF", "#072C57"])',
    description: "",
    colorList: {
      "#f7fbff": "bg-[#f7fbff]",
      "#e3eef9": "bg-[#e3eef9]",
      "#cfe1f2": "bg-[#cfe1f2]",
      "#b5d4e9": "bg-[#b5d4e9]",
      "#93c3df": "bg-[#93c3df]",
      "#6daed5": "bg-[#6daed5]",
      "#4b97c9": "bg-[#4b97c9] text-white",
      "#2f7ebc": "bg-[#2f7ebc] text-white",
      "#1864aa": "bg-[#1864aa] text-white",
      "#0a4a90": "bg-[#0a4a90] text-white",
      "#08306b": "bg-[#08306b] text-white",
      "#072c57": "bg-[#072c57] text-white",
    },
  },
  {
    title: "Sequential-Enkelt hue",
    code: 'const RedColors = d3.scaleLinear().domain([1,12]) .range(["#FFF5F0", "#56000D"])',

    description: "",
    colorList: {
      "#fff5f0": "bg-[#fff5f0]",
      "#fee3d6": "bg-[#fee3d6]",
      "#fdc9b4": "bg-[#fdc9b4]",
      "#fcaa8e": "bg-[#fcaa8e]",
      "#fc8a6b": "bg-[#fc8a6b]",
      "#f9694c": "bg-[#f9694c]",
      "#ef4533": "bg-[#ef4533] text-white",
      "#d92723": "bg-[#d92723] text-white",
      "#bb151a": "bg-[#bb151a] text-white",
      "#970b13": "bg-[#970b13] text-white",
      "#67000d": "bg-[#67000d] text-white",
      "#56000D": "bg-[#56000D] text-white",
    },
  },
];

const divFiles = [
  {
    title: "Grøn til Rød -Divergerende",
    code: "const GreenToRed = d3.scaleSequential().interpolator(d3.interpolateRdYlGn).domain([11, 0]);",
    description:
      'Bruges når der er noget som kan kategoriseres som "godt" og "dårligt" ',
    colorList: {
      "#006837": "bg-[#006837]",
      "#1e924d": "bg-[#1e924d]",
      "#57b55e": "bg-[#57b55e]",
      "#94d16a": "bg-[#94d16a]",
      "#c6e780": "bg-[#c6e780]",
      "#ecf6a5": "bg-[#ecf6a5]",
      "#fdefa5": "bg-[#fdefa5]",
      "#fecd7c": "bg-[#fecd7c]",
      "#fa9b5a": "bg-[#fa9b5a]",
      "#ed623e": "bg-[#ed623e]",
      "#d02d2a": "bg-[#d02d2a]",
      "#a50026": "bg-[#a50026]",
    },
  },
  {
    title: "Blå til Rød",
    code: "const BlueToRed = d3.scaleSequential().interpolator(d3.interpolateRdBu).domain([11, 0]);",
    description:
      'Bruges til at vise noget som har et naturligt midtpunkt, fx temperatur "koldt-varmt" ',
    colorList: {
      "#053061": "bg-[#053061] text-white",
      "#1f609f": "bg-[#1f609f] text-white",
      "#418bbf": "bg-[#418bbf]",
      "#7cb6d6": "bg-[#7cb6d6]",
      "#b9d9e9": "bg-[#b9d9e9]",
      "#e4edf2": "bg-[#e4edf2]",
      "#f9e9df": "bg-[#f9e9df]",
      "#f9c6ad": "bg-[#f9c6ad]",
      "#ea9175": "bg-[#ea9175]",
      "#cf5349": "bg-[#cf5349]",
      "#a61c2d": "bg-[#a61c2d] text-white",
      "#67001f": "bg-[#67001f] text-white",
    },
  },
  {
    title: "Lilla til Orange",
    code: "const PurpleToYellow = d3.scaleSequential().interpolator(d3.interpolatePuOr).domain([0, 11])",
    description:
      'Bruges til at vise noget som har et naturligt midtpunkt, men hvor der ikke er en naturlig "god/dårlig " ',
    colorList: {
      "#2d004b": "bg-[#2d004b] text-white",
      "#51287f": "bg-[#51287f] text-white",
      "#7963a6": "bg-[#7963a6]",
      "#a49bc7": "bg-[#a49bc7]",
      "#cac8e1": "bg-[#cac8e1]",
      "#e8e8ef": "bg-[#e8e8ef]",
      "#f9ebd7": "bg-[#f9ebd7]",
      "#fdd197": "bg-[#fdd197]",
      "#f3a84e": "bg-[#f3a84e]",
      "#d67b17": "bg-[#d67b17]",
      "#ad5708": "bg-[#ad5708] text-white",
      "#7f3b08": "bg-[#7f3b08] text-white",
    },
  },
];

const catFiles = [
  {
    title: "schemeSet2",
    code: "const colorScale = d3.scaleOrdinal(d3.schemeSet2) ",
    description: "Bruges til katagorisk data med max 8 forskellige kategorier",
    colorList: {
      "#66c2a5": "bg-[#66c2a5]",
      "#fc8d62": "bg-[#fc8d62]",
      "#8da0cb": "bg-[#8da0cb]",
      "#e78ac3": "bg-[#e78ac3]",
      "#a6d854": "bg-[#a6d854]",
      "#ffd92f": "bg-[#ffd92f]",
      "#e5c494": "bg-[#e5c494]",
      "#b3b3b3": "bg-[#b3b3b3]",
    },
  },
  {
    title: "schemeSet3",
    code: "const colorScale = d3.scaleOrdinal(d3.schemeSet3) ",
    description:
      "Bruges til katagorisk data med max 12 forskellige kategorier. Har du mere end 12 kategorier bør du revurdere din data",
    colorList: {
      "#8dd3c7": "bg-[#8dd3c7]",
      "#ffffb3": "bg-[#ffffb3]",
      "#bebada": "bg-[#bebada]",
      "#fb8072": "bg-[#fb8072]",
      "#80b1d3": "bg-[#80b1d3]",
      "#fdb462": "bg-[#fdb462]",
      "#b3de69": "bg-[#b3de69]",
      "#fccde5": "bg-[#fccde5]",
      "#d9d9d9": "bg-[#d9d9d9]",
      "#bc80bd": "bg-[#bc80bd]",
      "#ccebc5": "bg-[#ccebc5]",
      "#ffed6f": "bg-[#ffed6f]",
    },
  },
];

export default function ColorPage() {
  const copyToClipboard = async (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <main className="p-10 flex flex-col gap-10 ">
      <div className="pb-10">
        <h1 className="text-2xl font-medium">Sekventielle (naturlig orden) </h1>
        <h4 className="text-sm pb-3">
          Bruges når der en naturlig orden i data (ordinal, diskret eller
          kontinuerligt data). Der{" "}
          <span className="font-bold underline"> er ikke</span> et "middelpunkt"
          for data
        </h4>
        <ul
          role="list"
          className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
        >
          {seqFiles.map((file, index) => (
            <li key={index} className="relative h-fit">
              <div className="group border block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                <div className="grid grid-cols-3">
                  {Object.entries(file.colorList).map(
                    ([color, className], index) => (
                      <div key={index} className={`p-4 ${className}`}>
                        {color}
                      </div>
                    )
                  )}
                </div>
              </div>
              <p className="mt-2 block truncate text-sm font-medium text-gray-900">
                {file.title}
              </p>
              <p className="pointer-events-none block text-sm font-medium text-gray-500 h-full pb-5">
                {file.description}
              </p>
              <div className="bg-black text-white font-mono p-4 pb-8 text-xs rounded-sm h-full">
                <p>{file.code}</p>
                <ClipboardDocumentCheckIcon
                  onClick={() => copyToClipboard(file.code)}
                  className="h-8 absolute bottom-1 right-0.5 active:scale-90  active:text-slate-200 transition-all duration-100"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col">
        <h1 className="text-2xl font-medium">
          Divergent (naturlig orden, med et midtpunkt){" "}
        </h1>
        <h4 className="text-sm pb-3">
          Bruges når der <span className="font-bold underline">er</span> et
          "middelpunkt" for data. Dette kan være en gennemsnit,
          nulpunktet(positive og negative værdier) eller et prædifinere tærskel
          (eks. fattigdomsgrænse)
        </h4>

        <ul
          role="list"
          className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
        >
          {divFiles.map((file, index) => (
            <li key={index} className=" h-fit">
              <div className="group border block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                <div className="grid grid-cols-3">
                  {Object.entries(file.colorList).map(
                    ([color, className], index) => (
                      <div key={index} className={`p-4 ${className}`}>
                        {color}
                      </div>
                    )
                  )}
                </div>
              </div>
              <p className="mt-2 block truncate text-sm font-medium text-gray-900">
                {file.title}
              </p>
              <p className="pointer-events-none block text-sm font-medium text-gray-500 h-full pb-5">
                {file.description}
              </p>
              <div className="bg-black text-white font-mono p-4 pb-8 text-xs rounded-sm h-fit self-end relative">
                <p>{file.code}</p>
                <ClipboardDocumentCheckIcon
                  onClick={() => copyToClipboard(file.code)}
                  className="h-8 absolute bottom-1 right-0.5 active:scale-90  active:text-slate-200 transition-all duration-100"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h1 className="text-2xl font-medium">
          Katagorisk (Ingen naturlig orden){" "}
        </h1>
        <h4 className="text-sm pb-3">
          Bruges når data er katagisk og der ikke er nogle naturlig sammenhæng
          mellem variable. Dette kan fx. være personer, lande, adresse og lign.
        </h4>

        <ul
          role="list"
          className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
        >
          {catFiles.map((file, index) => (
            <li key={index} className="relative h-fit">
              <div className="group border block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                <div className="grid grid-cols-3 min-h-80">
                  {Object.entries(file.colorList).map(
                    ([color, className], index) => (
                      <div key={index} className={`p-4 ${className}`}>
                        {color}
                      </div>
                    )
                  )}
                </div>
              </div>
              <p className="mt-2 block truncate text-sm font-medium text-gray-900">
                {file.title}
              </p>
              <p className="pointer-events-none block text-sm font-medium text-gray-500 h-full pb-5">
                {file.description}
              </p>
              <div className="bg-black text-white font-mono p-4 pb-8 text-xs rounded-sm h-full">
                <p>{file.code}</p>
                <ClipboardDocumentCheckIcon
                  onClick={() => copyToClipboard(file.code)}
                  className="h-8 absolute bottom-1 right-0.5 active:scale-90  active:text-slate-200 transition-all duration-100"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
