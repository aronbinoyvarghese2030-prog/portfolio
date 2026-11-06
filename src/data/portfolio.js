/**
 * Centralized Portfolio Data for Aron Binoy Varghese
 * Keep all personal information, projects, skills, education, and links here
 * so updates can be made without touching multiple UI components.
 */

export const personalInfo = {
  name: "Aron Binoy Varghese",
  initials: "ABV",
  label: "HELLO, I'M",
  title: "First-year Computer Science Engineering Student",
  headline: "Computer Science Engineering Student",
  tagline: "Exploring technology, building ideas and turning curiosity into practical projects.",
  location: "Kerala, India",
  college: "Amal Jyothi College of Engineering",
  academicStatus: "B.Tech – First Year",
  email: "aronbinoyvarghses123@gmail.com",
  
  // Social links - configurable. Set url to string when verified, or null when awaiting profile.
  socials: {
    github: {
      label: "GitHub",
      url: null, // Awaiting verified profile URL
      status: "Awaiting verified profile URL",
      configured: false
    },
    linkedin: {
      label: "LinkedIn",
      url: null, // Awaiting profile URL
      status: "Awaiting profile URL",
      configured: false
    },
    email: {
      label: "Email",
      url: "mailto:aronbinoyvarghses123@gmail.com",
      status: "Direct email contact",
      configured: true
    }
  },

  bio: [
    "I'm Aron Binoy Varghese, a first-year Computer Science Engineering student with a strong interest in technology and innovation.",
    "I'm currently developing my programming fundamentals and exploring areas such as software development, artificial intelligence and web development.",
    "I enjoy learning through hands-on projects, experimenting with new ideas and collaborating with others to create meaningful solutions."
  ],

  careerInterests: [
    {
      title: "Software Development",
      description: "Building reliable, maintainable software systems and strengthening problem-solving foundations through clean code.",
      icon: "Code2"
    },
    {
      title: "Artificial Intelligence",
      description: "Exploring machine learning models, computer vision, and data-driven solutions for real-world impact.",
      icon: "Cpu"
    },
    {
      title: "Web Development",
      description: "Creating responsive, accessible, and modern user interfaces with contemporary frontend standards.",
      icon: "Globe"
    }
  ],

  highlights: [
    { label: "Current Focus", value: "C, Python & Web Fundamentals" },
    { label: "Institution", value: "Amal Jyothi College of Engg." },
    { label: "Location", value: "Kerala, India" },
    { label: "Status", value: "Active Undergraduate" }
  ]
};

export const skillsData = {
  categories: [
    {
      id: "programming",
      name: "Programming Languages",
      description: "Core algorithmic foundations and problem-solving languages",
      skills: [
        {
          name: "C",
          level: "Academic Foundations",
          badge: "Core Language",
          description: "Structured programming, memory concepts, pointer arithmetic, and algorithmic logic.",
          icon: "Binary",
          color: "text-blue-600 bg-blue-50 border-blue-200"
        },
        {
          name: "Python",
          level: "Beginner",
          badge: "Exploring",
          description: "Scripting basics, data structures, automation concepts, and foundational syntax for AI exploration.",
          icon: "Terminal",
          color: "text-emerald-600 bg-emerald-50 border-emerald-200"
        }
      ]
    },
    {
      id: "web-dev",
      name: "Web Development",
      description: "Building blocks of web interfaces and styling",
      skills: [
        {
          name: "HTML",
          level: "Foundations",
          badge: "Structure",
          description: "Semantic markup, document structure, accessibility conventions, and modern web standards.",
          icon: "FileCode2",
          color: "text-amber-600 bg-amber-50 border-amber-200"
        },
        {
          name: "CSS",
          level: "Foundations",
          badge: "Styling & Layout",
          description: "Box model, responsive layouts with Flexbox and Grid, typography, and visual styling.",
          icon: "Palette",
          color: "text-indigo-600 bg-indigo-50 border-indigo-200"
        }
      ]
    }
  ],
  learningRoadmap: [
    { name: "Data Structures & Algorithms", status: "In Progress" },
    { name: "Modern JavaScript (ES6+)", status: "Next Target" },
    { name: "Git & Version Control", status: "Active Learning" },
    { name: "Introductory Computer Vision", status: "Exploring" }
  ]
};

