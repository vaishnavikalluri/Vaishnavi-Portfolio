"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, FolderOpen } from "lucide-react";

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group bg-white border-2 border-black/5 rounded-2xl hover:border-primary/30 transition-all duration-300 flex flex-col h-full hover-lift"
        >
            {/* Header with Category Badge */}
            <div className="p-6 pb-4 border-b-2 border-black/5">
                <div className="flex items-start justify-between mb-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <FolderOpen className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex gap-2">
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 rounded-lg border-2 border-black/10 text-text-muted hover:border-primary hover:text-primary flex items-center justify-center transition-all"
                        >
                            <Github size={16} />
                        </a>
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 rounded-lg border-2 border-black/10 text-text-muted hover:border-primary hover:text-primary flex items-center justify-center transition-all"
                        >
                            <ExternalLink size={16} />
                        </a>
                    </div>
                </div>

                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-lg">
                    {project.category}
                </span>
            </div>

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-text mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                </h3>

                <p className="text-text-muted text-sm leading-relaxed mb-5 flex-1">
                    {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1.5 text-xs font-semibold text-text-muted border-2 border-black/10 rounded-lg hover:border-primary/40 hover:text-primary transition-colors"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
