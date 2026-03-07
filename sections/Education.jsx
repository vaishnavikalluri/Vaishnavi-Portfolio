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
        result: "8.5 (Current)",
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

                {/* --- HORIZONTAL TIMELINE --- */}
                <div className="relative mt-20 mb-10">
                    {/* Continuous Timeline Line */}
                    <div className="absolute top-[9px] left-0 right-0 h-1 bg-[#E5E7EB] rounded-full hidden md:block" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                        {educationData.map((edu, index) => (
                            <div key={index} className="flex flex-col items-center">
                                {/* Timeline Node */}
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: edu.delay, type: "spring", stiffness: 260, damping: 20 }}
                                    className="w-[18px] h-[18px] rounded-full bg-[#1A3263] border-4 border-white shadow-[0_0_0_3px_rgba(26,50,99,0.2)] relative z-10 mb-8 hidden md:block"
                                />

                                {/* Education Card */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: edu.delay + 0.1, duration: 0.6 }}
                                    whileHover={{
                                        y: -6,
                                        boxShadow: "0 14px 28px rgba(0,0,0,0.08)"
                                    }}
                                    className="bg-white p-6 rounded-[18px] border border-[#E5E7EB] shadow-[0_8px_20px_rgba(0,0,0,0.05)] w-full max-w-[340px] transition-all duration-300 relative"
                                >
                                    {/* Mobile Timeline indicator */}
                                    <div className="md:hidden absolute -left-6 top-8 w-3 h-3 rounded-full bg-[#1A3263]" />

                                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2">
                                        <span className="text-[14px] font-bold text-[#F59E0B] tracking-wide">
                                            {edu.year}
                                        </span>
                                        <span className="text-[#9CA3AF]">•</span>
                                        <div className="flex items-center gap-1 text-[14px] font-bold text-[#16A34A;]">
                                            {edu.resultType === "percentage" ? (
                                                <BarChart size={14} className="stroke-[3px]" />
                                            ) : (
                                                <Star size={14} className="fill-[#F59E0B] stroke-[#F59E0B]" />
                                            )}
                                            <span>{edu.result}</span>
                                        </div>
                                    </div>

                                    <h3 className="text-[20px] font-bold text-[#111827] leading-tight mb-2">
                                        {edu.degree}
                                    </h3>

                                    <p className="text-[15px] font-semibold text-[#1A3263] mb-2 leading-tight">
                                        {edu.institution}
                                    </p>

                                    <div className="flex items-center gap-1.5 text-[13px] text-[#6B7280] font-medium mb-4">
                                        <MapPin size={14} className="text-[#1A3263]" />
                                        <span>{edu.location}</span>
                                    </div>

                                    <p className="text-[14px] text-[#6B7280] leading-relaxed mb-4">
                                        {edu.details}
                                    </p>

                                    {edu.isCurrent && (
                                        <div className="flex items-center gap-2">
                                            <span className="bg-[rgba(245,158,11,0.1)] text-[#F59E0B] font-bold px-3 py-1 rounded-full text-[13px] tracking-tight border border-[#F59E0B]/20">
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
