import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addFeatured,
  addStatusType,
} from "../../../features/filter/filterSlice";
import {
  addAreaMax,
  addAreaMin,
  addBathrooms,
  addBedrooms,
  addGarages,
  addKeyword,
  addLocation,
  addPrice,
  addProperty_type,
  addStatus,
  addSubLocation,
  addYearBuilt,
  resetAmenities,
} from "../../../features/properties/propertiesSlice";
import PricingRangeSlider from "../../common/PricingRangeSlider";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

const FilteringItem = () => {
  const { t } = useTranslation("");
  const {
    keyword,
    location,
    Furniture_status,
    Property_type,
    bathrooms,
    bedrooms,
    garages,
    yearBuilt,
    price,
    area,
    Sublocation,
    amenities,
  } = useSelector((state) => state.properties);

  const router = useRouter();

  // input state
  const [getKeyword, setKeyword] = useState(keyword);
  const [getLocation, setLocation] = useState(location);
  const [getSubLocation, setSubLocation] = useState(Sublocation);

  const [getStatus, setStatus] = useState(Furniture_status);
  const [getPropertiesType, setPropertiesType] = useState(Property_type);
  const [getBathroom, setBathroom] = useState(bathrooms);
  const [getBedroom, setBedroom] = useState(bedrooms);
  const [getGarages, setGarages] = useState(garages);
  const [getBuiltYear, setBuiltYear] = useState(yearBuilt);
  const [getAreaMin, setAreaMin] = useState(area.min);
  const [getAreaMax, setAreaMax] = useState(area.max);

  // advanced state

  const dispath = useDispatch();

  const Router = useRouter();

  // keyword
  useEffect(() => {
    dispath(addKeyword(getKeyword));
  }, [dispath, addKeyword, getKeyword]);

  // add price
  useEffect(() => {
    dispath(addPrice({ min: price.min, max: price.max }));
  }, [dispath, addPrice, price]);

  // location
  useEffect(() => {
    dispath(addLocation(getLocation));
  }, [dispath, addLocation, getLocation]);
  //  sub location
  useEffect(() => {
    dispath(addSubLocation(getSubLocation));
  }, [dispath, addSubLocation, getSubLocation]);

  // status
  useEffect(() => {
    dispath(addStatus(getStatus));
  }, [dispath, addStatus, getStatus]);

  // properties type
  useEffect(() => {
    dispath(addProperty_type(getPropertiesType));
  }, [dispath, addProperty_type, getPropertiesType]);

  // bathroom
  useEffect(() => {
    dispath(addBathrooms(getBathroom));
  }, [dispath, addBathrooms, getBathroom]);

  // bedroom
  useEffect(() => {
    dispath(addBedrooms(getBedroom));
  }, [dispath, addBedrooms, getBedroom]);

  // garages
  useEffect(() => {
    dispath(addGarages(getGarages));
  }, [dispath, addGarages, getGarages]);

  // built years
  useEffect(() => {
    dispath(addYearBuilt(getBuiltYear));
  }, [dispath, addYearBuilt, getBuiltYear]);

  // area min
  useEffect(() => {
    dispath(dispath(addAreaMin(getAreaMin)));
  }, [dispath, addAreaMin, getAreaMin]);

  // area max
  useEffect(() => {
    dispath(dispath(addAreaMax(getAreaMax)));
  }, [dispath, addAreaMax, getAreaMax]);

  // clear filter
  const clearHandler = () => {
    clearAllFilters();
  };

  const clearAllFilters = () => {
    setKeyword("");
    setLocation("");
    setSubLocation("");
    setStatus("");
    setPropertiesType("");
    dispath(addPrice({ min: 0, max: 10000000 }));
    setBathroom("");
    setBedroom("");
    setBedroom("");
    setGarages("");
    setBuiltYear("");
    setAreaMin("");
    setAreaMax("");
    dispath(resetAmenities());
    dispath(addStatusType(""));
    dispath(addFeatured(""));
  };

  console.log(Property_type);
  // clear advanced

  return (
    <ul className="sasw_list mb0">
      <li className="search_area">
        <div className="form-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder={`${t("KEYWORD")}`}
            value={getKeyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <label>
            <span className="flaticon-magnifying-glass"></span>
          </label>
        </div>
      </li>
      {/* End li */}

      <li className="search_area">
        <div className="form-group mb-3">
          <select
            className="selectpicker w100 show-tick form-select"
            value={getLocation}
            onChange={(e) => {
              setLocation(e.target.value);
              setSubLocation("");
            }}
          >
            <option value="">{t("LOCATION")}</option>
            <option value={1}>{t("MAADI")}</option>
            <option value={4}>{t("NEWCAIRO")}</option>
            <option value={17} className="px-5">
              {t("KATAMYA")}
            </option>
          </select>
          {location == 1 && (
            <select
              className="selectpicker w100 show-tick form-select my-3"
              value={getSubLocation}
              onChange={(e) => setSubLocation(e.target.value)}
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
          )}
          {location == 4 && (
            <select
              className="selectpicker w100 show-tick form-select my-3"
              value={getSubLocation}
              onChange={(e) => setSubLocation(e.target.value)}
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

              <option value={92}>{t("MADINTY")}</option>
              <option value={81}>{t("KATAMEYADUNES")}</option>
              <option value={82}>{t("KATAMYARESDENCE")}</option>
              <option value={83}>{t("KATAMETAHILLS")}</option>
              <option value={84}>{t("VILLAGEGATE")}</option>
              <option value={85}>{t("THEVILLAGE")}</option>
              <option value={86}>{t("KATAMYAPLAZA")}</option>

              <option value={87}>{t("STONEPARK")}</option>
            </select>
          )}
          {location == 17 && (
            <select
              className="selectpicker w100 show-tick form-select my-3"
              value={getSubLocation}
              onChange={(e) => setSubLocation(e.target.value)}
            >
              <option value={76}>{t("KATAMYA")}</option>
            </select>
          )}
        </div>
      </li>
      {/* End li */}

      <li>
        <div className="search_option_two">
          <div className="candidate_revew_select">
            <select
              onChange={(e) => setStatus(e.target.value)}
              className="selectpicker w100 show-tick form-select"
              value={getStatus}
            >
              <option value="">{t("PROPSTATUS")}</option>
              <option value={1}>furnished</option>
              <option value={4}>Modern Furnished</option>
              <option value={2}>semi furnished</option>
              <option value={3}>Unfurnished</option>
            </select>
          </div>
        </div>
      </li>
      {/* End li */}

      <li>
        <div className="search_option_two">
          <div className="candidate_revew_select">
            <select
              onChange={(e) => setPropertiesType(e.target.value)}
              className="selectpicker w100 show-tick form-select"
              value={getPropertiesType}
            >
              <option value="">{t("PROPFOR")}</option>
              <option value={2}>{t("APARTMENT")}</option>
              <option value={1}>{t("DUPLEX")}</option>
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
        </div>
      </li>
      {/* End li */}

      <li>
        <div className="small_dropdown2">
          <div
            id="prncgs2"
            className="btn dd_btn "
            data-bs-toggle="dropdown"
            data-bs-auto-close="outside"
            aria-expanded="false"
          >
            <span className={`${router.locale === "ar" ? "float-end" : ""}`}>
              {t("PRICERANGE")}
            </span>
          </div>
          <div className="dd_content2 style2 dropdown-menu">
            <div className="pricing_acontent ">
              <PricingRangeSlider />
            </div>
          </div>
        </div>
      </li>
      {/* End li */}

      <li>
        <div className="search_option_two">
          <div className="candidate_revew_select">
            <select
              onChange={(e) => setBathroom(e.target.value)}
              className="selectpicker w100 show-tick form-select"
              value={getBathroom}
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
        </div>
      </li>
      {/* End li */}

      <li>
        <div className="search_option_two">
          <div className="candidate_revew_select">
            <select
              onChange={(e) => setBedroom(e.target.value)}
              className="selectpicker w100 show-tick form-select"
              value={getBedroom}
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
        </div>
      </li>

      <li>
        <div className="search_option_button">
          <button
            onClick={clearHandler}
            type="button"
            className="btn btn-block btn-thm w-100"
          >
            {t("CLEARFILTERS")}
          </button>
        </div>
      </li>
      {/* End li */}
    </ul>
  );
};

export default FilteringItem;
