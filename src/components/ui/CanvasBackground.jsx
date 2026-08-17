import { useEffect, useRef } from 'react';

const CanvasBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        // Ajustar el canvas a la pantalla completa dinámicamente
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        // 1. POOL DE TEXTOS (Informática y Matemáticas)
        const codePool = [
            'async Task<void>',
            'O(n log n)',
            'def optimize(matrix):',
            'SELECT * FROM users',
            'class Node {',
            'while (true) {',
            'import numpy as np'
        ];

        const mathPool = [
            '∫ f(x) dx',
            '∇ × E = -∂B/∂t',
            'e^{iπ} + 1 = 0',
            'Ax = λx',
            'det(A - λI) = 0',
            '∀ε > 0, ∃δ > 0 : |x - c| < δ',
            'G = (V, E)',
            'P ⊆ NP',
            'aᵖ⁻¹ ≡ 1 (mod p)',
            'P(A|B) = P(B|A)P(A) / P(B)',
            '∑(x_i - μ)²'
        ];

        // 2. MOTOR DE BARAJA (Evita repeticiones continuas)
        const createRandomBag = (array) => {
            let bag = [];
            return () => {
                if (bag.length === 0) {
                    bag = [...array];
                    // Algoritmo de Fisher-Yates para barajar
                    for (let i = bag.length - 1; i > 0; i--) {
                        const j = Math.floor(Math.random() * (i + 1));
                        [bag[i], bag[j]] = [bag[j], bag[i]];
                    }
                }
                return bag.pop();
            };
        };

        const getNextCode = createRandomBag(codePool);
        const getNextMath = createRandomBag(mathPool);

        // --- CLASES DE PARTÍCULAS ---

        // Nodos de Grafo
        class Node {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 0.4;
                this.vy = (Math.random() - 0.5) * 0.4;
                this.radius = Math.random() * 1.5 + 1;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                // Rebote en los bordes
                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(148, 163, 184, 0.2)'; // Tailwind --color-secondary
                ctx.fill();
            }
        }

        // Textos Flotantes (Código / Matemáticas)
        class FloatingText {
            constructor() {
                this.isMath = Math.random() > 0.5;

                if (this.isMath) {
                    this.text = getNextMath();
                    this.fontStyle = `normal ${Math.random() * 10 + 14}px "Times New Roman", "Cambria Math", serif`;
                } else {
                    this.text = getNextCode();
                    this.fontStyle = `normal ${Math.random() * 8 + 12}px "Fira Code", monospace`;
                }

                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 0.2;
                this.vy = (Math.random() - 0.5) * 0.2;
                this.opacity = 0.2; // Opacidad muy baja (fija)
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                // Rebote con un pequeño margen fuera de pantalla
                if (this.x < -50 || this.x > canvas.width + 50) this.vx *= -1;
                if (this.y < -20 || this.y > canvas.height + 20) this.vy *= -1;
            }

            draw() {
                ctx.font = this.fontStyle;
                ctx.fillStyle = `rgba(148, 163, 184, ${this.opacity})`; // Tailwind --color-secondary
                ctx.fillText(this.text, this.x, this.y);
            }
        }

        // Inicializar elementos (60 nodos para la red, 12 textos flotantes)
        const nodes = Array.from({ length: 60 }, () => new Node());
        const texts = Array.from({ length: 12 }, () => new FloatingText());

        // --- BUCLE DE ANIMACIÓN ---
        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // 1. Dibujar Textos
            texts.forEach(text => {
                text.update();
                text.draw();
            });

            // 2. Dibujar Nodos y Conexiones
            for (let i = 0; i < nodes.length; i++) {
                nodes[i].update();
                nodes[i].draw();

                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    const maxDistance = 150;
                    if (distance < maxDistance) {
                        const lineOpacity = (1 - distance / maxDistance) * 0.15;
                        ctx.beginPath();
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        // Color de acento de Tailwind (--color-accent: #3B82F6)
                        ctx.strokeStyle = `rgba(59, 130, 246, ${lineOpacity})`;
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    }
                }
            }

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        // Limpieza al desmontar (Cleanup)
        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full z-[-1] pointer-events-none"
        />
    );
};

export default CanvasBackground;