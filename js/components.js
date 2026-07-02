const PORTFOLIO_COMPONENTS = [
  "navbar",
  "hero",
  "about",
  "experience",
  "education",
  "skills",
  "projects",
  "courses",
  "achievements",
  "contact",
  "footer",
];

const PORTFOLIO_DATA = {
  hero: {
    lead: "I am a Computer Science graduate from IIT Jodhpur and incoming Management Trainee (Manager I) at ICICI Bank, building software systems and AI products with a focus on clean architecture, practical ML, and real-world usability.",
    socials: [
      { icon: "fas fa-envelope", label: "Email", href: "mailto:contact.sujayv16@gmail.com" },
      { icon: "fab fa-github", label: "GitHub", href: "https://github.com/sujayv16" },
      { icon: "fab fa-linkedin-in", label: "LinkedIn", href: "https://www.linkedin.com/in/viswanadhapalli-sujay/" },
      { icon: "fab fa-instagram", label: "Instagram", href: "https://www.instagram.com/btwits_sujay/" },
      { icon: "fab fa-whatsapp", label: "WhatsApp", href: "https://wa.me/919705712990" },
      { icon: "fas fa-phone", label: "Call", href: "tel:+919705712990" },
    ],
    stats: [
      { value: "IIT Jodhpur", label: "B.Tech CSE graduate" },
      { value: "ICICI Bank", label: "Incoming Manager I" },
      { value: "Full Stack", label: "End-to-end apps" },
      { value: "Research", label: "Applied projects" },
    ],
    rotate: [
      "Full stack developer",
      "AI/ML enthusiast",
      "Open-source builder",
      "Research-driven engineer",
    ],
  },
  about: {
    story: `
      <div class="about-copy stack-gap-lg">
        <p>Hello! I&apos;m <strong>Sujay</strong>, a Computer Science graduate from <strong>IIT Jodhpur</strong> and an incoming <strong>Management Trainee (Manager I)</strong> at <strong>ICICI Bank</strong>, where I&apos;ll be working in technology-driven roles.</p>
        <p>With hands-on experience spanning AI, machine learning, software development, and research, I&apos;ve contributed to projects ranging from intelligent applications and full-stack systems to an ISRO-sponsored spacecraft communication analyzer. Through internships at Phoenix Labs and VanTech Med, I&apos;ve worked on AI solutions, backend development, healthcare technology, and scalable software systems.</p>
        <p>I enjoy transforming ideas into practical, high-quality software and have a strong interest in Artificial Intelligence, Backend Engineering, Computer Vision, Cloud Technologies, and Enterprise Software. I&apos;m constantly exploring new technologies and strive to build solutions that are innovative, scalable, and meaningful.</p>
      </div>
    `,
  },
  experience: [
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Indian_Space_Research_Organisation_Logo.svg",
    role: "Project Member",
    company: "ISRO Sponsored Project",
    duration: "Aug 2025 - Dec 2025",
    location: "Indian Institute of Technology Jodhpur, Jodhpur, India",
    description: "Developed telemetry analysis modules for spacecraft communication using the MIL-STD-1553B protocol and built backend services for protocol validation, anomaly detection, and subsystem trend analysis.",
    bullets: [
      "Implemented cycle inference, jitter analysis, margin violation detection, and communication fault analysis from Bus Monitor logs.",
      "Designed backend services for protocol validation by comparing live transactions with historical communication records.",
      "Built subsystem parameter extraction and visualization modules for telemetry trend analysis and anomaly detection.",
      "Collaborated in a two-member team to develop scalable backend APIs and data processing workflows."
    ]
  },

  {
    logo: "Images/vantech.png",
    role: "Software Developer Intern",
    company: "VanTech Med",
    duration: "May 2025 - Jul 2025",
    location: "Vancouver, BC, Canada (Remote)",
    description: "Built backend services and contributed to software architecture for healthcare applications, including REST APIs, migration work, and full-stack feature delivery for the Sundae platform.",
    bullets: [
      "Implemented REST APIs, system migration, and full-stack enhancements for the Sundae platform.",
      "Built features including reminiscence mode, daily affirmations, personalized settings, and multilingual support.",
      "Improved application responsiveness and performance while contributing to vital-sign integration prototypes.",
      "Collaborated with cross-functional teams to build scalable healthcare software solutions."
    ],
    links: [
      {
        label: "Internship Certificate",
        url: "https://drive.google.com/file/d/1RoVQoF5zbWZv4J6NWnawzfDhXIe-4G99/view?usp=drive_link"
      }
    ]
  },

  {
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQGvr-KAY2ou5Q/company-logo_200_200/company-logo_200_200/0/1699684113017?e=2147483647&v=beta&t=eQaHbjfQv5CC6YRZWD4Q7QszirwxvI8nYsgSZoyn9W0",
    role: "Artificial Intelligence Intern",
    company: "Phoenix Labs",
    duration: "Sep 2024 - Mar 2025",
    location: "Dallas, United States (Remote)",
    description: "Developed machine learning solutions involving preprocessing, feature engineering, model optimization, and AI-driven analysis workflows.",
    bullets: [
      "Built predictive models using TensorFlow and automated data processing workflows.",
      "Worked on AI-powered genetic data analysis to identify meaningful patterns and trends.",
      "Debugged complex data pipelines and optimized machine learning workflows.",
      "Collaborated with the AI team to deliver scalable machine learning solutions."
    ],
    links: [
      {
        label: "Internship Certificate",
        url: "https://drive.google.com/file/d/1JGsPUSDWZCwUHAFFue4T2ovac-8Sd6ms/view?usp=drive_link"
      },
      {
        label: "Letter of Recommendation",
        url: "https://drive.google.com/file/d/1cab_xR-EXWp_mmpu0jTfbXcgPJZRQ985/view?usp=drive_link"
      }
    ]
  }
],
  education: [
    { duration: "2022 - 2026", title: "Indian Institute of Technology, Jodhpur", location: "Jodhpur, Rajasthan", text: "Completed B.Tech in Computer Science and Engineering" },
    { duration: "2020 - 2022", title: "Sri Chaitanya Junior College", location: "Vijayawada, Andhra Pradesh", text: "12th Grade | Percentage: 94.6%" },
    { duration: "2020", title: "Sri Chaitanya Techno School", location: "Vijayawada, Andhra Pradesh", text: "10th Grade | Percentage: 98.5%" },
  ],
  skills: [
    { title: "Programming Languages", items: ["Python", "HTML", "CSS", "JavaScript", "C", "C++", "Verilog", "LaTeX"] },
    { title: "AI & Machine Learning", items: ["TensorFlow", "Scikit-Learn", "Flask", "OpenCV", "NLP", "Computer Vision"] },
    { title: "Frontend", items: ["React.js", "Responsive UI", "HTML5", "CSS3", "Bootstrap", "Accessibility"] },
    { title: "Backend", items: ["Node.js", "Express.js", "Flask", "REST APIs", "Authentication", "System Design"] },
    { title: "Databases", items: ["MySQL", "MongoDB", "Oracle DB", "PostgreSQL", "Database Design"] },
    { title: "Cloud", items: ["Google Cloud (GCP)", "Auto scaling", "Deployment", "Resource monitoring"] },
    { title: "DevOps", items: ["Git", "GitHub", "CI/CD concepts", "System testing", "Docker workflows"] },
    { title: "Tools", items: ["VS Code", "Wireshark", "Keil μVision", "Xilinx Vivado", "Xilinx PYNQ", "Google Cloud console"] },
  ],
  projects: [
    { title: "StudyBuddy", image: "Images/studybuddy.png", description: "A full-stack study partner platform connecting university students by shared courses, availability, and interests. It includes secure authentication, real-time chat, study session scheduling, profile management, and a responsive MERN-based interface.", technologies: ["MongoDB", "Express.js", "React", "Node.js", "Socket.IO"], githubUrl: "https://github.com/sujayv16/Studybuddy_SDE", demoUrl: null },
    { title: "Student Result Portal", image: "Images/srps.png", description: "A secure web application built with PHP and MySQL to manage student registration, academic results, and reporting. Features include role-based access control, transaction management, and dynamic query building for data security and integrity.", technologies: ["PHP", "MySQL", "Security", "Transactions"], githubUrl: "https://github.com/sujayv16/Student-Result-Portal", demoUrl: null },
    { title: "Hybrid Adaptive Tuple Partitioning", image: "Images/partitioning.png", description: "A research-driven distributed database project proposing a hybrid adaptive tuple partitioning framework combining graph-based partitioning, lookup-table routing, workload drift detection, and live migration for large-scale OLTP systems.", technologies: ["Distributed DB", "Graph Algorithms", "Routing", "Migration"], githubUrl: "https://github.com/sujayv16/Hybrid-Adaptive-Tuple-Partitioning-for-Large-Distributed-Database-Systems", demoUrl: null },
    { title: "Facial Detection and Clustering", image: "Images/facial.png", description: "A facial detection and clustering system using Python and OpenCV to identify and group similar faces from datasets with deep-learning face embeddings and unsupervised clustering.", technologies: ["Python", "OpenCV", "Embeddings", "Clustering"], githubUrl: "https://github.com/sujayv16/facial-detection-and-clustering", demoUrl: null },
    { title: "ConvoFlow", image: "Images/convo.png", description: "A real-time messaging service with secure registration, instant messaging, WebRTC-based video calls, and an AI chatbot for enhanced communication.", technologies: ["Socket.IO", "WebRTC", "Chat", "AI Assistant"], githubUrl: "https://github.com/sujayv16/ConvoFlow", demoUrl: null },
    { title: "Cloud Efficiency Agent", image: "Images/cloud.jpg", description: "An AI-driven system for dynamic resource allocation and node failure prediction in cloud environments using reinforcement learning and predictive models to optimize cloud resource management.", technologies: ["Reinforcement Learning", "Cloud", "Prediction", "Automation"], githubUrl: "https://github.com/sujayv16/Cloud-Efficiency-Agent", demoUrl: null },
    { title: "Optical Modeling of Perovskite Solar Cells", image: "Images/perovskite.png", description: "A computational physics project implementing the Transfer Matrix Method to simulate light propagation, reflection, absorption, and optical losses in multilayer perovskite solar cells for photocurrent estimation and device optimization.", technologies: ["Python", "Physics Simulation", "TMM", "Optimization"], githubUrl: "https://github.com/sujayv16/Optical-Modeling-and-Optimization-of-Perovskite-Solar-Cells", demoUrl: null },
    { title: "Rethinking Evaluation Methods for Unsupervised Word Embeddings", image: "Images/word-embeddings.png", description: "An NLP research presentation analyzing intrinsic, comparative, coherence, and extrinsic evaluation methods while highlighting the impact of word frequency on embedding quality and downstream NLP performance.", technologies: ["NLP", "Word Embeddings", "Evaluation", "Research"], githubUrl: "https://github.com/sujayv16/Rethinking-Evaluation-Methods-for-Unsupervised-Word-Embeddings", demoUrl: null },
    { title: "Seekho-Sikhhao", image: "Images/seekho-sikhhao.png", description: "A community-driven peer learning platform for class booking, skill matchmaking, Google authentication, QR-based attendance, wallet payments, and AI-powered recommendations using Next.js, Node.js, PostgreSQL, and Prisma.", technologies: ["Next.js", "Node.js", "PostgreSQL", "Prisma"], githubUrl: "https://github.com/sujayv16/seekho-sikhhao", demoUrl: null },
    { title: "Handwritten Digit Recognition", image: "Images/handwritten.png", description: "A TensorFlow model that recognizes handwritten digits using the MNIST dataset with a 99% accuracy rate.", technologies: ["TensorFlow", "MNIST", "Classification", "Deep Learning"], githubUrl: "https://github.com/sujayv16/PRML_PROJECT", demoUrl: null },
    { title: "Comprehensive Health Prognosticator", image: "Images/health.png", description: "A web-based disease prediction tool using machine learning models like Decision Trees and Logistic Regression to predict diseases including heart disease, diabetes, cancer, kidney, and liver disease.", technologies: ["Machine Learning", "Decision Trees", "Logistic Regression", "Healthcare"], githubUrl: "https://github.com/sujayv16/comprehensive-health-prognosticator", demoUrl: null },
    { title: "AI Podcast Generator", image: "Images/podcast.png", description: "Generate professional podcast scripts and lifelike audio using OpenAI's GPT-3.5-turbo and ElevenLabs text-to-speech through a FastAPI backend and a simple web frontend.", technologies: ["OpenAI", "ElevenLabs", "FastAPI", "TTS"], githubUrl: "https://github.com/sujayv16/AI-podcast-generator", demoUrl: null },
    { title: "DEFINI-tech", image: "Images/defini.png", description: "A Chrome extension providing word definitions, synonyms, and pronunciations via the DictionaryAPI and Datamuse API with real-time suggestions to improve the browsing experience.", technologies: ["Chrome Extension", "APIs", "Browser UX"], githubUrl: "https://github.com/sujayv16/DEFINI-tech", demoUrl: null },
    { title: "Content-Check", image: "Images/contentcheck.png", description: "A web application that compares user-generated text against online content to measure similarity using NLP techniques, web scraping, text purification, and similarity assessment.", technologies: ["NLP", "BeautifulSoup", "NLTK", "Similarity"], githubUrl: "https://github.com/sujayv16/Content-Check", demoUrl: null },
    { title: "Dynamic Load Balancer", image: "Images/load.jpg", description: "A CPU load balancer designed for efficient task distribution across multiple cores with real-time CPU monitoring, priority-based task scheduling, and threading.", technologies: ["Systems Programming", "Threading", "Scheduling", "Performance"], githubUrl: "https://github.com/sujayv16/Dynamic-Load-Balancer-for-Multi-Core-Systems", demoUrl: null },
    { title: "Auto-Scaling VM with Resource Monitoring", image: "Images/autoscalevm.png", description: "A system that monitors CPU usage on a local VM and triggers auto-scaling on Google Cloud Platform when usage exceeds 75%. Includes a Flask dashboard and stress testing for scalability.", technologies: ["Flask", "GCP", "Monitoring", "Auto Scaling"], githubUrl: "https://github.com/sujayv16/auto-scaling-vm", demoUrl: null },
    { title: "Handwritten Digit Recognition on Embedded Systems", image: "Images/stmf429.jpg", description: "A handwritten digit recognition system on an STM32F429 microcontroller using the X-CUBE-AI framework, converting a trained neural network into optimized C code for real-time inference.", technologies: ["STM32F429", "X-CUBE-AI", "Embedded AI", "C"], githubUrl: "https://github.com/sujayv16/handwritten-digit-recognition-digital-systems", demoUrl: null },
    { title: "Embedded Systems", image: "Images/pynq.jpg", description: "Quantized deep learning inference of the DoReFa-Net convolutional neural network on the Xilinx PYNQ-Z2 platform with low-bit-width quantization and FPGA acceleration for real-time ImageNet classification.", technologies: ["FPGA", "Quantization", "Xilinx PYNQ", "Deep Learning"], githubUrl: "https://github.com/sujayv16/EMBEDDED-SYSTEMS", demoUrl: null },
    { title: "Remote Execution Simulation with OMNeT++", image: "Images/omnetpp.png", description: "A distributed client-server simulation using OMNeT++ to model remote program execution, message passing, network topology configuration, and event-driven interactions.", technologies: ["OMNeT++", "Simulation", "Networking", "Distributed Systems"], githubUrl: "https://github.com/sujayv16/Remote-Execution-Simulation-with-OMNeT-", demoUrl: null },
    { title: "Electronic Voting Machine", image: "Images/EV.webp", description: "An Electronic Voting Machine designed in Verilog HDL on Xilinx Vivado for FPGA hardware with voter validation, party selection, and vote counting.", technologies: ["Verilog", "FPGA", "Vivado", "Digital Design"], githubUrl: "https://github.com/sujayv16/electronic-voting-machine", demoUrl: null },
    { title: "Microservices Order Management", image: "Images/micro.jpg", description: "A microservice-based order management system deployed across two virtual machines using Flask services and a lightweight HTML frontend for user registration, login, and order processing.", technologies: ["Flask", "Microservices", "Deployment", "HTML"], githubUrl: "https://github.com/sujayv16/microservices-order-management", demoUrl: null },
    { title: "P2P Gossip Protocol", image: "Images/peer.avif", description: "A peer-to-peer gossip protocol that broadcasts messages reliably and monitors peer liveness by registering with seed nodes, exchanging peer lists, and detecting dead nodes.", technologies: ["Networking", "Peer-to-Peer", "Gossip Protocol", "Fault Detection"], githubUrl: "https://github.com/sujayv16/Computer_Network_Assign1", demoUrl: null },
    { title: "Marjaryasana (Cat Pose) Project", image: "Images/marjaryasana.png", description: "A rule-based pose detection system that identifies Marjaryasana using MediaPipe keypoint analysis, angle checks, and geometric alignment rules.", technologies: ["MediaPipe", "Keypoints", "Pose Detection", "Computer Vision"], githubUrl: "https://github.com/sujayv16/marjaryasana", demoUrl: null },
  ],
  achievements: [
    { icon: "fas fa-award", title: "Software Engineering", text: "Secured an A grade in the Software Engineering course in 2024." },
    { icon: "fas fa-medal", title: "NTSE Stage 1", text: "Ranked in the top 0.5% in the National Talent Search Examination Stage 1." },
    { icon: "fas fa-bolt", title: "JEE Success", text: "Cleared JEE Main and Advanced, securing among the top 1% of applicants." },
    { icon: "fas fa-trophy", title: "INEA Hackathon", text: "Ranked 3rd in the Hackathon at INEA Youth Conclave 2022." },
    { icon: "fas fa-users-cog", title: "Joint Secretary", text: "Serving as Joint Secretary of Apno Campus Committee, Board of Student Welfare, IIT Jodhpur." },
    { icon: "fas fa-bullhorn", title: "Ignus PR", text: "Worked as Assistant Head, Public Relations for Ignus, IIT Jodhpur." },
    { icon: "fas fa-clipboard-list", title: "Aaftab PR & Marketing", text: "Worked as Assistant Head, Public Relations and Marketing for Aaftab, IIT Jodhpur." },
    { icon: "fas fa-satellite", title: "NASA Contest", text: "Participated in the NASA Ames Space Settlement Contest and received a special mention." },
    { icon: "fas fa-music", title: "Carnatic Music", text: "Trained in Indian Classical Carnatic music for more than five years and active on piano." },
  ],
  courses: [
    { term: "Jan 2026 - Apr 2026", title: "Natural Language Understanding", source: "IIT Jodhpur" },
    { term: "Jan 2026 - Apr 2026", title: "Graph Theory And Applications", source: "IIT Jodhpur" },
    { term: "Jul 2025 - Dec 2025", title: "Artificial Intelligence", source: "IIT Jodhpur" },
    { term: "Jul 2025 - Dec 2025", title: "Software And Data Engineering", source: "IIT Jodhpur" },
    { term: "Jul 2025 - Dec 2025", title: "Distributed Database Systems", source: "IIT Jodhpur" },
    { term: "Jul 2025 - Dec 2025", title: "B.Tech Project", source: "IIT Jodhpur" },
    { term: "Jan 2025 - Apr 2025", title: "Cyber Security", source: "IIT Jodhpur" },
    { term: "Jan 2025 - Apr 2025", title: "Embedded Systems", source: "IIT Jodhpur" },
    { term: "Jan 2025 - Apr 2025", title: "Computer Networks", source: "IIT Jodhpur" },
    { term: "Jan 2025 - Apr 2025", title: "Computer Vision", source: "IIT Jodhpur" },
    { term: "Jan 2025 - Apr 2025", title: "Virtualization And Cloud Computing", source: "IIT Jodhpur" },
    { term: "Jul 2024 - Dec 2024", title: "Database Systems", source: "IIT Jodhpur" },
    { term: "Jul 2024 - Dec 2024", title: "Design And Analysis Of Algorithms", source: "IIT Jodhpur" },
    { term: "Jul 2024 - Dec 2024", title: "Computer Architecture", source: "IIT Jodhpur" },
    { term: "Jul 2024 - Dec 2024", title: "Operating Systems", source: "IIT Jodhpur" },
    { term: "Jul 2024 - Dec 2024", title: "Principles Of Programming Languages", source: "IIT Jodhpur" },
    { term: "Apr 2024 - Jul 2024", title: "The Complete 2024 Web Development Bootcamp", source: "Udemy" },
    { term: "Jan 2024 - Jul 2024", title: "Complete A.I. & Machine Learning, Data Science Bootcamp", source: "Udemy" },
    { term: "Jan 2024 - Apr 2024", title: "Pattern Recognition And Machine Learning", source: "IIT Jodhpur" },
    { term: "Jan 2024 - Apr 2024", title: "Software Engineering", source: "IIT Jodhpur" },
    { term: "Jan 2024 - Apr 2024", title: "Digital Design", source: "IIT Jodhpur" },
    { term: "Jan 2024 - Apr 2024", title: "Human Machine Interaction", source: "IIT Jodhpur" },
    { term: "Jul 2023 - Dec 2023", title: "Data Structures And Algorithms", source: "IIT Jodhpur" },
    { term: "Jul 2023 - Dec 2023", title: "Maths For Computing", source: "IIT Jodhpur" },
    { term: "Jul 2023 - Dec 2023", title: "Probability Statistics And Stochastic Processes", source: "IIT Jodhpur" },
    { term: "Jul 2023 - Dec 2023", title: "Signals And Systems", source: "IIT Jodhpur" },
    { term: "Jul 2023 - Dec 2023", title: "Foundations Of Quantum Information", source: "IIT Jodhpur" },
    { term: "Jul 2023 - Dec 2023", title: "Quantum Computing", source: "IIT Jodhpur" },
    { term: "Jan 2023 - Apr 2023", title: "Introduction To Computer Science", source: "IIT Jodhpur" },
    { term: "Jan 2023 - Apr 2023", title: "Introduction To Electrical Engineering", source: "IIT Jodhpur" },
  ],
};

