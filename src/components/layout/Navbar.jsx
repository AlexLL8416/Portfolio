import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { FaBars, FaXmark } from 'react-icons/fa6'; // Importamos los iconos

export const Navbar = ({
    position = 'right',
    // Colores de transición muy distintos (Oscuro -> Azul -> Gris claro)
    colors = ['#FF004A', '#E500FF', '#3F00FF'],
    items = [
        { label: 'Inicio', link: '#inicio' },
        { label: 'Habilidades', link: '#habilidades' },
        { label: 'Proyectos', link: '#proyectos' },
        { label: 'Certificaciones', link: '#certificaciones' },
        { label: 'Estudios', link: '#academia' },
        { label: 'Contacto', link: '#contacto' }
    ],
    socialItems = [
        { label: 'LinkedIn', link: 'www.linkedin.com/in/alejandro-lara-lara-461841384' },
        { label: 'GitHub', link: 'https://github.com/AlexLL8416' },
        { label: 'Email', link: 'laralaraalejandro8416@gmail.com' }
    ],
    displaySocials = true,
    displayItemNumbering = true,
    accentColor = '#3B82F6',
    changeMenuColorOnOpen = true,
    menuButtonColor = '#F8FAFC', // Blanco roto cuando está cerrado (sobre fondo oscuro)
    openMenuButtonColor = '#0F172A', // Oscuro cuando está abierto (sobre el panel blanco)
    closeOnClickAway = true,
    onMenuOpen,
    onMenuClose
}) => {
    const [open, setOpen] = useState(false);
    const openRef = useRef(false);
    const panelRef = useRef(null);
    const preLayersRef = useRef(null);
    const preLayerElsRef = useRef([]);

    // Referencias para los nuevos iconos
    const menuIconRef = useRef(null);
    const closeIconRef = useRef(null);
    const textInnerRef = useRef(null);
    const [textLines, setTextLines] = useState(['Menu', 'Close']);

    const openTlRef = useRef(null);
    const closeTweenRef = useRef(null);
    const textCycleAnimRef = useRef(null);
    const colorTweenRef = useRef(null);
    const toggleBtnRef = useRef(null);
    const busyRef = useRef(false);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const panel = panelRef.current;
            const preContainer = preLayersRef.current;
            const mIcon = menuIconRef.current;
            const cIcon = closeIconRef.current;
            const textInner = textInnerRef.current;
            if (!panel || !mIcon || !cIcon || !textInner) return;

            let preLayers = [];
            if (preContainer) {
                preLayers = Array.from(preContainer.querySelectorAll('.sm-prelayer'));
            }
            preLayerElsRef.current = preLayers;

            const offscreen = position === 'left' ? -100 : 100;
            gsap.set([panel, ...preLayers], { xPercent: offscreen, opacity: 1 });
            if (preContainer) {
                gsap.set(preContainer, { xPercent: 0, opacity: 1 });
            }

            // Estado inicial de los iconos
            gsap.set(mIcon, { opacity: 1, rotate: 0, scale: 1 });
            gsap.set(cIcon, { opacity: 0, rotate: -180, scale: 0.5 });

            gsap.set(textInner, { yPercent: 0 });
            if (toggleBtnRef.current) gsap.set(toggleBtnRef.current, { color: menuButtonColor });
        });
        return () => ctx.revert();
    }, [menuButtonColor, position]);

    const buildOpenTimeline = useCallback(() => {
        const panel = panelRef.current;
        const layers = preLayerElsRef.current;
        if (!panel) return null;

        openTlRef.current?.kill();
        if (closeTweenRef.current) {
            closeTweenRef.current.kill();
            closeTweenRef.current = null;
        }

        const itemEls = Array.from(panel.querySelectorAll('.sm-panel-itemLabel'));
        const numberEls = Array.from(panel.querySelectorAll('.sm-panel-list[data-numbering] .sm-panel-item'));
        const socialTitle = panel.querySelector('.sm-socials-title');
        const socialLinks = Array.from(panel.querySelectorAll('.sm-socials-link'));

        const offscreen = position === 'left' ? -100 : 100;
        const layerStates = layers.map(el => ({ el, start: offscreen }));
        const panelStart = offscreen;

        if (itemEls.length) gsap.set(itemEls, { yPercent: 140, rotate: 10 });
        if (numberEls.length) gsap.set(numberEls, { '--sm-num-opacity': 0 });
        if (socialTitle) gsap.set(socialTitle, { opacity: 0 });
        if (socialLinks.length) gsap.set(socialLinks, { y: 25, opacity: 0 });

        const tl = gsap.timeline({ paused: true });

        layerStates.forEach((ls, i) => {
            tl.fromTo(ls.el, { xPercent: ls.start }, { xPercent: 0, duration: 0.5, ease: 'power4.out' }, i * 0.08);
        });
        const lastTime = layerStates.length ? (layerStates.length - 1) * 0.08 : 0;
        const panelInsertTime = lastTime + (layerStates.length ? 0.08 : 0);
        const panelDuration = 0.65;

        tl.fromTo(
            panel,
            { xPercent: panelStart },
            { xPercent: 0, duration: panelDuration, ease: 'power4.out' },
            panelInsertTime
        );

        if (itemEls.length) {
            const itemsStartRatio = 0.15;
            const itemsStart = panelInsertTime + panelDuration * itemsStartRatio;
            tl.to(
                itemEls,
                {
                    yPercent: 0,
                    rotate: 0,
                    duration: 1,
                    ease: 'power4.out',
                    stagger: { each: 0.1, from: 'start' }
                },
                itemsStart
            );
            if (numberEls.length) {
                tl.to(
                    numberEls,
                    {
                        duration: 0.6,
                        ease: 'power2.out',
                        '--sm-num-opacity': 1,
                        stagger: { each: 0.08, from: 'start' }
                    },
                    itemsStart + 0.1
                );
            }
        }

        if (socialTitle || socialLinks.length) {
            const socialsStart = panelInsertTime + panelDuration * 0.4;
            if (socialTitle) tl.to(socialTitle, { opacity: 1, duration: 0.5, ease: 'power2.out' }, socialsStart);
            if (socialLinks.length) {
                tl.to(
                    socialLinks,
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.55,
                        ease: 'power3.out',
                        stagger: { each: 0.08, from: 'start' },
                        onComplete: () => gsap.set(socialLinks, { clearProps: 'opacity' })
                    },
                    socialsStart + 0.04
                );
            }
        }

        openTlRef.current = tl;
        return tl;
    }, [position]);

    const playOpen = useCallback(() => {
        if (busyRef.current) return;
        busyRef.current = true;
        const tl = buildOpenTimeline();
        if (tl) {
            tl.eventCallback('onComplete', () => { busyRef.current = false; });
            tl.play(0);
        } else {
            busyRef.current = false;
        }
    }, [buildOpenTimeline]);

    const playClose = useCallback(() => {
        openTlRef.current?.kill();
        openTlRef.current = null;

        const panel = panelRef.current;
        const layers = preLayerElsRef.current;
        if (!panel) return;

        const all = [...layers, panel];
        closeTweenRef.current?.kill();
        const offscreen = position === 'left' ? -100 : 100;

        closeTweenRef.current = gsap.to(all, {
            xPercent: offscreen,
            duration: 0.32,
            ease: 'power3.in',
            overwrite: 'auto',
            onComplete: () => {
                const itemEls = Array.from(panel.querySelectorAll('.sm-panel-itemLabel'));
                if (itemEls.length) gsap.set(itemEls, { yPercent: 140, rotate: 10 });
                const numberEls = Array.from(panel.querySelectorAll('.sm-panel-list[data-numbering] .sm-panel-item'));
                if (numberEls.length) gsap.set(numberEls, { '--sm-num-opacity': 0 });
                const socialTitle = panel.querySelector('.sm-socials-title');
                const socialLinks = Array.from(panel.querySelectorAll('.sm-socials-link'));
                if (socialTitle) gsap.set(socialTitle, { opacity: 0 });
                if (socialLinks.length) gsap.set(socialLinks, { y: 25, opacity: 0 });
                busyRef.current = false;
            }
        });
    }, [position]);

    // Nueva animación limpia para los iconos de React Icons
    const animateIcon = useCallback(opening => {
        const mIcon = menuIconRef.current;
        const cIcon = closeIconRef.current;
        if (!mIcon || !cIcon) return;

        if (opening) {
            gsap.to(mIcon, { opacity: 0, rotate: 180, scale: 0.5, duration: 0.4, ease: 'power3.inOut', overwrite: 'auto' });
            gsap.to(cIcon, { opacity: 1, rotate: 0, scale: 1, duration: 0.4, ease: 'power3.inOut', overwrite: 'auto' });
        } else {
            gsap.to(cIcon, { opacity: 0, rotate: -180, scale: 0.5, duration: 0.4, ease: 'power3.inOut', overwrite: 'auto' });
            gsap.to(mIcon, { opacity: 1, rotate: 0, scale: 1, duration: 0.4, ease: 'power3.inOut', overwrite: 'auto' });
        }
    }, []);

    const animateColor = useCallback(opening => {
        const btn = toggleBtnRef.current;
        if (!btn) return;
        colorTweenRef.current?.kill();
        if (changeMenuColorOnOpen) {
            const targetColor = opening ? openMenuButtonColor : menuButtonColor;
            colorTweenRef.current = gsap.to(btn, {
                color: targetColor,
                delay: 0.18,
                duration: 0.3,
                ease: 'power2.out'
            });
        } else {
            gsap.set(btn, { color: menuButtonColor });
        }
    }, [openMenuButtonColor, menuButtonColor, changeMenuColorOnOpen]);

    const animateText = useCallback(opening => {
        const inner = textInnerRef.current;
        if (!inner) return;
        textCycleAnimRef.current?.kill();

        const currentLabel = opening ? 'Menu' : 'Cerrar';
        const targetLabel = opening ? 'Cerrar' : 'Menu';
        const cycles = 3;
        const seq = [currentLabel];
        let last = currentLabel;
        for (let i = 0; i < cycles; i++) {
            last = last === 'Menu' ? 'Cerrar' : 'Menu';
            seq.push(last);
        }
        if (last !== targetLabel) seq.push(targetLabel);
        seq.push(targetLabel);
        setTextLines(seq);

        gsap.set(inner, { yPercent: 0 });
        const lineCount = seq.length;
        const finalShift = ((lineCount - 1) / lineCount) * 100;
        textCycleAnimRef.current = gsap.to(inner, {
            yPercent: -finalShift,
            duration: 0.5 + lineCount * 0.07,
            ease: 'power4.out'
        });
    }, []);

    const toggleMenu = useCallback(() => {
        const target = !openRef.current;
        openRef.current = target;
        setOpen(target);
        if (target) {
            onMenuOpen?.();
            playOpen();
        } else {
            onMenuClose?.();
            playClose();
        }
        animateIcon(target);
        animateColor(target);
        animateText(target);
    }, [playOpen, playClose, animateIcon, animateColor, animateText, onMenuOpen, onMenuClose]);

    const closeMenu = useCallback(() => {
        if (openRef.current) {
            openRef.current = false;
            setOpen(false);
            onMenuClose?.();
            playClose();
            animateIcon(false);
            animateColor(false);
            animateText(false);
        }
    }, [playClose, animateIcon, animateColor, animateText, onMenuClose]);

    React.useEffect(() => {
        if (!closeOnClickAway || !open) return;
        const handleClickOutside = event => {
            if (
                panelRef.current && !panelRef.current.contains(event.target) &&
                toggleBtnRef.current && !toggleBtnRef.current.contains(event.target)
            ) {
                closeMenu();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [closeOnClickAway, open, closeMenu]);

    return (
        <>
            <header
                className="fixed top-0 left-0 w-full z-50 bg-[#0F172A]/70 backdrop-blur-md border-b border-white/[0.05]"
                style={accentColor ? { '--sm-accent': accentColor } : undefined}
            >
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <a href="#inicio" className="text-primary font-bold tracking-widest text-sm md:text-base transition-colors hover:text-accent">
                        PORTFOLIO ALEJANDRO LARA
                    </a>

                    <nav className="hidden md:flex items-center gap-8 text-sm font-mono text-secondary">
                        <a href="#inicio" className="hover:text-primary transition-colors">
                            <span className="text-accent mr-1">01.</span>Inicio
                        </a>
                        <a href="#habilidades" className="hover:text-primary transition-colors">
                            <span className="text-accent mr-1">02.</span>Habilidades
                        </a>
                        <a href="#proyectos" className="hover:text-primary transition-colors">
                            <span className="text-accent mr-1">03.</span>Proyectos
                        </a>
                        <a href="#certificaciones" className="hover:text-primary transition-colors">
                            <span className="text-accent mr-1">04.</span>Certificaciones
                        </a>
                        <a href="#estudios" className="hover:text-primary transition-colors">
                            <span className="text-accent mr-1">05.</span>Estudios
                        </a>
                        <a href="#contacto" className="hover:text-primary transition-colors">
                            <span className="text-accent mr-1">06.</span>Contacto
                        </a>
                    </nav>

                    <button
                        ref={toggleBtnRef}
                        className="relative inline-flex items-center gap-3 bg-transparent border-none cursor-pointer font-medium leading-none focus:outline-none rounded"
                        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
                        onClick={toggleMenu}
                        type="button"
                    >
                        {/* TEXTO: Oculto en móvil, visible en md (tablet/desktop) */}
                        <span className="hidden md:inline-block relative h-[1em] overflow-hidden whitespace-nowrap w-auto min-w-auto">
                            <span ref={textInnerRef} className="flex flex-col leading-none">
                                {textLines.map((l, i) => (
                                    <span className="block h-[1em] leading-none" key={i}>{l}</span>
                                ))}
                            </span>
                        </span>

                        {/* ICONOS: Siempre visibles, pero adaptados */}
                        <span className="relative w-6 h-6 flex items-center justify-center text-2xl">
                            <span ref={menuIconRef} className="absolute inset-0 flex items-center justify-center">
                                <FaBars />
                            </span>
                            <span ref={closeIconRef} className="absolute inset-0 flex items-center justify-center">
                                <FaXmark />
                            </span>
                        </span>
                    </button>
                </div>
            </header>

            {/* CAPAS DE TRANSICIÓN */}
            <div
                ref={preLayersRef}
                className="fixed inset-y-0 right-0 w-[clamp(260px,38vw,420px)] pointer-events-none z-40 opacity-0"
                aria-hidden="true"
            >
                {(() => {
                    const raw = colors && colors.length ? colors.slice(0, 4) : ['#1e293b', '#334155'];
                    let arr = [...raw];
                    if (arr.length >= 3) {
                        const mid = Math.floor(arr.length / 2);
                        arr.splice(mid, 1);
                    }
                    return arr.map((c, i) => (
                        <div key={i} className="sm-prelayer absolute inset-0 w-full h-full opacity-0" style={{ background: c }} />
                    ));
                })()}
            </div>

            {/* PANEL PRINCIPAL: Ahora con FONDO BLANCO */}
            <aside
                id="staggered-menu-panel"
                ref={panelRef}
                className="fixed inset-y-0 right-0 w-[clamp(260px,38vw,420px)] bg-white flex flex-col pt-28 pb-8 px-8 overflow-y-auto z-40 opacity-0 shadow-2xl border-l border-black/10"
                aria-hidden={!open}
            >
                <div className="flex-1 flex flex-col gap-5">
                    <ul className="list-none m-0 p-0 flex flex-col gap-3" role="list" data-numbering={displayItemNumbering || undefined}>
                        {items && items.length ? (
                            items.map((it, idx) => (
                                <li className="relative overflow-hidden leading-none" key={it.label + idx}>
                                    <a
                                        // Texto cambiado a slate-900 (oscuro) para contrastar con el fondo blanco
                                        className="relative text-slate-900 font-bold text-4xl sm:text-5xl cursor-pointer leading-none tracking-tight uppercase no-underline inline-block pr-[1.4em] transition-colors hover:text-[var(--sm-accent)]"
                                        href={it.link}
                                        onClick={closeMenu}
                                        aria-label={it.ariaLabel}
                                        data-index={idx + 1}
                                    >
                                        <span className="inline-block will-change-transform origin-bottom sm-panel-itemLabel">{it.label}</span>
                                    </a>
                                </li>
                            ))
                        ) : (
                            <li className="relative overflow-hidden leading-none" aria-hidden="true">
                                <span className="text-slate-900 text-3xl">No items</span>
                            </li>
                        )}
                    </ul>

                    {displaySocials && socialItems && socialItems.length > 0 && (
                        <div className="mt-auto pt-8 flex flex-col gap-3">
                            <h3 className="m-0 text-sm font-bold uppercase tracking-wider text-[var(--sm-accent)]">Socials</h3>
                            <ul className="list-none m-0 p-0 flex flex-row items-center gap-4 flex-wrap">
                                {socialItems.map((s, i) => (
                                    <li key={s.label + i}>
                                        <a
                                            href={s.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            // Links cambiados a slate-600 para que se lean sobre blanco
                                            className="text-sm font-medium text-slate-600 hover:text-[var(--sm-accent)] no-underline transition-colors"
                                        >
                                            {s.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </aside>

            <style>{`
        .sm-panel-list[data-numbering] {
          counter-reset: smItem;
        }
        .sm-panel-list[data-numbering] .sm-panel-item {
          position: relative;
        }
        .sm-panel-list[data-numbering] li a::after {
          counter-increment: smItem;
          content: counter(smItem, decimal-leading-zero);
          position: absolute;
          top: 0.1em;
          right: 0.5em;
          font-size: 16px;
          font-weight: 600; /* Hecho un poco más grueso para fondo claro */
          color: var(--sm-accent, #3B82F6);
          letter-spacing: 0;
          opacity: var(--sm-num-opacity, 0);
          pointer-events: none;
        }
      `}</style>
        </>
    );
};

export default Navbar;