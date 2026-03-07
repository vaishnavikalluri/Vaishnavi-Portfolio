"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Folder, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-white rounded-xl border border-slate-200/60 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-primary/30 transition-all duration-300 ease-out flex flex-col h-full overflow-hidden"
        >
            {/* 16:9 Image Container - Compact Height */}
            <div className="relative w-full h-[200px] bg-slate-50 overflow-hidden flex items-center justify-center border-b border-slate-100">
                {project.image ? (
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div className="flex flex-col items-center gap-2">
                        <Folder className="w-8 h-8 text-slate-300 group-hover:text-primary/40 transition-colors duration-500" />
                        <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Preview</span>
                    </div>
                )}
            </div>

            {/* Content Area */}
            <div className="p-5 flex-1 flex flex-col">
                {/* Category Badge - Below Image */}
                <div className="mb-3">
                    <span className="px-2.5 py-0.5 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-wider rounded-full">
                        {project.category}
                    </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-2 py-0.5 text-[14px] font-medium text-slate-500 bg-slate-50 rounded-full border border-slate-100"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Action Buttons - Side-by-side & Compact */}
                <div className="mt-auto flex items-center gap-3">
                    {project.isUnderDevelopment ? (
                        <div className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-50 text-slate-400 text-[10px] font-bold uppercase tracking-wider rounded-full border border-slate-100">
                            In Development
                        </div>
                    ) : (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary text-white text-xs font-bold rounded-full hover:bg-primary-dark transition-all shadow-sm active:scale-95"
                        >
                            <ArrowUpRight size={14} />
                            {project.demoLabel || "Live Demo"}
                        </a>
                    )}
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-white text-slate-600 text-xs font-bold rounded-full border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all active:scale-95"
                    >
                        <Github size={14} />
                        GitHub
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