const shellFallbacks = {
  navbar: `<nav class="site-nav" id="siteNav" aria-label="Primary"><div class="container site-nav__inner"><a class="site-brand" href="#home" aria-label="Go to top"><span class="site-brand__mark" aria-hidden="true"><span class="site-brand__mark-text">VS</span></span><span>Viswanadhapalli Sujay</span></a><button class="nav-toggle" type="button" aria-label="Toggle navigation" aria-expanded="false" aria-controls="siteMenu"><span></span><span></span><span></span></button><div class="site-nav__menu" id="siteMenu"><a class="site-nav__link" href="#home" data-section="home">Home</a><a class="site-nav__link" href="#about" data-section="about">About</a><a class="site-nav__link" href="#experience" data-section="experience">Experience</a><a class="site-nav__link" href="#education" data-section="education">Education</a><a class="site-nav__link" href="#skills" data-section="skills">Skills</a><a class="site-nav__link" href="#projects" data-section="projects">Projects</a><a class="site-nav__link" href="#courses" data-section="courses">Courses</a><a class="site-nav__link" href="#achievements" data-section="achievements">Achievements</a><a class="site-nav__link" href="#contact" data-section="contact">Contact</a></div></div></nav>`,
  hero: `<section id="home" class="section hero"><div class="container hero__grid"><div class="hero__content reveal"><span class="profile-badge"><i class="fas fa-sparkles" aria-hidden="true"></i> Software Engineer · AI/ML · Research</span><div class="hero-title-row"><h1 class="eyebrow">Viswanadhapalli Sujay</h1><h2 class="hero__title">Building <span class="text-gradient">reliable software</span> and practical AI systems.</h2></div><p class="hero__lead" data-hero-lead></p><div class="hero__actions"><a class="btn btn--primary" href="https://drive.google.com/file/d/1nzkvv2DBDO3b8IH9Ba2gcTU1K8L1hyWe/view?usp=sharing" target="_blank" rel="noreferrer">View CV</a><a class="btn btn--secondary" href="#projects">Explore Projects</a><a class="btn btn--ghost" href="#contact">Get in Touch</a></div><div class="hero__socials" data-hero-socials></div></div><div class="hero__visual reveal"><div class="hero__portrait float-slow"><img id="tilt" src="Images/profile.jpg" alt="Portrait of Viswanadhapalli Sujay" width="380" height="380"></div><div class="hero__stats" data-hero-stats></div></div></div></section>`,
  about: `<section id="about" class="section section--soft"><div class="container"><header class="section__header"><span class="section__eyebrow"><i class="fas fa-user-alt" aria-hidden="true"></i> About</span><h2 class="section__title">Graduate profile and professional background</h2></header><article class="about-card section-pad-md" data-about-story></article></div></section>`,
  experience: `<section id="experience" class="section"><div class="container"><header class="section__header"><span class="section__eyebrow"><i class="fas fa-briefcase" aria-hidden="true"></i> Experience</span><h2 class="section__title">Experience that spans software, AI, and applied research.</h2></header><div class="experience__grid" data-experience-grid></div></div></section>`,
  education: `<section id="education" class="section section--soft"><div class="container"><header class="section__header"><span class="section__eyebrow"><i class="fas fa-graduation-cap" aria-hidden="true"></i> Education</span><h2 class="section__title">A timeline view of IIT Jodhpur and earlier academic milestones.</h2></header><div class="education__grid timeline" data-education-grid></div></div></section>`,
  skills: `<section id="skills" class="section"><div class="container"><header class="section__header"><span class="section__eyebrow"><i class="fas fa-star" aria-hidden="true"></i> Skills</span><h2 class="section__title">Practical categories across software, AI, cloud, and tools.</h2><p class="section__subtitle">A concise skills grid keeps the layout readable on every screen size.</p></header><div class="skills__grid" data-skill-grid></div></div></section>`,
  projects: `<section id="projects" class="section section--soft"><div class="container"><header class="section__header"><span class="section__eyebrow"><i class="fas fa-laptop-code" aria-hidden="true"></i> Projects</span><h2 class="section__title">Responsive project cards with tech tags and direct GitHub access.</h2></header><div class="projects__grid" data-project-grid></div></div></section>`,
  courses: `<section id="courses" class="section"><div class="container"><header class="section__header"><span class="section__eyebrow"><i class="fas fa-book" aria-hidden="true"></i> Courses</span><h2 class="section__title">Selected coursework, ordered from newest to oldest.</h2><p class="section__subtitle">A single browseable list that keeps the layout clean on every screen size.</p></header><div class="courses__grid" data-course-grid></div></div></section>`,
  achievements: `<section id="achievements" class="section section--soft"><div class="container"><header class="section__header"><span class="section__eyebrow"><i class="fas fa-trophy" aria-hidden="true"></i> Achievements</span><h2 class="section__title">Honors, leadership roles, and recognition in one place.</h2></header><div class="achievements__grid" data-achievement-grid></div></div></section>`,
  contact: `<section id="contact" class="section section--soft"><div class="container"><header class="section__header"><span class="section__eyebrow"><i class="fas fa-envelope" aria-hidden="true"></i> Contact</span><h2 class="section__title">A lighter, cleaner way to get in touch.</h2></header><div class="glass-card section-pad-md"><form id="contactForm" action="https://formspree.io/f/xpwpwjey" method="POST" class="stack" novalidate><div class="form-grid"><div class="form-field"><label for="name">Name</label><input type="text" id="name" name="name" placeholder="Enter your name" autocomplete="name" required></div><div class="form-field"><label for="email">Email</label><input type="email" id="email" name="email" placeholder="Enter your email" autocomplete="email" required></div></div><div class="form-field"><label for="message">Message</label><textarea id="message" name="message" rows="6" placeholder="Tell me about your idea, role, or project" required></textarea></div><div class="card-actions"><button class="btn btn--primary" type="submit">Send Message</button><a class="btn btn--secondary" href="mailto:contact.sujayv16@gmail.com">Email Directly</a></div></form></div></div></section>`,
  footer: `<footer class="site-footer"><div class="container site-footer__inner"><div><strong>Viswanadhapalli Sujay</strong><div class="muted">Software Developer, IIT Jodhpur</div></div><div id="clock" class="pill" aria-live="polite"></div></div></footer>`,
};

