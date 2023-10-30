import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nodejs,
  git,
  docker,
  postgresql,
  php,
  python,
  flask,
  java,
  clang,
  cpp,
  aws,
  tic_tac_toe,
  squad_builder,
  workout_manager,
  clicker_empire_game,
  discord,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
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
  // {
  //   title: 'UI/UX Design',
  //   icon: ux,
  // },
  // {
  //   title: 'Software Prototyping',
  //   icon: prototyping,
  // },
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
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Python',
    icon: python,
  },
  {
    name: "Flask",
    icon: flask,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "C language",
    icon: clang,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'docker',
    icon: docker,
  },
  {
    name: 'Amazon Web Services',
    icon: aws,
  }
];

const experiences = [
  {
    title: 'Front-End Developer',
    company_name: 'Cover Hunt',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Aug 2021 - Feb 2022',
  },
  {
    title: 'Mentor (Volunteer)',
    company_name: 'Microverse',
    icon: microverse,
    iconBg: '#333333',
    date: 'Mar 2022 - May 2022',
  },
  {
    title: 'Junior Software Engineer',
    company_name: 'Kelhel',
    icon: kelhel,
    iconBg: '#333333',
    date: 'May 2022 - Oct 2022',
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Diversity Cyber Council',
    icon: dcc,
    iconBg: '#333333',
    date: 'Sep 2022 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Tic Tac Toe',
    description: 'チームプロジェクトの一環として開発したシンプルなOXゲーム。',
    tags: [
      {
        name: 'HTML',
        color: 'blue-text-gradient',
      },
      {
        name: 'CSS',
        color: 'green-text-gradient',
      },
      {
        name: 'JavaScript',
        color: 'pink-text-gradient',
      },
    ],
    image: tic_tac_toe,
    repo: 'https://github.com/teamdev-green-recursion/tic-tac-toe/',
  },
  {
    id: 'project-2',
    name: 'FIFA23 Squad Builder',
    description:
      'サッカーゲームFIFA23の選手データを使用し、好きなチーム編成をシミュレーションできるWebアプリケーション。',
    tags: [
      {
        name: 'ReactJS',
        color: 'blue-text-gradient',
      },
      {
        name: 'Flask',
        color: 'green-text-gradient',
      },
      {
        name: 'Pandas',
        color: 'pink-text-gradient',
      },
    ],
    image: squad_builder,
    repo: 'https://github.com/KotaroIto15/FIFA-23-squad-builder',
  },
  {
    id: 'project-3',
    name: 'Workout Manager',
    description: 'トレーニングスケジュールを管理し、トレーニング強度をモニタリングするアプリケーション。',
    tags: [
      {
        name: 'Java',
        color: 'blue-text-gradient',
      },
      {
        name: 'Swing',
        color: 'green-text-gradient',
      },
      {
        name: 'Object-oriented Programming',
        color: 'pink-text-gradient',
      },
    ],
    image: workout_manager,
    repo: 'hhttps://github.com/KotaroIto15/workout-schedule-manager',
  },
  {
    id: 'project-4',
    name: 'Clicker Empire Game',
    description: `商品を購入したり投資を行ったりしながら、資産を増やしていくことを目的としたゲーム。`,
    tags: [
      {
        name: 'HTML',
        color: 'blue-text-gradient',
      },
      {
        name: 'CSS',
        color: 'green-text-gradient',
      },
      {
        name: 'Node.js',
        color: 'pink-text-gradient',
      },
    ],
    image: clicker_empire_game,
    repo: 'https://github.com/KotaroIto15/clicker-empire-game',
  },
  {
    id: 'project-5',
    name: 'Discord chat bot',
    description:
      'Discord上で、好きな都市の現在の天気を教えてくれるチャットボット。',
    tags: [
      {
        name: 'Python',
        color: 'blue-text-gradient',
      },
      {
        name: 'API',
        color: 'green-text-gradient',
      },
    ],
    image: discord,
    repo: 'https://github.com/KotaroIto15/Discord_Bot',
  },
];

export { services, technologies, experiences, projects };
