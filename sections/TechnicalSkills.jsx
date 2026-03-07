"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Code2,
    Monitor,
    Server,
    Database,
    Wrench,
    Users,
    MessageSquare,
    Handshake,
    Zap
} from "lucide-react";

// Skill Data with specific styling for each card
const cardSkills = [
    {
        title: "Programming Languages",
        icon: <Code2 className="w-5 h-5" />,
        delay: 0.1,
        gradient: "linear-gradient(180deg, #ffffff, rgba(26, 50, 99, 0.05))",
        accentColor: "#1A3263", // Primary Blue
        glowColor: "rgba(26, 50, 99, 0.08)",
        skills: [
            { name: "C++", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" },
            { name: "Java", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" },
            { name: "Python", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
            { name: "JavaScript", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" }
        ]
    },
    {
        title: "Frontend Development",
        icon: <Monitor className="w-5 h-5" />,
        delay: 0.2,
        gradient: "linear-gradient(180deg, #ffffff, rgba(59, 130, 246, 0.05))",
        accentColor: "#3B82F6", // Light Blue
        glowColor: "rgba(59, 130, 246, 0.08)",
        skills: [
            { name: "React", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
            { name: "Next.js", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg" },
            { name: "HTML5", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" },
            { name: "CSS3", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" },
            { name: "Tailwind CSS", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg" },
            { name: "Flutter", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg" }
        ]
    },
    {
        title: "Backend Development",
        icon: <Server className="w-5 h-5" />,
        delay: 0.3,
        gradient: "linear-gradient(180deg, #ffffff, rgba(34, 197, 94, 0.05))",
        accentColor: "#22C55E", // Green
        glowColor: "rgba(34, 197, 94, 0.08)",
        skills: [
            { name: "Node.js", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" },
            { name: "Firebase", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg" },
            { name: "Express.js", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg" }
        ]
    },
    {
        title: "Database",
        icon: <Database className="w-5 h-5" />,
        delay: 0.4,
        gradient: "linear-gradient(180deg, #ffffff, rgba(245, 158, 11, 0.05))",
        accentColor: "#F59E0B", // Accent Orange
        glowColor: "rgba(245, 158, 11, 0.08)",
        skills: [
            { name: "MongoDB", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" },
            { name: "MySQL", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" }
        ]
    }
];

const tools = [
    { name: "Git", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" },
    { name: "GitHub", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" },
    { name: "VS Code", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg" },
    { name: "Vercel", logo: "https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png" },
    { name: "Docker", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg" },
    { name: "Figma", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg" },
    { name: "Canva", logo: "https://www.canva.com/favicon.ico" },
    { name: "Ubuntu", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/ubuntu/ubuntu-plain.svg" },
    { name: "Bruno", logo: "https://www.usebruno.com/favicon.png" }
];

const softSkills = [
    { name: "Communication", icon: <MessageSquare size={14} /> },
    { name: "Team Collaboration", icon: <Handshake size={14} /> },
    { name: "Adaptability", icon: <Zap size={14} /> }
];

const TechnicalSkills = () => {
    return (
        <section
            id="skills"
            className="pt-16 pb-24 bg-[#F8FAFC] relative overflow-hidden"
            style={{
                backgroundImage: `
                    radial-gradient(circle at top left, rgba(26, 50, 99, 0.06), transparent 45%),
                    radial-gradient(circle at bottom right, rgba(245, 158, 11, 0.05), transparent 45%)
                `
            }}
        >
            <div className="container-custom px-6 md:px-12 w-full max-w-[1280px] mx-auto relative z-10">

                {/* --- SECTION HEADER --- */}
                <div className="flex flex-col items-start mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[#F59E0B] font-bold tracking-[2px] uppercase text-[14px] mb-3 block"
                    >
                        DEVELOPMENT SKILLS
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[42px] font-bold text-[#111827] leading-tight mb-4"
                    >
                        Technical Skills
                    </motion.h2>

                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 70 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="h-1 bg-[#1A3263] rounded-full"
                    />
                </div>

                {/* --- RESPONSIVE GRID --- */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 mb-24">
                    {cardSkills.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: category.delay, duration: 0.6 }}
                            whileHover={{
                                y: -6,
                                boxShadow: `0 14px 28px rgba(0,0,0,0.08), 0 0 20px ${category.glowColor}`,
                                borderColor: category.accentColor
                            }}
                            style={{
                                background: category.gradient,
                                borderTop: `3px solid ${category.accentColor}`
                            }}
                            className="p-7 rounded-[18px] border border-[#E5E7EB] shadow-[0_6px_20px_rgba(0,0,0,0.05)] transition-all duration-300 group h-full min-h-[420px] flex flex-col"
                        >
                            {/* Card Header: Icon + Title */}
                            <div className="flex items-center gap-[10px] mb-[12px]">
                                <div className="p-2.5 bg-white/50 rounded-lg group-hover:scale-110 transition-transform duration-300 shadow-sm border border-black/5" style={{ color: category.accentColor }}>
                                    {/* Wrapping category.icon to control size if needed, but per request 20px icon */}
                                    {React.cloneElement(category.icon, { size: 20 })}
                                </div>
                                <h3 className="text-[19px] font-bold text-[#111827] tracking-tight">
                                    {category.title}
                                </h3>
                            </div>

                            {/* Underline Separator */}
                            <div className="w-full h-[1px] bg-[#E5E7EB] mb-[16px]" />

                            {/* Skill List */}
                            <div className="space-y-6">
                                {category.skills.map((skill, sIdx) => (
                                    <div key={sIdx} className="flex items-center gap-4 group/skill">
                                        <div className="w-[22px] h-[22px] min-w-[22px] flex items-center justify-center transition-transform group-hover/skill:scale-110">
                                            <img
                                                src={skill.logo}
                                                alt={skill.name}
                                                className="w-full h-full object-contain"
                                                onError={(e) => { e.target.src = "https://www.svgrepo.com/show/452228/html-5.svg"; }}
                                            />
                                        </div>
                                        <span className="text-[15px] font-medium text-[#6B7280] group-hover/skill:text-[#111827] transition-colors">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* --- TOOLS & PLATFORMS SECTION: WRAPPED IN A CARD --- */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="p-8 md:p-10 rounded-[20px] border border-[#E5E7EB] shadow-[0_6px_25px_rgba(0,0,0,0.04)] bg-white relative overflow-hidden group"
                    style={{
                        borderTop: "3px solid #F59E0B",
                        background: "linear-gradient(180deg, #ffffff, rgba(245, 158, 11, 0.05))"
                    }}
                >
                    {/* Background Subtle Accent */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#F59E0B]/5 rounded-full blur-3xl -z-10" />

                    <div className="flex flex-col gap-8">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-amber-50 rounded-lg text-[#F59E0B] shadow-sm border border-amber-100/50">
                                <Wrench size={18} />
                            </div>
                            <h3 className="text-[20px] font-bold text-[#111827] uppercase tracking-wider text-sm">
                                Tools & Platforms
                            </h3>
                        </div>

                        <div className="flex flex-wrap gap-x-4 gap-y-3">
                            {tools.map((tool, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{
                                        y: -2,
                                        borderColor: "#F59E0B",
                                        backgroundColor: "#ffffff",
                                        boxShadow: "0 4px 12px rgba(245, 158, 11, 0.08)"
                                    }}
                                    className="flex items-center gap-2.5 px-4 py-2 bg-slate-50/50 rounded-full border border-slate-100 shadow-sm transition-all duration-200 group/chip cursor-default"
                                >
                                    <div className="w-[16px] h-[16px] flex items-center justify-center">
                                        <img
                                            src={tool.logo}
                                            alt={tool.name}
                                            className="w-full h-full object-contain opacity-80 group-hover/chip:opacity-100 transition-all"
                                            onError={(e) => { e.target.src = "https://www.svgrepo.com/show/452228/html-5.svg"; }}
                                        />
                                    </div>
                                    <span className="text-[13px] font-bold text-[#6B7280] group-hover/chip:text-[#111827] transition-colors uppercase tracking-tight">
                                        {tool.name}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* --- SOFT SKILLS SECTION --- */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="p-8 md:p-10 rounded-[20px] border border-[#E5E7EB] shadow-[0_6px_25px_rgba(0,0,0,0.04)] bg-white relative overflow-hidden group mt-10"
                    style={{
                        borderTop: "3px solid #1A3263",
                        background: "linear-gradient(180deg, #ffffff, rgba(26, 50, 99, 0.03))"
                    }}
                >
                    {/* Background Subtle Accent */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#1A3263]/5 rounded-full blur-3xl -z-10" />

                    <div className="flex flex-col gap-8">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-blue-50 rounded-lg text-[#1A3263] shadow-sm border border-blue-100/50">
                                <Users size={18} />
                            </div>
                            <h3 className="text-[20px] font-bold text-[#111827] uppercase tracking-wider text-sm">
                                Soft Skills
                            </h3>
                        </div>

                        <div className="flex flex-wrap gap-x-4 gap-y-3">
                            {softSkills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{
                                        y: -2,
                                        borderColor: "#1A3263",
                                        backgroundColor: "#ffffff",
                                        boxShadow: "0 4px 12px rgba(26, 50, 99, 0.08)"
                                    }}
                                    className="flex items-center gap-3 px-5 py-2.5 bg-slate-50/50 rounded-full border border-slate-100 shadow-sm transition-all duration-200 group/chip cursor-default"
                                >
                                    <div className="text-blue-500 opacity-80 group-hover/chip:opacity-100 group-hover/chip:scale-110 transition-all">
                                        {skill.icon}
                                    </div>
                                    <span className="text-[13px] font-bold text-[#6B7280] group-hover/chip:text-[#1A3263] transition-colors uppercase tracking-tight">
                                        {skill.name}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default TechnicalSkills;