const componentHtmlCache = new Map();

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

async function loadComponentShell(name) {
  if (componentHtmlCache.has(name)) {
    return componentHtmlCache.get(name);
  }

  try {
    const response = await fetch(`components/${name}.html`, { cache: "no-cache" });
    if (!response.ok) {
      throw new Error(`Failed to load ${name}`);
    }
    const html = await response.text();
    componentHtmlCache.set(name, html);
    return html;
  } catch (error) {
    const fallback = shellFallbacks[name] ?? "";
    componentHtmlCache.set(name, fallback);
    return fallback;
  }
}

function renderHero() {
  const lead = document.querySelector("[data-hero-lead]");
  const socials = document.querySelector("[data-hero-socials]");
  const stats = document.querySelector("[data-hero-stats]");

  if (lead) {
    lead.textContent = PORTFOLIO_DATA.hero.lead;
  }

  if (socials) {
    socials.innerHTML = PORTFOLIO_DATA.hero.socials
      .map((item) => `
          <a class="icon-btn" href="${item.href}" target="_blank" rel="noreferrer" aria-label="${escapeHtml(item.label)}">
            <i class="${item.icon}" aria-hidden="true"></i>
            <span class="sr-only">${escapeHtml(item.label)}</span>
          </a>
        `)
      .join("");
  }

  if (stats) {
    stats.innerHTML = PORTFOLIO_DATA.hero.stats
      .map((item) => `
          <div class="hero-stat stagger-item">
            <div class="hero-stat__value">${escapeHtml(item.value)}</div>
            <div class="hero-stat__label">${escapeHtml(item.label)}</div>
          </div>
        `)
      .join("");
  }
}

