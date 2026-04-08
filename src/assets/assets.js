import { FaHtml5, FaCss3Alt, FaReact, FaJsSquare, FaBootstrap, FaGithubSquare, FaGitAlt } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { IoMdDoneAll } from "react-icons/io";
import { SiRedux } from 'react-icons/si';
import { PiFileCpp } from 'react-icons/pi';
import { RxSwitch } from "react-icons/rx";
import newsly from './newsly.png'
import mm from './mm.png'
import news from './news.png'
import to from './to.png'
import Picture from './superior.png'
import Ehsaas from './ehsaas.png'
import muaaz from './muaaz.png';
import mshs from './mshs.png'
import hospital from './hospital.png'
import cv from './Maaz Ishtiaq.pdf'

export const assets = {
    muaaz,
    Picture,
    mshs,
    Ehsaas,
    cv
}

export const skills = [
    {
        name: 'HTML',
        Icon: FaHtml5,
        txclass: "text-orange-600",
        bgclass: "bg-orange-600 w-[96%]"
    },
    {
        name: 'CSS',
        Icon: FaCss3Alt,
        txclass: "text-blue-600",
        bgclass: "bg-blue-600 w-[87%]"
    },
    {
        name: 'JavaScript',
        Icon: FaJsSquare,
        txclass: "text-yellow-500",
        bgclass: "bg-yellow-500 w-[90%]"
    },
    {
        name: 'React',
        Icon: FaReact,
        txclass: "text-blue-400",
        bgclass: "bg-blue-400 w-[80%]"
    },
    {
        name: 'Redux',
        Icon: SiRedux,
        txclass: "text-purple-600",
        bgclass: "bg-purple-600 w-[70%]"
    },
    {
        name: 'Tailwind CSS',
        Icon: RiTailwindCssFill,
        txclass: "text-cyan-400",
        bgclass: "bg-cyan-400 w-[94%]"
    },
    {
        name: 'Bootstrap',
        Icon: FaBootstrap,
        txclass: "text-purple-700",
        bgclass: "bg-purple-700 w-[90%]"
    },
    {
        name: 'Git',
        Icon: FaGitAlt,
        txclass: "text-orange-600",
        bgclass: "bg-orange-600 w-[70%]"
    },
    {
        name: 'GitHub',
        Icon: FaGithubSquare,
        txclass: "text-gray-100",
        bgclass: "bg-gray-100 w-[85%]"
    },
    {
        name: 'C++',
        Icon: PiFileCpp,
        txclass: "text-blue-600",
        bgclass: "bg-blue-600 w-[75%]"

    }


]


export const educationData = [

    {
        degree: "Bechlor of Science",
        institution: "Superior University",
        logo: assets.Picture,
        duration: "2026",
        Eduicons: RxSwitch,
        description: "Currently pursuing a degree in Software Engineering. Currently pursuing a degree in Software Engineering. This program is helping me strengthen my fundamentals, problem-solving skills, and understanding of core software concepts while continuing to grow as a frontend developer.."
    },
    {
        degree: "Intermediate",
        institution: "Ehsaas College",
        logo: assets.Ehsaas,
        duration: "2023-2025",
        Eduicons: IoMdDoneAll,
        description: "Achieved strong academic results throughout intermediate studies, securing 86%in 11th grade and 85% in 12th grade. During this period, I built a solid academic foundation and began my journey into web development. This phase played an important role in strengthening my logical thinking and technical base, and I was also recognized with awards for my academic performance."
    },
    {
        degree: 'Matriculation (Science)',
        institution: 'Morning Star School',
        logo: assets.mshs,
        duration: '2021-2023',
        Eduicons: IoMdDoneAll,
        description: "Secured excellent marks in matriculation, achieving 79% in 9th grade and 91% in 10th grade. I consistently performed at a high level and ranked second in my class, which helped me develop discipline, consistency, and a strong interest in learning that continues to support my growth in technology."
    }
];


