import Cards from "../cards/Cards";
import Loader from "../components/Loader";
import { useGetUpcoming } from "../hooks/useGetUpcoming";

const Upcoming = () => {
  const { upcomingData, isUpcomingLoading } = useGetUpcoming();

  if (isUpcomingLoading) {
    return <Loader />;
  }

  return (
    <div>
      <h1 className="text-4xl text-green-900 mb-10 text-center mt-10">
        Upcoming Movies
      </h1>
      <ul className="grid grid-flow-row gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-auto-fit place-items-center">
        {upcomingData.map((upcoming, i) => {
          return <Cards category={upcoming} key={i} />;
        })}
      </ul>
    </div>
  );
};

export default Upcoming;