function renderAbout() {
  const story = document.querySelector("[data-about-story]");

  if (story) {
    story.innerHTML = PORTFOLIO_DATA.about.story;
  }
}

function renderExperience() {
  const grid = document.querySelector("[data-experience-grid]");
  if (!grid) return;

  grid.innerHTML = PORTFOLIO_DATA.experience
    .map((item, index) => `
      <article class="experience-card reveal"
               data-aos="fade-up"
               data-aos-delay="${index * 70}">

        <div class="meta-line meta-line--spaced">
          <span class="pill pill--accent">${escapeHtml(item.duration)}</span>
          <span class="pill">${escapeHtml(item.location)}</span>
        </div>

        <div class="flex-row">
          <div class="project-card__image logo-frame">
            <img src="${item.logo}" alt="${escapeHtml(item.company)} logo" loading="lazy">
          </div>

          <div>
            <h3 class="experience-card__title">${escapeHtml(item.role)}</h3>
            <div class="meta-line meta-line--top">
              <span>${escapeHtml(item.company)}</span>
            </div>
          </div>
        </div>

        <p class="text-block--top">${escapeHtml(item.description)}</p>

        <ul class="experience-points">
          ${item.bullets
            .map(bullet => `<li class="pill list-pill">${escapeHtml(bullet)}</li>`)
            .join("")}
        </ul>

        ${
          item.links
            ? `
            <div class="card-actions" style="margin-top:1rem;">
              ${item.links
                .map(link => `
                  <a class="btn btn--secondary"
                     href="${link.url}"
                     target="_blank"
                     rel="noreferrer">
                    <i class="fas fa-external-link-alt"></i>
                    ${escapeHtml(link.label)}
                  </a>
                `)
                .join("")}
            </div>
            `
            : ""
        }

      </article>
    `)
    .join("");
}

