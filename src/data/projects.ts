export interface Project {
  stats: any;
  title: string;
  description: string;
  categories: string[],
  tech: string[],
  liveUrl: string,
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    title: "Incruiter (Saas)",
    description: `InCruiter offers AI-powered video interview solutions that revolutionize the remote hiring landscape. 
    Their platform includes services like Interview as a Service (IncServe), AI Interview Software (IncBot), Video Interview Platform (IncVid), Interview Scheduling Software (IncFeed), Exit Interview Services (IncExit), and Pre-Vetted Developer Solutions (IncSource). 
    These tools streamline the hiring process by leveraging advanced technology to enhance efficiency and effectiveness.  `,
    categories: ["Interview as a Service"],
    tech: ["React", "Node.js", "AWS", "CI/CD", "Docker"],
    image: "/Incruiter.png",
    stats: {
      users: "50K+",
      accuracy: "95%",
      dataPoints: "1M+",
    },
    liveUrl: "https://incruiter.com/",
    technologies: ["React", "Node.js", "AWS", "CI/CD", "Docker"],
  },
  {
    title: "Skeps (Saas)",
    description: `Skeps is a microservices platform that seamlessly integrates banking services into merchant websites, retail stores, and direct sales channels. 
    It enables merchants to offer customized "Pay-Over-Time" options for high-value purchases ranging from $500 to over $100,000, enhancing customer purchasing power. 
    By connecting consumers with accredited financial institutions, Skeps provides secure, real-time financing solutions that boost approval rates and average order values.`,
    categories: ["Fintech"],
    tech: ["Node.js", "MySQL", "AWS", "CI/CD", "Docker", "Payment Gateway"],
    image: "/Skeps.png",
    stats: {
      transactions: "1M+",
      volume: "$500M+",
      users: "100K+",
    },
    liveUrl: "https://www.skeps.com/",
    technologies: ["Node.js", "MySQL", "AWS", "CI/CD", "Docker", "Payment Gateway"],
  },
  {
    title: "Prime Ride Access",
    description: `Prime Ride Access Inc. (PRA) is a non-emergency medical transportation provider serving New York State Medicaid enrollees. 
    The platform connects enrollees with transportation providers and medical facilities, aiming to enhance the efficiency and reliability of medical transportation services. 
    PRA's commitment is to ensure enrollees receive safe and timely transportation to their healthcare destinations.`,
    categories: ["Service Marketplace"],
    tech: ["Angular", "PostgreSQL", "Google Map", "Microservices", "GCP"],
    image: "/PRA.png",
    stats: {
      devices: "1000+",
      commands: "5M+",
      homes: "10K+",
    },
    liveUrl: "https://primerideaccess.com/",
    technologies: ["Angular", "PostgreSQL", "Google Map", "Microservices", "GCP"],
  },
  {
    title: "Reach Mobile",
    description: `Reach Platform is a cloud-native SaaS solution that simplifies the creation and management of subscription-based services across various networks, including wireless, fiber, cable, DSL, satellite, and private LTE. Designed for scalability and flexibility, it offers modules and APIs that cater to end-users, agents, and stakeholders, enhancing the customer experience and operational efficiency.`,
    categories: ["Telecom"],
    tech: ["React", "Node.js", "AWS", "CI/CD", "Docker"],
    image: "/Reach.png",
    stats: {
      devices: "1000+",
      commands: "5M+",
      homes: "10K+",
    },
    liveUrl: "https://www.reachplatform.com/",
    technologies: ["Typescript", "AWS Lambda", "Reporting Framework", "GCP"],
  },
];
