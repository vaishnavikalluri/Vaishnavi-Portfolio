"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import {
    Code2, Layout, Server, Database as DatabaseIcon, Binary, GitBranch, Github, Palette, Image as ImageIcon, Monitor, Lightbulb, Users, BookOpen
} from "lucide-react";

const techLogos = {
    "C++": <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwBpPDICw3BeHITTIIYqOg23RI_dZQdoMfPQ&s" alt="C++" className="w-12 h-12 object-contain" />,
    "Java": <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCUaDjGczuu5b038vjXDstYNwIUtEc7rS3Fw&s" alt="Java" className="w-12 h-12 object-contain" />,
    "Python": <img src="https://static.cdnlogo.com/logos/p/3/python.svg" alt="Python" className="w-12 h-12 object-contain" />,
    "JavaScript": <img src="https://thumbs.dreamstime.com/b/javascript-logo-javascript-logo-white-background-vector-format-available-136765881.jpg" alt="JavaScript" className="w-12 h-12 object-contain" />,
    "React": <img src="https://thumbs.dreamstime.com/b/react-js-logo-icon-white-background-web-development-javascript-library-symbol-simple-flat-design-atom-structure-model-421642397.jpg" alt="React" className="w-12 h-12 object-contain" />,
    "HTML": <img src="https://t3.ftcdn.net/jpg/05/78/11/34/360_F_578113446_j72wZX7u698eoV50XXmkLMH7gGuNhpVB.jpg" alt="HTML" className="w-12 h-12 object-contain" />,
    "CSS": <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_U1Op201WIBeja_W5cmkxHbXLrlpE5IjQeA&s" alt="CSS" className="w-12 h-12 object-contain" />,
    "Tailwind": <img src="https://logowik.com/content/uploads/images/tailwind-css3232.logowik.com.webp" alt="Tailwind" className="w-12 h-12 object-contain" />,
    "Flutter": <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYT5eG7MiCpiBRzqPGQSTs2EIimtNXB6jPwg&s" alt="Flutter" className="w-12 h-12 object-contain" />,
    "Node.js": <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6bebC_d4eWwJ-x9ntqDuT94TvOgumSBVWHg&s" alt="Node.js" className="w-12 h-12 object-contain" />,
    "Firebase": <img src="https://img.icons8.com/color/1200/firebase.jpg" alt="Firebase" className="w-12 h-12 object-contain" />,
    "MongoDB": <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA8FBMVEX///9DmTRFpThGoDdAlDNPqkFKpzxXrkdgsk9Tq0a2tZhXrUrCwaepqohesU9Yrks/ozHLyrMxnx82kCdltFVotVis1KU6nCj2+vVKojs3oCcsjRna2cZSrT7n8uVBnjFbqE5Lmj/t7eWLwIQslxS73LVTpkRlrVp5t3DI4MXi8ODv9+5Fmjatz6g3lSU7oiuSv4x7sXRfo1Way5GJxH2eyZnE4L/W6dKp0qFws2ZhrFaHvoBwuGajyZ5qq2G717iHuoBSnUdXmkiHsHFsoVyWr3yawpWhsIZ8rGeosIpmnlV8pmkhiQWzuprIx7Lg4NL/zw/DAAAJqklEQVR4nO2ciVbbRhSGhRRJNka2wDbeABswDmvcBjCEpE3ShmZpEt7/barFFqPZh+Izdyb+n2C+c/+528h2nJVWWmkl23Sq+wBL1+WZ7hMsW1fbuk+wbLX9ru4jLFd7u8G17jMsV9thtWN1ELu7lVbH6iBehZW2N7Y4iLPdSqXudQ51n2NpOk0AKy3P69haEzPASrvnDS0N4k0GmMbQG+/pPswydJIDVio9zxu+0X2aJehoAViZJEHsXOg+z7NruwDMCL2xbTMGAlgZpYTDoV1FEQXMCb3hSPehnlO3KGBS8nPEl7qP9XwqRbBSqeWEXseahIoB5pkmQzzWfbTn0S0GmNZDqxAJwErVswpxFuKAxT20A/FsN2zzCM2fpNp+2MIJ6yih1zd74j/cDcM6TtgqEXpjk1vU2TRMhNsUI/TGJ7rP+WTt7aaAhE3bHo5obBde9zPCSktAOPQM7cKv8hASNiUIveGd7rM+SUfxHBC3KX4PTa0Zp9MFIJ5NKYTe+L3u86qrHj6qLSQ0cDd15SOEZZvWaYTDie4TK+rxEmY2LSE2aISmdajIJSRtWqMSep0j3adWUbsMWLYpg9DrG3QVZ9N6mbBkU+o99Mxa3PgBRliyKYvQoDXxduxXK2ybUqtFprEhb1Ld2Pd9LIhob8omNMWnlxRC1KbtIRPRjHx6tuX7JGJLitAz4iuGK5dGiGRTcrZAfPpW9/HFOp36NELEpjxCb3yjG0Cod4FPRZSLoQEPNjfzEHJsyiX0OtDnqPYihH6DZVM+oefpRuBrVoTQr7JsKiDswP540UeEETZakjHsQ64Y2zGbMJQlhPzdW9f1OUGUJYRc9o8CHuEim4oJf9MNwtTLoIYSMrKpkBBuEPf6ZUJGNpUghHoTb+OgyrPpPJuyp6dHRN0oDPlBIGNTGUKYU9RNPyFsiLOpBCHQ7enbOCGUsClzT4OoD/FNsZsCYkGk2lSGcAhxPzybZoQ1sU0lCEEupd65GaGETWUIARaMs60gIINItWlPDOgBHKK2Yxoh1aZShB1wuabuyhA22rKE4D4FP12YVJBNW9IuhfbLmsu4IBTZtDUR43ngXjG6bgHIz6bJCCVJCOwDjdnUD+Rs2pYlBPa0fzitBbI2lSWEZVPfrUratNGSIpxMJueQXqJOt1wUscEhDNt8wklv0hud768lGgDq3I76JUK+TRmEvQQtjdz52kKvANn0OHZdX9ambbweTlKd7z+iLfRaN9ejEkA3YNmUKPqjUthyR1IFx6Z7yTWUt2k4yuPWQx1J1SswrzSzPkbItWk44sWtJDBz8GHqUvlsOpLDS4Oom2yhNkFYtmnlqYQDKC/C2TWUt6lCDP/QjZbrdE4om03lCdf+1M2WK0808tlUgRDIRbyekoQ8myoQArmI72KXROTYVCWGMBo336UQcmyqQNj8XTdcqu6URsixqQLh2r5uulSLVCptUxXCVxD2USd9KiHbpiqEAwi/ibqYUgmr1ecgBNF8X8aumk0nKoQQ3i+OGYRMmyoRQkimDZdOyMymKoRrI914iaYuA5FlUyVCCH3bFouQZVMlwu+68RYrDBWbKhEO9G++b8qEEjZVI9RfENGCLxdEtXuof7o4UibsKRHqL/nb5VwqYVPTCK85hPRsqkaof0IsNW1SNlW7h/qXUYc4ITOIjScR/qMb0HnLI6QGcUVYJtT/STTpUlE2VSP8oBvQucRzqesK3vRNIySqhdCmphESFV9oU9MIL/pcQopNTcs0eF8qtmldiVB/tcBnC7FNVXZtEHoafD4UZ1M1Qv196SmNkGtTNZfqJzyjEaJBJGyqFkMA3wpTCXnZVI1Q/4zvUOohx6ZJEFsqhAD2NE6LbEz5NlUjBPBd1JWIELepkkvHuvEcamPKz6ZKhOe68RzkUww5m1bDOxVCCN+bUAsiL5uq1EMAjXfpHV/Kpn5NhVB/wU9UoxIye1Nf6f0QQMGnbWrwi1h9MiGEYkGfEHk2VZoPdcNlYqQaZjZVIQTyiwR6qmEWfYWtPoAJP9Mb+kWs+nSbqhCCSDTlL2oksqkM4fn5fqqmbrS5WBeRkWsE93A/g3uRqgmho8lEB1QlzOL2MWfL1QRR71MxKiLDpiRhbkmULReE4TAXdd/GzKYoIWJJiqBcw6Q1ZRDSfws1yRzJRZsDQvjka65jFZuO1sRwOaH+N/xCjBmRPkKNZOiya6j/a6FCXYl6Ufj0ThLwxUfdWKhUsulIErCp/8kCEXW3z7CptEkBrEoRVeWzqSzhC91MZd3K96bnkibV/+pUkkSuqanFEMZ4j4i+GC7ZNMwAQzlCOF33QhIDRk2FcABkNER0x5iDccKqZAx185A6EW6GqwqE0PJMJkbBILKpXAgh/OAJ10xyvS8FCGQFhalGvYn+Yzr1U5/WZAi/QysVucRBTG1alwkhoMmwpDo1iJhNZQjhrC8w0ftvhDC1qQQhvGpf6J0oiA2pewg2hMRPhEjCJIY9cQi/6Obg6JA2YqDZNPQn4hAC2l6QEttUOOI3P+iG4IpaMUrZVEgIbmzCREs2CGHQELWlsNYzFFG/5EMRRSM+yI60pAsKIkr4UeBReHMhoZekT5FsGvBdCrZfQ0Xz6WMQBaPFALxHUx2RiAWhe8eN4QDQUwVPx0TdL2zqfvmL51HI3UxJATOI7t/feIRGeDQVuXh7JPzE8SisPT5XxFVcuDS+ZxMOoNf6kg7xF8V5EOPPTELAUyFV+Pq0ILxvshCNuYS5uhjhPJu6EYsQ8NjLED4Nz4O4/plO+N2Abg0XtrXJY+hHEZVwAObjIBW93yII3ZdRRGtqBjA3wEJtb+E2df+MIkpTY0S/TdVlHyf8EkX/EjY1rU6geosgBn7a0kRkMjUZMGnCy/9XF99HEZ5Mm4D+1fopQhCTGMZfo2jdLkDHedNHCJNiEUXf7AJ0nKsCserepYToRbQBMEk3WwVhkkqj9XXbAB3nevFfyu59RljUC7OzKKrFuBh8zQh/zAkHxhZ6UvMPNfwMcH39U4b43chelKU9N5mm4i9zwh+pQ5sG7Sxk1G1N3fh+Trix8XHwGvgDzBN0vOUWgBubEL8I+t+6nCCEug+zHG3mhCngge6zLEfdIoQ7uo+yLBWElobQcX7OTbqh+yBL04HdeSZVZPk1dJx5CC0m/JkTPug+x/K0Yz3hQwZoa71P1Y1sJ3Q2MkLD3tGUlAFaTbiZEeo+xTK1ufFz0+ZymJSLNITWE+5YTfhgP+Gm7YQHKeCK0GhlhBY33inhzi9A+PBgc9fm7FhP6HQPDiwnTNS1nnCllVb6xfQfJLVPE8TAtwQAAAAASUVORK5CYII=" alt="MongoDB" className="w-12 h-12 object-contain" />,
    "MySQL": <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqYf4wXKaa-XOfMXnuCttpW3vfbyYH3GiZ7w&s" alt="MySQL" className="w-12 h-12 object-contain" />
};

