import Loader from "../components/Loader";
import { useGetMovieDetails } from "../hooks/useGetMovieDetails";
import { useParams } from "react-router-dom";

function MovieDetails() {
  const params = useParams();

  const movieId = params.id;
  const { movieDetailsData, isMovieDetailsLoading } = useGetMovieDetails(
    movieId || ""
  );

  if (isMovieDetailsLoading) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col m-auto bg-amber-400 rounded-1xl">
      <div></div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg flex flex-col m-auto">
        <img
          className="w-full"
          src={`https://image.tmdb.org/t/p/w500${movieDetailsData.poster_path}`}
          alt="Movie Poster"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-center">
            {movieDetailsData.original_title}
          </div>
          <p className="text-gray-700 text-base">{movieDetailsData.overview}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
