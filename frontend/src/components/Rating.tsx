import React, { useState } from "react";
import { Star } from "lucide-react";

interface RatingProps {
  recipeId: string;
}

const Rating: React.FC<RatingProps> = ({ recipeId }) => {
  const [ratings, setRatings] = useState<{ [key: string]: { total: number; votes: number; userRating: number } }>({
    "buñuelos": { total: 15, votes: 5, userRating: 0 },
    "natilla": { total: 8, votes: 4, userRating: 0 },
    "lechona": { total: 30, votes: 6, userRating: 0 },
  });

  const userRating = ratings[recipeId]?.userRating || 0;
  const averageRating = ratings[recipeId]?.votes > 0 ? ratings[recipeId].total / ratings[recipeId].votes : 0;
  const totalVotes = ratings[recipeId]?.votes || 0;

  const handleRating = (rating: number) => {
    if (!ratings[recipeId]) return;
  
    const isNewVote = userRating === 0;
  
    const newTotal = ratings[recipeId].total - userRating + rating;
    const newVotes = isNewVote ? ratings[recipeId].votes + 1 : ratings[recipeId].votes;
  
    const newRatings = {
      ...ratings,
      [recipeId]: { ...ratings[recipeId], total: newTotal, votes: newVotes, userRating: rating },
    };
  
    setRatings(newRatings);
  };
  

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
      <p className="text-gray-700 text-sm mt-2">{averageRating.toFixed(1)} / 5 ({totalVotes} votos)</p>
    </div>
  );
};

export default Rating;