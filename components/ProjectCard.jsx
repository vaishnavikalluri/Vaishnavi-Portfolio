"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Folder, ArrowUpRight } from "lucide-react";

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -12 }}
            className="group bg-white rounded-[2rem] border border-primary/10 shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 flex flex-col h-full overflow-hidden"
        >
            {/* Project Image Placeholder / Decorative Header */}
            <div className="h-48 w-full bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Folder className="w-16 h-16 text-primary/20 group-hover:scale-110 group-hover:text-primary/40 transition-all duration-500" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                    <span className="px-4 py-1.5 bg-white/80 backdrop-blur-md text-primary text-xs font-black rounded-full shadow-sm uppercase tracking-widest border border-primary/10">
                        {project.category}
                    </span>
                </div>

                {/* GitHub link absolute */}
                <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 backdrop-blur-md text-text-muted hover:text-primary flex items-center justify-center shadow-sm transition-all hover:scale-110"
                >
                    <Github size={20} />
                </a>
            </div>

            {/* Content Area */}
            <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-black text-text-main group-hover:text-primary transition-colors duration-300">
                        {project.title}
                    </h3>
                </div>

                <p className="text-text-muted text-base leading-relaxed mb-8 flex-1">
                    {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-4 py-1.5 text-xs font-bold text-primary bg-primary/5 rounded-full border border-primary/10 group-hover:border-primary/30 transition-colors"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Action Button */}
                <div className="pt-6 border-t border-slate-50">
                    <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary font-black uppercase tracking-widest text-sm group/btn"
                    >
                        Live Preview
                        <span className="p-2 bg-primary/10 rounded-full group-hover/btn:bg-primary group-hover/btn:text-white transition-all duration-300">
                            <ArrowUpRight size={18} />
                        </span>
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
