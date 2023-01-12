import axios from "axios";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';



const CreateList = () => {
  const [title, setPropertyTitle] = useState("");
  const [titlear, setPropertyTitle_ar] = useState("");
  const [price, setPropertyPrice] = useState("");
  const [price_ex, setCurrency] = useState("");

  const [location, setLocation] = useState("");
  const [subarea, setSubLocation] = useState("");

  const [property_type, setproperty_type] = useState("");
  const [property_for, setproperty_for] = useState("");
  const [surface_area, setsurface_area] = useState("");
  const [property_status, setproperty_status] = useState("");
  const [no_of_bedrooms, setno_of_bedrooms] = useState("");
  const [no_of_bathrooms, setno_of_bathrooms] = useState("");
  const [furniture_status, setfurniture_status] = useState("");
  const [owner_name, setowner_name] = useState("");
  const [owner_phone, setowner_phone] = useState("");
  const [owner_address, setowner_address] = useState("");

  const { t } = useTranslation();
  const router = useRouter();
  const handlSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        title,
        titlear,
        price,
        price_ex,
        area: location,
        subarea,
        property_type,
        property_for,
        surface_area,
        property_status,
        no_of_bedrooms,
        no_of_bathrooms,
        furniture_status,
        owner_name,
        owner_phone,
        owner_address,
      };
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/add-Property`,
        data)
        .then((response) => {
        toast.success("successfully added property");
        router.push("/")
      })
    } catch (error) {}
  };

  return (
    <form onSubmit={handlSubmit}>
      <div className="col-lg-12">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="propertyTitle">Property Title</label>
          <input
            type="text"
            className="form-control mb-3"
            id="propertyTitle"
            required
            onChange={(e) => setPropertyTitle(e.target.value)}
          />
          <label htmlFor="propertyTitle">اسم الشقه</label>
          <input
            type="text"
            className="form-control"
            id="propertyTitle"
            required
            onChange={(e) => setPropertyTitle_ar(e.target.value)}
          />
        </div>
      </div>
      {/* End .col */}
      <div className="row">
        <div className="col-lg-6 col-xl-6">
          <div className="my_profile_setting_input ui_kit_select_search form-group">
            <label>Property Price</label>
            <input
              type="number"
              className="form-control"
              id="propertyTitle"
              required
              onChange={(e) => setPropertyPrice(e.target.value)}
            />
          </div>
        </div>
        <div className="col-lg-6 col-xl-6">
          <div className="my_profile_setting_input ui_kit_select_search form-group">
            <label>Currency</label>
            <select
              className="selectpicker form-select"
              data-live-search="true"
              data-width="100%"
              required
              onChange={(e) => setCurrency(e.target.value)}
            >
              <option value="">Select</option>

              <option value={0}>EGP</option>
              <option value={1}>USD</option>
            </select>
          </div>
        </div>
      </div>

      {/* End .col */}

      {/* End .col */}

      {/* End .col */}
      <div className="row">
        <div className="col-lg-6 col-xl-6">
          <div className="my_profile_setting_input ui_kit_select_search form-group">
            <div className="form-group  gap-2">
              <label>Location</label>
              <select
                className="selectpicker w100 show-tick form-select"
                required
                onChange={(e) => setLocation(e.target.value)}
              >
                <option value="">{t("LOCATION")}</option>
                <option value={1}>{t("MAADI")}</option>
                <option value={4}>{t("NEWCAIRO")}</option>
                <option value={17} className="px-5">
                  {t("KATAMYA")}
                </option>
              </select>
            </div>
          </div>
        </div>
        {/* End li */}
        {location == "" && (
          <div className="col-lg-6 col-xl-6">
            <div className="my_profile_setting_input ui_kit_select_search form-group">
              <div className="form-group ">
                <label>Sub Location</label>

                <select
                  className="selectpicker w100 show-tick form-select"
                  onChange={(e) => setSubLocation(e.target.value)}
                >
                  <option value="">{t("SUBLOCATION")}</option>
                </select>
              </div>
            </div>
          </div>
        )}
        {location == 17 && (
          <div className="col-lg-6 col-xl-6">
            <div className="my_profile_setting_input ui_kit_select_search form-group ">
              <div className="form-group ">
                <label>Sub Location</label>

                <select
                  className="selectpicker w100 show-tick form-select"
                  onChange={(e) => setSubLocation(e.target.value)}
                >
                  <option value="">{t("SUBLOCATION")}</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {location == 1 && (
          <div className="col-lg-6 col-xl-6">
            <div className="my_profile_setting_input ui_kit_select_search form-group ">
              <div className="form-group ">
                <label>Sub Location</label>

                <select
                  className="selectpicker w100 show-tick form-select"
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
              </div>
            </div>
          </div>
        )}

        {/* End Li */}
        {location == 4 && (
          <div className="col-lg-6 col-xl-6">
            <div className="my_profile_setting_input ui_kit_select_search form-group ">
              <div className="form-group ">
                <label>Sub Location</label>

                <select
                  className="selectpicker w100 show-tick form-select"
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
            </div>
          </div>
        )}
      </div>
      {/* End li */}

      {/* start type li */}
      <div className="row">
        <div className="col-lg-6 col-xl-6">
          <div className="my_profile_setting_input ui_kit_select_search form-group ">
            <label>Property Type</label>
            <select
              onChange={(e) => setproperty_type(e.target.value)}
              className="selectpicker w-100 show-tick form-select"
              required
            >
              <option value="">select</option>

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
        </div>
        <div className="col-lg-6 col-xl-6">
          <div className="my_profile_setting_input ui_kit_select_search form-group ">
            <label>Property for</label>
            <select
              onChange={(e) => setproperty_for(e.target.value)}
              className="selectpicker w-100 show-tick form-select"
              required
            >
              <option value="">select</option>

              <option value="Rent">Rent</option>
              <option value="Sale">Sale</option>
            </select>
          </div>
        </div>
        {/* End .col */}
      </div>

      <div className="row">
        <div className="col-lg-6 col-xl-6">
          <div className="my_profile_setting_input ui_kit_select_search form-group ">
            <label>Property Status</label>
            <select
              className="selectpicker form-select"
              data-live-search="true"
              data-width="100%"
              onChange={(e) => setproperty_status(e.target.value)}
              required
            >
              <option value="">select</option>

              <option value="Excellent">Excellent</option>
              <option value="Very Good">Very Good</option>
              <option value="Good">Good</option>
              <option value="Normal">Normal</option>
            </select>
          </div>
        </div>
        {/* End .col */}

        <div className="col-lg-6 col-xl-6">
          <div className="my_profile_setting_input ui_kit_select_search form-group ">
            {" "}
            <label>Furniture status</label>
            <select
              onChange={(e) => setfurniture_status(e.target.value)}
              className="selectpicker w-100 show-tick form-select flex-1"
              required
            >
              <option value="">select</option>

              <option value={1}>furnished</option>
              <option value={4}>Modern Furnished</option>
              <option value={2}>semi furnished</option>
              <option value={3}>Unfurnished</option>
            </select>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6 col-xl-6">
          <div className="my_profile_setting_input ui_kit_select_search form-group ">
            <label>No of rooms</label>
            <select
              className="selectpicker form-select"
              data-live-search="true"
              data-width="100%"
              onChange={(e) => setno_of_bedrooms(e.target.value)}
              required
            >
              <option value="">select</option>

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
        {/* End .col */}

        <div className="col-lg-6 col-xl-6">
          <div className="my_profile_setting_input ui_kit_select_search form-group ">
            {" "}
            <label>No of bathrooms</label>
            <select
              onChange={(e) => setno_of_bathrooms(e.target.value)}
              className="selectpicker w-100 show-tick form-select"
              required
            >
              <option value="">select</option>

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
      </div>
      <div className="col-lg-6 col-xl-6">
        <div className="  my_profile_setting_input ui_kit_select_search form-group">
          <label>Surface area</label>

          <div className="d-flex justify-content-center align-items-center">
            <input
              type="number"
              className="form-control"
              id="propertyTitle"
              required
              onChange={(e) => setsurface_area(e.target.value)}
            />
            SQM²
          </div>
        </div>
      </div>
      <hr />

      <div className="col-lg-12">
        <div className="my_profile_setting_input form-group ">
          <label htmlFor="propertyTitle" className="text-center">
            Owner name:
          </label>
          <input
            type="text"
            className="form-control"
            id="propertyTitle"
            required
            onChange={(e) => setowner_name(e.target.value)}
          />
        </div>
        <div className="my_profile_setting_input form-group ">
          <label htmlFor="propertyTitle" className="text-center">
            Owner phone :
          </label>
          <input
            type="number"
            className="form-control"
            id="propertyTitle"
            required
            onChange={(e) => setowner_phone(e.target.value)}
          />
        </div>
        <div className="my_profile_setting_input form-group ">
          <label htmlFor="propertyTitle" className="text-center">
            Owner address :
          </label>
          <input
            type="emai;"
            className="form-control"
            id="propertyTitle"
            required
            onChange={(e) => setowner_address(e.target.value)}
          />
        </div>
      </div>

      <div className="col-xl-12">
        <div className="my_profile_setting_input">
          <button type="submit" className="btn btn3 btn-primary float-end">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default CreateList;
