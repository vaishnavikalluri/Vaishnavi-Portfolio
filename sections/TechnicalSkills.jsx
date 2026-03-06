"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import { Code2, Layout, Server, Database as DatabaseIcon } from "lucide-react";

const techLogos = {
    "C++": <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" alt="C++" className="w-10 h-10 object-contain" />,
    "Java": <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="Java" className="w-10 h-10 object-contain" />,
    "Python": <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="Python" className="w-10 h-10 object-contain" />,
    "JavaScript": <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-10 h-10 object-contain" />,
    "React": <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="React" className="w-10 h-10 object-contain" />,
    "HTML": <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="HTML" className="w-10 h-10 object-contain" />,
    "CSS": <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="CSS" className="w-10 h-10 object-contain" />,
    "Tailwind": <img src="https://brandlogovector.com/wp-content/uploads/2020/07/Tailwind-CSS-Logo.png" alt="Tailwind" className="w-10 h-10 object-contain" />,
    "Flutter": <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg" alt="Flutter" className="w-10 h-10 object-contain" />,
    "Node.js": <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-10 h-10 object-contain" />,
    "Firebase": <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg" alt="Firebase" className="w-10 h-10 object-contain" />,
    "MongoDB": <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-10 h-10 object-contain" />,
    "MySQL": <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" alt="MySQL" className="w-10 h-10 object-contain" />
};

const skillCategories = [
    {
        title: "Programming",
        icon: <Code2 className="w-6 h-6 text-primary" />,
        skills: ["C++", "Java", "Python", "JavaScript"],
        color: "bg-primary/10",
        borderColor: "border-primary/20"
    },
    {
        title: "Frontend",
        icon: <Layout className="w-6 h-6 text-secondary" />,
        skills: ["React", "HTML", "CSS", "Tailwind", "Flutter"],
        color: "bg-secondary/10",
        borderColor: "border-secondary/20"
    },
    {
        title: "Backend",
        icon: <Server className="w-6 h-6 text-primary" />,
        skills: ["Node.js", "Firebase"],
        color: "bg-primary/5",
        borderColor: "border-primary/10"
    },
    {
        title: "Database",
        icon: <DatabaseIcon className="w-6 h-6 text-accent" />,
        skills: ["MongoDB", "MySQL"],
        color: "bg-accent/10",
        borderColor: "border-accent/20"
    },
];

const TechnicalSkills = () => {
    return (
        <SectionWrapper id="skills" title="Technical Skills" subtitle="My Expertise">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                {skillCategories.map((category, index) => (
                    <motion.div
                        key={category.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        whileHover={{ y: -10 }}
                        className={`bg-white rounded-3xl p-6 shadow-sm border-2 ${category.borderColor} transition-all group relative overflow-hidden`}
                    >
                        {/* Decorative background circle */}
                        <div className={`absolute -right-4 -top-4 w-24 h-24 ${category.color} rounded-full blur-2xl opacity-50 group-hover:opacity-100 transition-opacity`} />

                        <div className="relative z-10">
                            <div className={`w-12 h-12 ${category.color} rounded-2xl flex items-center justify-center mb-6`}>
                                {category.icon}
                            </div>

                            <h4 className="text-xl font-bold text-text-main mb-6">{category.title}</h4>

                            <div className="space-y-4">
                                {category.skills.map((skill) => (
                                    <div
                                        key={skill}
                                        className="flex items-center gap-4 group/item"
                                    >
                                        <div className="w-10 h-10 flex items-center justify-center p-2 bg-slate-50 rounded-xl group-hover/item:scale-110 transition-transform duration-300">
                                            {techLogos[skill]}
                                        </div>
                                        <span className="text-base font-medium text-text-muted group-hover/item:text-primary transition-colors">
                                            {skill}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Bottom Gradient Border Effect */}
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default TechnicalSkills;
