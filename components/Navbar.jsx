"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Me", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
            
            const sections = ["home", "about", "education", "projects", "contact"];
            let currentSection = "home";
            
            // Find the section that's currently most visible
            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // If section top is above or at the navbar (accounting for navbar height ~100px)
                    if (rect.top <= 100) {
                        currentSection = section;
                        break;
                    }
                }
            }
            
            setActiveSection(currentSection);
        };
        
        handleScroll(); // Run on mount
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass py-3" : "bg-transparent py-8"
                }`}
        >
            <div className="container-custom flex justify-between items-center px-6 md:px-12">
                <Link href="#home" className="text-3xl font-heading font-black text-primary tracking-tighter flex items-center">
                    V<span className="text-[#1a1a1a] font-bold tracking-tight">K.</span>
                </Link>

                {/* Desktop Nav - Centered */}
                <div className="hidden md:flex gap-2 items-center absolute left-1/2 transform -translate-x-1/2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`px-4 py-2 text-sm font-semibold transition-all duration-300 relative group`}
                        >
                            <span className={`${activeSection === link.href.slice(1) ? "text-primary" : "text-foreground/70 hover:text-primary"
                                }`}>
                                {link.name}
                            </span>
                            {/* Underline for active section */}
                            <span 
                                className={`absolute bottom-0 left-0 right-0 h-0.5 bg-primary transition-all duration-300 ${
                                    activeSection === link.href.slice(1) ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                                }`}
                            />
                        </Link>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-foreground p-1"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden absolute top-full left-0 right-0 glass border-t border-black/5 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`text-lg font-bold py-2 relative ${activeSection === link.href.slice(1) ? 'text-primary' : ''}`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                    {/* Underline for active section in mobile */}
                                    {activeSection === link.href.slice(1) && (
                                        <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary" />
                                    )}
                                </Link>
                            ))}
                            <div className="flex gap-4 pt-4 border-t border-black/5">
                                <a href="https://github.com/vaishnavikalluri" target="_blank" className="text-primary hover:scale-110 transition-transform">
                                    <Github size={24} />
                                </a>
                                <a href="https://www.linkedin.com/in/vaishnavikalluri/" target="_blank" className="text-primary hover:scale-110 transition-transform">
                                    <Linkedin size={24} />
                                </a>
                                <a href="#" className="text-primary hover:scale-110 transition-transform">
                                    <Instagram size={24} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
