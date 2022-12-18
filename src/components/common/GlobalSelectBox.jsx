import { useDispatch, useSelector } from "react-redux";

import {
  addBathrooms,
  addBedrooms,
  addStatus
} from "../../features/properties/propertiesSlice";

const GlobalSelectBox = () => {
  const dispatch = useDispatch()
  return (
    <>
      <li className="list-inline-item">
        <div className="candidate_revew_select">
          <select className="selectpicker w100 show-tick form-select" onChange={(e)=> dispatch(addBathrooms(e.target.value))}  >
          <option value="">Bathrooms</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
          </select>
        </div>
      </li>
      {/* End li */}

      <li className="list-inline-item">
        <div className="candidate_revew_select">
          <select className="selectpicker w100 show-tick form-select" onChange={(e)=> dispatch(addBedrooms(e.target.value))}  >
          <option value="">Bedrooms</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
          </select>
        </div>
      </li>
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
          <select
              onChange={(e) => dispatch.addStatus(e.target.value)}
              className="selectpicker w100 show-tick form-select"
            >
              <option value="">Property status</option>
              <option value={1}>furnished</option>
              <option value={4}>Modern Furnished</option>
              <option value={2}>semi furnished</option>
              <option value={3}>Unfurnished</option>
            </select>
        </div>
      </li>
    </>
  );
};

export default GlobalSelectBox;
