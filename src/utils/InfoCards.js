import seridma from '../assets/img/banner-pagina-inicio-chica.png';
import dieselMarket from '../assets/img/thedm.svg';
import momentoGlobal from '../assets/img/momentoGlobal.png';

export const experienceCards = [
  {
    ruteImg: seridma,
    alt: 'Seridma',
    company: 'Seridma, S de RL de CV.',
    descImg: 'App desarrollada con ReactJS, Css, javascript, react-bootstrap, git-github, npm',
    city: 'Altamira, Tamaulipas.',
    site: 'https://www.seridma.com.mx',
    style: 'img1',
    developId: '1',
    keyWords: {
      frontEnd: 'React, NodeJs, React-Bootstrap, Font-awesome, Css3',
      backEnd: '---',
      moreTools: 'Git, GitHub, Hostinguer',
    },
    primaryTools: ['React', 'Nodejs', 'React-Bootstrap'],
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
    primaryTools: ['Graphql', 'Nodejs', 'Express', 'PostgreSQL', 'Sequelize'],
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
    primaryTools: ['Graphql', 'Nestjs', 'Nodejs', 'Express', 'PostgreSQL'],
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
  ' Mi nombre es César Alejandro Aguilar Rodríguez. Tengo tres años desarrollando software trabajando con tecnologías como NodeJS, Java y React tanto con Arquitectura REST y Graphql. Soy una persona con pasión por la enseñanza, empatía, con actitud positiva y ganas de aprender nuevas tecnologías.';
