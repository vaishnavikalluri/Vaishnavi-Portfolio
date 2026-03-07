"use client";

import React from "react";
import { motion } from "framer-motion";

const SectionWrapper = ({ children, id, className = "", title, subtitle }) => {
    return (
        <section id={id} className={`section-padding ${className.includes('bg-') ? '' : 'bg-[#f5f3ef]'} ${className}`}>
            <div className="container-custom">
                {(title || subtitle) && (
                    <div className="mb-16 text-center">
                        {subtitle && (
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-primary font-medium tracking-widest uppercase text-sm mb-3"
                            >
                                {subtitle}
                            </motion.p>
                        )}
                        {title && (
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl md:text-5xl font-bold"
                            >
                                {title}
                            </motion.h2>
                        )}
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: 80 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="h-1 bg-secondary mx-auto mt-6 rounded-full"
                        />
                    </div>
                )}
                {children}
            </div>
        </section>
    );
};

export default SectionWrapper;
