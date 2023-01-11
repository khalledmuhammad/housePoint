import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import Slider from "react-slick";

const FeaturedProperties = ({ Properties }) => {
  const router = useRouter();
  const {t} = useTranslation()


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
    <div className="row">
        {Properties?.slice(0, 8).map((item) => (
          <div className="item col-lg-3 col-md-6  col-sm-6 col-xs-12" key={item.Id_property} dir={`${router.locale === "ar" ? "rtl" : ""}`}>
            <div className="feat_property home3">
              <h4 className="p-2 bgc-darkBrown">
              <Link legacyBehavior href={`/${item.Property_for === "Rent" ? "for-rent" : "for-sale"}/${router.locale === "ar" ?    item.type_en_slug  : item.type_en_slug }/${item.name.replace(" " , "-")}/${ item.subPropEn}/${router.locale === "ar" ?  item.slug_ar : item.slug_en}`}>

                  <a className="text-white">
                    {router.locale == "ar"
                      ? item.titlear /* .replace('-','') */
                      : item.Title}{" "}
                  </a>
                </Link>
              </h4>
              <Link legacyBehavior href={`/${item.Property_for === "Rent" ? "for-rent" : "for-sale"}/${router.locale === "ar" ?    item.type_en_slug  : item.type_en_slug }/${item.name.replace(" " , "-")}/${ item.subPropEn}/${router.locale === "ar" ?  item.slug_ar : item.slug_en}`}>
                <a>
                  <div className="thumb">
                    <img
                      className="img-whp"
                      src={`https://housepointegypt.com/thumbs/${item.file_image}`}
                      alt="fp1.jpg"
                    />
                    <div className="thmb_cntnt">
                      <ul className="tag mb0 ">
                        <li className="list-inline-item">
                          <a href="#">#{item.Id_property}</a>
                        </li>
                        <li className="list-inline-item  me-4 ">
                          <a href="#">
                            {router.locale == "ar"
                              ? item.Property_for === "Rent"
                                ? "للايجار"
                                : "للبيع"
                              : item.Property_for}
                          </a>
                        </li>
                      </ul>

                      <Link legacyBehavior href={`/${item.Property_for === "Rent" ? "for-rent" : "for-sale"}/${router.locale === "ar" ?    item.type_en_slug  : item.type_en_slug }/${item.name.replace(" " , "-")}/${ item.subPropEn}/${router.locale === "ar" ?  item.slug_ar : item.slug_en}`}>

                        <a className="fp_price">
                        { router.locale === "ar"  ? `${item.Price} ${item.Price_ex === "EGP" ? "جم" : "دولار" } `
                            : `${item.Price} ${item.Price_ex}/month `
                            }
                        </a>
                      </Link>
                    </div>
                  </div>
                </a>
              </Link>
              <div className="details">
                <div className="tc_content">
                  <p className="text-thm">
                    {router.locale == "ar"
                      ? item.Property_for === "Rent"
                        ? "للايجار"
                        : "للبيع"
                      : item.Property_for}
                  </p>

                  <p>
                    <span className="flaticon-placeholder"></span>
                    {router.locale == "ar"
                      ? `${item.namear} , ${item.name2ar}`
                      : `  ${item.name} ,${item.name2} `}
                  </p>

                  <ul className="d-flex justify-content-between">
                    <li className="col-sm-6">
                    <Link legacyBehavior href={`/${item.Property_for === "Rent" ? "for-rent" : "for-sale"}/${router.locale === "ar" ?    item.type_en_slug  : item.type_en_slug }/${item.name.replace(" " , "-")}/${ item.subPropEn}/${router.locale === "ar" ?  item.slug_ar : item.slug_en}`}>

                        <a className="text-dark">
                          <i className="fa fa-home "></i>
                          {item.Surface_area}sqm<sup>2</sup>
                        </a>
                      </Link>
                    </li>
                    <li className="col-sm-6">
                    <Link legacyBehavior href={`/${item.Property_for === "Rent" ? "for-rent" : "for-sale"}/${router.locale === "ar" ?    item.type_en_slug  : item.type_en_slug }/${item.name.replace(" " , "-")}/${ item.subPropEn}/${router.locale === "ar" ?  item.slug_ar : item.slug_en}`}>

                        <a className="text-dark">
                          <i className="fa fa-bath"></i> {item.No_of_bathrooms}{" "}
                          {t("BEDS")}
                        </a>
                      </Link>
                    </li>
                    </ul>
                    <ul className="d-flex justify-content-between">

                    <li className="col-sm-6">
                                    <Link legacyBehavior href={`/${item.Property_for === "Rent" ? "for-rent" : "for-sale"}/${router.locale === "ar" ?    item.type_en_slug  : item.type_en_slug }/${item.name.replace(" " , "-")}/${ item.subPropEn}/${router.locale === "ar" ?  item.slug_ar : item.slug_en}`}>

                        <a className="text-dark">
                          <i className="fa fa-bed"></i> {item.No_of_bedrooms}{" "}
                         {t("BATHS")}
                        </a>
                      </Link>
                    </li>
                    <li className="col-sm-6">
                                    <Link legacyBehavior href={`/${item.Property_for === "Rent" ? "for-rent" : "for-sale"}/${router.locale === "ar" ?    item.type_en_slug  : item.type_en_slug }/${item.name.replace(" " , "-")}/${ item.subPropEn}/${router.locale === "ar" ?  item.slug_ar : item.slug_en}`}>

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
    </div>
  );
};

export default FeaturedProperties;
