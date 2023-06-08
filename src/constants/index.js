import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "services",
      title: "Services",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "testimonials",
      title: "Testimonials",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "EXPLORE",
      icon: web,
    },
    {
      title: "INNOVATE",
      icon: mobile,
    },
    {
      title: "IMPROVE",
      icon: backend,
    },
    
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "IT SERVICES",
      company_name: "Information technology",
      icon: starbucks,
      iconBg: "#383E56",
      date: "",
      points: [
        "Snaptri's dedicated and skilled workforce has contributed to the growth of India's IT sector, which has seen an annual average growth rate of 28-30% over the past decade.",
        "With a focus on quality and innovation, Snaptri has successfully provided assistance in various IT-enabled services, meeting the needs of individuals and organizations.",
        "The software industry remains a significant contributor to the overall revenue of India's IT industry, and Snaptri plays a part in this by delivering exceptional services in the field of Information Technology.",
        "We Provide	Software Solutions, Network Solutions, Quality Assurance & Testing, Application Maintenance & Support",
      ],
    },
    {
      title: "123",
      company_name: "456",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss",
        "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        "ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss.",
        "ccccccccccccccccccccccccccccccccccccccccccccccccccccc.",
      ],
    },{
      title: "123",
      company_name: "456",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss",
        "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        "ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss.",
        "ccccccccccccccccccccccccccccccccccccccccccccccccccccc.",
      ],
    },{
      title: "123",
      company_name: "456",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss",
        "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        "ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss.",
        "ccccccccccccccccccccccccccccccccccccccccccccccccccccc.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Snaptri's digital marketing expertise helped skyrocket my business. Their strategies increased my online visibility and boosted customer engagement",
      name: "Meghana P",
      designation: "HR",
      company: "MPhasis",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Snaptri's expertise in web development created a stunning website for me. Their professionalism and attention to detail exceeded my expectations.",
      name: "Bhargav Yarlagadda",
      designation: "HR",
      company: "Medha Diagnostic",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Snaptri exceeded my expectations with their e-publication services. Their attention to detail and timely delivery made the process seamless.                                                     ",
      name: "Naga Subhash",
      designation: "CTO",
      company: "GenPub",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "One Connected",
      description:
        "One Connected™ is the platform for professional networking, to create Personal & Business profile, to discover, connect and engage at professional network communities.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://www.oneconnected.in/",
    },
    {
      name: "Medha Diagnostic",
      description:
        "Our website provides a comprehensive range of diagnostic services, including medical imaging, laboratory tests, and health screenings. With convenient online booking and fast turnaround times.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://medhadiagnosticcentre.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  const carouse = [
    {
      Heading: "We are",
      company_name: "SNAPTRI",
      src: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss",
        "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        "ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss.",
        "ccccccccccccccccccccccccccccccccccccccccccccccccccccc.",
      ],
    },
    {
      title: "123",
      company_name: "456",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss",
        "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        "ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss.",
        "ccccccccccccccccccccccccccccccccccccccccccccccccccccc.",
      ],
    },{
      title: "123",
      company_name: "456",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss",
        "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        "ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss.",
        "ccccccccccccccccccccccccccccccccccccccccccccccccccccc.",
      ],
    },{
      title: "123",
      company_name: "456",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss",
        "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        "ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss.",
        "ccccccccccccccccccccccccccccccccccccccccccccccccccccc.",
      ],
    },
  ];
  export { services, technologies, experiences, testimonials, projects,carouse };