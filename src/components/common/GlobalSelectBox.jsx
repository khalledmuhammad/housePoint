import { useDispatch, useSelector } from "react-redux";

import {
  addStatus,
  addKeyword,
  
} from "../../features/properties/propertiesSlice";

const GlobalSelectBox = () => {
  const dispatch = useDispatch()
  return (
    <>
  
      {/* End li */}

   
      {/* End li */}

{/*       <li className="list-inline-item">
        <div className="candidate_revew_select">
          <select className="selectpicker w100 show-tick form-select">
            <option>Year built</option>
            <option>2013</option>
            <option>2014</option>
            <option>2015</option>
            <option>2016</option>
            <option>2017</option>
            <option>2018</option>
            <option>2019</option>
            <option>2020</option>
          </select>
        </div>
      </li> */}

     
      {/* End li */}

      <li className="list-inline-item">
        <div className="candidate_revew_select">
        <select className="selectpicker w100 show-tick form-select" onChange={(e)=> dispatch(addStatus(e.target.value))}  >

              <option value="">Property status</option>
              <option value={1}>furnished</option>
              <option value={4}>Modern Furnished</option>
              <option value={2}>semi furnished</option>
              <option value={3}>Unfurnished</option>
            </select>
        </div>
      </li>
       {/* keyword search */}
       <li className="list-inline-item">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter keyword..."
              onChange={(e) => dispatch(addKeyword(e.target.value))}
            />
          </div>
        </li>
    </>
  );
};

export default GlobalSelectBox;
