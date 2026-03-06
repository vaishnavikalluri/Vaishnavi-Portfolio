"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Code2,
    Blocks,
    Cpu,
} from "lucide-react";

const stats = [
    {
        icon: <Blocks className="w-6 h-6 text-[#F59E0B]" />,
        number: "3+",
        title: "Projects Built",
        description: "Full-stack and web applications with real-world utility."
    },
    {
        icon: <Code2 className="w-6 h-6 text-[#F59E0B]" />,
        number: "50+",
        title: "Coding Problems Solved",
        description: "Consistent problem solving to master logical thinking."
    },
    {
        icon: <Cpu className="w-6 h-6 text-[#F59E0B]" />,
        number: "15+",
        title: "Technologies Used",
        description: "A diverse toolkit ranging from React to specialized backends."
    }
];

const About = () => {
    // Animation Variants
    const fadeUp = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const slideUpStagger = {
        hidden: { opacity: 0, y: 30 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.15 * i,
                duration: 0.6,
                ease: "easeOut"
            }
        })
    };

    return (
        <section id="about" className="pt-[100px] pb-[80px] bg-[#F8FAFC] overflow-hidden min-h-screen flex items-center">
            <div className="container-custom px-6 md:px-12 w-full max-w-[1280px] mx-auto">
                <div className="grid lg:grid-cols-12 gap-[60px] items-start">

                    {/* --- LEFT COLUMN --- */}
                    <div className="lg:col-span-7 flex flex-col items-start text-left">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-[#F59E0B] font-bold tracking-[2px] uppercase text-[14px] mb-[12px] block"
                        >
                            FROM LEARNING TO BUILDING
                        </motion.span>

                        <motion.h2
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="text-[42px] font-bold text-[#111827] leading-tight mb-[16px]"
                        >
                            About Me
                        </motion.h2>

                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: 70 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="h-[4px] bg-[#1A3263] rounded-[4px] mb-[32px]"
                        />

                        <div className="max-w-[620px] space-y-[20px]">
                            <motion.p
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-[18px] text-[#6B7280] leading-[1.7]"
                            >
                                I am a passionate <span className="text-[#1A3263] font-semibold">Software Engineering student</span> who enjoys building real-world applications and exploring how technology solves everyday problems. I'm particularly interested in <span className="text-[#1A3263] font-semibold">Full Stack Development</span> and enjoy learning by building projects and experimenting with new ideas.
                            </motion.p>

                            <motion.p
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-[18px] text-[#6B7280] leading-[1.7]"
                            >
                                My journey started with <span className="text-[#1A3263] font-semibold">C++</span> and problem solving, which helped me develop strong logical thinking. I'm currently building projects using the <span className="text-[#1A3263] font-semibold">MERN stack</span>, strengthening my understanding of <span className="text-[#1A3263] font-semibold">Data Structures and Algorithms</span>, and recently started learning <span className="text-[#1A3263] font-semibold">Python for AI & Machine Learning</span> to explore intelligent systems.
                            </motion.p>
                        </div>
                    </div>

                    {/* --- RIGHT COLUMN --- */}
                    <div className="lg:col-span-5 flex flex-col gap-[24px]">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                custom={index}
                                variants={slideUpStagger}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                whileHover={{
                                    y: -6,
                                    borderColor: "#F59E0B",
                                    boxShadow: "0 10px 25px rgba(0,0,0,0.08)"
                                }}
                                className="bg-white p-[28px] rounded-[16px] border border-[#E5E7EB] shadow-[0_6px_20px_rgba(0,0,0,0.05)] transition-all duration-[0.25s] ease group flex items-start gap-[20px]"
                            >
                                <div className="p-[12px] bg-[#FFF7ED] rounded-[12px] group-hover:scale-[1.05] transition-transform flex-shrink-0">
                                    {stat.icon}
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[32px] font-bold text-[#111827] leading-none mb-1">
                                        {stat.number}
                                    </span>
                                    <h4 className="text-[14px] font-bold text-[#6B7280] tracking-tight uppercase mb-2">
                                        {stat.title}
                                    </h4>
                                    <p className="text-[13px] text-[#6B7280] leading-snug">
                                        {stat.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
