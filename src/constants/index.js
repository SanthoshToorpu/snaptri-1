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
      title: "Digital marketing",
      company_name: "digital marketing",
      icon: starbucks,
      iconBg: "#383E56",
      date: "",
      points: [
        "Snaptri offers a wide range of digital marketing solutions tailored to meet the unique needs and goals of each client. These services include search engine optimization (SEO), pay-per-click (PPC) advertising, social media marketing, content marketing, email marketing, conversion rate optimization, and more.",
        "Snaptri understands that every business is different, and they take the time to understand their clients' specific requirements, industry landscape, and competition. They work closely with their clients to develop customized digital marketing strategies that align with their goals and budget."
      ],
    },{
      title: "Project Management",
      company_name: "Project Management",
      icon: starbucks,
      iconBg: "#383E56",
      date: "",
      points: [
        "Snaptri is a trusted provider of project management services, helping businesses effectively plan, execute, and deliver successful projects. With a team of experienced project managers, Snaptri offers comprehensive solutions to streamline project workflows, enhance team collaboration, and ensure project success.",
        "Snaptri's project management services cover various aspects of project planning, execution, monitoring, and control. They work closely with clients to understand their project goals, requirements, and constraints, developing customized strategies to achieve desired outcomes.",
      ],
    },{
      title: "E publications",
      company_name: "E publications",
      icon: starbucks,
      iconBg: "#383E56",
      date: "",
      points: [
       "Snaptri provides comprehensive E-publication services to businesses and individuals looking to create, distribute, and manage digital publications. With their expertise in digital content creation and distribution, Snaptri helps clients transform their content into engaging and interactive digital publications",
       "Snaptri's E-publication services cover a wide range of digital content formats, including e-books, e-magazines, e-newsletters, whitepapers, catalogs, and more. They understand the importance of captivating and user-friendly designs, and thus, they work closely with clients to create visually appealing and immersive digital publications."
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
        "We provided comprehensive digital marketing services to Medha Diagnostics, boosting their online presence, brand awareness, and customer engagement through strategic website development, social media marketing, and targeted advertising.",
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
      name: "Ocn Sys",
      description:
        "Ocnsys is a premier integrated marketing & communications solutions provider. Our life’s work connects people who share common beliefs.We look more like a modern management consultancy solving major problems for businesses. From marketing strategy and web experience to lead generation—even culture transformation.",
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