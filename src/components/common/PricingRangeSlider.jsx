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

  const dispath = useDispatch();
  const { t } = useTranslation();
  const priceValues = [
    100000, 200000, 300000, 400000, 500000, 600000, 700000, 800000, 900000,
    1000000, 1100000, 1200000, 1300000, 1400000, 1500000, 1600000, 1700000,
    1800000, 1900000, 2000000, 2100000, 2200000, 2300000, 2400000, 2500000,
    2600000, 2700000, 2800000, 2900000, 3000000, 3250000, 3500000, 3750000,
    4000000, 4250000, 4500000, 5000000,
  ];

  const handleOnChange = (value) => {
    setPrice({ value });
  };

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
    <div className="d-flex align-items-center   flex-row gap-2 ">
      <input
        className=""
        list="pricemin-suggestions"
        /*               value={`${Currpricemin}`}
         */ onChange={(e) => setPricemin(e.target.value)}
        placeholder={t("MIN")}
        type="number"
      />
      <datalist id="pricemin-suggestions">
        {priceValues.map((value) => (
          <option key={value} value={value} />
        ))}
      </datalist>
      _
      <input
        type="number"
        list="pricemax-suggestions"
        placeholder={t("MAX")}
        /*               value={`${Currpricemax}`}
         */ onChange={(e) => setPricemax(e.target.value)}
      />
      <datalist id="pricemax-suggestions">
        {priceValues.map((value) => (
          <option key={value} value={value} />
        ))}
      </datalist>
    </div>
  );
};

export default RangeSlider;
