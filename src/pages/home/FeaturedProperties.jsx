import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";

const FeaturedProperties = ({ Properties }) => {
  const settings = {
    dots: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: false,
    speed: 1200,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
        },
      },
    ],
  };
  const [image, setImage] = useState();

  return (
    <>
      <Slider {...settings} arrows={false}>
        {Properties?.slice(0, 12).map((item) => (
          <div className="item" key={item.Id_property}>
            <div className="feat_property home3">
              <h4 className="p-2" style={{ background: "rgb(62, 76, 102)" }}>
                <Link
                  legacyBehavior
                  href={`/singleProperty/${item.Id_property}`}
                >
                  <a className="text-white">{item.Title}</a>
                </Link>
              </h4>
              <Link legacyBehavior href={`/singleProperty/${item.Id_property}`}>
                <a>
                  <div className="thumb">
                    <img
                      className="img-whp"
                      src={`https://housepointegypt.com/photos/${item.file_image}`}
                      alt="fp1.jpg"
                    />
                    <div className="thmb_cntnt">
                      <ul className="tag mb0 ">
                        <li className="list-inline-item">
                          <a href="#">#{item.Id_property}</a>
                        </li>
                        <li className="list-inline-item  me-4 ">
                          <a href="#">{item.Property_for}</a>
                        </li>
                      </ul>

                      <Link
                        legacyBehavior
                        href={`/singleProperty/${item.Id_property}`}
                      >
                        <a className="fp_price">
                          {item.Property_for === "Rent"
                            ? `${item.Price} ${item.Price_ex}/month `
                            : `${item.Price} ${item.Price_ex}`}
                        </a>
                      </Link>
                    </div>
                  </div>
                </a>
              </Link>
              <div className="details">
                <div className="tc_content">
                  <p className="text-thm">{item.Property_for}</p>

                  <p>
                    <span className="flaticon-placeholder"></span>
                    {item.name}, {item.name2}
                  </p>

                  <ul className="row  ">
                    <li className="col-sm-6">
                      <Link
                        legacyBehavior
                        href={`/singleProperty/${item.Id_property}`}
                      >
                        <a className="text-dark">
                          <i className="fa fa-home "></i>
                          {item.Surface_area}sqm<sup>2</sup>
                        </a>
                      </Link>
                    </li>
                    <li className="col-sm-6">
                      <Link
                        legacyBehavior
                        href={`/singleProperty/${item.Id_property}`}
                      >
                        <a className="text-dark">
                          <i className="fa fa-bath"></i> {item.No_of_bathrooms}{" "}
                          bathrooms
                        </a>
                      </Link>
                    </li>
                    <li className="col-sm-6">
                      <Link
                        legacyBehavior
                        href={`/singleProperty/${item.Id_property}`}
                      >
                        <a className="text-dark">
                          <i className="fa fa-bed"></i> {item.No_of_bedrooms}{" "}
                          bedrooms{" "}
                        </a>
                      </Link>
                    </li>
                    <li className="col-sm-6">
                      <Link
                        legacyBehavior
                        href={`/singleProperty/${item.Id_property}`}
                      >
                        <a className="text-dark">
                          <i className="fa fa-eye"></i> {item.views}{" "}
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default FeaturedProperties;