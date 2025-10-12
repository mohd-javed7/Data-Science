import { Film, Star } from "lucide-react";
import { Link } from "react-router-dom";

const MovieCard = ({ title, genre, rating, year, image, id, darkMode }) => {
  const baseURL = "https://image.tmdb.org/t/p/w500";

  return (
    <Link to={`/movie/${id}`}>
    <div
      className={`${
        darkMode ? "bg-gray-800" : "bg-white"
      } rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer`}
    >
      <div className="relative h-80">
        {image ? (
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-full bg-gradient-to-br from-indigo-400 to-purple-500">
            <Film className="w-16 h-16 text-white opacity-50" />
          </div>
        )}

        {/* Overlay (dark gradient for readability) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

        <div className="absolute top-3 right-3 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full font-bold text-sm flex items-center space-x-1 z-20">
          <Star className="w-4 h-4 fill-current" />
          <span>{rating}</span>
        </div>

        <div className="absolute bottom-3 left-3 right-3 z-20">
          <div className="flex justify-between text-sm text-gray-300">
            <span>{year}</span>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default MovieCard;
