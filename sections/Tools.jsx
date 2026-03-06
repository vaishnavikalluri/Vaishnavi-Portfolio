"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import {
    GitBranch, Github, Palette, ImageIcon, Monitor,
    Binary, Lightbulb, Users, BookOpen, Layers, Terminal, Sparkles
} from "lucide-react";

const toolsAndTechnologies = [
    { label: "DSA", icon: <Binary className="w-5 h-5" />, color: "bg-blue-500/10 text-blue-500 border-blue-500/20" },
    { label: "Git", icon: <GitBranch className="w-5 h-5" />, color: "bg-orange-500/10 text-orange-500 border-orange-500/20" },
    { label: "GitHub", icon: <Github className="w-5 h-5" />, color: "bg-slate-800 text-white border-slate-800/20" },
    { label: "Figma", icon: <Palette className="w-5 h-5" />, color: "bg-purple-500/10 text-purple-500 border-purple-500/20" },
    { label: "Canva", icon: <ImageIcon className="w-5 h-5" />, color: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20" },
    { label: "Ubuntu", icon: <Monitor className="w-5 h-5" />, color: "bg-orange-600/10 text-orange-600 border-orange-600/20" },
    { label: "VS Code", icon: <Terminal className="w-5 h-5" />, color: "bg-sky-500/10 text-sky-500 border-sky-500/20" },
    { label: "Problem Solving", icon: <Lightbulb className="w-5 h-5" />, color: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20" },
    { label: "Collaboration", icon: <Users className="w-5 h-5" />, color: "bg-indigo-500/10 text-indigo-500 border-indigo-500/20" },
    { label: "Deep Learning", icon: <Layers className="w-5 h-5" />, color: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" },
];

const Tools = () => {
    return (
        <SectionWrapper id="tools" title="Tools & Technologies" subtitle="Development Ecosystem">
            <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4">
                {toolsAndTechnologies.map((tool, index) => (
                    <motion.div
                        key={tool.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05, duration: 0.3 }}
                        whileHover={{ y: -5, scale: 1.05 }}
                        className={`group cursor-default flex items-center gap-3 px-6 py-4 rounded-3xl border-2 shadow-sm transition-all duration-300 ${tool.color}`}
                    >
                        <div className="transition-transform group-hover:rotate-12 duration-300">
                            {tool.icon}
                        </div>
                        <span className="font-bold text-base tracking-wide">
                            {tool.label}
                        </span>

                        {/* Hover Sparkle Effect */}
                        <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Background Accent */}
            <div className="absolute transform translate-y-32 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10" />
        </SectionWrapper>
    );
};

export default Tools;
