import { FaLinkedin, FaGithub, FaEnvelope, FaPaperPlane } from 'react-icons/fa6';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contacto" className="w-full flex flex-col items-center px-6 relative z-10 gap-6 pt-12 pb-24 overflow-hidden">
            
            {/* TÍTULO DE SECCIÓN (06) */}
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, type: "spring", bounce: 0.2, delay: 0 }} 
                className="max-w-5xl w-full">
                <p className="text-accent font-mono tracking-widest uppercase text-sm md:text-base flex items-center gap-4">
                    <span className="w-12 h-px bg-accent opacity-50"></span>
                    06. Contacto
                </p>
            </motion.div>

            <div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="glass-card max-w-5xl w-full p-8 md:p-12 overflow-hidden relative"
            >
                {/* Brillo decorativo de fondo */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 relative z-10">
                    
                    {/* COLUMNA IZQUIERDA: Textos y Redes Sociales */}
                    <div className="w-full lg:w-5/12 flex flex-col justify-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                            ¿Hablamos?
                        </h2>
                        <p className="text-secondary leading-relaxed mb-8 text-sm md:text-base">
                            Actualmente estoy abierto a nuevas oportunidades laborales y colaboraciones. Si tienes alguna pregunta, un proyecto en mente, o simplemente quieres saludar, no dudes en contactarme. Intentaré responderte lo antes posible.
                        </p>

                        <div className="flex items-center gap-4">
                            <a
                                href="https://linkedin.com/in/alejandro-lara-lara-461841384"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 rounded-xl text-secondary border border-surfaceBorder bg-[#1E293B]/40 hover:text-primary hover:border-accent hover:bg-accent/10 transition-all group shadow-lg"
                                aria-label="Perfil de LinkedIn"
                            >
                                <FaLinkedin className="text-2xl group-hover:scale-110 transition-transform" />
                            </a>

                            <a
                                href="https://github.com/AlexLL8416"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 rounded-xl text-secondary border border-surfaceBorder bg-[#1E293B]/40 hover:text-primary hover:border-accent hover:bg-accent/10 transition-all group shadow-lg"
                                aria-label="Perfil de GitHub"
                            >
                                <FaGithub className="text-2xl group-hover:scale-110 transition-transform" />
                            </a>

                            <a
                                href="mailto:laralaraalejandro8416@gmail.com"
                                className="p-4 rounded-xl text-secondary border border-surfaceBorder bg-[#1E293B]/40 hover:text-primary hover:border-accent hover:bg-accent/10 transition-all group shadow-lg"
                                aria-label="Enviar correo electrónico"
                            >
                                <FaEnvelope className="text-2xl group-hover:scale-110 transition-transform" />
                            </a>
                        </div>
                    </div>

                    {/* COLUMNA DERECHA: Formulario conectado a Formspree */}
                    <div className="w-full lg:w-7/12">
                        {/* AQUÍ ESTÁ LA MAGIA DE FORMSPREE */}
                        <form action="https://formspree.io/f/mrpzyjek" method="POST" className="flex flex-col gap-5">
                            
                            {/* Campo: Correo */}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-sm font-mono text-secondary ml-1">Tu Correo Electrónico</label>
                                <input 
                                    type="email" 
                                    id="email"
                                    name="email" /* Obligatorio para Formspree */
                                    required
                                    className="w-full bg-[#0F172A]/50 border border-surfaceBorder rounded-xl px-4 py-3 text-primary placeholder:text-secondary/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                                    placeholder="ejemplo@correo.com"
                                />
                            </div>

                            {/* Campo: Asunto */}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="subject" className="text-sm font-mono text-secondary ml-1">Asunto</label>
                                <input 
                                    type="text" 
                                    id="subject"
                                    name="subject" /* Obligatorio para Formspree */
                                    required
                                    className="w-full bg-[#0F172A]/50 border border-surfaceBorder rounded-xl px-4 py-3 text-primary placeholder:text-secondary/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                                    placeholder="Oportunidad laboral, Proyecto, etc."
                                />
                            </div>

                            {/* Campo: Mensaje */}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="message" className="text-sm font-mono text-secondary ml-1">Mensaje</label>
                                <textarea 
                                    id="message"
                                    name="message" /* Obligatorio para Formspree */
                                    required
                                    rows="4"
                                    className="w-full bg-[#0F172A]/50 border border-surfaceBorder rounded-xl px-4 py-3 text-primary placeholder:text-secondary/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"
                                    placeholder="Escribe tu mensaje aquí..."
                                ></textarea>
                            </div>

                            {/* Botón de Enviar */}
                            <button 
                                type="submit"
                                className="mt-2 flex items-center justify-center gap-2 w-full py-4 bg-accent text-white rounded-xl font-medium hover:bg-blue-600 transition-colors shadow-lg shadow-blue-900/20 group"
                            >
                                Enviar Mensaje 
                                <FaPaperPlane className="text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>

                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;