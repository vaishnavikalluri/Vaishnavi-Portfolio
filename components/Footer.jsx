"use client";

import React from "react";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-white border-t border-slate-200 py-12 md:py-16">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">

                    {/* Column 1: Personal Info */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <h2 className="text-xl font-bold text-slate-900 mb-1">
                            Vaishnavi Kalluri
                        </h2>
                        <p className="text-blue-600 font-bold tracking-wide text-xs uppercase mb-4">
                            Full Stack Developer
                        </p>
                        <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
                            Building practical solutions through code and continuously learning new technologies.
                        </p>
                    </div>

                    {/* Column 2: Social Links */}
                    <div className="flex flex-col items-center">
                        <h4 className="text-slate-400 font-bold uppercase tracking-widest text-[10px] mb-6">
                            Let's Connect
                        </h4>
                        <div className="flex gap-4">
                            <a
                                href="https://github.com/vaishnavikalluri"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 text-slate-600 border border-slate-200 hover:bg-amber-50 hover:text-amber-500 hover:border-amber-400 hover:-translate-y-1 hover:shadow-lg hover:shadow-amber-100 transition-all duration-300"
                            >
                                <Github size={18} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/vaishnavikalluri/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 text-slate-600 border border-slate-200 hover:bg-amber-50 hover:text-amber-500 hover:border-amber-400 hover:-translate-y-1 hover:shadow-lg hover:shadow-amber-100 transition-all duration-300"
                            >
                                <Linkedin size={18} />
                            </a>
                            <a
                                href="mailto:vaishnavikalluri@gmail.com"
                                className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 text-slate-600 border border-slate-200 hover:bg-amber-50 hover:text-amber-500 hover:border-amber-400 hover:-translate-y-1 hover:shadow-lg hover:shadow-amber-100 transition-all duration-300"
                            >
                                <Mail size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Column 3: Credit Badge */}
                    <div className="flex flex-col items-center md:items-end">
                        <div className="bg-slate-100 rounded-full px-5 py-2.5 text-xs font-medium text-slate-600 flex items-center gap-2 border border-slate-200 shadow-sm">
                            Built with <Heart size={12} className="text-red-500 fill-red-500" /> by <span className="font-bold text-slate-900">Vaishnavi Kalluri</span>
                        </div>
                    </div>

                </div>

                {/* Bottom Footer Row */}
                <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-slate-500 text-sm">
                        © {new Date().getFullYear()} All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
