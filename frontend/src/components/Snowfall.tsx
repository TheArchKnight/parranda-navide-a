import React, { useEffect, useState } from "react";

const Snowfall: React.FC = () => {
  const [snowflakes, setSnowflakes] = useState<number[]>([]);

  useEffect(() => {
    // Agrega nuevos copos de nieve progresivamente
    const interval = setInterval(() => {
      setSnowflakes((prev) => [...prev, ...Array(10).fill(0).map(() => Math.random())]);

      // Limita la cantidad de copos en pantalla
      if (snowflakes.length > 100) {
        setSnowflakes((prev) => prev.slice(10));
      }
    }, 300);

    return () => clearInterval(interval);
  }, [snowflakes]);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-50">
      {/* ❄️ Nieve */}
      {snowflakes.map((_, index) => (
        <div
          key={index}
          className="absolute bg-white rounded-full animate-fall"
          style={{
            width: `${Math.random() * 7 + 4}px`, // Tamaños más grandes
            height: `${Math.random() * 7 + 4}px`,
            left: `${Math.random() * 100}vw`,
            top: `-10vh`, // Comienza desde fuera de la pantalla
            animationDuration: `${Math.random() * 4 + 2}s`,
            animationDelay: `${Math.random() * 2}s`,
            opacity: 0.9, // Más visibles
          }}
        />
      ))}
    </div>
  );
};

export default Snowfall;