export const projectsData = [
  {
    id: "cardamom-ai",
    title: "AI-Powered Cardamom Plantation Disease Detection and Yield Intelligence",
    shortTitle: "Cardamom AI Disease & Yield Intelligence",
    category: "Artificial Intelligence | Agriculture Technology",
    status: "Active Prototyping & Research",
    featured: true,
    description: "An AI-based agricultural technology project focused on identifying potential diseases in cardamom plantations and providing yield intelligence using data-driven approaches.",
    highlights: [
      "Targeted at high-value cardamom crops vulnerable to blight, capsule rot, and pest infestations.",
      "Exploring image recognition to identify early foliar and capsule infection symptoms.",
      "Designed to aid farmers in Kerala's highland agricultural zones with timely data-backed yield insights."
    ],
    technologies: [
      "Artificial Intelligence",
      "Agriculture Technology",
      "Image Processing Concept",
      "Yield Intelligence",
      "Python"
    ],
    githubUrl: null, // No fabricated link - will be displayed with an honest awaiting/in-dev tag
    demoUrl: null,
    imagePlaceholder: "cardamom-ai"
  },
  {
    id: "teammate-finder",
    title: "Teammate Finder App",
    shortTitle: "Student Teammate Finder Platform",
    category: "Web Development | Collaboration Platform",
    status: "Concept & Interface Architecture",
    featured: true,
    description: "A concept for a platform that helps students discover potential teammates based on shared interests, skills and project ideas.",
    highlights: [
      "Solves the common hurdle of forming complementary teams for hackathons, engineering mini-projects, and study groups.",
      "Filter peers by tech stack (e.g., Python, C, Web Dev), project domain, and availability.",
      "Clean matchmaking interface promoting peer-to-peer collaboration and student innovation."
    ],
    technologies: [
      "Web Development",
      "Collaboration Platform",
      "UI/UX Design",
      "HTML/CSS/JS",
      "Student Community"
    ],
    githubUrl: null,
    demoUrl: null,
    imagePlaceholder: "teammate-finder"
  }
];

export const educationData = [
  {
    institution: "Amal Jyothi College of Engineering",
    program: "B.Tech – Computer Science and Engineering",
    currentStatus: "First-year student",
    location: "Kerala, India",
    affiliation: "Affiliated to APJ Abdul Kalam Technological University (KTU)",
    description: "Building rigorous computer science engineering foundations covering structured programming in C, mathematical foundations, basic engineering principles, and emerging technology exploration.",
    currentFocus: [
      "Problem Solving & Algorithmic Thinking in C",
      "Engineering Mathematics & Discrete Structures",
      "Digital Electronics & Computing Hardware Basics",
      "Active participation in campus tech clubs and seminars"
    ]
  }
];

export const experienceData = {
  message: "Currently focused on learning, developing technical skills and building projects.",
  subtext: "As a dedicated first-year undergraduate, I am prioritizing strong programming fundamentals, collaborative engineering projects, and self-directed skill building. Open to future internships, mentorship, and hackathon opportunities.",
  entries: [] // Transparent, no fabricated entries
};

export const achievementsData = {
  message: "Academic & Tech Activities In Progress",
  subtext: "Currently participating in college technical orientations, coding workshops, and campus community sessions. Verified hackathons, competitive programming milestones, and awards will be highlighted here as they unfold.",
  entries: [] // Clean empty state ready to scale
};

export const certificationsData = {
  message: "Foundational Courses Underway",
  subtext: "Currently progressing through computer science engineering curriculum courses and structured self-study in Python and modern web fundamentals. Verified course certifications will be updated upon completion.",
  entries: [] // Clean empty state ready to scale
};

export const resumeData = {
  heading: "Want to Know More About Me?",
  description: "Explore my resume to learn more about my education, technical skills and projects.",
  filePath: "/resume.pdf",
  available: false // Flag to show transparent notice if file hasn't been uploaded yet
};

