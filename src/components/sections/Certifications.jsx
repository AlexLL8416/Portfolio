import { FaExternalLinkAlt } from 'react-icons/fa';
import { SiFreecodecamp } from 'react-icons/si';
import { FaMicrosoft } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { motion } from 'framer-motion';
import imgFoundationalCsharp from '../../assets/foundational_csharp.webp';

const certsData = [
    {
        title: "Foundational C# with Microsoft",
        issuer: "freeCodeCamp",
        partner: "Microsoft",
        url: "https://www.freecodecamp.org/certification/alejandro_lara_lara/foundational-c-sharp-with-microsoft",
        image: imgFoundationalCsharp,
        mainIcon: TbBrandCSharp,
        partnerIcon: FaMicrosoft,
        issuerIcon: SiFreecodecamp,
        description: "Credencial oficial que certifica los fundamentos de desarrollo, sintaxis, depuración y orientación a objetos en C#, emitido en colaboración directa con Microsoft."
    }
];

const Certifications = () => {
    return (
        <section id="certificaciones" className="w-full flex flex-col items-center px-6 relative z-10 gap-6 pt-12 pb-32">

            {/* TÍTULO DE SECCIÓN */}
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, type: "spring", bounce: 0.2, delay: 0 }}
                className="max-w-5xl w-full">
                <p className="text-accent font-mono tracking-widest uppercase text-sm md:text-base flex items-center gap-4">
                    <span className="w-12 h-px bg-accent opacity-50"></span>
                    04. Certificaciones
                </p>
            </motion.div>

            <div className="glass-card max-w-5xl w-full p-8 md:p-12">

                <div className="flex flex-col gap-10">
                    {certsData.map((cert, index) => (

                        <a
                            key={index}
                            href={cert.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative flex flex-col items-center gap-10 p-6 md:p-8 rounded-3xl bg-[#1E293B]/40 border border-surfaceBorder hover:border-accent hover:bg-[#1E293B]/60 transition-all duration-500 overflow-hidden"
                        >

                            {/* EFECTO DE BRILLO DE FONDO (Hover) */}
                            <div className="absolute inset-0 bg-linear-to-r from-accent/0 via-accent/5 to-accent/0 -translate-x- group-hover:translate-x- transition-transform duration-1000"></div>

                            {/* IMAGEN EN GRANDE (Enmarcada) */}
                            <div className="w-full max-w-4xl aspect-4/3 sm:aspect-3/2 relative z-10 bg-background/50 border border-surfaceBorder rounded-xl overflow-hidden shadow-2xl group-hover:shadow-accent/20 transition-all duration-500 p-2 md:p-6 flex items-center justify-center">
                                <img
                                    src={cert.image}
                                    alt={`Certificado ${cert.title}`}
                                    // CAMBIO: object-contain asegura que no se recorte nada del borde oscuro de tu certificado
                                    className="w-full h-full object-contain opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700"
                                />
                            </div>

                            {/* TEXTOS Y BOTÓN (Parte Inferior) */}
                            <div className="relative z-10 w-full flex flex-col items-center text-center space-y-6 px-4 md:px-12">

                                {/* Entidades emisoras */}
                                <div className="flex flex-wrap items-center justify-center gap-4 text-secondary text-sm md:text-base font-mono">
                                    <span className="flex items-center gap-2">
                                        <cert.partnerIcon className="text-xl text-accent" /> {cert.partner}
                                    </span>
                                    <span className="w-1.5 h-1.5 rounded-full bg-surfaceBorder"></span>
                                    <span className="flex items-center gap-2">
                                        <cert.issuerIcon className="text-xl text-primary" /> {cert.issuer}
                                    </span>
                                </div>

                                {/* Título y Descripción */}
                                <div className="space-y-4">
                                    <h3 className="text-2xl md:text-3xl font-bold text-primary group-hover:text-accent transition-colors">
                                        {cert.title}
                                    </h3>
                                    <p className="text-secondary text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
                                        {cert.description}
                                    </p>
                                </div>

                                {/* Botón de Enlace */}
                                <div className="pt-2">
                                    <span className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-surface border border-surfaceBorder text-primary font-medium group-hover:border-accent group-hover:bg-accent group-hover:text-white transition-all shadow-lg">
                                        Ver Certificado Oficial <FaExternalLinkAlt className="text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </span>
                                </div>

                            </div>

                        </a>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Certifications;