import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

export default function TVList() {
  const URL = window.location.pathname;
  const SearchElement = URL.split("/").pop();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      let page = 1;
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://api.tvmaze.com/search/shows?q=${SearchElement}&_limit=20&_page=${page}`
        );
        const responseData = response.data.map((item) => item.show);
        setData(responseData);
      } catch (error) {
        console.error("Error fetching data: ", error);
        alert("Error fetching data. Please try again later.");
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const formatDate = (dateString) => {
    const options = { day: "numeric", month: "long", year: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  };
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="p-4 bg-black">
      <h1 className="text-3xl font-bold mb-4">TVList</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((show) => (
          <div
            key={show.id}
            className="bg-[#1E2A53] rounded shadow p-4 flex flex-col justify-between"
          >
            <Link to={`/tv-shows/details/${show.id}`}>
              <h2 className="text-xl font-bold text-[#bd9c42] hover:underline">
                {show.name}
              </h2>
            </Link>
            <div>
              <p className="text-white">Language: {show.language}</p>
              <p className="text-white">Genres: {show.genres.join(", ")}</p>
              <p className="text-white">Runtime: {show.runtime} minutes</p>
              <p className="text-white">
                Premiered: {formatDate(show.premiered)}
              </p>
              <p className="text-white">Rating: {show.rating.average}</p>
              <p className="text-white">
                Country: {show.network?.country?.name}
              </p>
            </div>
            <img src={show.image?.medium} alt={show.name} className="mt-4" />
          </div>
        ))}
      </div>
    </div>
  );
}
