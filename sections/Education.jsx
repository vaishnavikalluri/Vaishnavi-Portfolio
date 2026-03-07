"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, BarChart, MapPin } from "lucide-react";

const educationData = [
    {
        degree: "Schooling (CBSE)",
        institution: "Delhi public School",
        year: "2020- 2022",
        result: "77%",
        resultType: "percentage",
        location: "Hyderabad, Telangana",
        details: "Foundational education with a focus on science and mathematics.",
        delay: 0.1
    },
    {
        degree: "Intermediate (MPC)",
        institution: "Gatik Junior College",
        year: "2022 - 2024",
        result: "96%",
        resultType: "percentage",
        location: "Hyderabad, Telangana",
        details: "Specialized in Mathematics, Physics, and Chemistry.",
        delay: 0.2
    },
    {
        degree: "Bachelor of Technology (Software Engineering)",
        institution: "The Apollo University",
        location: "Chittoor, Andhra Pradesh",
        year: "2024 - 2028",
        result: "8.5 CGPA(Current)",
        resultType: "cgpa",
        details: "Focusing on Full Stack Development, Data Structures, Algorithms, and Artificial Intelligence.",
        status: "Currently Pursuing 4th Semester",
        isCurrent: true,
        delay: 0.3
    }
];

const Education = () => {
    return (
        <section
            id="education"
            className="py-24 bg-[#F8FAFC] relative overflow-hidden"
            style={{
                backgroundImage: `
                    radial-gradient(circle at top left, rgba(26, 50, 99, 0.06), transparent 45%),
                    radial-gradient(circle at bottom right, rgba(245, 158, 11, 0.05), transparent 45%)
                `
            }}
        >
            <div className="container-custom px-6 md:px-12 w-full max-w-[1280px] mx-auto relative z-10">

                {/* --- SECTION HEADER --- */}
                <div className="flex flex-col items-center text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[#6B7280] font-bold tracking-[2px] uppercase text-[14px] mb-3 block"
                    >
                        MY ACADEMIC BACKGROUND
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[42px] font-bold text-[#111827] leading-tight mb-4"
                    >
                        Education
                    </motion.h2>

                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 70 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="h-1 bg-[#1A3263] rounded-full"
                    />
                </div>

                {/* --- HORIZONTAL TRAVELING TIMELINE --- */}
                <div className="relative mt-20 mb-10 overflow-visible">
                    {/* Background Progress Line */}
                    <div className="absolute top-[9px] left-0 right-0 h-1 bg-[#E5E7EB] rounded-full hidden md:block" />

                    {/* Animated Progress Line - Travels across */}
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 3, ease: "easeInOut" }}
                        className="absolute top-[9px] left-0 h-1 bg-[#1A3263] rounded-full hidden md:block z-0"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
                        {educationData.map((edu, index) => (
                            <div key={index} className="flex flex-col items-center">
                                {/* Timeline Node & Floating Year Display */}
                                <div className="relative mb-8 hidden md:flex flex-col items-center">
                                    <motion.span
                                        initial={{ opacity: 0, y: -10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: false, amount: 0.5 }}
                                        transition={{ delay: index * 0.8 + 0.5, duration: 1 }}
                                        className="absolute -top-12 text-[14px] font-bold text-[#1A3263] bg-white px-4 py-1.5 rounded-full shadow-sm border border-[#E5E7EB] whitespace-nowrap z-30"
                                    >
                                        {edu.year}
                                    </motion.span>

                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: false, amount: 0.5 }}
                                        transition={{ delay: index * 0.8, type: "spring", stiffness: 150, damping: 20 }}
                                        className="w-[18px] h-[18px] rounded-full bg-[#1A3263] border-4 border-white shadow-[0_0_0_3px_rgba(26,50,99,0.2)] relative z-20"
                                    />
                                </div>

                                {/* Education Card */}
                                <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.2 }}
                                    transition={{ delay: index * 0.8 + 1.2, duration: 1, ease: "easeOut" }}
                                    whileHover={{
                                        y: -8,
                                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)"
                                    }}
                                    className="bg-white p-7 rounded-[22px] border border-[#E5E7EB] shadow-[0_4px_20px_rgba(0,0,0,0.03)] w-full max-w-[360px] transition-all duration-300 relative group"
                                >
                                    {/* Mobile Timeline indicator */}
                                    <div className="md:hidden absolute -left-6 top-10 w-3 h-3 rounded-full bg-[#1A3263]" />

                                    {/* Mobile Year Badge */}
                                    <div className="md:hidden mb-4 inline-block px-3 py-1 rounded-full bg-slate-50 border border-slate-100 text-[12px] font-bold text-[#1A3263]">
                                        {edu.year}
                                    </div>

                                    <div className="flex justify-between items-start mb-4 gap-3">
                                        <h3 className="text-[19px] font-extrabold text-[#111827] leading-tight group-hover:text-[#1A3263] transition-colors">
                                            {edu.degree}
                                        </h3>
                                        <div className="flex items-center gap-1 text-[#F59E0B] text-[15px] font-black whitespace-nowrap pt-0.5">
                                            {edu.resultType === "percentage" ? (
                                                <BarChart size={16} className="stroke-[3.5px]" />
                                            ) : (
                                                <Star size={16} className="fill-[#F59E0B] stroke-[#F59E0B]" />
                                            )}
                                            {edu.result}
                                        </div>
                                    </div>

                                    <p className="text-[15px] font-bold text-[#1A3263] mb-3 leading-tight opacity-90">
                                        {edu.institution}
                                    </p>

                                    <div className="flex items-center gap-2 text-[13px] text-[#6B7280] font-medium mb-5">
                                        <MapPin size={14} className="text-[#1A3263] opacity-70" />
                                        <span>{edu.location}</span>
                                    </div>

                                    <p className="text-[14px] text-[#6B7280] leading-relaxed mb-6 font-medium">
                                        {edu.details}
                                    </p>

                                    {edu.isCurrent && (
                                        <div className="flex items-center gap-2">
                                            <span className="bg-[rgba(245,158,11,0.08)] text-[#F59E0B] font-black px-4 py-1.5 rounded-xl text-[11px] uppercase tracking-wider border border-[#F59E0B]/20">
                                                {edu.status}
                                            </span>
                                        </div>
                                    )}
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
