import { StarIcon } from "lucide-react";

const Rating = ({ rating = 0, maxRating = 5 }) => {
    return (
        <div className="flex items-center space-x-1">
            {[...Array(maxRating)].map((_, index) => (
                <StarIcon
                    key={index}
                    className={`w-4 h-4 ${index < rating ? 'text-[#8162ff]' : 'text-gray-300'}`}
                />
            ))}
            <span className="text-gray-500 text-sm">({rating.toFixed(1)})</span>
        </div>
    );
};

export default Rating;