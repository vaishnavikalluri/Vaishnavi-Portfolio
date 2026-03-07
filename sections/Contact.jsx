"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import { Mail, Github, MapPin, MessageSquare, ArrowUpRight } from "lucide-react";

const contactDetails = [
    {
        icon: <Mail className="w-5 h-5" />,
        label: "Email",
        value: "vaishnavikalluri@gmail.com",
        href: "mailto:vaishnavikalluri@gmail.com",
        iconBg: "bg-blue-50",
        iconColor: "text-blue-600"
    },
    {
        icon: <Github className="w-5 h-5" />,
        label: "GitHub",
        value: "vaishnavikalluri",
        href: "https://github.com/vaishnavikalluri",
        iconBg: "bg-blue-50",
        iconColor: "text-blue-600",
        isExternal: true
    },
    {
        icon: <MapPin className="w-5 h-5" />,
        label: "Location",
        value: "Andhra Pradesh, India",
        href: "#",
        iconBg: "bg-blue-50",
        iconColor: "text-blue-600"
    }
];

const Contact = () => {
    return (
        <SectionWrapper
            id="contact"
            title="Get In Touch"
            subtitle="LET'S CONNECT"
            className="bg-gradient-to-b from-white to-slate-50 min-h-[90vh] flex items-center py-20"
        >
            <div className="max-w-6xl mx-auto px-4 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Left Side Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col"
                    >
                        <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                            Let’s build something <span className="italic text-primary">meaningful</span> together.
                        </h3>

                        <p className="text-slate-600 text-base md:text-lg mb-10 leading-relaxed max-w-lg">
                            Whether you're looking to collaborate, discuss ideas, or build something impactful, I'd love to connect.
                        </p>

                        {/* Contact Information Cards */}
                        <div className="grid gap-4 max-w-md">
                            {contactDetails.map((item, index) => (
                                <motion.a
                                    key={index}
                                    href={item.href}
                                    target={item.href.startsWith("http") ? "_blank" : "_self"}
                                    whileHover={{ y: -4 }}
                                    className="flex items-center justify-between p-4 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 group"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`p-3 rounded-lg ${item.iconBg} ${item.iconColor} shadow-inner`}>
                                            {item.icon}
                                        </div>
                                        <div className="flex flex-col">
                                            <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1.5">
                                                {item.label}
                                            </h5>
                                            <p className="text-slate-700 font-semibold text-sm md:text-base leading-none">
                                                {item.value}
                                            </p>
                                        </div>
                                    </div>
                                    {item.isExternal && (
                                        <ArrowUpRight size={16} className="text-slate-300 group-hover:text-primary transition-colors" />
                                    )}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Side Conversation Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="w-full flex justify-center md:justify-end"
                    >
                        <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-lg relative overflow-hidden group max-w-sm w-full">
                            <div className="relative z-10 flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                                    <MessageSquare className="w-8 h-8" />
                                </div>

                                <h4 className="text-2xl font-bold text-slate-900 mb-3">
                                    Start a Conversation
                                </h4>

                                <p className="text-slate-500 text-sm md:text-base mb-8 max-w-[280px]">
                                    I'm active on LinkedIn and usually respond within a few hours. Feel free to connect!
                                </p>

                                {/* CTA Button */}
                                <div className="w-full flex justify-center">
                                    <a
                                        href="https://www.linkedin.com/in/vaishnavikalluri/"
                                        target="_blank"
                                        className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white text-sm font-bold rounded-full hover:bg-blue-700 transition-all shadow-md active:scale-95"
                                    >
                                        Connect on LinkedIn →
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </SectionWrapper>
    );
};

export default Contact;
