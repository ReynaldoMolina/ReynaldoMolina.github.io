import jahairastore from "/src/assets/images/store.png";
import supraural from "/src/assets/images/supraural.png";
import moneycounter from "/src/assets/images/moneycounter.png";
import urlshortener from "/src/assets/images/url-shortener.png";
import { techs } from "./techs";

export const projects = [
  {
    name: "Jahaira Store",
    bgColor: "bg-blue-300",
    titleColor: "text-blue-400 dark:text-blue-300",
    borderColor: "border-b-blue-300 dark:border-b-blue-300",
    thumbnail: jahairastore.src,
    techs: [techs.nextjs, techs.react, techs.tailwind, techs.postgresql],
    description:
      "Handles clients, products, categories, providers, orders, payments and invoices. Powered by Next.js and PostgreSQL.",
    codelink: "https://github.com/ReynaldoMolina/jahairastore-demo",
    previewlink: "https://jahairastore-demo.vercel.app/",
  },
  {
    name: "SuprAural",
    bgColor: "bg-red-300",
    titleColor: "text-red-400 dark:text-red-300",
    borderColor: "border-b-red-300 dark:border-b-red-300",
    thumbnail: supraural.src,
    techs: [techs.html, techs.css, techs.javascript],
    description:
      "A modernized and responsive redesign of an existing music studio website. Enhances the original design with improved styling and consistency while maintaining its essence.",
    codelink: "https://github.com/ReynaldoMolina/musicstudio",
    previewlink: "https://reynaldomolina.github.io/musicstudio",
  },
  {
    name: "Shortly",
    bgColor: "bg-emerald-300",
    titleColor: "text-emerald-400 dark:text-emerald-300",
    borderColor: "border-b-emerald-300 dark:border-b-emerald-300",
    thumbnail: urlshortener.src,
    techs: [
      techs.astro,
      techs.react,
      techs.tailwind,
      techs.html,
      techs.css,
      techs.javascript,
    ],
    description:
      "A fast and responsive URL shortener built with Astro, React, and Tailwind. Consumes a personal API (Express, PostgreSQL) to shorten the URLs.",
    codelink: "https://github.com/ReynaldoMolina/url-shortener",
    previewlink: "https://shortlyrm.vercel.app/",
  },
  {
    name: "Currency Counter",
    bgColor: "bg-amber-300",
    titleColor: "text-amber-400 dark:text-amber-300",
    borderColor: "border-b-amber-300 dark:border-b-amber-300",
    thumbnail: moneycounter.src,
    techs: [
      techs.astro,
      techs.react,
      techs.tailwind,
      techs.html,
      techs.css,
      techs.javascript,
    ],
    description:
      "A simple yet practical tool for counting money, supporting both Nicaraguan Córdobas and US Dollars. It helps users quickly calculate totals in mixed currencies.",
    codelink:
      "https://github.com/ReynaldoMolina/ReynaldoMolina.github.io/tree/main/src/moneycounter",
    previewlink: "/moneycounter",
  },
];