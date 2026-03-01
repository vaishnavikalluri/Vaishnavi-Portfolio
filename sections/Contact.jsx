"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import { Mail, MapPin, Github, Linkedin, ArrowRight, Send } from "lucide-react";

const Contact = () => {
    const contactMethods = [
        {
            icon: <Github className="w-6 h-6" />,
            label: "GitHub",
            value: "Code Repository",
            link: "https://github.com/vaishnavikalluri",
            description: "View my projects",
            primary: true
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
                </svg>
            ),
            label: "LeetCode",
            value: "Problem Solving",
            link: "https://leetcode.com/vaishnavi__2007",
            description: "View my solutions"
        }
    ];

    return (
        <SectionWrapper id="contact" title="Let's Work Together" subtitle="Ready to collaborate">
            <div className="max-w-7xl mx-auto">
                
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-text mb-6 leading-tight">
                        Have a project in mind?<br />
                        <span className="text-primary">Let's make it happen.</span>
                    </h3>
                    <p className="text-lg md:text-xl text-text-muted max-w-3xl mx-auto leading-relaxed">
                        Whether you're looking to build something new, enhance an existing project, 
                        or just want to discuss ideas, I'm here to help bring your vision to life.
                    </p>
                </motion.div>

                {/* Main Contact Section */}
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
                    
                    {/* Left: Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div className="mb-12">
                            <h4 className="text-2xl font-bold text-text mb-4">Get in touch</h4>
                            <p className="text-text-muted leading-relaxed">
                                I'm currently available for freelance work and full-time opportunities. 
                                Choose your preferred way to connect.
                            </p>
                            
                            {/* Location Badge */}
                            <div className="inline-flex items-center gap-3 mt-6 px-4 py-2 bg-white rounded-full border border-primary/20 shadow-sm">
                                <MapPin className="w-4 h-4 text-primary" />
                                <span className="text-sm font-medium text-text">Hyderabad, Telangana, India</span>
                            </div>
                        </div>

                        {/* Contact Methods List */}
                        <div className="space-y-1">
                            {contactMethods.map((method, index) => (
                                <motion.div
                                    key={method.label}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="group"
                                >
                                    <a
                                        href={method.link}
                                        target={method.link?.startsWith('http') ? '_blank' : '_self'}
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-6 p-6 rounded-2xl hover:bg-white/80 transition-all duration-300 border border-transparent hover:border-primary/10 hover:shadow-lg"
                                    >
                                        {/* Icon */}
                                        <div className={`flex items-center justify-center w-14 h-14 rounded-xl transition-all duration-300 ${
                                            method.primary 
                                                ? 'bg-primary text-white shadow-lg group-hover:shadow-xl group-hover:scale-110' 
                                                : 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-110'
                                        }`}>
                                            {method.icon}
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-2 mb-1">
                                                <h5 className="font-semibold text-text group-hover:text-primary transition-colors">
                                                    {method.label}
                                                </h5>
                                                {method.primary && (
                                                    <span className="px-2 py-1 text-xs font-medium bg-secondary/20 text-secondary rounded-full">
                                                        Preferred
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-sm text-text-muted mb-1">{method.description}</p>
                                            <p className="text-sm font-medium text-primary truncate">{method.value}</p>
                                        </div>

                                        {/* Arrow */}
                                        <ArrowRight className="w-5 h-5 text-text-muted group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                                    </a>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Call to Action */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:sticky lg:top-8"
                    >
                        <div className="bg-gradient-to-br from-primary/5 via-white to-secondary/5 rounded-3xl p-8 lg:p-10 border border-primary/10 shadow-xl">
                            <div className="text-center mb-8">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl text-white mb-6 shadow-lg">
                                    <Send className="w-8 h-8" />
                                </div>
                                <h4 className="text-2xl font-bold text-text mb-4">Ready to start?</h4>
                                <p className="text-text-muted">
                                    Let's discuss your project and see how we can work together to achieve your goals.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <a
                                    href="mailto:vaishnavikalluri@example.com?subject=Project Inquiry&body=Hi Vaishnavi, I'd like to discuss a project with you."
                                    className="w-full inline-flex items-center justify-center gap-3 bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 hover:shadow-lg hover:scale-105 transition-all duration-300 shadow-md"
                                >
                                    <Mail className="w-5 h-5" />
                                    Send Email
                                </a>
                                
                                <a
                                    href="https://www.linkedin.com/in/vaishnavikalluri/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full inline-flex items-center justify-center gap-3 bg-white text-primary border-2 border-primary px-8 py-4 rounded-xl font-semibold hover:bg-primary hover:text-white hover:shadow-lg hover:scale-105 transition-all duration-300"
                                >
                                    <Linkedin className="w-5 h-5" />
                                    Connect on LinkedIn
                                </a>
                            </div>

                            {/* Features */}
                            <div className="mt-8 pt-6 border-t border-primary/10">
                                <div className="grid grid-cols-2 gap-4 text-center">
                                    <div>
                                        <div className="text-2xl font-bold text-primary mb-1">24h</div>
                                        <div className="text-xs text-text-muted">Response Time</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-primary mb-1">100%</div>
                                        <div className="text-xs text-text-muted">Commitment</div>
                                    </div>
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
