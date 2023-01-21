import { useEffect } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import InputRange from "react-input-range";
import { useDispatch, useSelector } from "react-redux";
import { addPrice } from "../../features/properties/propertiesSlice";

const RangeSlider = () => {
  const { price } = useSelector((state) => state.properties);

  const [Currpricemin, setPricemin] = useState(price.min);

  const [Currpricemax, setPricemax] = useState(price.max);
  const [open, setOpen] = useState(false);
  const [openMax, setOpenMax] = useState(false);

  const dispath = useDispatch();
  const { t } = useTranslation();
  const { Property_for } = useSelector((state) => state.properties);

  const priceValuesSale = [
    100000, 200000, 300000, 400000, 500000, 600000, 700000, 800000, 900000,
    1000000, 1100000, 1200000, 1300000, 1400000, 1500000, 1600000, 1700000,
    1800000, 1900000, 2000000, 2100000, 2200000, 2300000, 2400000, 2500000,
    2600000, 2700000, 2800000, 2900000, 3000000, 3250000, 3500000, 3750000,
    4000000, 4250000, 4500000, 5000000, 5500000, 6000000, 7000000, 8000000,
    9000000, 1000000, 12000000, 13000000, 14000000, 15000000, 20000000,
    40000000,
  ];
  const priceValueRent = [
    5000, 6000, 7000, 8000, 9000, 10000, 11000, 12000, 13000, 14000, 15000,
    16000, 17000, 18000, 19000, 20000, 22000, 25000, 27500, 30000, 32000, 35000,
    37500, 40000, 45000, 47500, 50000, 55000, 60000, 65000, 70000, 75000, 80000,
    85000, 90000, 95000, 100000, 200000, 300000,
  ];

  // price add to state
  useEffect(() => {
    dispath(
      addPrice({
        min: Currpricemin,
        max: Currpricemax,
      })
    );
  }, [dispath, Currpricemax, Currpricemin, addPrice]);

  return (
    <div className="d-flex align-items-center priceSuggest   flex-row gap-2 ">
      <input
        value={`${Currpricemin}`}
        onChange={(e) => {
          setPricemin(e.target.value);
          setOpen(false);
        }}
        onClick={() => {
          setOpen(!open);
          setOpenMax(false);
        }}
        placeholder={t("MIN")}
        type="number"
      />
      {open && (
        <ul className="pricemin-suggestions">
          {Property_for === "Sale"
            ? priceValuesSale.map((value) => (
                <li
                  key={value}
                  onClick={() => {
                    setPricemin(value);
                    setOpen(!open);
                  }}
                >
                  {" "}
                  {value.toLocaleString()}
                </li>
              ))
            : priceValueRent.map((value) => (
                <li
                  key={value}
                  onClick={() => {
                    setPricemin(value);
                    setOpen(!open);
                  }}
                >
                  {" "}
                  {value.toLocaleString()}
                </li>
              ))}
        </ul>
      )}
      _
      <input
        type="number"
        list="pricemax-suggestions"
        placeholder={t("MAX")}
        value={`${Currpricemax}`}
        onChange={(e) => {
          setPricemax(e.target.value);
          setOpenMax(false);
        }}
        onClick={() => {
          setOpenMax(!openMax);
          setOpen(false);
        }}
      />
      {openMax && (
        <ul className="pricemax-suggestions">
          {Property_for === "Sale"
            ? priceValuesSale.map((value) => (
                <li
                  key={value}
                  onClick={() => {
                    setPricemax(value);
                    setOpenMax(!openMax);
                  }}
                >
                  {" "}
                  {value.toLocaleString()}
                </li>
              ))
            : priceValueRent.map((value) => (
                <li
                  key={value}
                  onClick={() => {
                    setPricemax(value);
                    setOpenMax(!openMax);
                  }}
                >
                  {" "}
                  {value.toLocaleString()}
                </li>
              ))}
        </ul>
      )}
    </div>
  );
};

export default RangeSlider;