const categoryIcons = {
    "Programming": <Code2 className="w-8 h-8 text-primary" />,
    "Frontend": <Layout className="w-8 h-8 text-primary" />,
    "Backend": <Server className="w-8 h-8 text-primary" />,
    "Database": <DatabaseIcon className="w-8 h-8 text-primary" />
};

const toolLogos = {
    "DSA": <Binary className="w-5 h-5 text-primary" />,
    "Git": <GitBranch className="w-5 h-5 text-primary" />,
    "GitHub": <Github className="w-5 h-5 text-primary" />,
    "Figma": <Palette className="w-5 h-5 text-primary" />,
    "Canva": <ImageIcon className="w-5 h-5 text-primary" />,
    "Ubuntu": <Monitor className="w-5 h-5 text-primary" />,
    "Problem Solving": <Lightbulb className="w-5 h-5 text-primary" />,
    "Team Collaboration": <Users className="w-5 h-5 text-primary" />,
    "Continuous Learning": <BookOpen className="w-5 h-5 text-primary" />
};

const skillCategories = [
    {
        title: "Programming",
        skills: ["C++", "Java", "Python", "JavaScript"]
    },
    {
        title: "Frontend",
        skills: ["React", "HTML", "CSS", "Tailwind", "Flutter"]
    },
    {
        title: "Backend",
        skills: ["Node.js", "Firebase"]
    },
    {
        title: "Database",
        skills: ["MongoDB", "MySQL"]
    },
];

