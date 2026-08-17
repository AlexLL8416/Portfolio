import { FaGithub, FaFolderOpen } from 'react-icons/fa6';
import { FaExternalLinkAlt } from 'react-icons/fa';
import imgGestorAlimentos from '../../assets/gestor_alimentos.webp'
import imgHandMouse from '../../assets/hand_mouse.webp'
import imgSaaSPeluqeuria from '../../assets/saas_peluqueria.webp'
import imgPortfolio from '../../assets/portfolio.webp'
import { motion } from 'framer-motion';

const projectsData = [
    {
        title: "Gestor de Alimentos",
        description: "Aplicación analítica para el control nutricional, cálculo de macros, gestión de inventario y trazabilidad de caducidades.",
        image: imgGestorAlimentos,
        tags: ["Python", "FastAPI", "SQLite"],
        githubUrl: "https://github.com/AlexLL8416/Gestor-Alimentos",
        liveUrl: "",
    },
    {
        title: "Hand Mouse",
        description: "Control del ratón del ordenador mediante la webcam y gestos de la mano. Incluye calibración automática de usuario, movimiento del cursor y detección de clics mediante visión artificial.",
        image: imgHandMouse, // Añade una captura de la cámara detectando tu mano en public/
        tags: ["Python", "OpenCV", "MediaPipe", "PyAutoGUI"],
        githubUrl: "https://github.com/TU_USUARIO/hand-mouse",
        liveUrl: "", // Aplicación de escritorio, no tiene demo web
    },
    {
        title: "Audio Auto Switcher",
        description: "Herramienta de sistema que automatiza el cambio rápido y la gestión de dispositivos de entrada y salida de audio en entornos Windows. Disponible un instalador para cualquier tipo de dispositivo Windows.",
        image: "https://media.licdn.com/dms/image/v2/D4E22AQGPYkuQ4uS6nQ/feedshare-shrink_800/B4EZx3IycQGsAk-/0/1771525318819?e=1788393600&v=beta&t=tSkcixuN7N5M_NsLIumLnLiTX0BmU28dmndzJPIhFEI",
        tags: ["C#", "Windows API", ".NET", "WPF"],
        githubUrl: "https://github.com/AlexLL8416/Audio-Auto-Switcher",
        liveUrl: "", // Si no hay demo web, dejamos el string vacío
    },
    {
        title: "SaaS Gestión Peluquería",
        description: "Sistema integral en la nube para la gestión de reservas, clientes y control de productos especializado en peluquerías.",
        image: imgSaaSPeluqeuria,
        tags: ["React", "SQL", "Supabase", "TailwindCSS"],
        githubUrl: "https://github.com/AlexLL8416/peluqueria-web",
        liveUrl: "https://peluqueria-web-nine.vercel.app/",
    },
    {
        title: "Portfolio",
        description: "El sitio web que estás visitando. Construido con una arquitectura modular y responsive en React, animaciones asimétricas con GSAP, diseño Glassmorphism y un ecosistema matemático simulado en Canvas 2D.",
        image: imgPortfolio,
        tags: ["React", "GSAP", "TailwindCSS", "Vite"],
        githubUrl: "https://github.com/AlexLL8416/Portfolio", // Pon tu enlace real al repo
        liveUrl: "#inicio",
    }
];

const Projects = () => {
    return (
        <section id="proyectos" className="w-full flex flex-col items-center px-6 relative z-10 gap-6 pt-12 pb-32">

            {/* TÍTULO DE SECCIÓN (03) */}
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, type: "spring", bounce: 0.2, delay: 0 }}
                className="max-w-5xl w-full">
                <p className="text-accent font-mono tracking-widest uppercase text-sm md:text-base flex items-center gap-4">
                    <span className="w-12 h-px bg-accent opacity-50"></span>
                    03. Proyectos Destacados
                </p>
            </motion.div>

            {/* CONTENEDOR PRINCIPAL */}
            <div className="glass-card max-w-5xl w-full p-8 md:p-12">

                {/* CUADRÍCULA DE PROYECTOS: 1 col en móvil, 2 en tablet, 3 en PC */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {projectsData.map((project, index) => (

                        <div
                            key={index}
                            className="group flex flex-col bg-[#1E293B]/40 border border-surfaceBorder rounded-2xl overflow-hidden hover:border-accent/50 hover:bg-[#1E293B]/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(59,130,246,0.1)]"
                        >

                            {/* MINIATURA DEL PROYECTO */}
                            <div className="w-full aspect-video bg-[#0F172A] relative overflow-hidden border-b border-surfaceBorder flex items-center justify-center">
                                <img
                                    src={project.image}
                                    alt={`Captura de ${project.title}`}
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.parentElement.innerHTML = '<div class="flex flex-col items-center text-secondary/50"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="3em" width="3em" xmlns="http://www.w3.org/2000/svg"><path d="M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"></path></svg><span class="text-xs font-mono mt-2">/img_missing</span></div>';
                                    }}
                                />

                                {/* Overlay oscuro encima de la imagen que se desvanece al pasar el ratón */}
                                <div className="absolute inset-0 bg-[#0F172A]/40 group-hover:bg-transparent transition-colors duration-500"></div>
                            </div>

                            {/* CONTENIDO DE LA TARJETA */}
                            <div className="flex flex-col flex-1 p-6 md:p-8">

                                {/* Cabecera: Icono y Título */}
                                <div className="flex items-center gap-3 mb-4">
                                    <FaFolderOpen className="text-accent text-xl" />
                                    <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors line-clamp-1">
                                        {project.title}
                                    </h3>
                                </div>

                                {/* Descripción */}
                                <p className="text-secondary text-sm leading-relaxed mb-6 flex-1">
                                    {project.description}
                                </p>

                                {/* Tecnologías (Tags) */}
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="px-2.5 py-1 text-[11px] md:text-xs font-mono text-accent bg-accent/10 border border-accent/20 rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Enlaces (Bottom) */}
                                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-surfaceBorder/50">
                                    {/* Si hay URL de GitHub, muestra el botón */}
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors"
                                            aria-label="Ver código en GitHub"
                                        >
                                            <FaGithub className="text-lg" /> Código
                                        </a>
                                    )}

                                    {/* Si hay URL Live, muestra el botón */}
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm text-secondary hover:text-accent transition-colors ml-auto"
                                            aria-label="Ver proyecto en vivo"
                                        >
                                            Demo <FaExternalLinkAlt className="text-sm" />
                                        </a>
                                    )}
                                </div>

                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Projects;