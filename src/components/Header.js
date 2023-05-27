import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-gray-800 p-4">
      <ul className="flex justify-between items-center px-[100px]">
        <li className="text-white text-xl">
          <Link className="hover:text-blue-400" to="/">
            TV Show App
          </Link>
        </li>
        <li className="text-white text-xl">
          <Link className="hover:text-blue-400" to="/">
            Home
          </Link>
        </li>
      </ul>
    </div>
  );
}