const About = () => {
    return (
        <SectionWrapper id="about" title="About Me" subtitle="Who I Am">            {/* Introduction Section */}
            <div className="max-w-6xl mx-auto mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white border-2 border-primary/20 rounded-2xl p-8 md:p-12 hover-lift"
                >
                    <p className="text-lg md:text-xl text-text-muted leading-relaxed mb-6">
                        I am an aspiring <span className="text-primary font-bold">Full Stack Developer</span> with a strong foundation in programming and problem-solving. 
                        I enjoy building scalable web applications and continuously improving my logical thinking through <span className="text-primary font-bold">Data Structures and Algorithms</span>.
                    </p>
                    <p className="text-lg md:text-xl text-text-muted leading-relaxed mb-6">
                        My journey started with <span className="text-primary font-bold">C++</span>, where I developed structured thinking and algorithmic understanding. 
                        I am currently expanding into Full Stack Development using the <span className="text-primary font-bold">MERN stack</span>, focusing on writing clean, maintainable, and efficient code.
                    </p>
                    <p className="text-lg md:text-xl text-text-muted leading-relaxed mb-6">
                        I believe in learning by building real-world projects, solving coding challenges consistently, and growing step by step into a confident software engineer.
                    </p>
                </motion.div>
            </div>

           

            {/* Technical Skills */}
            <div className="mb-16">
                <h3 className="text-2xl md:text-3xl font-bold text-center mb-10 text-text">Technical Skills</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white border-2 border-black/5 rounded-2xl p-5 hover:border-primary/30 transition-all group relative overflow-hidden hover-lift"
                        >
                            {/* Category Icon - Shows on Hover */}
                            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                                {categoryIcons[category.title]}
                            </div>

                            <h4 className="text-lg font-bold text-text mb-4 pb-2 border-b-2 border-primary/20">{category.title}</h4>
                            <div className="space-y-2">
                                {category.skills.map((skill) => (
                                    <div
                                        key={skill}
                                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-all group/item"
                                    >
                                        <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                                            {techLogos[skill]}
                                        </div>
                                        <span className="text-sm font-semibold text-text-muted group-hover/item:text-text transition-colors">
                                            {skill}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Additional Skills */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#fdfaf5] border-2 border-primary/20 rounded-2xl p-5 md:p-6"
            >
                <h3 className="text-2xl font-bold mb-4 text-text">Tools & More</h3>
                <div className="flex flex-wrap gap-2.5">
                    {["DSA", "Git", "GitHub", "Figma", "Canva", "Ubuntu"].map((skill) => (
                        <span
                            key={skill}
                            className="px-4 py-2 bg-white border-2 border-primary/10 text-text font-semibold rounded-lg hover:border-primary/40 hover:bg-primary/5 transition-all flex items-center gap-2"
                        >
                            {toolLogos[skill]}
                            {skill}
                        </span>
                    ))}
                </div>
            </motion.div>
        </SectionWrapper>
    );
};

export default About;
