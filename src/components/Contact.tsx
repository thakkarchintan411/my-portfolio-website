import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';

const contactLinks = [
  {
    icon: Mail,
    text: "smitdudhat10@gmail.com",
    href: "mailto:smitdudhat10@gmail.com",
  },
  {
    icon: Linkedin,
    text: "LinkedIn",
    href: "https://linkedin.com/in/smit-dudhat-dev",
  },
  {
    icon: Github,
    text: "GitHub",
    href: "https://github.com/Smit9313",
  },
];

const Contact = () => {
  return (
    <section className="min-h-screen py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <h2 className="text-6xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500">
            Let's Create Together
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Ready to bring your vision to life? Let's collaborate on something extraordinary.
              </p>
              <motion.a
                href="mailto:smitdudhat10@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-violet-600 
                         hover:from-blue-500 hover:to-violet-500 text-white rounded-full font-medium 
                         shadow-lg transition-all"
              >
                Get in Touch
              </motion.a>
            </div>
            <div className="space-y-8">
              {contactLinks.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-center space-x-4 text-gray-400 hover:text-blue-400 transition-colors group"
                >
                  <item.icon className="group-hover:scale-110 transition-transform" size={24} />
                  <span className="border-b border-transparent group-hover:border-blue-400">{item.text}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;