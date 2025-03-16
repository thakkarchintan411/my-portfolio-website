import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const SkillCard = ({ category, skills, index }: any) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="relative group"
        >
            <div
                className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-violet-600/10 rounded-xl 
                      group-hover:from-blue-600/20 group-hover:to-violet-600/20 transition-colors"
            />
            <div className="relative p-8 backdrop-blur-sm rounded-xl border border-gray-800/50">
                <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500">
                    {category}
                </h3>
                <div className="space-y-4">
                    {skills.map((skill: any, i: any) => (
                        <motion.div
                            key={skill}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center space-x-2 group/skill"
                        >
                            <Sparkles
                                className="text-blue-500 group-hover/skill:text-violet-500 transition-colors"
                                size={16}
                            />
                            <span className="group-hover/skill:text-blue-400 transition-colors">
                                {skill}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default SkillCard;
