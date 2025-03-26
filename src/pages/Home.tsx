import Cards from "../cards/Cards";
import Loader from "../components/Loader";
import { useGetMovies } from "../hooks/useGetMovies";

const Home = () => {
  const { moviesData, isMovieLoading } = useGetMovies();

  if (isMovieLoading) {
    return <Loader />;
  }

  return (
    <div>
      <h1 className="text-4xl text-green-900 mb-10 text-center mt-10">
        Movies
      </h1>
      <ul className="grid grid-flow-row gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-auto-fit place-items-center">
        {moviesData.map((discover, i) => {
          return <Cards category={discover} key={i} />;
        })}
      </ul>
    </div>
  );
};

export default Home;
