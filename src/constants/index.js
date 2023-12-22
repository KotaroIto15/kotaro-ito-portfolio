import {
  frontend,
  backend,
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
  }
];

const introduction = {
  jp: `現在はカナダにあるブリティッシュコロンビア大学の学部3年生で、コンピュータサイエンスを専攻しています。
  フロントエンド、バックエンド開発に興味があり、さまざまな言語を使用して個人開発やチーム開発に取り組んでいます。
  自分自身がソフトウェアデベロッパーとして成長でき、さらに自分の知識や経験を活用して会社に還元・貢献できるインターンの環境を探しています。`,
  en: `I am a third year Computer Science student at the University of British Columbia in Canada.
  I am interested in both frontend and backend development, and I am passionate about personal/team development in a variety of programming languages.
  I am looking for the internship environment in which I can grow as a software developer, and to which I can contribute with my technical knowledge and experiences.`
};

const services = [
  {
    jp: 'フロントエンドデベロッパー',
    en: 'Frontend Developer',
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    jp: 'バックエンドデベロッパー',
    en: 'Backend Developer',
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
    title: {
      jp: 'ソフトウェアエンジニアインターン',
      en: 'Software Engineer Intern'
    },
    company_name: {
      jp: '株式会社なでしこ',
      en: 'Nadeshiko Inc'
    },
    icon: coverhunt,
    iconBg: '#333333',
    date: {
      jp: '2020/06 - 2021/03',
      en: 'June 2020 - March 2021'
    },
  },
  {
    title: {
      jp: '英語教師',
      en: 'English Tutor'
    },
    company_name: {
      jp: '株式会社キャタル',
      en: 'Catal Inc',
    },
    icon: microverse,
    iconBg: '#333333',
    date: {
      jp: '2021/03 - 現在',
      en: 'March 2021 - Present',
    }
  },
  {
    title: {
      jp: '学部生 （専攻：コンピュータサイエンス）',
      en: 'Undergraduate student (Major in Computer Science)'
    },
    company_name: {
      jp: 'ブリティッシュコロンビア大学',
      en: 'The University of British Columbia'
    },
    icon: kelhel,
    iconBg: '#333333',
    date: {
      jp: '2021/09 - 現在',
      en: 'September 2021 - Present'
    },
  },
  {
    title: {
      jp: 'ティーチングアシスタント（CPSC121: ブール代数、論理回路、有限オートマンなど）',
      en: 'Teaching Assistant (CPSC 121 Models of Computation)'
    },
    company_name: {
      jp: 'ブリティッシュコロンビア大学コンピュータサイエンス学科',
      en: 'UBC Department of Computer Science'
    },
    icon: dcc,
    iconBg: '#333333',
    date: {
      jp: '2023/01 - 2023/04',
      en: 'January 2023 - April 2023'
    },
  },
  {
    title: {
      jp: 'ソフトウェアエンジニアインターン',
      en: 'Software Developer Intern'
    },
    company_name: {
      jp: 'UBC Cloud Innovation Centre powered by AWS',
      en: 'UBC Cloud Innovation Centre powered by AWS'
    },
    icon: dcc,
    iconBg: '#333333',
    date: {
      jp: '2023/09 - 現在',
      en: 'September 2023 - Present'
    },
  }
];

const projects_overview = {
  jp: `これまでに作成してきたプロジェクトの一覧です。
  チーム開発や個人開発を通して、主にJava, JavaScript, Pythonとそれらのフレームワークを使用しながら、
  フロントエンド・バックエンドともに開発経験を積むことができました。`,
  en: `This is a list of projects I have created so far.
   Through team development and personal development, I have accumulated experience in developing both frontend and backend using Java, JavaScript, and other frameworks.`
};

const projects = [
  {
    id: 'project-1',
    name: 'Tic Tac Toe',
    jp: 'チームプロジェクトの一環として開発したシンプルなOXゲーム。',
    en: 'A simple Tic Tac Toe developed as a team project.',
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
    jp: 'サッカーゲームFIFA23の選手データを使用し、好きなチーム編成をシミュレーションできるWebアプリケーション。',
    en: 'A web application that simulates a squad formation using FIFA23 player data.',
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
    jp: 'トレーニングスケジュールを管理し、トレーニング強度をモニタリングするアプリケーション。',
    en: 'An application that manages training schedules and monitors training intensity.',
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
    jp: '商品を購入したり投資を行ったりしながら、資産を増やしていくことを目的としたゲーム。',
    en: 'A game that aims to increase your assets by purchasing goods or investing in various assets.',
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
    jp: 'Discord上で、好きな都市の現在の天気を教えてくれるチャットボット。',
    en: 'A chat bot that provides the current weather in a city of your choice on Discord.',
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

export { services, introduction, technologies, experiences, projects_overview, projects };