export const projectsData = [
    {
        title: 'News Website',
        description: 'A dynamic news website that provides the latest news articles from various categories including technology, sports, entertainment, and more. Built with React and integrated with a news API for real-time updates.',
        technologies: ['React', 'CSS', 'News API'],
        icons: [FaReact, FaCss3Alt],
        image: newsly,
        githubLink:"https://github.com/maaz-ishtiaq/News-Website",
        liveLink:"https://news-website-two-gilt.vercel.app/",
    },
    {
        title: 'Currency Converter',
        image: news,

        description: 'A user-friendly currency converter application that allows users to convert amounts between different currencies using real-time exchange rates. Built with React and integrated with a currency exchange API.',
        technologies: ['React', 'JavaScript', 'Exchange Rate API'],
        icons: [FaReact, FaJsSquare],
        githubLink:"https://github.com/maaz-ishtiaq/currency-converter",
        liveLink:"https://currency-converter-ten-green.vercel.app/",
    },
    {
        title: 'Todo List',
        image: to,
        description: 'A simple and intuitive todo list application to help users manage their tasks efficiently. Features include adding, deleting, and marking tasks as complete.',
        technologies: ['React', 'Redux', 'CSS'],
        icons: [FaReact, SiRedux, FaCss3Alt],
        githubLink:"https://github.com/maaz-ishtiaq/Todo-List",
        liveLink:"https://todos-list-delta-rosy.vercel.app/"
    },
    {
        title: 'Media Search App',
        image: mm,
        description: 'A media search application that allows users to search for movies and TV shows. Built with React and integrated with the OMDB API to fetch media data.',
        technologies: ['React', 'JavaScript', 'OMDB API'],
        icons: [FaReact, FaJsSquare],
        liveLink:"https://media-search-six.vercel.app/",
        githubLink:"https://github.com/maaz-ishtiaq/Media-Search-App",



    },
    {
        title:'Hospital Management System',
        image: hospital,
        description: 'A comprehensive hospital management system designed to streamline administrative tasks, patient records, and appointment scheduling. Built using C++ for robust performance.',
        technologies: ['C++', 'OOP Concepts'],
        icons: [PiFileCpp],
        liveLink:"https://github.com/maaz-ishtiaq/Hospital-Management-System",
        githubLink:"https://github.com/maaz-ishtiaq/Hospital-Management-System"


    },{
        title:'Bank Management System',
        image: hospital,
        description: 'A console-based bank management system developed in C++ to handle customer accounts, transactions, and other banking operations.',
        technologies: ['C++', 'Data Structures'],
        icons: [PiFileCpp],
        liveLink:"https://github.com/maaz-ishtiaq/Bank-System",
        githubLink:"https://github.com/maaz-ishtiaq/Bank-System"
    }
]

export const miniProjectsData = [
    {
        title: "Calculator",
        description: "A fully functional calculator capable of performing basic arithmetic operations.",
        technologies: ["HTML", "CSS", "JavaScript"],

    },
    {
        title: "Password Generator",
        description: "A tool to generate strong, random passwords with customizable length and character types.",
        technologies: ["JavaScript", "CSS"],

    },
    {
        title:'Login form',
        description: "A login form with validation to ensure correct user input.",
        technologies: ["HTML", "CSS", "JavaScript"],
  
    },
    {
        title: 'QR Code Generator',
        description: 'An application that generates QR codes for any given text or URL.',
        technologies: ['JavaScript', 'HTML', 'CSS','API'],

    },
    {
        title: 'Toast Notification',
        description: 'A simple toast notification system to display brief messages to users.',
        technologies: ['JavaScript', 'CSS', 'HTML'],

    },
    {
        title:'Random Color Generator',
        description: 'An app that generates random colors and displays their HEX values.',
        technologies: ['JavaScript', 'HTML', 'CSS'],
        
    },
    {
        title:'Pop-up Modal',
        description: 'A pop-up modal for displaying content or alerts.',
        technologies: ['HTML', 'CSS', 'JavaScript'],
       
    },
    {
        title:'Image Slider',
        description: 'An image slider/carousel to showcase multiple images in a slideshow format.',
        technologies: ['JavaScript', 'HTML', 'CSS'],
     
    },
    {
        title:'Todo List',
        description: 'A simple todo list application to manage daily tasks.',
        technologies: ['HTML', 'CSS', 'JavaScript'],
     
    }
];