import seridma from '../assets/img/banner-pagina-inicio-chica.png';
import dieselMarket from '../assets/img/thedm.svg';
import momentoGlobal from '../assets/img/momentoGlobal.png';
import { IMAGES } from '../assets/img/AppImg';

export const experienceCards = [
  {
    ruteImg: seridma,
    alt: 'Seridma',
    company: 'Seridma, S de RL de CV.',
    descImg: 'App desarrollada con ReactJS, Css, javascript, react-bootstrap, git-github, npm',
    city: 'Altamira, Tamaulipas.',
    site: 'https://www.seridma.com',
    style: 'img1',
    developId: '1',
    keyWords: {
      frontEnd: 'React, NodeJs, React-Bootstrap, Font-awesome, Css3',
      backEnd: '---',
      moreTools: 'Git, GitHub, Hostinguer',
    },
    primaryTools: ['React', 'Nodejs', 'React-Bootstrap'],
    developUrls: [
      'https://reactjs.org/',
      'https://nodejs.org/en/',
      'https://react-bootstrap.github.io/',
    ],
    carouselImg: [
      IMAGES.SeridmaHome,
      IMAGES.SeridmaMiddle,
      IMAGES.SeridmaFooter,
      IMAGES.SeridmaWap,
    ],
  },
  {
    ruteImg: dieselMarket,
    alt: 'TheDieselMarket',
    company: 'TheDieselMarket.com',
    descImg:
      'App desarrollada con ReactJS, Sass, javascript, material-ui. Api desarrollada con Graphql, nodejs, JWS, Google Cloud Platform, Postgres, npm, git-github.',
    city: 'Monterrey, Nuevo Leon.',
    site: 'https://web-dev.thedieselmarket.com/',
    style: 'img2',
    developId: '2',
    keyWords: {
      frontEnd: 'React, Material-ui, Css3, sass, JavaScript, Redux',
      backEnd: 'Express, Graphql, JavaScript, Sequelize',
      moreTools:
        'Git, GitHub, NodeJs, npm, yarn, Circle-ci, Google Cloud Platform, jwt, PostgreSQL',
    },
    primaryTools: ['React', 'Graphql', 'Nodejs', 'Express', 'PostgreSQL', 'Sequelize'],
    developUrls: [
      'https://reactjs.org/',
      'https://graphql.org/',
      'https://nodejs.org/en/',
      'https://expressjs.com/',
      'https://www.postgresql.org/',
      'https://sequelize.org/',
    ],
    carouselImg: [dieselMarket],
  },
  {
    ruteImg: momentoGlobal,
    alt: 'Momento Global',
    company: 'Momento Global',
    descImg:
      'App desarrollada con React native, Graphql-Apollo-client. Api desarrollada con Graphql, nodejs, Typescript, Nestjs, Google Cloud Platform, npm, git-github, JWT.',
    city: 'New York, USA.',
    site: 'https://play.google.com/store/apps/details?id=com.dbfinancial.wallet&hl=es_MX',
    style: 'img3',
    developId: '3',
    keyWords: {
      frontEnd: 'React native, JavaScript, Redux',
      backEnd: 'Express, Graphql, JavaScript, Nestjs, TypeORM, Sequelize',
      moreTools: 'Git, GitHub, NodeJs, npm, Circle-ci, Google Cloud Platform, jwt, PostgreSQL',
    },
    primaryTools: ['Graphql', 'Nestjs', 'Nodejs', 'Express', 'PostgreSQL', 'TypeORM'],
    developUrls: [
      'https://graphql.org/',
      'https://nestjs.com/',
      'https://nodejs.org/en/',
      'https://expressjs.com/',
      'https://www.postgresql.org/',
      'https://typeorm.io/',
    ],
    carouselImg: [IMAGES.MomentoPlayStore],
  },
];

export const knowledgeCards = [
  {
    head: 'INGENIERÍA EN SISTEMAS COMPUTACIONALES',
    title: 'LICENCIATURA',
    subtitle: 'Grado obtenido en el Instituto Tecnólogico de Ciudad Madero.',
    text: 'Título de licenciatura en Ingeniería en Sistemas Computacionales con la especialidad en dispositivos móviles.',
    age: '2013-2018',
    seemore:
      'Como trabajo final para la obtención del grado de ingeniero en sistemas computacionales, se hizo residencias en el centro de mantenimiento de Telmex Madero.',
  },
  {
    head: 'MASTER EN CIENCIAS DE LA COMPUTACIÓN',
    title: 'POSGRADO',
    subtitle: 'Grado obtenido en el Instituto Tecnólogico de Ciudad Madero.',
    text: 'Título de posgrado en Ciencias de la computación con la especialidad de optimización de algoritmos metaheurísticos.',
    age: '2019-2021',
    seemore:
      'Tesis presentada para la obtención de grado en master en ciencias de la computación con el nombre de "DESARROLLO DE ARQUITECTURA DE SOPORTE A LA TOMA DE DECISIONES PARA AGENTES EN HARDWARE"',
  },
];

export const profile =
  ' Mi nombre es César Alejandro Aguilar Rodríguez. Tengo dos años desarrollando software trabajando con tecnologías como NodeJS, y React tanto con Arquitectura REST y Graphql. Soy una persona con pasión por la enseñanza, empatía, con actitud positiva y ganas de aprender nuevas tecnologías.';