function renderEducation() {
  const grid = document.querySelector("[data-education-grid]");
  if (!grid) {
    return;
  }

  grid.innerHTML = PORTFOLIO_DATA.education
    .map((item, index) => `
        <article class="education-card timeline__item reveal" data-aos="fade-up" data-aos-delay="${index * 70}">
          <div class="meta-line">
            <span class="pill pill--accent">${escapeHtml(item.duration)}</span>
            <span class="pill">${escapeHtml(item.location)}</span>
          </div>
          <h3 class="education-card__title stack-gap-md">${escapeHtml(item.title)}</h3>
          <p class="stack-gap-sm">${escapeHtml(item.text)}</p>
        </article>
      `)
    .join("");
}

function renderSkills() {
  const grid = document.querySelector("[data-skill-grid]");
  if (!grid) {
    return;
  }

  grid.innerHTML = PORTFOLIO_DATA.skills
    .map((group, index) => `
        <section class="skill-group reveal" data-aos="fade-up" data-aos-delay="${index * 60}">
          <h3 class="project-card__title">${escapeHtml(group.title)}</h3>
          <div class="skill-badges stack-gap-lg">
            ${group.items.map((item) => `<span class="pill">${escapeHtml(item)}</span>`).join("")}
          </div>
        </section>
      `)
    .join("");
}

