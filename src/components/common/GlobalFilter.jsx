import Router, { useRouter } from "next/router";
import {
  addLocation,
  addBathrooms,
  addBedrooms,
  addProperty_type,
  addSubLocation,
} from "../../features/properties/propertiesSlice";
import PricingRangeSlider from "./PricingRangeSlider";
import CheckBoxFilter from "./CheckBoxFilter";
import GlobalSelectBox from "./GlobalSelectBox";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const GlobalFilter = ({ className = "" }) => {
  const {t} = useTranslation()
  const router = useRouter()

  const {
    location,
      Sublocation,
  } = useSelector((state) => state.properties);

  // submit handler
  const submitHandler = () => {
    Router.push("/AllProperties");
  };
  const dispatch = useDispatch();

  return (
    <div className={`home1-advnc-search ${className} `} dir={`${router.locale === "ar" ? "rtl" : ""}`}>
      <ul className="h1ads_1st_list mb0">
        {/* End li */}

        <li className="list-inline-item">
            <div className="candidate_revew_select">
              <select
                onChange={(e) => dispatch(addProperty_type(e.target.value))}
                className="selectpicker w-80 show-tick form-select"
              >
                <option value="">{t("PROPFOR")}</option>
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
        </li>
        {/* End li */}
        <li className="list-inline-item">
          <div className="candidate_revew_select">
            <select
              className="selectpicker w100 show-tick form-select"
              onChange={(e) => dispatch(addBedrooms(e.target.value))}
            >
              <option value="">{t("BEDS")}</option>
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
            <select
              className="selectpicker w100 show-tick form-select"
              onChange={(e) => dispatch(addBathrooms(e.target.value))}
            >
              <option value="">{t("BATHS")}</option>
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
          <div className="form-group">
            <select
              className="selectpicker w100 show-tick form-select"
              onChange={(e) => dispatch(addLocation(e.target.value))}
            >
              <option value="">{t("LOCATION")}</option>
              <option value={1}>{t("MAADI")}</option>
              <option value={4}>{t("NEWCAIRO")}</option>
              <option value={17} className="px-5" >{t("KATAMYA")}</option>
            </select>
          </div>
        </li>
        {/* End li */}
        {location == 1 && (  <li className="list-inline-item">
          <div className="form-group">
      

            <select
            className="selectpicker w100 show-tick form-select"
            onChange={(e) => dispatch(addSubLocation(e.target.value))}
            >
              <option value="">{t("SUBLOCATION")}</option>
              <option value={1}>Zahraa Maadi</option>
              <option value={2}>Maadi Sarayat</option>
              <option value={4}>New Maadi</option>
              <option value={5}>Maadi Degla</option>
              <option value={6}>Old Maadi</option>
              <option value={3} className="px-5">Cornish Maadi</option>
            </select>
         

          </div>
          </li>
           )}

          {/* End Li */}
          {location == 4 && (
 <li className="list-inline-item">
          <div className="form-group">
            <select
            className="selectpicker w100 show-tick form-select"
            onChange={(e) => dispatch(addSubLocation(e.target.value))}
            >
              <option value="">{t("SUBLOCATION")}</option>
              <option value={7}>chouifat</option>
              <option value={8}>West Golf</option>
              <option value={9}>5th Settlement</option>
           
            </select>

          </div>
          </li>

          )}

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
              <span>{t("PRICERANGE")}</span>
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
                <i className="flaticon-more pl10 flr-520"></i>
              </span>

              <div className="dropdown-content dropdown-menu ">
                <div className="row p15">
                  <div className="col-lg-12">
                    <h4 className="text-thm3 mb-4">Amenities</h4>
                  </div>
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
              {t("SEARCH")}
            </button>
          </div>
        </li>
        {/* End li */}
      </ul>
    </div>
  );
};

export default GlobalFilter;
