"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import {
    BookOpen, Layers, Lightbulb, Users, Trophy, Code2, Rocket, Zap
} from "lucide-react";

const highlightCards = [
    {
        title: "Projects Built",
        value: "10+",
        icon: <Zap className="w-6 h-6 text-primary" />,
        description: "Full-stack and web applications.",
        color: "bg-primary/10 border-primary/20"
    },
    {
        title: "Problem Solving",
        value: "300+",
        icon: <Code2 className="w-6 h-6 text-secondary" />,
        description: "Coding problems solved on platforms.",
        color: "bg-secondary/10 border-secondary/20"
    },
    {
        title: "Technologies",
        value: "15+",
        icon: <Rocket className="w-6 h-6 text-accent" />,
        description: "Tools and languages mastered.",
        color: "bg-accent/10 border-accent/20"
    },
];

const About = () => {
    return (
        <SectionWrapper id="about" title="About Me" subtitle="My Journey">
            {/* Introduction Container */}
            <div className="max-w-4xl mx-auto mb-20 px-4 md:px-0">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                >
                    {/* Background Soft Card */}
                    <div className="absolute inset-0 bg-white/50 backdrop-blur-sm border-2 border-primary/10 rounded-3xl -z-10 shadow-lg" />

                    <div className="p-8 md:p-12">
                        <p className="text-xl md:text-2xl text-text-muted leading-relaxed mb-8">
                            I am an aspiring <span className="text-primary font-extrabold underline decoration-primary/20 underline-offset-4">Full Stack Developer</span> with a strong foundation in programming and problem-solving.
                            I enjoy building scalable web applications and continuously improving my logical thinking through <span className="text-primary font-extrabold underline decoration-primary/20 underline-offset-4 tracking-tight whitespace-nowrap">Data Structures and Algorithms</span>.
                        </p>

                        <p className="text-xl md:text-2xl text-text-muted leading-relaxed mb-8">
                            My journey started with <span className="text-text-main font-bold">C++</span>, where I developed structured thinking and algorithmic understanding.
                            I am currently building projects using the <span className="text-primary font-extrabold underline decoration-primary/20 underline-offset-4">MERN stack</span>, focusing on writing <span className="text-text-main font-bold">Clean Code</span> that is maintainable and efficient.
                        </p>

                        <p className="text-xl md:text-2xl text-text-muted leading-relaxed">
                            I believe in learning by doing, solving coding challenges consistently, and growing step by step into a confident software engineer who creates
                            <span className="text-primary font-bold animate-pulse ml-2 italic">meaningful impact</span> through technology.
                        </p>
                    </div>

                    {/* Decorative Shape */}
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary/20 rounded-2xl rotate-12 -z-20" />
                    <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/20 rounded-full -z-20" />
                </motion.div>
            </div>

            {/* Highlight Cards Grid */}
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {highlightCards.map((card, index) => (
                    <motion.div
                        key={card.title}
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        whileHover={{ y: -10, scale: 1.05 }}
                        className={`${card.color} border-2 rounded-3xl p-8 shadow-sm transition-all group flex flex-col items-center text-center`}
                    >
                        <div className="bg-white p-4 rounded-2xl shadow-sm mb-6 group-hover:rotate-12 transition-transform">
                            {card.icon}
                        </div>
                        <h4 className="text-3xl font-black text-text-main mb-2">
                            {card.value}
                        </h4>
                        <p className="text-lg font-bold text-text-main mb-3 uppercase tracking-wider text-sm">
                            {card.title}
                        </p>
                        <p className="text-text-muted text-sm font-medium">
                            {card.description}
                        </p>
                    </motion.div>
                ))}
            </div>

            {/* Scrolling Quote or Accent */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-24 text-center"
            >
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-white border border-primary/10 rounded-full shadow-sm">
                    <Trophy className="w-5 h-5 text-yellow-500" />
                    <span className="text-sm font-bold text-text-muted">Always learning, always growing.</span>
                </div>
            </motion.div>
        </SectionWrapper>
    );
};

export default About;
