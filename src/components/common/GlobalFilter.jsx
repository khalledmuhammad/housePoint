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
  const { t } = useTranslation();
  const router = useRouter();

  const { location, Sublocation } = useSelector((state) => state.properties);

  // submit handler
  const submitHandler = () => {
    Router.push("/AllProperties");
  };
  const dispatch = useDispatch();

  return (
    <div
      className={`home1-advnc-search ${className} `}
      dir={`${router.locale === "ar" ? "rtl" : ""}`}
    >
      <ul className="h1ads_1st_list mb0">
        {/* start location li */}

        <li className="list-inline-item">
          <div className="form-group">
            <select
              className="selectpicker w100 show-tick form-select"
              onChange={(e) => dispatch(addLocation(e.target.value))}
            >
              <option value="">{t("LOCATION")}</option>
              <option value={1}>{t("MAADI")}</option>
              <option value={4}>{t("NEWCAIRO")}</option>
              <option value={17} className="px-5">
                {t("KATAMYA")}
              </option>
            </select>
          </div>
        </li>
        {/* End li */}
        {location == 1 && (
          <li className="list-inline-item">
            <div className="form-group">
              <select
                className="selectpicker w100 show-tick form-select"
                onChange={(e) => dispatch(addSubLocation(e.target.value))}
              >
                <option value="">{t("SUBLOCATION")}</option>
                <option value={1}>{t("ZAHRAAMAADI")}</option>
                <option value={2}>{t("MAADISARAYAT")}</option>
                <option value={4}>{t("NEWMAADI")}</option>
                <option value={5}>{t("MAADIDEGLA")}</option>
                <option value={6}>{t("OLDMAADI")}</option>
                <option value={3} className="px-5">
                  {t("CORNISHMAADI")}
                </option>
              </select>
            </div>
          </li>
        )}

        {/* End Li */}
        {location == 4 && (
          <li className="list-inline-item">
            <div className="form-group">
              <select
                className="selectpicker w-125 show-tick form-select"
                onChange={(e) => dispatch(addSubLocation(e.target.value))}
              >
                <option value="">{t("SUBLOCATION")}</option>
                <option value={7}>{t("CHOUIFAT")}</option>
                <option value={8}>{t("WESTGOLF")}</option>
                <option value={9}>{t("FIFTHSETTLE")}</option>

                <option value={79}>{t("MOUNTAINVIEW")}</option>
                <option value={78}>{t("LAKEVIEW")}</option>
                <option value={90}>{t("ARABELLA")}</option>
                <option value={33}>{t("FIRSTSETTLE")}</option>
                <option value={91}>{t("MIRAGECITY")}</option>
                <option value={89}>{t("MIVIDA")}</option>

                <option value={89}>{t("MADINTY")}</option>
                <option value={81}>{t("KATAMEYADUNES")}</option>
                <option value={82}>{t("KATAMYARESDENCE")}</option>
                <option value={83}>{t("KATAMETAHILLS")}</option>
                <option value={84}>{t("VILLAGEGATE")}</option>
                <option value={85}>{t("THEVILLAGE")}</option>
                <option value={86}>{t("KATAMYAPLAZA")}</option>

                <option value={87}>{t("STONEPARK")}</option>
              </select>
            </div>
          </li>
        )}

        {/* End li */}

        {/* start type li */}

        <li className="list-inline-item">
          <div className="candidate_revew_select">
            <select
              onChange={(e) => dispatch(addProperty_type(e.target.value))}
              className="selectpicker w-125 show-tick form-select"
            >
              <option value="">{t("PROPFOR")}</option>
              <option value={1}>{t("APARTMENT")}</option>
              <option value={2}>{t("DUPLEX")}</option>
              <option value={3}>{t("GROUNDFLOORDUPLEX")}</option>
              <option value={4}>{t("GROUNDFLOORS")}</option>
              <option value={5}>{t("PENTHOUSE")}</option>
              <option value={6}>{t("VILLAS")}</option>
              <option value={7}>{t("STUDIOS")}</option>
              <option value={8}>{t("ROOFTOP")}</option>
              <option value={9}>{t("PENTDUPLEX")}</option>
              <option value={10}>{t("PENTTRIP")}</option>
              <option value={11}>{t("GFLOORTRIP")}</option>
              <option value={12}>{t("ADMINBUILD")}</option>

              <option value={13}>{t("TWHOUSE")}</option>
              <option value={14}>{t("BUILDING")}</option>
              <option value={17}>{t("CHALETS")}</option>
              <option value={18}>{t("LANDS")}</option>
              <option value={19}>{t("THOUSE")}</option>
              <option value={20}>{t("FLATS")}</option>
              <option value={21}>{t("COMMSTORE")}</option>
              <option value={22}>{t("OFFICE")}</option>
              <option value={23}>{t("OFFICEBUILD")}</option>
            </select>
          </div>
        </li>
        {/* End li */}
        {/* start beds li */}

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
        {/* start baths li */}

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

        {/* start price li */}

        <li className="list-inline-item">
          <div className="small_dropdown2">
            <div
              id="prncgs"
              className="btn dd_btn"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
            <span className={`${router.locale === "ar" ? "float-end" : ""}`}>
                {t("PRICERANGE")}</span>
             
            </div>
            <div className="dd_content2 dropdown-menu">
              <div className="">
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

        <li className="list-inline-item ">
          <div className="search_option_button ">
            <button
              onClick={submitHandler}
              type="submit"
              className="btn btn-thm w80"
            >
              <i class="fa fa-search" aria-hidden="true"></i>
            </button>
          </div>
        </li>
        {/* End li */}
      </ul>
    </div>
  );
};

export default GlobalFilter;
