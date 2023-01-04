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
  const {t} = useTranslation()

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
/*               value={`${Currpricemin}`}
 */              onChange={(e) => setPricemin(e.target.value)}
              placeholder={t("MIN")}
              type="number"
            />

       _
            <input
              type="number"
              placeholder={t("MAX")}
/*               value={`${Currpricemax}`}
 */              onChange={(e) => setPricemax(e.target.value)}
            />
        </div>

  );
};

export default RangeSlider;
