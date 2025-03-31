import reactIcon from '../icons/react.svg';
import cssIcon from '../icons/css3.svg';
import nodeIcon from '../icons/node.svg';
import expressIcon from '../icons/express.svg';
import postgresqlIcon from '../icons/postgresql.svg';
import htmlIcon from '../icons/html5.svg';
import javascriptIcon from '../icons/javascript.svg';
import tailwindIcon from '../icons/tailwind.svg';

import jahairastore from '../assets/store.png';
import supraural from '../assets/supraural.png';
import moneycounter from '../assets/moneycounter.png';
// import todoapp from '../assets/todoreact.png';

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
  html: {
    name: 'HTML',
    icon: htmlIcon.src,
    color: 'bg-blue-900'
  },
  javascript: {
    name: 'JavaScript',
    icon: javascriptIcon.src,
    color: 'bg-blue-900'
  },
  css: {
    name: 'CSS',
    icon: cssIcon.src,
    color: 'bg-yellow-700'
  },
  react: {
    name: 'React',
    icon: reactIcon.src,
    color: 'bg-blue-900'
  },
  nodejs: {
    name: 'Node.js',
    icon: nodeIcon.src,
    color: 'bg-green-900'
  },
  express: {
    name: 'Express.js',
    icon: expressIcon.src,
    color: 'bg-gray-800'
  },
  postgresql: {
    name: 'PostgreSQL',
    icon: postgresqlIcon.src,
    color: 'bg-blue-900'
  },
  tailwind: {
    name: 'Tailwind',
    icon: tailwindIcon.src,
    color: 'bg-blue-900'
  },
};

const projects = [
  {
    name: 'Jahaira Store',
    thumbnail: jahairastore.src,
    techs: [techs.react, techs.css, techs.nodejs, techs.express, techs.postgresql],
    description: 'Store Management App – it handles clients, products, categories, providers, orders, payments and invoices, all through a custom-built API. The backend, powered by Express, Sequelize, and PostgreSQL, ensures data handling and validation.',
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
    techs: [techs.react, techs.tailwind, techs.html, techs.css, techs.javascript],
    description: 'A simple yet practical JavaScript tool for counting money, supporting both Nicaraguan Córdobas and US Dollars. Designed for accuracy and ease of use, it helps users quickly calculate totals in mixed currencies.',
    codelink: 'https://github.com/ReynaldoMolina/ReynaldoMolina.github.io/tree/main/src/moneycounter',
    previewlink: '/moneycounter'
  },
  // {
  //   name: 'To-Do App',
  //   thumbnail: todoapp.src,
  //   techs: [techs.react, techs.css],
  //   description: 'A React-based task management app built as part of a learning course. Implements state management, hooks, and local storage to create a simple yet effective tool for organizing daily tasks.',
  //   codelink: 'https://github.com/ReynaldoMolina/curso-react-intro',
  //   previewlink: 'https://reynaldomolina.github.io/curso-react-intro'
  // },
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