import Cards from "../cards/Cards";
import Loader from "../components/Loader";
import { useGetTopRated } from "../hooks/useGetTopRated";

export const TopRatedMovies = () => {
  const { topratedData, isTopRatedLoading } = useGetTopRated();

  if (isTopRatedLoading) {
    return <Loader />;
  }

  return (
    <div>
      <h1 className="text-4xl text-green-900 mb-10 text-center mt-10">
        Top Rated Movies
      </h1>
      <ul className="grid grid-flow-row gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-auto-fit place-items-center">
        {topratedData.map((toprated, i) => {
          return <Cards category={toprated} key={i} />;
        })}
      </ul>
    </div>
  );
};
