import {
  frontend,
  backend,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  foster,
  bootstrap,
  mysql,
  weshare,
  piano,
  cards,
  bestseller,
  protectora,
  ikea,
  botanico,
  global
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'Sobre mi',
  },
  {
    id: 'projects',
    title: 'Proyectos',
  },
  {
    id: 'work',
    title: 'Experiencia',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'bootstrap',
    icon: bootstrap,
  },
  {
    name: 'mysql',
    icon: mysql,
  },
];

const experiences = [
  {
    title: 'Junior Front-end Developer y Técnico de Soporte',
    company_name: 'Global Alumni',
    icon: global,
    iconBg: '#333333',
    date: 'Marzo 2024 - Actualidad',
  },
  {
    title: 'Store Manager',
    company_name: 'Bestseller Stores Spain',
    icon: bestseller,
    iconBg: '#333333',
    date: 'Enero 2022 - Mayo 2023',
  },
  {
    title: 'Comercial de ventas',
    company_name: 'Bestseller Stores Spain',
    icon: bestseller,
    iconBg: '#333333',
    date: 'Junio 2018 - Diciembre 2021',
  },
  {
    title: 'Ayudante de cocina',
    company_name: 'Foster s Hollywood',
    icon: foster,
    iconBg: '#333333',
    date: 'Enero - Mayo 2018',
  },
  {
    title: 'Voluntario Protectora de animales Málaga',
    company_name: 'Sociedad protectora de animales y plantas de Malaga',
    icon: protectora,
    iconBg: '#333333',
    date: 'Marzo - Agosto 2017',
  },
  {
    title: 'Organizador de pedidos online',
    company_name: 'Ikea',
    icon: ikea,
    iconBg: '#333333',
    date: 'Diciembre 2016 - Junio 2017',
  },
  {
    title: 'Ayudante de cocina',
    company_name: 'Botanico Cafe',
    icon: botanico,
    iconBg: '#333333',
    date: 'Febrero - Septiembre 2016',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'WeShare',
    description: 'Proyecto final del bootcamp. Se trata de una API que permite compartir enlaces web.',
    image: weshare,
    demo: 'https://github.com/PepeCheca/WeShare-FinalProject',
  },
  {
    id: 'project-2',
    name: 'Piano Virtual',
    description:'Un teclado de un piano con el que puedes interactuar ya sea con el ratón o el teclado de tu ordenador.',
    image: piano,
    repo: 'https://github.com/PepeCheca/MyPiano',
    demo: 'https://checa-delafuente-piano.netlify.app',
  },
  {
    id: 'project-3',
    name: 'Contact Cards',
    description: 'Tarjetas de contacto realizadas con un compañero del bootcamp. ¡Podéis utilizarlas y añadir vuestra información si queréis!',
    image: cards,
    repo: 'https://github.com/PepeCheca/ContactCards',
    demo: 'https://checacontactcards.netlify.app',
  },

];

export { services, technologies, experiences, projects };
