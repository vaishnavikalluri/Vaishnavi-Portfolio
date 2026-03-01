"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

const Hero = () => {
    return (
        <section id="home" className="min-h-screen relative flex flex-col justify-center items-center pt-20 pb-20 bg-[#fdfaf5] overflow-hidden">

            <div className="container-custom relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center px-4 md:px-8 max-w-[1300px] w-full">

                {/* Left Section */}
                <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left z-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="-translate-y-1.5"
                    >
                        <h2 className="text-5xl md:text-6xl font-handwritten text-secondary mb-3 font-normal tracking-wide relative inline-block">
                            <span className="relative z-10">Hey! I Am</span>
                            <span className="absolute inset-0 blur-sm text-secondary opacity-30 z-0">Hey! I Am</span>
                        </h2>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black tracking-tight leading-none mb-10 text-primary">
                            Vaishnavi
                            <br />
                            Kalluri
                        </h1>
                    </motion.div>

                    {/* Social Icons */}
                    <div className="hidden lg:flex gap-6 mt-20">
                        <a href="https://www.linkedin.com/in/vaishnavikalluri/" target="_blank" className="p-2 text-secondary hover:text-primary transition-all hover:scale-110"><Linkedin size={22} /></a>
                        <a href="https://github.com/vaishnavikalluri" target="_blank" className="p-2 text-secondary hover:text-primary transition-all hover:scale-110"><Github size={22} /></a>
                        <a href="https://leetcode.com/vaishnavi__2007" target="_blank" className="p-2 text-secondary hover:text-primary transition-all hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/></svg>
                        </a>
                        <a href="mailto:vaishnavikalluri@gmail.com" className="p-2 text-secondary hover:text-primary transition-all hover:scale-110"><Mail size={22} /></a>
                    </div>
                </div>

                {/* Center Section (Image) */}
                <div className="order-1 lg:order-2 flex justify-center items-center relative z-10 py-8 lg:py-0 lg:translate-x-12 lg:-translate-y-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ 
                            opacity: 1, 
                            scale: 1,
                            y: [0, -10, 0]
                        }}
                        transition={{ 
                            duration: 0.8,
                            y: {
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }
                        }}
                        className="relative w-[380px] h-[450px] md:w-[510px] md:h-[610px] lg:w-[560px] lg:h-[670px] group"
                    >
                        {/* Abstract background shape - soft beige blob */}
                        <div className="absolute inset-0 -z-10 scale-105">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[85%] bg-gradient-to-br from-[#e9e6df] via-[#f5f3ef] to-[#e9e6df] rounded-[40%_60%_70%_30%/60%_30%_70%_40%] blur-2xl opacity-50" />
                        </div>
                        
                        {/* Subtle radial glow behind image */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-[#537d9a]/5 to-transparent blur-3xl -z-10" />
                        
                        {/* Main image container - no borders */}
                        <div className="relative w-full h-full group-hover:scale-[1.02] transition-all duration-500">
                            <img
                                src="/pp2.png"
                                alt="Vaishnavi Kalluri"
                                className="w-full h-full object-contain object-center drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)] grayscale-[3%] group-hover:grayscale-0 transition-all duration-700 scale-115"
                            />
                        </div>
                        
                        {/* Decorative accent shape - bottom right */}
                        <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-[#537d9a]/8 to-transparent rounded-full blur-2xl -z-10" />
                        
                        {/* Decorative accent shape - top left */}
                        <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-[#e9e6df] to-transparent rounded-full blur-xl -z-10" />
                    </motion.div>
                </div>

                {/* Right Section (Text & Branding) */}
                <div className="order-3 lg:order-3 flex flex-col items-center lg:items-end text-center lg:text-right z-20 lg:h-[400px] lg:justify-between">
                    <div className="max-w-[300px]">
                        <p className="text-lg font-bold text-text-muted leading-relaxed">
                           Learning. Building. Growing.
                        </p>
                    </div>

                    <div className="mt-16 lg:mt-0">
                        <h3 className="text-4xl md:text-6xl lg:text-5xl font-handwritten text-[#1a1a1a]">Full Stack</h3>
                        <h3 className="text-3xl md:text-4xl lg:text-4xl font-heading font-black text-primary tracking-tighter mt-[-10px]">Developer.</h3>
                    </div>
                </div>

            </div>

            {/* Mobile Socials */}
            <div className="flex lg:hidden gap-6 mt-12 pb-12">
                <a href="https://www.linkedin.com/in/vaishnavikalluri/" target="_blank" className="p-2 text-secondary hover:text-primary transition-all hover:scale-110"><Linkedin size={24} /></a>
                <a href="https://github.com/vaishnavikalluri" target="_blank" className="p-2 text-secondary hover:text-primary transition-all hover:scale-110"><Github size={24} /></a>
                <a href="https://leetcode.com/vaishnavikalluri" target="_blank" className="p-2 text-secondary hover:text-primary transition-all hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/></svg>
                </a>
                <a href="mailto:vaishnavikalluri@example.com" className="p-2 text-secondary hover:text-primary transition-all hover:scale-110"><Mail size={24} /></a>
            </div>

            {/* Scroll Down Animation */}
            <motion.div 
                className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-20"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
                <span className="text-sm font-medium text-text-muted">Scroll Down</span>
                <ChevronDown className="w-6 h-6 text-primary" />
            </motion.div>

            <style jsx>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -100;
          }
        }
      `}</style>
        </section>
    );
};

export default Hero;
