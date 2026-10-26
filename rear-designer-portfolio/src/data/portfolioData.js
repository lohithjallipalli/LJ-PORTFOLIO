export const themeColors = {
  'Midnight Violet': { primary: '#a855f7', accent: '#7e22ce', light: '#c084fc' },
  'Arctic Blue': { primary: '#3b82f6', accent: '#1d4ed8', light: '#93c5fd' },
  'Crimson': { primary: '#e11d48', accent: '#be123c', light: '#fda4af' },
  'Emerald': { primary: '#10b981', accent: '#059669', light: '#6ee7b7' },
  'Luxury Gold': { primary: '#eab308', accent: '#ca8a04', light: '#fef08a' },
};

export const skillsData = [
  {
    name: 'ServiceNow Administration',
    category: 'SERVICENOW',
    level: 'PROFICIENT',
    percentage: 80,
    icon: 'Shield',
    color: '#00c7b1',
    description: 'Hands-on experience with ServiceNow platform administration including Users, Groups, Roles, ACLs, CMDB, UI Policies, and Flow Designer — enabling scalable, governed IT service workflows.'
  },
  {
    name: 'ITSM Fundamentals',
    category: 'SERVICENOW',
    level: 'PROFICIENT',
    percentage: 80,
    icon: 'ClipboardList',
    color: '#6366f1',
    description: 'Strong foundation in IT Service Management processes including Incident Management, Problem Management, and Change Request handling aligned with ITIL best practices.'
  },
  {
    name: 'ServiceNow Scripting',
    category: 'SERVICENOW',
    level: 'INTERMEDIATE',
    percentage: 70,
    icon: 'FileCode',
    color: '#f59e0b',
    description: 'Experienced in ServiceNow scripting using Client Scripts, Business Rules, Script Includes, and Glide APIs to automate processes and extend platform capabilities.'
  },
  {
    name: 'Java (Primary)',
    category: 'LANGUAGES',
    level: 'ADVANCED',
    percentage: 95,
    icon: 'Braces',
    color: '#3b82f6',
    description: 'My primary programming language, used for building object-oriented applications, backend services, and solving Data Structures & Algorithms problems with a focus on clean and efficient code.'
  },
  {
    name: 'Python',
    category: 'LANGUAGES',
    level: 'INTERMEDIATE',
    percentage: 70,
    icon: 'Terminal',
    color: '#eab308',
    description: 'Experienced in Python for data analysis, machine learning fundamentals, automation, and problem-solving through practical projects and coursework.'
  },
  {
    name: 'JavaScript',
    category: 'LANGUAGES',
    level: 'INTERMEDIATE',
    percentage: 70,
    icon: 'Code',
    color: '#eab308',
    description: 'Utilized JavaScript to create dynamic, interactive, and responsive web applications with modern frontend development practices.'
  },
  {
    name: 'Node.js / Express',
    category: 'FRAMEWORKS & BAAS',
    level: 'HANDS-ON',
    percentage: 60,
    icon: 'Server',
    color: '#22c55e',
    description: 'Hands-on experience developing backend services and RESTful APIs using Node.js and Express, enabling efficient communication between frontend and database systems.'
  },
  {
    name: 'REST APIs',
    category: 'FRAMEWORKS & BAAS',
    level: 'HANDS-ON',
    percentage: 70,
    icon: 'Layers',
    color: '#a855f7',
    description: 'Designed, integrated, and consumed REST APIs to facilitate secure and scalable data exchange between applications and services.'
  },
  {
    name: 'MongoDB',
    category: 'DATABASES & DEVOPS',
    level: 'INTERMEDIATE',
    percentage: 70,
    icon: 'Wrench',
    color: '#06b6d4',
    description: 'Worked with MongoDB to design and manage NoSQL databases, ensuring flexible and efficient data storage for full-stack applications.'
  },
  {
    name: 'MySQL',
    category: 'DATABASES & DEVOPS',
    level: 'INTERMEDIATE',
    percentage: 80,
    icon: 'Database',
    color: '#0d9488',
    description: 'Proficient in relational database design, SQL queries, data management, and optimization for scalable backend applications.'
  },
  {
    name: 'Git / Postman',
    category: 'DATABASES & DEVOPS',
    level: 'INTERMEDIATE',
    percentage: 70,
    icon: 'GitBranch',
    color: '#f43f5e',
    description: 'Proficient in using Git for distributed version control, managing repository branches, resolving conflicts, and workflow coordination. Experienced in using Postman for designing, testing, and debugging RESTful APIs.'
  },
  {
    name: 'Data Structures & Algorithms',
    category: 'DATABASES & DEVOPS',
    level: 'PROFICIENT',
    percentage: 70,
    icon: 'Binary',
    color: '#6366f1',
    description: 'Strong understanding of fundamental Data Structures & Algorithms (DSA), including arrays, linked lists, stacks, queues, trees, graphs, sorting, searching, and algorithmic complexity analysis (Big O).'
  },
];

