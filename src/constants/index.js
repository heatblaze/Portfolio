import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript
} from "../assets/icons";

import threejs from '../assets/icons/threejs.png'; // ✅ your direct import
import qiskit from '../assets/icons/qiskit.png';
import streamlit from '../assets/icons/streamlit.png';
import firebase from '../assets/icons/firebase.png';
import python from '../assets/icons/python.png';
import java from '../assets/icons/java.png'
import mysql from '../assets/icons/mysql.png'
import matplotlib from '../assets/icons/matplotlib.png'
import C from '../assets/icons/C.png'
import kali from '../assets/icons/kali.png'
import scikit from '../assets/icons/scikit.png'
import plotly from '../assets/icons/plotly.png'
import manipal from '../assets/images/manipal.jpg';
import gdsc from '../assets/images/gdsc.png';
import quantum1 from '../assets/images/quantum1.png';
import lawyer from '../assets/images/lawyer.png';
import code from '../assets/images/code.png';
import levelup from '../assets/images/levelup.png';
import encrypt from '../assets/images/encrypt.png';
import malware from '../assets/images/malware.png';
import ibm from '../assests/icons/ibm.jpg';

export const skills = [
    {
        imageUrl: python,
        name: "Python",
        type: "Frontend",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: threejs,
        name: "Three.js",
        type: "Frontend",
      },
      
    {
        imageUrl: qiskit,
        name: "Qiskit",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: streamlit,
        name: "Streamlit",
        type: "State Management",
    },
    {
        imageUrl: firebase,
        name: "Firebase",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: mysql,
        name: "MySql",
        type: "Frontend",
    },
    {
        imageUrl: C,
        name: "C",
        type: "Frontend",
    },
    {
        imageUrl: kali,
        name: "Kali Linux",
        type: "OS",
    },
    {
        imageUrl: scikit,
        name: "scikit-learn",
        type: "ML",
    },
    {
        imageUrl: plotly,
        name: "plotly",
        type: "Data Visualization",
    },
    {
        imageUrl: matplotlib,
        name: "matplotlib",
        type: "Data Visualization",
    },
];

export const experiences = [
    {
        title: "Vice Fest Head",
        company_name: "MIT Bengaluru",
        icon: manipal,
        iconBg: "#ffbe7e",
        date: "Jan 2024 - Aug 2024",
        points: [
            "Led a team of 100+ students for the planning and execution of college's tech festival.",
            "Coordinated logistics, marketing, and event tech development, resulting in a footfall of 1500+",
            "Leaded cross-club collaboration and digital promotion strategy.",
            "Organized various hackathons, competitions, industry connect session.",
        ],
    },
    {
        title: "General Secretary & Treasurer",
        company_name: "GDSC MIT Bengaluru",
        icon: gdsc,
        iconBg: "#f4f2f2",
        date: "Mar 2024 - Present",
        points: [
            "Developed and maintained internal tracking spreadsheets for budget allocations, cutting overspending by 15%.",
            "Supported data-driven planning for technical workshops (avg. 60+ attendees), leveraging registration data and past event metrics.",
            "Assisted in organizing and coordinating chapter activities, workshops, and technical events.",
            "Created financial reports using Excel and Google Sheets with pivot tables and conditional logic.",
        ],
    },
    {
        title: "Cultural Secretary",
        company_name: "MAHE Bengaluru",
        icon: manipal,
        iconBg: "#ffbe7e",
        date: "Mar 2025 - Present",
        points: [
            "Represented MAHE Bengaluru at UTSAV'25, the Inter-MAHE Cultural Fest, coordinating participation across multiple cultural domains.",
            "Led a team of student performers and volunteers, ensuring effective delegation, scheduling, and logistics management for the event.",
            "Collaborated with faculty and fest coordinators to streamline pre-event preparation, registration, and performance entries.",
        ],
    },
  {
        title: "AI Intern",
        company_name: "IBM",
        icon: ibm,
        iconBg: "#aae9fe",
        date: "June 2025 - Present",
        points: [
            "Developing AI/ML project under mentorship, focusing on real-world-problem-solving using supervised learning techniques.",
            "Collaborated remotely with IBM professionals, attending weekly technical sessions and Q&A discussions to refine models and implementation strategy.",
            "Gained hands-on experience with industry tools and best practices in data preprocessing, model training, and performance evaluation.",
        ],
    },
    
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/heatblaze',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/aditya-chitransh-213583275/',
    }
];

export const projects = [
    {
      iconUrl: quantum1,
      theme: 'bg-red-500',
      name: 'Quantum Risk Predictor',
      description: 'Created a credit risk prediction app using hybrid models to analyze loan applicant behavior and assess default likelihood.',
      link: 'https://github.com/heatblaze/Qunatum-ML-for-Financial-Risk-Prediction',
    },
    {
      iconUrl: lawyer,
      theme: 'bg-green-500',
      name: 'Smart Legal Assistant',
      description: 'Developed a legal assistant that analyzes uploaded documents, asks intelligent follow-up questions, and provides case insights.',
      link: 'https://github.com/heatblaze/Smart-Legal-Assistant',
    },
    {
      iconUrl: code,
      theme: 'bg-blue-500',
      name: 'Collaborative Code Editor',
      description: 'Built a real-time code editor enabling multiple users to write and edit code simultaneously with live syncing and collaboration.',
      link: 'https://github.com/heatblaze/Collabrative-Code-Editor',
    },
    {
      iconUrl: levelup,
      theme: 'bg-pink-500',
      name: 'Solo Leveling Habit Tracker',
      description: 'Designed a gamified habit tracker with leveling, radar stats, and calendar-based progress visualization inspired by Solo Leveling.',
      link: 'https://github.com/heatblaze/Habit-Tracker-Solo-Leveling-Themed',
    },
    {
      iconUrl: encrypt,
      theme: 'bg-black',
      name: ' Secure Voice Communication App',
      description: 'Developed a secure real-time voice chat app with encryption, live connection indicators, and encrypted audio playback support.',
      link: 'https://github.com/heatblaze/audio-encryption',
    },
    {
      iconUrl: malware,
      theme: 'bg-yellow-400',
      name: 'Memory Forensics for Malware Analysis',
      description: 'Built a tool to scan memory dumps and detect hidden malware by analyzing patterns and suspicious memory segments.',
      link: 'https://github.com/heatblaze/Memory-Forensics-for-Malware-Analysis',
    }
  ];
  
