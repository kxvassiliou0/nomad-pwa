import { AccountCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

export const TopNavigation = () => {
  return (
    <div className="w-full inline-flex items-center left-0 fixed top-0 h-14 shadow-sm px-10">
      <div className="min-w-[30%]">
        <p className="text-left font-semibold">Nomad</p>
      </div>
      <div className="inline-flex font-thin space-x-8 justify-end min-w-[70%]">
        <Link to="/">Home</Link>
        <Link to="/map">Map View</Link>
        <Link to="/itinerary">Itinerary</Link>
        <Link to="/search">Search</Link>
        <Link to="/trips">Trips</Link>
        <Link to="/profile">
          <AccountCircle />
        </Link>
      </div>
    </div>
  );
};
