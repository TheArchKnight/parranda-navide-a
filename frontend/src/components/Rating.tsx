import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";
import useRating from "../hooks/UseRating";

interface RatingProps {
  recipeId: number;
}

const Rating: React.FC<RatingProps> = ({ recipeId }) => {
  // Usar el hook useRating
  const { rating, loading, error, fetchRating, submitRating } = useRating();

  const [userRating, setUserRating] = useState<number>(0);

  // Obtener las calificaciones al montar el componente o cuando se haya enviado una nueva calificación
  useEffect(() => {
    fetchRating(Number(recipeId)); // Cargar las calificaciones de la receta usando el ID
  }, []); 


  const averageRating = rating ? rating.promedio : 0;
  const totalVotes = rating ? rating.votes : 0;

  // Manejar la calificación del usuario
  const handleRating = (ratingValue: number) => {
    if (rating) {
      submitRating(ratingValue, 1, Number(recipeId)); // Suponiendo que el id_calificador es 1 por ahora
      setUserRating(ratingValue);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="flex flex-col items-center mt-4">
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-6 h-6 cursor-pointer transition-all ${
              star <= userRating ? "fill-yellow-400 stroke-yellow-400" : "stroke-gray-400"
            }`}
            onClick={() => handleRating(star)}
          />
        ))}
      </div>
      <p className="text-gray-700 text-sm mt-2">
        {averageRating} / 5 ({totalVotes} votos)
      </p>
    </div>
  );
};

export default Rating;
