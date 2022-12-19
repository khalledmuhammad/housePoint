import { useEffect } from "react";
import { useState } from "react";
import InputRange from "react-input-range";
import { useDispatch, useSelector } from "react-redux";
import { addPrice } from "../../features/properties/propertiesSlice";

const RangeSlider = () => {

    const {
  
        price,
      
        
      } = useSelector((state) => state.properties);
    const [Currprice, setPrice] = useState({ value: { min: price.min, max: price.max } });
    const dispath = useDispatch();



    const handleOnChange = (value) => {
        setPrice({ value });
    };

    // price add to state
    useEffect(() => {
        dispath(
            addPrice({
                min: Currprice.value.min,
                max: Currprice.value.max,
            })
        );
        
    }, [dispath, Currprice, addPrice]);

    return (
        <div className="nft__filter-price tp-range-slider tp-range-slider-dark mb-20">
            <div className="nft__filter-price-inner d-flex align-items-center justify-content-around">
                <div className="nft__filter-price-box">
                    <div className="d-flex align-items-center">
                        <span>{Currprice.value.min}</span>
                    </div>
                    {/* <input
                        value={`${price.value.min}`}
                        onChange={handleOnChange}
                        type="number"
                    /> */}
                </div>
                <div className="nft__filter-price-box">
                    <div className="d-flex align-items-center ">
                        <span >{Currprice.value.max}</span>
                    </div>
                    {/* <input
                        type="number"
                        value={`${price.value.max}`}
                        onChange={handleOnChange}
                    /> */}
                </div>
            </div>

            <InputRange
                formatLabel={(value) => ``}
                maxValue={10000000}
                minValue={0}
                value={Currprice.value}
                onChange={(value) => handleOnChange(value)}
            />

            <div className="slider-styled inside-slider" id="nft-slider"></div>
        </div>
    );
};

export default RangeSlider;
