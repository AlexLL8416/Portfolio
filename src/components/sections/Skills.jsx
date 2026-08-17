import {
    FaPython, FaReact, FaDatabase, FaServer, FaBrain,
    FaJava, FaHtml5, FaMicrochip, FaCubes,
    FaChartLine, FaCalculator, FaWindows, FaLanguage,
    FaUsers, FaLightbulb, FaLaptopCode, FaPlug,
    FaNetworkWired, FaPuzzlePiece, FaSitemap
} from 'react-icons/fa6';
import { FaCogs } from "react-icons/fa";
import {
    SiJavascript, SiC, SiHaskell, SiR,
    SiPostgresql, SiMariadb, SiDotnet, SiFastapi, SiOpencv
} from 'react-icons/si';
import { TbBrandCSharp } from "react-icons/tb";
import { motion } from 'framer-motion';


// Centralizamos los datos. Si mañana aprendes algo nuevo, solo lo añades aquí.
const skillsData = [
    {
        category: "LENGUAJES DE PROGRAMACIÓN",
        items: [
            { name: "C#", icon: TbBrandCSharp, level: "90%" },
            { name: "Python", icon: FaPython, level: "95%" },
            { name: "Java", icon: FaJava, level: "80%" },
            { name: "JavaScript", icon: SiJavascript, level: "75%" },
            { name: "C", icon: SiC, level: "75%" },
            { name: "Haskell", icon: SiHaskell, level: "65%" },
            { name: "R", icon: SiR, level: "70%" },
            { name: "Assembly", icon: FaMicrochip, level: "50%" }
        ]
    },
    {
        category: "FRAMEWORKS & DESARROLLO",
        items: [
            { name: ".NET 8", icon: SiDotnet, level: "90%" },
            { name: "FastAPI", icon: SiFastapi, level: "85%" },
            { name: "React", icon: FaReact, level: "80%" },
            { name: "OpenCV", icon: SiOpencv, level: "70%" },
            { name: "HTML", icon: FaHtml5, level: "95%" },
            { name: "Odoo", icon: FaCubes, level: "70%" },
            { name: "SuiteCRM", icon: FaCogs, level: "65%" },
            { name: "Bonita", icon: FaSitemap, level: "65%" }
        ]
    },
    {
        category: "BASES DE DATOS",
        items: [
            { name: "PostgreSQL", icon: SiPostgresql, level: "85%" },
            { name: "MariaDB", icon: SiMariadb, level: "80%" },
            { name: "SQL", icon: FaDatabase, level: "90%" },
            { name: "HeidiSQL", icon: FaServer, level: "85%" }
        ]
    },
    {
        category: "CONCEPTOS & HERRAMIENTAS",
        items: [
            { name: "Inteligencia Artificial", icon: FaBrain, level: "85%" },
            { name: "Diseño de APIs", icon: FaPlug, level: "90%" },
            { name: "Lógica Difusa / Grafos", icon: FaNetworkWired, level: "75%" },
            { name: "Resolución Compleja", icon: FaPuzzlePiece, level: "95%" }
        ]
    },
    {
        category: "SOFTWARE MATEMÁTICO & OFIMÁTICA",
        items: [
            { name: "MatLab", icon: FaChartLine, level: "85%" },
            { name: "Mathematica", icon: FaCalculator, level: "80%" },
            { name: "Maxima", icon: FaLaptopCode, level: "75%" },
            { name: "Microsoft Office", icon: FaWindows, level: "95%" }
        ]
    },
    {
        category: "SOFT SKILLS & IDIOMAS",
        items: [
            { name: "Inglés (Avanzado)", icon: FaLanguage, level: "85%" },
            { name: "Español (Nativo)", icon: FaLanguage, level: "100%" },
            { name: "Liderazgo y Equipo", icon: FaUsers, level: "90%" },
            { name: "Analítico y Autodidacta", icon: FaLightbulb, level: "95%" }
        ]
    }
];

const Skills = () => {
    return (
        <section id="habilidades" className="w-full flex flex-col items-center px-6 relative z-10 gap-6 pt-12 pb-32">

            {/* TÍTULO DE SECCIÓN */}
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, type: "spring", bounce: 0.2, delay: 0 }}
                className="max-w-5xl w-full">
                <p className="text-accent font-mono tracking-widest uppercase text-sm md:text-base flex items-center gap-4">
                    <span className="w-12 h-px bg-accent opacity-50"></span>
                    02. Habilidades
                </p>
            </motion.div>

            {/* TARJETA GLASSMORPHISM */}
            <div className="glass-card max-w-5xl w-full p-8 md:p-12 space-y-16">

                {/* Iteramos sobre las categorías poniéndolas una debajo de otra */}
                {skillsData.map((group, index) => (
                    <div key={index} className="space-y-8">

                        {/* Titulito de la categoría */}
                        <h3 className="text-lg font-mono tracking-widest text-primary uppercase border-b border-surfaceBorder pb-3">
                            {group.category}
                        </h3>

                        {/* Cuadrícula: 2 columnas en móvil, 4 en ordenador */}
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, type: "spring", bounce: 0.2, delay: 0 }}
                            className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 mt-12">

                            {group.items.map((skill, skillIndex) => (
                                // Cada elemento es una columna flexible que empuja la barra hacia abajo
                                <div key={skillIndex} className="group flex flex-col justify-between gap-6">

                                    {/* Icono y Nombre (Centrados) */}
                                    <div className="flex flex-col items-center text-center gap-4">
                                        <skill.icon className="text-5xl text-secondary group-hover:text-primary transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2" />
                                        <span className="text-primary font-medium text-sm md:text-base tracking-wide">
                                            {skill.name}
                                        </span>
                                    </div>

                                    {/* Barra de progreso (Alineada siempre al fondo) */}
                                    <div className="w-full bg-[#1E293B]/50 h-1.5 rounded-full overflow-hidden border border-surfaceBorder mt-auto relative group-hover:shadow-[0_0_10px_rgba(59,130,246,0.3)] transition-shadow duration-300">
                                        <div
                                            className="bg-accent h-full rounded-full opacity-70 group-hover:opacity-100 transition-all duration-500 relative"
                                            style={{ width: skill.level }}
                                        >
                                            {/* Destello final estilo láser */}
                                            <div className="absolute right-0 top-0 bottom-0 w-3 bg-white/50 blur-[2px]"></div>
                                        </div>
                                    </div>

                                </div>
                            ))}
                        </motion.div>

                    </div>
                ))}

            </div>
        </section>
    );
};

export default Skills;