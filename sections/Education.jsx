"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import { GraduationCap, Calendar, MapPin, School, Award, CheckCircle2 } from "lucide-react";

const educationData = [
    {
        degree: "Bachelor of Technology (Software Engineering)",
        institution: "The Apollo University, Chittoor",
        duration: "2024 - 2028",
        location: "Chittoor, Andhra Pradesh",
        details: "Focusing on Full Stack Development, Data Structures, Algorithms, and Artificial Intelligence.",
        status: "Currently Pursuing",
        icon: <GraduationCap className="w-6 h-6" />
    },
    {
        degree: "Intermediate (MPC)",
        institution: "Sri Chaitanya Junior College",
        duration: "2022 - 2024",
        location: "Andhra Pradesh",
        details: "Specialized in Mathematics, Physics, and Chemistry.",
        status: "95% Percentage",
        icon: <Award className="w-6 h-6" />
    },
    {
        degree: "Schooling (SSC)",
        institution: "Vignan High School",
        duration: "2021 - 2022",
        location: "Andhra Pradesh",
        details: "Foundational education with a focus on science and mathematics.",
        status: "10 CGPA",
        icon: <School className="w-6 h-6" />
    }
];

const Education = () => {
    return (
        <SectionWrapper id="education" title="Education" subtitle="My Academic Background">
            <div className="max-w-4xl mx-auto relative px-4">
                {/* Timeline Center Line */}
                <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-1 bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20 rounded-full" />

                {educationData.map((edu, index) => (
                    <div key={index} className={`relative flex flex-col md:flex-row items-center mb-16 last:mb-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                        {/* Timeline Dot */}
                        <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 md:top-8 w-8 h-8 bg-white border-4 border-primary rounded-full z-10 shadow-lg shadow-primary/20" />

                        {/* Content Card */}
                        <div className={`w-full md:w-[45%] ml-12 md:ml-0`}>
                            <motion.div
                                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-primary/10 hover:border-primary/30 transition-all hover:shadow-xl group"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 bg-primary/10 text-primary rounded-2xl group-hover:scale-110 transition-transform">
                                        {edu.icon}
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 text-primary font-bold text-sm tracking-widest uppercase">
                                            <Calendar size={14} /> {edu.duration}
                                        </div>
                                        <h3 className="text-xl font-bold text-text-main mt-1">{edu.degree}</h3>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-start gap-2 text-text-muted font-medium italic">
                                        <MapPin size={18} className="text-primary mt-1 shrink-0" />
                                        <span>{edu.institution}, {edu.location}</span>
                                    </div>

                                    <p className="text-text-muted leading-relaxed">
                                        {edu.details}
                                    </p>

                                    <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-primary font-bold">
                                        <CheckCircle2 size={18} />
                                        <span>{edu.status}</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Education;
