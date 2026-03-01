"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react";

const educationData = [
    {
        degree: "Bachelor of Technology (Software Engineering)",
        institution: "The Apollo University, Chittoor",
        duration: "2024 - 2028",
        location: "Chittoor, Andhra Pradesh",
        focus: "Core Software Engineering, Data Structures, Algorithms, Web Technologies, and AI Fundamentals.",
    }
];

const Education = () => {
    return (
        <SectionWrapper id="education" title="Education" subtitle="My Academic Journey">
            <div className="max-w-4xl mx-auto relative">
                {/* Continuous Timeline Line */}
                {educationData.length > 1 && (
                    <div className="absolute left-[19px] top-6 bottom-12 w-0.5 bg-black/10" />
                )}
                
                {educationData.map((edu, index) => (
                    <div key={index} className="relative pl-12 pb-12 last:pb-0">
                        {/* Timeline Node */}
                        <div className="absolute left-0 top-6 w-10 h-10 bg-white border-2 border-primary rounded-xl flex items-center justify-center z-10">
                            <GraduationCap className="w-5 h-5 text-primary" />
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white border-2 border-black/5 rounded-2xl hover:border-primary/30 transition-all overflow-hidden hover-lift"
                        >
                            {/* Header Section */}
                            <div className="p-6 pb-4 border-b-2 border-black/5 bg-[#fdfaf5]">
                                <div className="mb-4">
                                    <h3 className="text-xl font-bold text-text mb-1">{edu.degree}</h3>
                                    <p className="text-base font-semibold text-text-muted">{edu.institution}</p>
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    <span className="flex items-center gap-2 px-3 py-1.5 bg-white border-2 border-primary/20 rounded-lg text-primary text-sm font-semibold">
                                        <Calendar size={14} /> {edu.duration}
                                    </span>
                                    <span className="flex items-center gap-2 px-3 py-1.5 bg-white border-2 border-black/10 rounded-lg text-text-muted text-sm font-semibold">
                                        <MapPin size={14} /> {edu.location}
                                    </span>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-6">
                                <div className="mb-5">
                                    <h4 className="text-sm font-bold text-text uppercase tracking-wider mb-2 flex items-center gap-2">
                                        <BookOpen size={16} className="text-primary" />
                                        Focus Areas
                                    </h4>
                                    <p className="text-text-muted leading-relaxed">
                                        {edu.focus}
                                    </p>
                                </div>

                                {/* Current Status */}
                                {/* <div className="pt-5 border-t-2 border-black/5">
                                    <div className="flex items-center gap-3 p-4 bg-[#fdfaf5] rounded-xl border-2 border-primary/10">
                                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <GraduationCap className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-text-muted font-bold uppercase tracking-wider mb-0.5">Current Focus</p>
                                            <p className="text-sm font-bold text-text">Advanced Software Engineering Patterns</p>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Education;
