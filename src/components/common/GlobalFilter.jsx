import Router from "next/router";
import {
  addKeyword,
  addLocation,
  addProperty_type
} from "../../features/properties/propertiesSlice";
import PricingRangeSlider from "./PricingRangeSlider";
import CheckBoxFilter from "./CheckBoxFilter";
import GlobalSelectBox from "./GlobalSelectBox";
import { useDispatch } from "react-redux";

const GlobalFilter = ({ className = "" }) => {
  // submit handler
  const submitHandler = () => {
    Router.push("/AllProperties");
  };
   const dispatch = useDispatch()

  return (
    <div className={`home1-advnc-search ${className}`}>
      <ul className="h1ads_1st_list mb0">
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
        {/* End li */}

        <li className="list-inline-item">
          <div className="search_option_two">
            <div className="candidate_revew_select">
            <select
              onChange={(e) => dispatch(addProperty_type((e.target.value)))   }
              className="selectpicker w100 show-tick form-select"
            >
              <option value="">Property Type</option>
              <option value={1}>Duplex</option>
              <option value={2}>Apartment</option>
              <option value={3}>Ground Floors duplex</option>
              <option value={4}>Ground Floors</option>
              <option value={5}>Penthouses</option>
              <option value={6}>Villas</option>
              <option value={7}>Roof Top</option>
              <option value={8}>Studios</option>
              <option value={9}>Penthouses Duplex</option>
              <option value={10}>Penthouses Triplex</option>
              <option value={11}>Ground Floors Triplex</option>
              <option value={12}>Adminstration Buildings</option>

              <option value={13}>Twin Houses</option>
              <option value={14}>Buildings</option>
              <option value={17}>Chalets</option>
              <option value={18}>Town House</option>
              <option value={19}>lands</option>
              <option value={20}>Flats</option>
              <option value={21}>Commercial Stores and Shops</option>
              <option value={22}>offices</option>
              <option value={23}>Office Adminstration Buildings</option>
            </select>
            </div>
          </div>
        </li>
        {/* End li */}

        <li className="list-inline-item">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Location"
              onChange={(e) => dispatch(addLocation(e.target.value))}
            />
            <label>
              <span className="flaticon-maps-and-flags"></span>
            </label>
          </div>
        </li>
        {/* End li */}

        <li className="list-inline-item">
          <div className="small_dropdown2">
            <div
              id="prncgs"
              className="btn dd_btn"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              <span>Price</span>
              <label htmlFor="InputEmail2">
                <span className="fa fa-angle-down"></span>
              </label>
            </div>
            <div className="dd_content2 dropdown-menu">
              <div className="pricing_acontent">
                <PricingRangeSlider />
              </div>
            </div>
          </div>
        </li>
        {/* End li */}

        <li className="custome_fields_520 list-inline-item">
          <div className="navbered">
            <div className="mega-dropdown ">
              <span
                className="dropbtn"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="false"
              >
                Advanced <i className="flaticon-more pl10 flr-520"></i>
              </span>

              <div className="dropdown-content dropdown-menu ">
                <div className="row p15">
                  <div className="col-lg-12">
                    <h4 className="text-thm3 mb-4">Amenities</h4>
                  </div>

                  <CheckBoxFilter />
                </div>
                {/* End .row */}

                <div className="row p15 pt0-xsd">
                  <div className="col-lg-12 col-xl-12">
                    <ul className="apeartment_area_list mb0">
                      <GlobalSelectBox />
                    </ul>
                  </div>
                </div>
                {/* End .row */}
              </div>
              {/* End .dropdown-menu */}
            </div>
          </div>
        </li>
        {/* End li */}

        <li className="list-inline-item">
          <div className="search_option_button">
            <button
              onClick={submitHandler}
              type="submit"
              className="btn btn-thm"
            >
              Search
            </button>
          </div>
        </li>
        {/* End li */}
      </ul>
    </div>
  );
};

export default GlobalFilter;
