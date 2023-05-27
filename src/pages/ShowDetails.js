import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";

export default function ShowDetails() {
  const showId = window.location.pathname.split("/").pop();
  const [show, setShow] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://api.tvmaze.com/shows/${showId}`
        );
        setShow(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [showId]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="bg-[#0F1729] h-screen flex flex-row">
      <img
        src={show.image?.medium}
        alt={show.name}
        className="mx-auto pt-[150px] h-[80%]"
      />
      <di className="mx-auto pt-[150px] h-[75%] ">
        <h1 className="text-[#d2c02d] text-[70px]">{show.name}</h1>
        <p className="text-[#d2c02d] text-[30px]">Language: {show.language}</p>
        <p className="text-[#d2c02d] text-[30px]">
          Genres: {show.genres.join(", ")}
        </p>
        <p className="text-[#d2c02d] text-[30px]">
          Runtime: {show.runtime} minutes
        </p>
        <p className="text-[#d2c02d] text-[30px]">
          Premiered: {show.premiered}
        </p>
        <p className="text-[#d2c02d] text-[30px]">
          Rating: {show.rating.average}
        </p>
        <p className="text-[#d2c02d] text-[30px]">
          Country: {show.network?.country?.name}
        </p>
      </di>
    </div>
  );
}
