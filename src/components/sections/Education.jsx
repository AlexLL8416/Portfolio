import { FaGraduationCap, FaDownload } from 'react-icons/fa6';
import { FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const educationData = [
    {
        year: "Primer Año",
        period: "2022 - 2023",
        title: "Fundamentos y Arquitectura Base",
        subjects: [
            "Fundamentos de Programación",
            "Estructura y Arquitectura de Computadores",
            "Circuitos Electrónicos Digitales",
            "Álgebra Lineal y Geometría I",
            "Matemática Discreta"
        ]
    },
    {
        year: "Segundo Año",
        period: "2023 - 2024",
        title: "Algoritmia e Ingeniería del Software",
        subjects: [
            "Análisis y Diseño de Datos y Algoritmos",
            "Introducción a la Ing. del Software I y II",
            "Cálculo Numérico",
            "Ecuaciones Diferenciales Ordinarias"
        ]
    },
    {
        year: "Tercer Año",
        period: "2024 - 2025",
        title: "Inteligencia Artificial y Redes",
        subjects: [
            "Inteligencia Artificial y Sistemas Inteligentes",
            "Redes y Arquitectura de Computadores",
            "Programación Matemática",
            "Sistemas de Información Empresariales",
            "Lógica Informática"
        ]
    },
    {
        year: "Cuarto Año",
        period: "2025 - 2026",
        title: "Sistemas Avanzados y Modelización",
        subjects: [
            "Ampliación de Inteligencia Artificial",
            "Tecnologías Avanzadas de la Información",
            "Inferencia Estadística",
            "Modelización Matemática",
            "Programación Declarativa"
        ]
    },
    {
        year: "Quinto Año",
        period: "2026 - 2027",
        title: "Especialización y Fin de Grado",
        subjects: [
            "Configuración e Implem. de Sist. Informáticos",
            "Interacción Persona-ordenador",
            "Procesadores de Lenguajes",
            "Prácticas Externas",
            "Trabajo Fin de Grado (TFG)"
        ]
    }
];

const Education = () => {
    return (
        <section id="estudios" className="w-full flex flex-col items-center px-6 relative z-10 gap-6 pt-12 pb-32 overflow-hidden">

            {/* TÍTULO DE SECCIÓN (05) */}
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, type: "spring", bounce: 0.2, delay: 0 }}
                className="max-w-5xl w-full">
                <p className="text-accent font-mono tracking-widest uppercase text-sm md:text-base flex items-center gap-4">
                    <span className="w-12 h-px bg-accent opacity-50"></span>
                    05. Estudios
                </p>
            </motion.div>

            <div className="max-w-5xl w-full text-center md:text-left mt-4 mb-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary tracking-tight">
                    Doble Grado en Ingeniería Informática y Matemáticas
                </h2>
                <p className="text-secondary mt-3 font-mono text-sm md:text-base">
                    360 ECTS • 5 Cursos Académicos
                </p>
            </div>

            <div className="max-w-5xl w-full relative pt-10 pb-10">

                {/* LA RECTA VERTICAL (TIMELINE) */}
                <div className="absolute top-0 bottom-0 left-8 md:left-1/2 w-0.5 bg-white/15 transform md:-translate-x-1/2 z-20"></div>

                <div className="flex flex-col gap-12 md:gap-24">
                    {educationData.map((item, index) => {
                        // Lógica para alternar izquierda y derecha en pantallas grandes
                        const isEven = index % 2 === 0;

                        return (
                            <div
                                key={index}
                                // flex-row-reverse voltea el contenedor si el índice es par
                                className={`relative flex flex-col md:flex-row items-center justify-between w-full ${isEven ? 'md:flex-row-reverse' : ''}`}
                            >

                                {/* PUNTO DE LA LÍNEA DE TIEMPO (NODO) */}
                                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-30 flex items-center justify-center">
                                    <motion.div
                                        initial={{ scale: 0, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                                        className="w-6 h-6 bg-[#0F172A] rounded-full border-4 border-accent shadow-[0_0_15px_rgba(59,130,246,0.5)] flex items-center justify-center"
                                    >
                                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                    </motion.div>
                                </div>

                                {/* ESPACIADOR INVISIBLE */}
                                <div className="hidden md:block w-5/12"></div>

                                {/* TARJETA DE ESTUDIOS */}
                                <motion.div
                                    initial={{ opacity: 0, x: isEven ? 100 : -100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8, type: "spring", bounce: 0.2, delay: 0.2 }}
                                    className="w-full pl-20 md:pl-0 md:w-5/12 z-10"
                                >
                                    <div className="glass-card p-6 md:p-8 rounded-2xl hover:border-accent/50 hover:bg-[#1E293B]/60 transition-colors duration-500 group relative overflow-hidden">

                                        {/* Brillo decorativo */}
                                        <div className="absolute -inset-1 bg-linear-to-r from-accent/0 via-accent/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

                                        <div className="relative z-10">
                                            {/* Cabecera del año */}
                                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4 border-b border-surfaceBorder pb-4">
                                                <h3 className="text-2xl font-bold text-primary flex items-center gap-3">
                                                    <FaGraduationCap className="text-accent" />
                                                    {item.year}
                                                </h3>
                                                <span className="text-xs font-mono text-accent bg-accent/10 px-3 py-1 rounded-full w-fit">
                                                    {item.period}
                                                </span>
                                            </div>

                                            {/* Temática del año */}
                                            <p className="text-secondary font-medium mb-4 text-sm uppercase tracking-wider">
                                                {item.title}
                                            </p>

                                            {/* Lista de Asignaturas */}
                                            <ul className="space-y-3">
                                                {item.subjects.map((subject, subIndex) => (
                                                    <li key={subIndex} className="flex items-start gap-2 text-sm text-secondary/90 group-hover:text-primary transition-colors">
                                                        <FaCheckCircle className="text-accent/70 mt-1 shrink-0 text-xs" />
                                                        <span>{subject}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                    </div>
                                </motion.div>

                            </div>
                        );
                    })}
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-4xl w-full mt-16 relative z-10"
            >
                <div className="glass-card p-8 md:p-12 rounded-3xl flex flex-col items-center text-center gap-8 border-accent/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.05)] transition-all duration-500 bg-[#1E293B]/40">

                    <div className="space-y-4">
                        <h3 className="text-2xl md:text-3xl font-bold text-primary">Un Perfil Analítico y Tecnológico</h3>
                        <p className="text-secondary text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
                            Esta doble titulación oficial persigue una formación académica de excelencia. Combina el rigor y la profunda capacidad de abstracción analítica que aporta el Grado en Matemáticas, sumado directamente a las avanzadas competencias en desarrollo y computación del Grado en Ingeniería Informática. El resultado es un perfil altamente especializado, listo para liderar la resolución de problemas complejos en el ámbito de las nuevas tecnologías.
                        </p>
                    </div>

                    <a
                        href="https://matematicas.us.es/sites/matematicas/files/2018-06/ITINERARIO%20DOBLE%20TITULO%20INFORMATICA-MATEMATICAS_V_WEB_1.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-8 py-4 bg-accent text-white rounded-xl font-medium hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-accent/20 hover:scale-105"
                    >
                        <FaDownload className="text-xl" />
                        Descargar Itinerario Oficial (PDF)
                    </a>

                </div>
            </motion.div>

        </section>
    );
};

export default Education;