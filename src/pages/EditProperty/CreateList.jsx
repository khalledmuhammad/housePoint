import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

const EditProperty = ({ val }) => {
  const [property, setProperty] = useState({});
  const [location, setLocation] = useState("");

  console.log(val);

  const { t } = useTranslation();
  useEffect(() => {
    async function fetchProperty() {
      try {
        // Make the GET request to the server to retrieve the property
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API}/getProp/${val}`
        );
        const property = await response.json();

        setProperty(property);
        setLocation(property.Area);
      } catch (err) {
        console.error(err);
      }
    }

    fetchProperty();
    console.log(property);
  }, [val]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send a PUT request to update the property data
    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_API}/edit-property/${val}`,
        property
      );
      if (response.status === 200) {
        toast.success("Property updated successfully!");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="col-lg-12">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="propertyTitle">Property Title</label>
          <input
            type="text"
            className="form-control mb-3"
            id="propertyTitle"
            required
            value={property.Title}
            onChange={(e) =>
              setProperty({ ...property, Title: e.target.value })
            }
          />
          <label htmlFor="propertyTitle">اسم الشقه</label>
          <input
            type="text"
            className="form-control"
            id="propertyTitle"
            required
            value={property.titlear}
            onChange={(e) =>
              setProperty({ ...property, titlear: e.target.value })
            }
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
              value={property.Price}
              onChange={(e) =>
                setProperty({ ...property, Price: e.target.value })
              }
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
              value={property.Price_ex}
              onChange={(e) =>
                setProperty({ ...property, Price_ex: e.target.value })
              }
            >
              <option value="">Select</option>
              <option value="EGP">EGP</option>
              <option value="USD">USD</option>
            </select>
          </div>
        </div>
      </div>
      {/* End .col */}
      <div className="row">
        <div className="col-lg-6 col-xl-6">
          <div className="my_profile_setting_input ui_kit_select_search form-group">
            <div className="form-group  gap-2">
              <label>Location</label>
              <select
                className="selectpicker w100 show-tick form-select"
                required
                value={property.Area}
                onChange={(e) =>
                  setProperty({ ...property, Area: e.target.value })
                }
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
                  value={property.Subarea}
                  onChange={(e) =>
                    setProperty({ ...property, Subarea: e.target.value })
                  }
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
                  value={property.Subarea}
                  onChange={(e) =>
                    setProperty({ ...property, Subarea: e.target.value })
                  }
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
                  value={property.Subarea}
                  onChange={(e) =>
                    setProperty({ ...property, Subarea: e.target.value })
                  }
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
                  value={property.Subarea}
                  onChange={(e) =>
                    setProperty({ ...property, Subarea: e.target.value })
                  }
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
              value={property.Property_type}
              onChange={(e) =>
                setProperty({ ...property, Property_type: e.target.value })
              }
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
              value={property.Property_for}
              onChange={(e) =>
                setProperty({ ...property, Property_for: e.target.value })
              }
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
              value={property.Property_status}
              onChange={(e) =>
                setProperty({ ...property, Property_status: e.target.value })
              }
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
              className="selectpicker w-100 show-tick form-select flex-1"
              required
              value={property.Furniture_status}
              onChange={(e) =>
                setProperty({ ...property, Furniture_status: e.target.value })
              }
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
              required
              value={property.No_of_bedrooms}
              onChange={(e) =>
                setProperty({ ...property, No_of_bedrooms: e.target.value })
              }
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
              className="selectpicker w-100 show-tick form-select"
              required
              value={property.No_of_bathrooms}
              onChange={(e) =>
                setProperty({ ...property, No_of_bathrooms: e.target.value })
              }
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
              value={property.Surface_area}
              onChange={(e) =>
                setProperty({ ...property, Surface_area: e.target.value })
              }
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
            value={property.owner_name}
            onChange={(e) =>
              setProperty({ ...property, owner_name: e.target.value })
            }
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
            value={property.owner_phone}
            onChange={(e) =>
              setProperty({ ...property, owner_phone: e.target.value })
            }
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
            value={property.owner_address}
            onChange={(e) =>
              setProperty({ ...property, owner_address: e.target.value })
            }
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

export default EditProperty;
