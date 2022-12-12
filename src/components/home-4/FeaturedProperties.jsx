import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import Slider from "react-slick";

const FeaturedProperties = () => {
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
  const [properties, setproperties] = useState([]);
  const [image , setImage] = useState()
 
  useEffect(() => {
    async function getPageData() {
      const apiUrlEndpoint = `http://localhost:5000/api/`;
      const { data } = await axios.get(apiUrlEndpoint);
     console.log(data)
     setproperties(data)
    }
    getPageData();
    async function getImageData() {
      const apiUrlEndpoint = `http://localhost:5000/api/image/${image}`;
      const { data } = await axios.get(apiUrlEndpoint);
     console.log(data)
     setImage(data.file_image)
    }
    getImageData()

  }, []);

  
  return (
    <>
      <Slider {...settings} arrows={false}>
        {properties?.slice(0, 12).map((item) => (
          <div className="item" key={item.Id_property}>
            <div className="feat_property home3">
              <div className="thumb">
                <img className="img-whp" src={item.img} alt="fp1.jpg" />
                <div className="thmb_cntnt">
                  <ul className="tag mb0 ">
                    <li className="list-inline-item">
                      <a href="#">#{item.Id_property}</a>
                    </li>
                    <li className="list-inline-item  me-4 ">
                      <a href="#">{item.Property_for}</a>
                    </li>
                  </ul>

                  <Link href={`/singleProperty/${item.Id_property}`}>
                    <a className="fp_price">
                      {item.Price_ex} {item.Price}
                    </a>
                  </Link>
                </div>
              </div>
              <div className="details">
                <div className="tc_content">
                  <p className="text-thm">{item.Property_for}</p>
                  <h4>
                    <Link href={`/singleProperty/${item.Id_property}`}>
                      <a>{item.Title}</a>
                    </Link>
                  </h4>
                  <p>
                    <span className="flaticon-placeholder"></span>
                    {item.name}, {item.name2}
                  </p>

                  {/*     <ul className="prop_details mb0">
                    {item.itemDetails.map((val, i) => (
                      <li className="list-inline-item" key={i}>
                        <a href="#">
                          {val.name}: {val.number}
                        </a>
                      </li>
                    ))}
                  </ul> */}
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