function createProjectCard(item, index) {
  return `
    <article class="project-card reveal" data-aos="fade-up" data-aos-delay="${index * 50}">
      <div class="project-card__image">
        <img src="${item.image}" alt="${escapeHtml(item.title)} screenshot" loading="lazy">
      </div>
      <h3 class="project-card__title">${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.description)}</p>
      <div class="project-tags">
        ${item.technologies.map((tag) => `<span class="pill">${escapeHtml(tag)}</span>`).join("")}
      </div>
      <div class="card-actions stack-gap-lg">
        <a class="btn btn--secondary" href="${item.githubUrl}" target="_blank" rel="noreferrer"><i class="fab fa-github" aria-hidden="true"></i> GitHub</a>
        ${item.demoUrl ? `<a class="btn btn--primary" href="${item.demoUrl}" target="_blank" rel="noreferrer">Demo</a>` : ""}
      </div>
    </article>
  `;
}

function renderProjects() {
  const grid = document.querySelector("[data-project-grid]");
  if (!grid) {
    return;
  }

  grid.innerHTML = PORTFOLIO_DATA.projects.map(createProjectCard).join("");
}

function renderCourses() {
  const grid = document.querySelector("[data-course-grid]");
  if (!grid) {
    return;
  }

  grid.innerHTML = PORTFOLIO_DATA.courses
    .map((course, index) => `
        <article class="course-card reveal" data-aos="fade-up" data-aos-delay="${index * 35}">
          <div class="meta-line">
            <span class="pill pill--accent">${escapeHtml(course.term)}</span>
            <span class="pill">${escapeHtml(course.source)}</span>
          </div>
          <h3 class="course-card__title stack-gap-md">${escapeHtml(course.title)}</h3>
        </article>
      `)
    .join("");
}

