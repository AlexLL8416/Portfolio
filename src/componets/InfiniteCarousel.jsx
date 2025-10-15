import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./InfiniteCarousel.css";

const images = [
  { src: "/gestor_alimentos.png", link: "/gestor_alimentos" },
  { src: "/hand_mouse.png", link: "/hand_mouse" },
  { src: "/portfolio.png", link: "/portfolio" },
];

const VISIBLE_CARDS = 2.5;
const AUTO_SCROLL_SPEED = 0.25;

export default function InfiniteCarousel() {
  const x = useMotionValue(0);
  const navigate = useNavigate();
  const isDragging = useRef(false);

  // 🔁 muchas repeticiones para dar margen real al bucle
  const loopedImages = [...images, ...images, ...images, ...images, ...images, ...images, ...images];

  useEffect(() => {
    const cardWidth = window.innerWidth / VISIBLE_CARDS;
    const baseWidth = cardWidth * images.length;
    const totalWidth = cardWidth * loopedImages.length;

    // ✅ colocamos el carrusel en el centro del conjunto
    x.set(-baseWidth);

    const unsubscribe = x.onChange((latest) => {
      // Si se pasa demasiado hacia la izquierda → reubica hacia delante
      if (latest <= -baseWidth * 2) {
        x.set(latest + baseWidth);
      }
      // Si se pasa demasiado hacia la derecha → reubica hacia atrás
      else if (latest >= 0) {
        x.set(latest - baseWidth);
      }
    });

    return () => unsubscribe();
  }, [x]);

  useAnimationFrame((t, delta) => {
    if (!isDragging.current) {
      x.set(x.get() - AUTO_SCROLL_SPEED); // mueve hacia la izquierda
    }
  });

  return (
    <div className="carousel-container">
      <motion.div
        className="carousel-track"
        drag="x"
        style={{ x }}
        dragConstraints={{ left: -Infinity, right: Infinity }}
        transition={{ type: "spring", stiffness: 200, damping: 30 }}
        onDragStart={() => (isDragging.current = true)}
        onDragEnd={() => setTimeout(() => (isDragging.current = false), 50)}
      >
        {loopedImages.map((img, index) => (
          <motion.div
            key={index}
            className="carousel-card"
            style={{ width: `calc(100vw / ${VISIBLE_CARDS})` }}
            onClick={() => {
              if (!isDragging.current) navigate(img.link);
            }}
          >
            <img src={img.src} alt={`slide-${index}`} draggable={false} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
