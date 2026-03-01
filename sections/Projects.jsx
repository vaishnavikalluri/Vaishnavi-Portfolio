"use client";

import React from "react";
import SectionWrapper from "../components/SectionWrapper";
import ProjectCard from "../components/ProjectCard";

const projects = [
    {
        title: "DineEase",
        category: "Web Development",
        description: "A comprehensive restaurant reservation application built with the MERN stack. Features real-time booking, menu management, and user authentication.",
        tags: ["MongoDB", "Express", "React", "Node.js"],
        github: "https://github.com/kalviumcommunity/s86_Vaishnavi_Capstone_DineEase.git",
        demo: "https://vaishnavi-dineease.vercel.app/",
    },
    {
        title: "Local Train System",
        category: "Web Development",
        description: "Developed a real-time local train tracking and intelligent rerouting system that helps commuters receive live updates and alternative travel suggestions during delays.",
        tags: ["Next.js", "Tailwind", "TypeScript", "MongoDB"],
        github: "https://github.com/vaishnavikalluri/local-train-swi.git",
        demo: "https://localtrainsandre-routes.vercel.app/",
    },
    {
        title: "Python Chessboard",
        category: "Python",
        description: "An interactive chessboard designed using Tkinter. Implements game logic, piece movement validation, and a clean graphical interface.",
        tags: ["Python", "Tkinter", "GUI Designs"],
        github: "https://github.com/vaishnavikalluri",
        demo: "#",
    },
    {
        title: "Tic-tac-toe",
        category: "Python",
        description: "Created a GUI-based Tic Tac Toe game in Python where players can compete against the computer. Used Tkinter for the interface and implemented core game logic with basic AI for computer moves.",
        tags: ["Python", "Tkinter"],
        github: "https://github.com/vaishnavikalluri/Tic-tac-toe-python"
        
    }
];

const Projects = () => {
    return (
        <SectionWrapper id="projects" title="Featured Projects" subtitle="WHAT I BUILT">
            <div className="grid md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <ProjectCard key={project.title} project={project} index={index} />
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Projects;