function renderAchievements() {
  const grid = document.querySelector("[data-achievement-grid]");
  if (!grid) {
    return;
  }

  grid.innerHTML = PORTFOLIO_DATA.achievements
    .map((item, index) => `
        <article class="achievement-card reveal" data-aos="fade-up" data-aos-delay="${index * 45}">
          <div class="meta-line" style="margin-bottom: 0.9rem;">
            <span class="pill pill--accent"><i class="${item.icon}" aria-hidden="true"></i></span>
          </div>
          <h3 class="achievement-card__title">${escapeHtml(item.title)}</h3>
          <p class="stack-gap-md">${escapeHtml(item.text)}</p>
        </article>
      `)
    .join("");
}

function initHeroRotator() {
  const lead = document.querySelector("[data-hero-lead]");
  if (!lead) {
    return;
  }

  const existing = document.querySelector(".hero-rotator");
  if (existing) {
    existing.remove();
  }

  const rotator = document.createElement("div");
  rotator.className = "hero-rotator";
  rotator.setAttribute("aria-live", "polite");
  rotator.innerHTML = PORTFOLIO_DATA.hero.rotate.map((word, index) => `<span class="${index === 0 ? "is-visible" : ""}">${escapeHtml(word)}</span>`).join("");
  lead.insertAdjacentElement("beforebegin", rotator);

  const spans = Array.from(rotator.querySelectorAll("span"));
  let current = 0;
  window.setInterval(() => {
    spans[current].classList.remove("is-visible");
    current = (current + 1) % spans.length;
    spans[current].classList.add("is-visible");
  }, 2600);
}

async function mountPortfolio() {
  const root = document.querySelector("[data-portfolio-root]");
  if (!root) {
    return;
  }

  // If already pre-rendered in HTML, skip fetching components but set up client-side features
  if (document.querySelector("#home")) {
    initHeroRotator();
    document.dispatchEvent(new CustomEvent("portfolio:components-loaded"));
    return;
  }

  const htmlParts = await Promise.all(PORTFOLIO_COMPONENTS.map((component) => loadComponentShell(component)));
  root.innerHTML = htmlParts.join("");

  renderHero();
  renderAbout();
  renderExperience();
  renderEducation();
  renderSkills();
  renderProjects();
  renderCourses();
  renderAchievements();
  initHeroRotator();

  document.dispatchEvent(new CustomEvent("portfolio:components-loaded"));
}

document.addEventListener("DOMContentLoaded", mountPortfolio);
