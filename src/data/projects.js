import animeStreet from "../assets/images/projects/animestreet.jpg";
import cyberFace from "../assets/images/projects/cyberface.jpg";
import voting from "../assets/images/projects/voting.jpg";


import {
  FaReact,
  FaPython,
  FaBootstrap,
  FaShoppingCart,
  FaHtml5,
  FaCss3Alt,
  FaLock,
  FaUserCheck ,
  FaShieldAlt ,
} from "react-icons/fa";

import {
  SiDjango,
  SiJavascript,
  SiOpencv,
  SiSqlite,
} from "react-icons/si";


export const projects = [
  {
    title: "E-commerce Website",
    image: animeStreet,
    description:
      "A full-stack Django e-commerce website for anime merchandise with auth, cart, wishlist, checkout, orders and payment features.",

    technologies: [
      { icon: FaReact, name: " React" },
      { icon: SiDjango, name: " Django" },
      { icon: FaLock, name: "OTP Auth" },
    ],

    github: "YOUR_GITHUB_LINK",
  },

  {
    title: "Cyber Face Authentication",
    image: cyberFace,
    description:
      "Face auth system with face recognition, liveness detection, login activity monitoring and cyber security dashboard.",

    technologies: [
        { icon: SiDjango, name: "Django" },
      { icon: FaUserCheck, name: "Face Verify" },
      { icon: SiOpencv, name: "OpenCV" },
    ],

    github: "YOUR_GITHUB_LINK",
  },

  {
    title: "Secure Web Voting System",
    image: voting,
    description:
      "Modern online voting system with admin dashboard, voter authentication, live result tracking and responsive cyber-inspired UI.",

    technologies: [
      { icon: FaHtml5, name: "HTML" },
      { icon: FaCss3Alt, name: "CSS" },
      { icon: SiJavascript, name: "JavaScript" },
    //   { icon: FaBootstrap, name: "Bootstrap" },
    ],

    github: "YOUR_GITHUB_LINK",
  },
];