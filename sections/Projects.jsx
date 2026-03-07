"use client";

import React from "react";
import SectionWrapper from "../components/SectionWrapper";
import ProjectCard from "../components/ProjectCard";

const projects = [
    {
        title: "DineEase",
        category: "Web Development",
        description: "MERN-stack restaurant reservation platform with real-time booking, menu management, and user authentication.",
        tags: ["MongoDB", "Express", "React", "Node.js"],
        github: "https://github.com/kalviumcommunity/s86_Vaishnavi_Capstone_DineEase.git",
        demo: "https://vaishnavi-dineease.vercel.app/",
        image: "/Dinease-image.png",
        demoLabel: "Live Demo"
    },
    {
        title: "Local Train & Reroutes System",
        category: "Web Development",
        description: "Real-time train tracking and intelligent rerouting system providing live updates and travel alternatives during delays.",
        tags: ["Next.js", "Tailwind", "TypeScript", "MongoDB"],
        github: "https://github.com/vaishnavikalluri/local-train-swi.git",
        demo: "https://localtrainsandre-routes.vercel.app/",
        image: "/ltr-image.png",
        demoLabel: "Live Demo"
    },
    {
        title: "Python Chessboard",
        category: "Python",
        description: "Interactive chessboard GUI built with Tkinter featuring game logic and piece movement validation.",
        tags: ["Python", "Tkinter", "GUI Designs"],
        github: "https://github.com/vaishnavikalluri",
        demo: "#",
        image: null,
        isUnderDevelopment: true
    },
    {
        title: "Tic Tac Toe AI",
        category: "Python",
        description: "GUI-based Tic Tac Toe game in Python featuring a computer opponent with optimized AI move logic.",
        tags: ["Python", "Tkinter", "AI Concepts"],
        github: "https://github.com/vaishnavikalluri/Tic-tac-toe-python",
        demo: "https://github.com/vaishnavikalluri/Tic-tac-toe-python",
        image: "/tic-tac-toe-image.jpeg",
        demoLabel: "Clone to get Demo"
    }
];

const Projects = () => {
    return (
        <SectionWrapper
            id="projects"
            title="Featured Projects"
            subtitle="WHAT I BUILT"
            className="bg-gradient-to-b from-white to-slate-50 relative overflow-hidden"
        >
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </div>
            </div>

            {/* Subtle Decorative Background Element */}
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/2 rounded-full blur-3xl pointer-events-none" />
        </SectionWrapper>
    );
};

export default Projects;
