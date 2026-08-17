import { FaArrowRight, FaDownload, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa6';

const Hero = () => {
    return (
        // min-h-screen asegura que ocupe el 100% del alto de la pantalla inicial
        <section id="inicio" className="min-h-screen flex flex-col items-center justify-center px-6 py-6 relative z-10 gap-6 md:mt-0 mt-20">

            <div className='max-w-5xl w-full'>
                <p className="text-accent font-mono tracking-widest uppercase text-sm md:text-base flex items-center gap-4">
                    <span className="w-12 h-px bg-accent opacity-50"></span>
                    01. INICIO
                </p>
            </div>

            {/* Tarjeta principal con nuestro estilo de Tailwind personalizado */}
            <div className="glass-card max-w-8xl w-full p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 lg:gap-32 md:gap-32">

                {/* COLUMNA IZQUIERDA: Foto de perfil */}
                <div className="shrink-0">
                    {/* Contenedor de la imagen con bordes redondeados y un sutil borde gris */}
                    <div className="w-62 h-75 mt-2 md:w-88 md:h-104 rounded-xl overflow-hidden border border-surfaceBorder bg-surface flex items-center justify-center shadow-xl">
                        <img
                            src="/foto-perfil.webp"
                            alt="Alejandro Lara Lara"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* COLUMNA DERECHA: Textos y Botones */}
                <div className="space-y-6 text-center md:text-left flex-1">

                    <div className="space-y-2">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
                            Alejandro Lara Lara
                        </h1>
                        {/* Usamos font-mono para darle el toque técnico al título de la carrera */}
                        <h2 className="text-lg md:text-xl text-accent font-mono tracking-tight">
                            Doble Grado en Ingeniería Informática + Matemáticas
                        </h2>
                    </div>

                    <p className="text-secondary leading-relaxed text-sm md:text-base max-w-2xl mx-auto md:mx-0">
                        Estudiante del Doble Grado en Ingeniería Informática y Matemáticas.
                        Me apasiona la Inteligencia Artificial y disfruto explorando cómo la tecnología puede
                        resolver problemas complejos y abrir nuevas oportunidades.

                        Me considero una persona autodidacta, perseverante y comprometida con cada proyecto.
                        Trabajo con soltura tanto en equipo como de manera independiente, siempre con la determinación
                        de alcanzar los objetivos que me propongo.
                    </p>

                    {/* Botones */}
                    <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-2">

                        <a
                            href="#proyectos"
                            className="flex items-center justify-center gap-2 px-6 py-3 w-full sm:w-auto bg-accent text-white rounded-lg font-medium hover:bg-blue-600 transition-colors shadow-lg shadow-blue-900/20"
                        >
                            Ver Proyectos <FaArrowRight />
                        </a>

                        <a
                            href="/CV_Alejandro_Lara.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 px-6 py-3 w-full sm:w-auto rounded-lg font-medium text-secondary border border-surfaceBorder hover:text-primary hover:bg-surface transition-all"
                        >
                            <FaDownload /> Descargar CV
                        </a>

                        <div className="flex items-center gap-5 w-full md:ml-5 sm:w-auto justify-center mt-4 sm:mt-0">

                            {/* LinkedIn */}
                            <a
                                href="https://linkedin.com/in/alejandro-lara-lara-461841384"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-lg text-secondary border border-surfaceBorder hover:text-primary hover:border-accent hover:bg-accent/10 transition-all group"
                                aria-label="Perfil de LinkedIn"
                            >
                                <FaLinkedin className="text-xl group-hover:scale-110 transition-transform" />
                            </a>

                            {/* GitHub */}
                            <a
                                href="https://github.com/AlexLL8416"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-lg text-secondary border border-surfaceBorder hover:text-primary hover:border-accent hover:bg-accent/10 transition-all group"
                                aria-label="Perfil de GitHub"
                            >
                                <FaGithub className="text-xl group-hover:scale-110 transition-transform" />
                            </a>

                            {/* Correo Electrónico */}
                            <a
                                href="mailto:laralaraalejandro8416@gmail.com"
                                className="p-3 rounded-lg text-secondary border border-surfaceBorder hover:text-primary hover:border-accent hover:bg-accent/10 transition-all group"
                                aria-label="Enviar correo electrónico"
                            >
                                <FaEnvelope className="text-xl group-hover:scale-110 transition-transform" />
                            </a>

                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;