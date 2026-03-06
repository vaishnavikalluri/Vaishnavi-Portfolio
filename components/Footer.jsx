"use client";

import React from "react";
import { Github, Linkedin, Mail, Twitter, Heart } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-white border-t border-slate-100 pt-20 pb-10 px-6 overflow-hidden relative">
            {/* Background Accent */}
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

            <div className="container-custom grid grid-cols-1 md:grid-cols-3 gap-12 items-start relative z-10">

                {/* Left: Branding & Bio */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <h2 className="text-2xl font-black text-text-main mb-2">Vaishnavi Kalluri</h2>
                    <p className="text-primary font-bold uppercase tracking-widest text-xs mb-4">
                        Full Stack Developer
                    </p>
                    <p className="text-text-muted leading-relaxed max-w-xs text-sm">
                        Building practical solutions through code and continuously learning new technologies.
                    </p>
                </div>

                {/* Center: Social Links */}
                <div className="flex flex-col items-center justify-center h-full">
                    <h4 className="text-text-main font-bold uppercase tracking-widest text-xs mb-6">Let's Connect</h4>
                    <div className="flex gap-4">
                        <a
                            href="https://github.com/vaishnavikalluri"
                            target="_blank"
                            className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-text-muted hover:text-primary hover:bg-primary/5 hover:border-primary/20 transition-all hover:-translate-y-1 hover:shadow-lg"
                        >
                            <Github size={20} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/vaishnavikalluri/"
                            target="_blank"
                            className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-text-muted hover:text-primary hover:bg-primary/5 hover:border-primary/20 transition-all hover:-translate-y-1 hover:shadow-lg"
                        >
                            <Linkedin size={20} />
                        </a>
                        <a
                            href="mailto:vaishnavikalluri@gmail.com"
                            className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-text-muted hover:text-primary hover:bg-primary/5 hover:border-primary/20 transition-all hover:-translate-y-1 hover:shadow-lg"
                        >
                            <Mail size={20} />
                        </a>
                    </div>
                </div>

                {/* Right: Credits */}
                <div className="flex flex-col items-center md:items-end text-center md:text-right h-full">
                    <h4 className="text-text-main font-bold uppercase tracking-widest text-xs mb-6">Made With</h4>
                    <div className="flex items-center gap-2 px-6 py-3 bg-slate-50 border border-slate-100 rounded-2xl shadow-sm italic text-sm font-medium text-text-muted">
                        Built with <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" /> by <span className="text-primary font-bold not-italic">Vaishnavi Kalluri</span>
                    </div>
                </div>
            </div>

            {/* Bottom Strip */}
            <div className="container-custom mt-20 pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-[11px] text-text-muted font-bold uppercase tracking-[0.2em]">
                    © {new Date().getFullYear()} All Rights Reserved.
                </p>
                <div className="flex gap-8">
                    <a href="#" className="text-[11px] text-text-muted font-bold uppercase tracking-[0.2em] hover:text-primary transition-colors">Privacy</a>
                    <a href="#" className="text-[11px] text-text-muted font-bold uppercase tracking-[0.2em] hover:text-primary transition-colors">Terms</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
