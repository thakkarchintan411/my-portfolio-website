import { motion } from "framer-motion";

const experiences = [
    {
        title: "Software Engineer",
        company: "Bacancy Technology",
        duration: "06/23 - present",
        description: [
            `Developed and maintained web applications using ReactJS and Typescript.`,
            `Implemented data visualization features using Echarts, enhancing the user experience with interactive and informative graphical representations.`,
            `Collaborated with cross-functional teams to design and implement scalable and responsive user interfaces.`,
        ],
        techStack: "Tech stack: React, TypeScript, Redux, Redux-toolkit, Material-UI, Node.js, MySQL, PostgreSQL, MongoDB",
    },
    {
        title: "Frontend Developer",
        company: "Tech Innovators Inc.",
        duration: "01/22 - 05/23",
        description: [
            `Led the development of responsive web applications using modern JavaScript frameworks.`,
            `Optimized application performance resulting in 40% improvement in load times.`,
            `Mentored junior developers and conducted code reviews to maintain high code quality standards.`,
        ],
        techStack: "Tech stack: Vue.js, JavaScript, Vuex, TailwindCSS, Jest, AWS, Docker",
    },
];

const Experience = () => {
    return (
        <div className="space-y-8">
            {experiences.map((experience, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 sm:p-8"
                >
                    <div className="mb-4">
                        <h3 className="text-xl sm:text-2xl font-bold">{experience.title}</h3>
                        <p className="text-gray-400 text-sm sm:text-base">
                            {experience.company} • {experience.duration}
                        </p>
                    </div>
                    <div className="space-y-3">
                        {experience.description.map((desc, i) => (
                            <p key={i} className="text-gray-300 text-sm sm:text-base">
                                • {desc}
                            </p>
                        ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-700">
                        <div className="flex flex-wrap gap-2">
                            {experience.techStack.split(":")[1].split(",").map((tech, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1 text-xs sm:text-sm bg-gradient-to-r from-blue-500/20 
                                             to-violet-500/20 rounded-full text-blue-400"
                                >
                                    {tech.trim()}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default Experience; 