export const projectsData = [
  {
    title: 'PRO-MAN',
    role: 'PROJECT MANAGEMENT WEB APPLICATION',
    duration: '2 months',
    type: 'Internship Project',
    location: 'Hyderabad, India',
    tags: ['React.js', 'Node.js', 'Express', 'MongoDB', 'MERN Stack'],
    link: 'https://github.com/lohithjallipalli/Pro-Man',
    liveLink: 'https://pro-man-eight.vercel.app/',
    description: 'Developed PRO-MAN for project management tasks including team tracking, budget analysis, and project deadlines during EY GDS internship.',
    longDescription: 'Developed PRO-MAN, a comprehensive project management dashboard system designed for teams to track milestones, budget allocations, dead-ends, and performance metrics dynamically during the EY Global Delivery Services internship.',
    skills: ['React.js', 'Node.js', 'Express', 'MongoDB', 'MERN Stack', 'Redux', 'Chart.js', 'REST APIs'],
    keyProjects: [
      {
        title: 'PRO-MAN Web Application',
        github: 'https://github.com/lohithjallipalli/Pro-Man',
        description: 'Developed full-stack MERN platform supporting task management widgets, budget tracking charts, and team allocation metrics.',
        tags: ['React.js', 'Node.js', 'MongoDB', 'Express'],
        bullets: [
          'Created secure user authentication using JWT and role-based access control.',
          'Designed budget analytics and metric comparisons utilizing Chart.js.',
          'Implemented dynamic deadline warning banners and alert notifications.'
        ]
      }
    ]
  },
  {
    title: 'Lohith Portfolio',
    role: 'ANIMATED DESIGNER PORTFOLIO',
    duration: '1 month',
    type: 'Personal Project',
    location: 'Remote',
    tags: ['React', 'GSAP', 'Vite', 'CSS', 'Lucide Icons'],
    link: '#',
    description: 'A premium, high-fidelity personal portfolio showcasing modern animations, custom themes, and interactive skill catalogs.',
    longDescription: 'A high-fidelity animated developer portfolio built to display technical projects, interactive skill grids, and education timelines using sleek glassmorphic themes.',
    skills: ['React.js', 'GSAP', 'Vite', 'CSS3', 'Lucide Icons', 'ScrollTrigger', 'Swiper'],
    keyProjects: [
      {
        title: 'Motion & Interaction Engine',
        github: '#',
        description: 'Integrated GSAP and ScrollTrigger to drive staggered page transitions, theme shifting animations, and interactive timelines.',
        tags: ['GSAP', 'React.js', 'CSS3'],
        bullets: [
          'Configured scroll snapping with smooth viewport transitions.',
          'Designed customizable accent color picker that updates CSS variables in real time.',
          'Optimized mobile navigation drawer using React layout states.'
        ]
      }
    ]
  }
];

