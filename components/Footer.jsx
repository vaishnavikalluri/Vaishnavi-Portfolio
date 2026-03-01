"use client";

import React from "react";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-white border-t border-black/5 py-12 px-6">
            <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="text-center md:text-left max-w-md">
                    <h2 className="text-xl font-heading font-bold text-primary mb-2">Vaishnavi Kalluri</h2>
                    <p className="text-xs text-text-muted uppercase tracking-widest font-bold mb-3">
                        Full Stack Developer 
                    </p>
                    <p className="text-sm text-text-muted leading-relaxed">
                        Building practical solutions through code and continuously learning new technologies.
                        Currently exploring AI & Machine Learning.
                    </p>
                </div>

                <div className="flex gap-6">
                    <a
                        href="https://github.com/vaishnavikalluri"
                        target="_blank"
                        className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center text-text-muted hover:text-primary hover:border-primary transition-all hover:scale-110 hover:shadow-md"
                    >
                        <Github size={18} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/vaishnavikalluri/"
                        target="_blank"
                        className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center text-text-muted hover:text-primary hover:border-primary transition-all hover:scale-110 hover:shadow-md"
                    >
                        <Linkedin size={18} />
                    </a>
                    <a
                        href="mailto:vaishnavikalluri@gmail.com"
                        className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center text-text-muted hover:text-primary hover:border-primary transition-all hover:scale-110 hover:shadow-md"
                    >
                        <Mail size={18} />
                    </a>
                </div>

                <div className="text-center md:text-right">
                    <p className="text-sm text-text-muted mb-4">
                        Built with ❤️ by <span className="text-primary font-bold">Vaishnavi Kalluri</span>
                    </p>
    
                </div>
            </div>

            <div className="container-custom mt-12 pt-8 border-t border-black/5 text-center">
                <p className="text-[10px] text-text-muted uppercase tracking-widest">
                    © {new Date().getFullYear()} All Rights Reserved. Designed for Excellence.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
