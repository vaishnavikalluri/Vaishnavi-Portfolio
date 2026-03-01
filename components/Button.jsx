import React from "react";
import { motion } from "framer-motion";

const Button = ({ children, variant = "primary", className = "", ...props }) => {
    const variants = {
        primary: "bg-primary text-white hover:bg-opacity-90 shadow-md",
        secondary: "bg-secondary text-primary hover:bg-opacity-90 shadow-md",
        outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
        ghost: "text-primary hover:bg-black/5",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-3 rounded-full font-medium transition-all duration-200 ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;
