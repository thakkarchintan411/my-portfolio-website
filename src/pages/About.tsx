import { motion } from "framer-motion";
import { Terminal, Code2, Brain } from "lucide-react";
import Layout from "../components/Layout";
// import { Link } from "react-router-dom";

const About = () => {
  const skills = [
    {
      category: "Frontend",
      items: [
        "React",
        "Next.js",
        "Javascript",
        "TypeScript",
        "Tailwind",
        "Redux",
        "GraphQL",
        "Webpack",
      ],
      icon: Code2,
    },
    {
      category: "Backend",
      items: [
        "Node.js",
        "Python",
        "Express.js",
        "Hapi.js",
        "Nest.js",
        "Django",
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "AWS DynamoDB",
        "Redis",
        "AWS Lambda",
      ],
      icon: Terminal,
    },
    {
      category: "Tools & DevOps",
      items: [
        "Git",
        "AWS",
        "GCP",
        "Docker",
        "Figma",
        "Jest",
        "Cypress",
        "CI/CD",
        "Kubernetes",
        "Github Actions",
      ],
      icon: Brain,
    },
  ];

  const experiences = [
    {
      logo: "qudos.png",
      company: "Qudos Technologies",
      title: "Senior Full Stack Developer",
      type: "Full-time",
      period: "Oct 2024 - Present",
      location: "New York, NY · Remote",
      description:
        "I designed and optimized PostgreSQL database schemas to enhance query performance and data integrity. Using Node.js, Express, and Sequelize ORM, I developed and maintained backend APIs for efficient data handling. Additionally, I built responsive front-end components with React and TypeScript to improve user experience. I also integrated and optimized Map API services, enabling real-time location-based features for better user interaction.",
      skills: ["Node.js", "PostgreSQL", "GCP"],
    },
    {
      logo: "cronj-it-technologies.jpg",
      company: "CronJ IT Technologies",
      title: "Senior Full Stack Developer",
      type: "Full-time",
      period: "May 2023 - Oct 2024",
      location: "Bengaluru, Karnataka  · Remote",
      description:
        "I developed serverless functions using AWS Lambda and TypeScript to automate data processing and generate accurate on-demand reports. By leveraging AWS CloudWatch, I monitored Lambda performance and set up alerts to ensure reliability with minimal downtime. I optimized data storage and retrieval in DynamoDB, enhancing efficiency and consistency in report generation. Additionally, I wrote reusable, type-safe TypeScript code for seamless AWS integration and built interactive dashboards with React.js to improve data visualization and user decision-making.",
      skills: ["React.js", "Node.js", "AWS Lambda", "DynamoDB", "GCP"],
    },
    {
      logo: "skeps.svg",
      company: "Skeps",
      title: "Full Stack Developer",
      type: "Full-time",
      period: "Nov 2021 - Apr 2023",
      location: "Gurugram, Haryana· Remote",
      description:
        "I designed and implemented microservices to modularize complex business logic, enhancing scalability, maintainability, and system performance. I developed and integrated third-party payment solutions while collaborating on frontend integration to ensure secure and seamless transactions. Working with cross-functional teams, I contributed to API development and interactive UI components for efficient inter-service communication. Additionally, I conducted comprehensive testing and troubleshooting of payment gateways and UI components, improving system reliability and usability.",
      skills: ["React.js", "Node.js", "MySQL", "AWS", "Docker"],
    },
    {
      logo: "pingdr.webp",
      company: "PingDR Software Services",
      title: "Node.js Developer",
      type: "Full-time",
      period: "Nov 2021 - Apr 2023",
      location: "Ahmedabad, Gujarat· On-site",
      description:
        "I developed and implemented business logic for RESTful APIs, improving application performance and functionality. Collaborating with senior developers, I integrated backend services with front-end applications to ensure smooth data flow and a seamless user experience. I also designed and optimized database queries for efficient data retrieval, enhancing API response times. Additionally, I conducted testing and debugging to identify and resolve issues in business logic and API endpoints, contributing to a smooth product release process.",
      skills: ["Node.js", "MySQL", "MongoDB", "AWS"],
    },
  ];

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24"
      >
        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="space-y-10 mt-8"
          >
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500">
              About Me
            </h1>
            <div className="space-y-4 text-gray-300 text-lg">
              <p>
                Hi, I'm Chintan Thakkar, a full-stack developer with 4+ years of
                experience in building web applications and digital products.
              </p>
              <p>
                I specialize in creating performant and scalable applications
                using modern technologies and best practices.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or writing technical
                articles.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 flex items-center justify-center">
              <img
                src="/profile.jpg"
                alt="Profile"
                className="rounded-xl w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="space-y-10 mt-8"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-400">
              Skills & Technologies
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 border border-gray-800/50"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-violet-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative space-y-4">
                  <skillGroup.icon className="w-8 h-8 text-blue-400" />
                  <h3 className="text-xl font-semibold">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 bg-gray-800/80 rounded-full text-sm hover:bg-blue-500/20 hover:text-blue-400 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="space-y-10 mt-8"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-400">
              Experience
            </h2>
          </div>

          <div className="space-y-6">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.company}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-violet-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-4 sm:p-6 space-y-4 sm:space-y-6">
                  {/* Company Header */}
                  <div className="flex gap-3 sm:gap-4">
                    <div className="flex-shrink-0">
                      <img
                        src={experience.logo}
                        alt={experience.company}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-700"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold">
                        {experience.company}
                      </h3>
                      <p className="text-sm text-gray-400">{experience.type}</p>
                      <p className="text-xs sm:text-sm text-gray-500">
                        {experience.location}
                      </p>
                    </div>
                  </div>

                  {/* Positions */}
                  <div className="space-y-4 sm:space-y-6 pl-12 sm:pl-16">
                    {experience.positions ? (
                      experience.positions.map((position, idx) => (
                        <div
                          key={idx}
                          className="relative pb-4 sm:pb-6 last:pb-0"
                        >
                          <div className="relative">
                            <div className="absolute -left-[1.65rem] top-2 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-blue-500" />
                            <h4 className="text-base sm:text-lg font-medium">
                              {position.title}
                            </h4>
                            <p className="text-xs sm:text-sm text-gray-400 mt-1">
                              {position.period}
                            </p>
                            <p className="text-sm sm:text-base text-gray-300 mt-2 sm:mt-3 line-clamp-3 sm:line-clamp-none">
                              {position.description}
                            </p>
                            {position.skills && (
                              <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3 sm:mt-4">
                                {position.skills.map((skill) => (
                                  <span
                                    key={skill}
                                    className="px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      ))
                    ) : (
                      // Single position
                      <div className="relative">
                        <div className="absolute -left-[1.65rem] top-2 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-blue-500" />
                        <h4 className="text-base sm:text-lg font-medium">
                          {experience.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-400 mt-1">
                          {experience.period}
                        </p>
                        <p className="text-sm sm:text-base text-gray-300 mt-2 sm:mt-3 line-clamp-3 sm:line-clamp-none">
                          {experience.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3 sm:mt-4">
                          {experience.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </Layout>
  );
};

export default About;
