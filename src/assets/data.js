import jahairastore from '../assets/store.png';
import supraural from '../assets/supraural.png';
import moneycounter from '../assets/moneycounter.png';
import urlshortener from '../assets/url-shortener.png';
import EmailIcon from '../icons/email.svg?react';
import LinkedInIcon from '../icons/linkedin.svg?react';
import GitHubIcon from '../icons/github-circle.svg?react';

export const headerLinks = [
  {
    name: 'About me',
    link: '/#aboutme'
  },
  {
    name: 'Skills',
    link: '/#skills'
  },
  {
    name: 'Projects',
    link: '/#projects'
  },
  {
    name: 'Experience',
    link: '/#experience'
  },
];

export const techs = {
  nextjs: {
    name: 'Next.js',
    icon: 'nextjs',
  },
  html: {
    name: 'HTML',
    icon: 'html5',
  },
  javascript: {
    name: 'JavaScript',
    icon: 'javascript',
  },
  css: {
    name: 'CSS',
    icon: 'css3',
  },
  react: {
    name: 'React',
    icon: 'react',
  },
  nodejs: {
    name: 'Node.js',
    icon: 'nodejs',
  },
  express: {
    name: 'Express.js',
    icon: 'express',
  },
  postgresql: {
    name: 'PostgreSQL',
    icon: 'postgresql',
  },
  tailwind: {
    name: 'Tailwind',
    icon: 'tailwind',
  },
  astro: {
    name: 'Astro',
    icon: 'astro',
  },
};

export const projects = [
  {
    name: 'Jahaira Store',
    bgColor: 'bg-blue-300',
    titleColor: 'text-blue-400 dark:text-blue-300',
    borderColor: 'border-b-blue-300 dark:border-b-blue-300',
    thumbnail: jahairastore.src,
    techs: [techs.nextjs, techs.react, techs.tailwind, techs.postgresql],
    description: 'Handles clients, products, categories, providers, orders, payments and invoices. Powered by Next.js and PostgreSQL.',
    codelink: 'https://github.com/ReynaldoMolina/jahairastore-demo',
    previewlink: 'https://jahairastore-demo.vercel.app/'
  },
  {
    name: 'SuprAural',
    bgColor: 'bg-red-300',
    titleColor: 'text-red-400 dark:text-red-300',
    borderColor: 'border-b-red-300 dark:border-b-red-300',
    thumbnail: supraural.src,
    techs: [techs.html, techs.css, techs.javascript],
    description: 'A modernized and responsive redesign of an existing music studio website. Enhances the original design with improved styling and consistency while maintaining its essence.',
    codelink: 'https://github.com/ReynaldoMolina/musicstudio',
    previewlink: 'https://reynaldomolina.github.io/musicstudio'
  },
  {
    name: 'Url Shortener',
    bgColor: 'bg-emerald-300',
    titleColor: 'text-emerald-400 dark:text-emerald-300',
    borderColor: 'border-b-emerald-300 dark:border-b-emerald-300',
    thumbnail: urlshortener.src,
    techs: [techs.astro, techs.react, techs.tailwind, techs.html, techs.css, techs.javascript],
    description: 'A fast and responsive URL shortener built with Astro, React, and Tailwind CSS. It lets users shorten links via an external API and displays them in a clean, modern UI.',
    codelink: 'https://github.com/ReynaldoMolina/url-shortener',
    previewlink: '/url-shortener'
  },
  {
    name: 'Currency Counter',
    bgColor: 'bg-amber-300',
    titleColor: 'text-amber-400 dark:text-amber-300',
    borderColor: 'border-b-amber-300 dark:border-b-amber-300',
    thumbnail: moneycounter.src,
    techs: [techs.astro, techs.react, techs.tailwind, techs.html, techs.css, techs.javascript],
    description: 'A simple yet practical tool for counting money, supporting both Nicaraguan Córdobas and US Dollars. It helps users quickly calculate totals in mixed currencies.',
    codelink: 'https://github.com/ReynaldoMolina/ReynaldoMolina.github.io/tree/main/src/moneycounter',
    previewlink: '/moneycounter'
  },
];

export const contacts = [
  {
    name: 'Email',
    link: 'mailto:molinareynaldo952@gmail.com',
    icon: 'email',
    Icon: EmailIcon,
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/reynaldo-molina/',
    icon: 'linkedin',
    Icon: LinkedInIcon,
  },
  {
    name: 'GitHub',
    link: 'https://github.com/ReynaldoMolina',
    icon: 'github-circle',
    Icon: GitHubIcon,
  }
];

export const skillsFront = [
  {
    name: 'Next.js',
    icon: 'nextjs'
  },
  {
    name: 'React',
    icon: 'react'
  },
  {
    name: 'Astro',
    icon: 'astro'
  },
  {
    name: 'Tailwind',
    icon: 'tailwind'
  },
];

export const skillsBack = [
  {
    name: 'Node.js',
    icon: 'nodejs'
  },
  {
    name: 'Express.js',
    icon: 'express'
  },
  {
    name: 'PostgreSQL',
    icon: 'postgresql'
  },
  {
    name: 'Sequelize',
    icon: 'sequelize'
  },
];

export const experience = [
  {
    year: '2025',
    place: 'Freelance',
    title: 'Frontend Developer, built responsive web applications and user interfaces with React, HTML, JavaScript and CSS.',
  },
  {
    year: '2024',
    place: 'Colegio Adventista Maranatha',
    title: 'Accountant, managed budgeting, optimizing resource allocation and improved accounting software efficiency, reducing reporting time by 60%.',
  },
  {
    year: '2023',
    place: 'Radio El Centinela',
    title: 'Radio Announcer',
  },
  {
    year: '2018',
    place: 'SeaJoy™',
    title: 'Aquaculture Professional Internship',
  },
];