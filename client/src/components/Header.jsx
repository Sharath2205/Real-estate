import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-slate-200 py-3 ">
      <div className="flex justify-between items-center max-w-7xl mx-auto py-4 px-4 sm:px-3 sm:py-3">
        <Link to={"/"}>
          <h1 className="font-bold text-lg sm:text-xl flex flex-wrap cursor-pointer">
            <span className="text-slate-500 mr-1">Find </span>
            <span className="text-slate-700">Property</span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-2 rounded-xl hidden sm:inline">
          <div className="flex items-center">
            <input
              type="text"
              className="bg-transparent focus:outline-none w-32 sm:w-52 md:w-72"
              placeholder="Search"
            />
            <FaSearch className="text-slate-600" />
          </div>
        </form>

        <ul className="flex gap-4 sm:gap-3">
          <Link to={"/"}>
            <li className="hidden sm:inline hover:underline hover:text-slate-600">
              Home
            </li>
          </Link>
          <Link to={"/about"}>
            <li className="hover:underline hover:text-slate-600">About</li>
          </Link>
          <Link to={"/auth/sign-in"}>
            <li className="hover:underline hover:text-slate-600">Sign In</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
