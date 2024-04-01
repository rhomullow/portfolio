export interface Certificate {
  type: 'training' | 'courses' | 'certifications';
  title: string;
  partner: string;
  description: string;
  file: string;
  link: string;
}

export const certificateMockList: Certificate[] = [
  {
    type: 'certifications',
    title: 'AZ-900: Azure Fundamentals',
    partner: 'Microsoft',
    description:
      'Como candidato a esta certificação, você é um profissional de tecnologia que deseja demonstrar conhecimento básico dos conceitos de nuvem em geral e do Microsoft Azure em particular. Esta certificação é um ponto de partida comum em um percurso para uma carreira no Azure.Você pode descrever os componentes arquitetônicos do Azure e os serviços do Azure, como: mComputação; Rede; Armazenamento; Você também pode descrever recursos e ferramentas para proteger, controlar e administrar o Azure. Você deve ter habilidades e experiência trabalhando com uma área de TI, como: Gerenciamento de infraestrutura; Gerenciamento de banco de dados; Desenvolvimento de software',
    file: 'microsoft-certified-azure-fundamentals.png',
    link: 'https://www.credly.com/badges/d612eed1-7564-4070-982f-24465b0adc27/public_url',
  },
  {
    type: 'certifications',
    title: 'MTA: Introduction to Programming Using HTML and CSS',
    partner: 'Microsoft',
    description:
      'Noções básicas sobre os fundamentos de HTML; Noções básicas sobre os fundamentos de CSS; Estruturar documentos usando HTML; Apresentar a multimídia usando HTML; Estilizar páginas da Web usando CSS',
    file: 'mta-introduction-to-programming-using-html-and-css-certified-2022.png',
    link: 'https://www.credly.com/badges/6f43174f-42b3-4f16-8842-dddfb68d8f20/public_url',
  },
  {
    type: 'certifications',
    title: 'MTA: Introduction to Programming Using JavaScript',
    partner: 'Microsoft',
    description: '',
    file: 'mta-introduction-to-programming-using-javascript-certified-2022.png',
    link: 'https://www.credly.com/badges/3c8553c2-8dc1-4f9b-a6a7-81be6165ea9a/public_url',
  },
  {
    type: 'certifications',
    title: 'AWS Certified Cloud Practitioner',
    partner: 'Amazon Web Services',
    description: '',
    file: 'aws-certified-cloud-practitioner.png',
    link: 'https://www.credly.com/badges/6b8f2789-1d9e-4ef1-b32d-1515422cf1a6/public_url',
  },
  {
    type: 'certifications',
    title: 'PL-100: Power Platform App Maker Associate',
    partner: 'Microsoft',
    description: '',
    file: 'microsoft-certified-power-platform-app-maker-associate.png',
    link: 'https://www.credly.com/badges/a05420cc-f20a-49e4-8bcf-2448c451b41f/public_url',
  },
  {
    type: 'courses',
    title: 'Formação Angular',
    partner: 'Alura',
    description:
      'TypeScript parte 1: evoluindo seu JavaScript; TypeScript parte 2: Mais técnicas e boas práticas; Webpack: Manipulando módulos na sua webapp; Angular parte 1: produtividade e organização com framework SPA; Angular parte 2: Autenticação, Forms e lazy loading; Angular parte 3: upload, build e novos componentes; Angular parte 4: lapidando o projeto',
    file: 'formacao-angular-alura.png',
    link: 'https://cursos.alura.com.br/degree/certificate/2788ed70-a12e-4264-b541-9cebd4bec1c7',
  },
  {
    type: 'courses',
    title: 'Flexbox',
    partner: 'Alura',
    description:
      'Introdução ao flexbox e fazendo o cabeçalho; Fazendo o footer e controlando melhor os elementos; Grid principal e limitações do flexbox; Arrumando os elementos com flex para mobile; Mais sobre flexbox & desafios',
    file: 'curso-flexbox-alura.png',
    link: 'https://cursos.alura.com.br/certificate/9bab0b7a-5f86-41cf-9af9-14991ebb18fb',
  },
  {
    type: 'training',
    title: 'Ux Design',
    partner: 'How Bootcamps',
    description:
      'O que é UX Design seguindo os princípios do Design Thinking e Double Diamond; Atuação e a carreira de UX Designers dentro de startups e empresas de tecnologia.',
    file: 'ux-design-how-bootcamps.png',
    link: 'https://drive.google.com/file/d/1khVAto7D7pJjPnrXDbQz-RVhQeshgMrY/view',
  },
  {
    type: 'courses',
    title: 'Unit Testing in Angular 12',
    partner: 'PluralSight',
    description: '',
    file: 'unit-testing-in-angular-12-by-joe-eames-pluralsight.png',
    link: 'https://app.pluralsight.com/profile/romulosilvam',
  },
  {
    type: 'certifications',
    title: 'Scrum Fundamentals Certified',
    partner: 'SCRUMstudy',
    description: '',
    file: 'scrum-fundamentals-certified.png',
    link: 'https://www.scrumstudy.com/certification/certification-registry',
  },
  {
    type: 'certifications',
    title: 'LFC131: Green Software for Practitioners',
    partner: 'The Linux Foundation',
    description: '',
    file: 'lfc131-green-software-for-practitioners.png',
    link: 'https://www.credly.com/badges/dc4aca5d-6a4c-496f-8c47-bcea166d279c/public_url',
  },
];
