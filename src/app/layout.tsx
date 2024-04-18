/* eslint-disable @next/next/no-img-element */
"use client";

import "./globals.css";

import { useState } from "react";
import { Dialog } from "@headlessui/react";

const navigation = [
  { name: "Cirkel diagram", href: "pie-chart" },
  { name: "Søjle diagram", href: "bar-chart" },
  { name: "Linje diagram", href: "line-chart" },
  { name: "Farver", href: "colors" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="bg-slate-100 shadow-lg">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="./" className="-m-1.5 p-1.5">
            <span className="sr-only">BiQ</span>
            <img className="h-8 w-auto" src="./biq-logo.png" alt="" />
          </a>
        </div>
        <div className="flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
