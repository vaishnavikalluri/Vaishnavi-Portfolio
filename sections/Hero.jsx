"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, Download, ExternalLink, Quote as QuoteIcon, ChevronDown, Code2 } from "lucide-react";

/**
 * Hero Section
 * Final premium redesign focused on modern, minimal, and professional visual hierarchy.
 */
const roles = [
    "Full Stack Developer",
    "UI/UX designer",
    "Problem Solver",
    "Software Engineering Student"
];

/**
 * Hero Section
 * Redesigned for a premium, minimal, and modern look.
 * Follows a balanced three-column structure on desktop.
 */
const Hero = () => {
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            const currentRole = roles[currentRoleIndex];

            if (!isDeleting) {
                setCurrentText(currentRole.substring(0, currentText.length + 1));
                if (currentText.length + 1 === currentRole.length) {
                    setTimeout(() => setIsDeleting(true), 2500);
                }
            } else {
                setCurrentText(currentRole.substring(0, currentText.length - 1));
                if (currentText.length === 0) {
                    setIsDeleting(false);
                    setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
                }
            }
        }, isDeleting ? 40 : 80);

        return () => clearTimeout(timeout);
    }, [currentText, isDeleting, currentRoleIndex]);

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
        },
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.85, rotate: -2 },
        visible: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }
        },
    };

    return (
        <section id="home" className="min-h-screen relative flex items-center justify-center pt-20 pb-10 bg-background overflow-hidden">
            {/* --- PREMIUM BACKGROUND SYSTEM --- */}
            {/* Dotted Grid Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#1A3263 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

            {/* Ambient Animated Glows */}
            <div className="absolute top-[5%] left-[5%] w-[40vw] h-[40vw] bg-primary/5 rounded-full blur-[120px] pointer-events-none animate-pulse" />
            <div className="absolute bottom-[5%] right-[5%] w-[40vw] h-[40vw] bg-secondary/5 rounded-full blur-[140px] pointer-events-none" />

            <div className="container-custom relative z-10 w-full px-6 md:px-12">
                <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                    {/* --- LEFT SIDE: Identity & Actions (5 Columns) --- */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="order-1 lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left z-20"
                    >
                        <motion.span
                            variants={itemVariants}
                            className="text-primary font-bold tracking-[0.5em] uppercase text-[10px] md:text-xs mb-3 block opacity-80"
                        >
                            Hello, I'm
                        </motion.span>

                        <motion.h1
                            variants={itemVariants}
                            className="text-6xl md:text-7xl lg:text-8xl font-heading font-black tracking-tight leading-[0.85] mb-4 text-text-main"
                        >
                            Vaishnavi<br />Kalluri
                        </motion.h1>

                        <motion.div
                            variants={itemVariants}
                            className="flex items-center gap-3 mb-4 min-h-[44px]"
                        >
                            <span className="text-xl md:text-3xl font-medium text-primary italic font-heading">
                                {currentText}
                            </span>
                            <motion.span
                                animate={{ opacity: [1, 0, 1] }}
                                transition={{ duration: 1, repeat: Infinity }}
                                className="w-[3px] h-8 bg-accent block rounded-full"
                            />
                        </motion.div>

                        <motion.p
                            variants={itemVariants}
                            className="text-[10px] md:text-xs text-text-muted font-bold tracking-[0.2em] uppercase mb-8 flex items-center gap-3"
                        >
                            Ideas <span className="text-accent text-lg">→</span> Code <span className="text-accent text-lg">→</span> Impact
                        </motion.p>

                        <motion.div
                            variants={itemVariants}
                            className="flex flex-row flex-nowrap gap-4 justify-center lg:justify-start mb-8 w-full"
                        >
                            <button
                                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                                className="group px-6 md:px-8 py-3.5 bg-primary text-white font-bold rounded-full transition-all transform hover:scale-105 hover:bg-primary-dark hover:shadow-[0_12px_24px_rgba(26,50,99,0.2)] flex items-center gap-2 overflow-hidden relative"
                            >
                                <span className="relative z-10 font-heading tracking-wide uppercase text-[10px] md:text-xs whitespace-nowrap">View Projects</span>
                                <ExternalLink size={14} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>

                            <a
                                href="https://drive.google.com/file/d/1Uem0Fua-ekEjJdwSK-X--FV27E9FcURj/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group px-6 md:px-8 py-3.5 bg-transparent text-primary border-2 border-primary font-bold rounded-full transition-all transform hover:scale-105 flex items-center gap-2"
                            >
                                <span className="font-heading tracking-wide uppercase text-[10px] md:text-xs whitespace-nowrap">Resume</span>
                                <Download size={14} className="group-hover:translate-y-1 transition-transform" />
                            </a>
                        </motion.div>

                        {/* Social Icons Refined */}
                        <motion.div variants={itemVariants} className="flex gap-4">
                            {[
                                { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/vaishnavikalluri/", label: "LinkedIn" },
                                { icon: <Github size={20} />, href: "https://github.com/vaishnavikalluri", label: "GitHub" },
                                { icon: <Code2 size={20} />, href: "https://leetcode.com/u/vaishnavi__2007/", label: "LeetCode" },
                                { icon: <Mail size={20} />, href: "mailto:vaishnavikalluri@gmail.com", label: "Email" }
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="p-3 bg-white/40 backdrop-blur-md text-primary/70 hover:text-accent rounded-full border border-primary/10 hover:border-accent/40 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1.5 group"
                                >
                                    <div className="group-hover:scale-110 transition-transform">{social.icon}</div>
                                </a>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* --- CENTER: Profile Image Visual Anchor (4 Columns) --- */}
                    <div className="order-2 lg:col-span-4 flex justify-center items-center py-8 lg:py-0 w-full">
                        <motion.div
                            variants={imageVariants}
                            initial="hidden"
                            animate="visible"
                            className="relative w-full max-w-[280px] md:max-w-[360px] aspect-square"
                        >
                            {/* Visual Focus Background Element */}
                            <motion.div
                                animate={{
                                    scale: [1, 1.15, 1],
                                    opacity: [0.3, 0.6, 0.3],
                                }}
                                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute inset-[-10%] bg-gradient-radial from-accent/20 to-transparent rounded-full blur-2xl pointer-events-none"
                            />

                            {/* Dynamic Organic Container */}
                            <motion.div
                                animate={{
                                    borderRadius: ["40% 60% 70% 30% / 40% 40% 60% 60%", "60% 40% 30% 70% / 60% 30% 70% 40%", "40% 60% 70% 30% / 40% 40% 60% 60%"],
                                    y: [0, -15, 0]
                                }}
                                transition={{
                                    borderRadius: { duration: 12, repeat: Infinity, ease: "easeInOut" },
                                    y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                                }}
                                className="relative w-full h-full bg-gradient-to-br from-primary via-primary/95 to-secondary shadow-[0_20px_50px_-10px_rgba(26,50,99,0.25)] overflow-hidden group border-2 border-white/30"
                            >
                                <motion.img
                                    src="/pp2.png"
                                    alt="Vaishnavi Kalluri"
                                    className="w-full h-full object-cover object-[center_20%] filter grayscale-[0.05] hover:grayscale-0 transition-all duration-1000 scale-[1.12] group-hover:scale-[1.18]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-white/5 pointer-events-none" />
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* --- RIGHT SIDE: Quote (3 Columns) --- */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.9, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="order-3 lg:col-span-3 flex flex-col items-center lg:items-end text-center lg:text-right justify-center mt-4 lg:mt-0"
                    >
                        <div className="max-w-[240px] relative group">
                            <QuoteIcon size={32} className="text-accent/20 mb-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden lg:block" />
                            <p className="text-lg md:text-xl lg:text-lg font-heading font-light text-text-muted tracking-tight leading-relaxed italic text-balance">
                                "The best way to <span className="text-accent font-medium">predict</span> the future is to <span className="relative">
                                    create
                                    <span className="absolute bottom-1 left-0 w-full h-[1px] bg-accent/30 -rotate-1" />
                                </span> it."
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Final Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8, duration: 1 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer group z-30"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
                <span className="text-[10px] md:text-[11px] font-black tracking-[0.5em] uppercase text-primary transition-colors mb-1">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="text-primary"
                >
                    <ChevronDown size={24} strokeWidth={3} />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
