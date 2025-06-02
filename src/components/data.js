import jahairastore from '../assets/store.png';
import supraural from '../assets/supraural.png';
import moneycounter from '../assets/moneycounter.png';

const headerLinks = [
  {
    name: 'Home',
    link: '/'
  },
  {
    name: 'About',
    link: '/#about-section'
  },
  {
    name: 'Projects',
    link: '/#projects-section'
  },
];

const techs = {
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

const projects = [
  {
    name: 'Jahaira Store ⭐',
    thumbnail: jahairastore.src,
    techs: [techs.nextjs, techs.react, techs.tailwind, techs.postgresql],
    description: 'Store Management App – it handles clients, products, categories, providers, orders, payments and invoices. The backend, powered by Next.js and PostgreSQL, ensures data handling and validation.',
    codelink: 'https://github.com/ReynaldoMolina/jahairastore-demo',
    previewlink: 'https://reynaldomolina.github.io/jahairastore-demo'
  },
  {
    name: 'SuprAural',
    thumbnail: supraural.src,
    techs: [techs.html, techs.css, techs.javascript],
    description: 'Music Studio Landing Page – A modernized and responsive redesign of an existing music studio website. Enhances the original design with improved styling and consistency while maintaining its essence.',
    codelink: 'https://github.com/ReynaldoMolina/musicstudio',
    previewlink: 'https://reynaldomolina.github.io/musicstudio'
  },
  {
    name: 'Currency Counter',
    thumbnail: moneycounter.src,
    techs: [techs.astro, techs.react, techs.tailwind, techs.html, techs.css, techs.javascript],
    description: 'A simple yet practical React tool for counting money, supporting both Nicaraguan Córdobas and US Dollars. Designed for accuracy and ease of use, it helps users quickly calculate totals in mixed currencies.',
    codelink: 'https://github.com/ReynaldoMolina/ReynaldoMolina.github.io/tree/main/src/moneycounter',
    previewlink: '/moneycounter'
  }
];

const contacts = [
  {
    name: 'Email',
    link: 'mailto:molinareynaldo952@gmail.com',
    icon: 'email'
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/reynaldo-molina/',
    icon: 'linkedin'
  },
  {
    name: 'GitHub',
    link: 'https://github.com/ReynaldoMolina',
    icon: 'github-circle'
  }
];

const skills = [
  {
    name: 'Next.js',
    icon: 'nextjs'
  },
  {
    name: 'React',
    icon: 'react'
  },
  {
    name: 'Tailwind',
    icon: 'tailwind'
  },
  {
    name: 'HTML',
    icon: 'html5'
  },
  {
    name: 'JavaScript',
    icon: 'javascript'
  },
  {
    name: 'CSS',
    icon: 'css3'
  },
  {
    name: 'Astro',
    icon: 'astro'
  },
  {
    name: 'Node.js',
    icon: 'nodejs'
  },
  {
    name: 'Git',
    icon: 'git'
  },
  {
    name: 'GitHub',
    icon: 'github'
  },
  {
    name: 'NPM',
    icon: 'npm'
  },
];

export { projects, contacts, skills, headerLinks };