import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchForm() {
  const [TV, setTV] = useState("");
  const navigate = useNavigate();
  const handleChange = (event) => {
    setTV(event.target.value);
    console.log(TV);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/tv-shows/${TV}`);
  };

  return (
    <div className="flex flex-col">
      <form onSubmit={handleSubmit}>
        <h1 className="text-[80px] font-bold text-[#1E2A53] mt-[250px]">
          Search TV
        </h1>
        <input
          type="text"
          name="TV"
          value={TV}
          onChange={handleChange}
          className="border-4 w-[750px] h-[75px] border-slate-950 rounded-xl text-4xl p-[8px] mt-[25px]"
        ></input>
        <div>
          <button
            type="submit"
            className="w-[250px] h-[75px] bg-[#1E2A53] text-yellow-50 rounded-xl text-5xl mt-[30px]"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
