import { useDispatch } from "react-redux";
import {
  addDashboardSearch,
  
} from "../../features/properties/propertiesSlice";

const SearchBox = () => {
  const dispatch = useDispatch()

  return (
    <form className="d-flex flex-wrap align-items-center my-2">
      <input
        className="form-control mr-sm-2"
        type="search"
        placeholder="Search by Ref "
        aria-label="Search"
        onChange={(e) => dispatch(addDashboardSearch(e.target.value))}

      />
      <button className=" my-2 my-sm-0" type="submit">
        <span className="flaticon-magnifying-glass"></span>
      </button>
    </form>
  );
};

export default SearchBox;
