"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import { Mail, Linkedin, MapPin, Send, MessageSquare } from "lucide-react";

const contactDetails = [
    {
        icon: <Mail className="w-6 h-6" />,
        label: "Email",
        value: "vaishnavikalluri@gmail.com",
        href: "mailto:vaishnavikalluri@gmail.com",
        color: "bg-primary/5 text-primary border-primary/20"
    },
    {
        icon: <Linkedin className="w-6 h-6" />,
        label: "LinkedIn",
        value: "vaishnavikalluri",
        href: "https://www.linkedin.com/in/vaishnavikalluri/",
        color: "bg-secondary/5 text-secondary border-secondary/20"
    },
    {
        icon: <MapPin className="w-6 h-6" />,
        label: "Location",
        value: "Andhra Pradesh, India",
        href: "#",
        color: "bg-accent/5 text-accent border-accent/20"
    }
];

const Contact = () => {
    return (
        <SectionWrapper id="contact" title="Get In Touch" subtitle="Let's Connect">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Column: Info & Content */}
                    <div>
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-black text-text-main mb-6 leading-tight"
                        >
                            Let’s build something <span className="text-primary italic">meaningful</span> together.
                        </motion.h3>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-text-muted mb-10 leading-relaxed max-w-lg"
                        >
                            Whether you're looking to build a new product, improve an existing application, or collaborate on exciting ideas — I'd love to connect.
                        </motion.p>

                        <div className="space-y-4">
                            {contactDetails.map((detail, index) => (
                                <motion.a
                                    key={detail.label}
                                    href={detail.href}
                                    target={detail.href.startsWith('http') ? "_blank" : "_self"}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`flex items-center gap-4 p-5 rounded-3xl border-2 transition-all hover:scale-105 ${detail.color} group relative`}
                                >
                                    <div className="bg-white p-3 rounded-2xl shadow-sm group-hover:rotate-12 transition-transform">
                                        {detail.icon}
                                    </div>
                                    <div className="relative z-10">
                                        <p className="text-xs font-black uppercase tracking-widest opacity-70 mb-0.5">{detail.label}</p>
                                        <p className="text-base font-bold">{detail.value}</p>
                                    </div>
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: CTA Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Decorative Background Glow */}
                        <div className="absolute inset-0 bg-primary/20 rounded-[3rem] blur-3xl -z-10 animate-pulse" />

                        <div className="bg-white p-10 md:p-12 rounded-[3.5rem] border-2 border-primary/20 shadow-2xl relative overflow-hidden flex flex-col items-center text-center">
                            <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mb-8">
                                <MessageSquare className="w-10 h-10 text-primary" />
                            </div>

                            <h4 className="text-3xl font-black text-text-main mb-4">Start a Conversation</h4>
                            <p className="text-text-muted mb-10 text-lg">
                                I typically respond within a few hours. Looking forward to hearing from you!
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 w-full">
                                <a
                                    href="mailto:vaishnavikalluri@gmail.com"
                                    className="flex-1 px-8 py-5 bg-primary text-white font-black rounded-2xl shadow-lg shadow-primary/20 hover:bg-primary-dark transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 uppercase tracking-widest text-sm"
                                >
                                    Send Email <Send size={18} />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/vaishnavikalluri/"
                                    target="_blank"
                                    className="flex-1 px-8 py-5 bg-slate-900 text-white font-black rounded-2xl shadow-lg hover:bg-black transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 uppercase tracking-widest text-sm"
                                >
                                    LinkedIn <Linkedin size={18} />
                                </a>
                            </div>

                            {/* Floating decorative elements */}
                            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/5 rounded-full blur-xl" />
                            <div className="absolute -top-6 -left-6 w-20 h-20 bg-secondary/5 rounded-full blur-xl" />
                        </div>
                    </motion.div>

                </div>
            </div>
        </SectionWrapper>
    );
};

export default Contact;