export const tabData = {
  Achievements: [
    {
      title: 'School Topper (Class XII - CBSE)',
      date: '2022',
      subtitle: 'Sai Spurthi DAV School',
      bullets: [
        'Secured 453/500 (90.6%), achieving the highest score in the school.',
        'Awarded a ₹10,000 Merit Scholarship/Cash Prize for academic excellence.'
      ],
    },
    {
      title: 'School Second Rank (Class X - CBSE)',
      date: '2020',
      subtitle: 'Sai Spurthi DAV School',
      bullets: [
        'Secured 572/600 (95.3%), achieving the 2nd highest score in the school.',
        'Awarded a ₹5,000 Merit Scholarship/Cash Prize.'
      ],
    },
  ],
  Experience: [
    {
      title: 'Servicenow Trainee',
      date: 'Aug 2026 – October 2026',
      subtitle: 'Sri Sathya Sai Skill Development Center',
      bullets: [
        'Gained Hands-on experience with ServiceNow platform administration including Users, Groups, Roles, ACLs, CMDB, UI Policies, and Flow Designer  ',
        'Strong foundation in IT Service Management processes including Incident Management, Problem Management',
        'Experienced in ServiceNow scripting using Client Scripts, Business Rules, Script Includes, and Glide APIs to automate processes and extend platform capabilities.',
      ],
    },
    {
      title: 'Intern at EY Global Delivery Services & AICTE',
      date: 'Feb 2025 – Mar 2025',
      subtitle: 'EY Edutech',
      bullets: [
        'Worked on building modern applications with MERN stack ',
        'Developed an application PRO-MAN for project management tasks that include managing the teams, alerts about the project deadlines, budget analysis etc.',
        'Implemented interactive features like responsive webpages, better user interface, widgets and key tabs. ',
      ],
    },
    {
      title: 'Java Software Developer Intern ',
      date: 'May 2025 – June 2025',
      subtitle: 'Infosys Foundation',
      bullets: [
        'Developed and maintained Java-based applications using Spring Boot framework.  ',
        'Collaborated with the development team to design, test, and deploy RESTful APIs and database-driven modules. ',
        'Assisted in front-end integration using HTML, CSS, and JavaScript (full-stack exposure). '
      ],
    },
  ],
  Certificates: [
    {
      title: 'Servicenow Trainee ',
      date: 'October 2026',
      subtitle: 'Servicenow Training At SSSSO',
      link: '/assets/SSSSO.png',
      bullets: [
        'Successfully completed a 45-Day (165-hour) ServiceNow Training( Administration, Scripting,ITSM - Fundamentals) - RPL 2026 at Sri Sathya Sai Skill Development Center,',
      ],
    },
    {
      title: 'MERN Stack Developer',
      date: 'March 2025',
      subtitle: 'EY Global Delivery Services & AICTE',
      link: 'https://drive.google.com/file/d/1Q05bhkqarke3SqNj4VxHuEL1s7Kbm7MC/view?usp=sharing',
      bullets: [
        'Earned certification for completing training in full-stack MERN (MongoDB, Express.js, React, Node.js) development.',
      ],
    },
    {
      title: 'Duolingo English Test ',
      date: 'October 2025',
      subtitle: 'Duolingo',
      link: '/assets/DET.pdf',
      bullets: [
        'Scored 130/160, achieving Advanced CEFR C1 level proficiency.',
      ],
    },
  ],
  Education: [
    {
      title: 'B.Tech (Artificial Intelligence & Data Science)',
      date: '2022 – 2026',
      subtitle: 'Gurunanak Institutions Technical Campus, Hyderabad',
      bullets: [
        'CGPA – 8.64',
      ],
    },
    {
      title: '12th (MPC)',
      date: '2020 – 2022',
      subtitle: 'Sai Spurthi DAV School(CBSE), Sathupally',
      bullets: [
        'Percentage – 91%',
      ],
    },
    {
      title: '10th',
      date: '2019 – 2020',
      subtitle: 'Sai Spurthi DAV School(CBSE), Sathupally',
      bullets: [
        'Percentage – 96%',
      ],
    },
  ],
};
