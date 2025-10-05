import { motion, useMotionValue, useAnimation, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./InfiniteCarousel.css"

const images = [
  { src: "/img1.jpg", link: "/pagina1" },
  { src: "/img2.jpg", link: "/pagina2" },
];

const VISIBLE_CARDS = 3;

export default function InfiniteCarousel() {
  const x = useMotionValue(0);
  const controls = useAnimation();
  const navigate = useNavigate();
  const isDragging = useRef(false);

  // 🔁 Duplicamos las imágenes para crear continuidad
  const loopedImages = [...images, ...images, ...images, ...images, ...images];

  useEffect(() => {
    const cardWidth = window.innerWidth / VISIBLE_CARDS;
    const totalWidth = cardWidth * images.length;
    const maxOffset = totalWidth * (loopedImages.length / images.length - 1);

    const unsubscribe = x.onChange((latest) => {
      // Si se pasa demasiado hacia la izquierda → reposiciona suavemente
      if (latest <= -maxOffset + cardWidth) {
        x.set(-totalWidth + cardWidth);
      }
      // Si se pasa demasiado hacia la derecha → reposiciona suavemente
      if (latest >= 0) {
        x.set(-totalWidth);
      }
    });

    return () => unsubscribe();
  }, [x, images.length]);

  return (
    <div className="carousel-container">
      <motion.div
        className="carousel-track"
        drag="x"
        style={{ x }}
        dragConstraints={{ left: -Infinity, right: Infinity }}
        animate={controls}
        transition={{ type: "spring", stiffness: 200, damping: 30 }}
        onDragStart={() => (isDragging.current = true)}
        onDragEnd={() => {
          setTimeout(() => (isDragging.current = false), 50);
        }}
      >
        {loopedImages.map((img, index) => (
          <motion.div
            key={index}
            className="carousel-card"
            style={{ width: `calc(100vw / ${VISIBLE_CARDS})` }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              if (!isDragging.current) navigate(img.link);
            }}
          >
            <img src={img.src} alt={`slide-${index}`} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
