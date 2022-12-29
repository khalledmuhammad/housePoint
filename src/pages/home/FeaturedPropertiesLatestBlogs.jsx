import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import parse from 'html-react-parser';


const FeaturedProperties = ({ Properties }) => {
  const router = useRouter();

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
        {Properties?.slice(0, 4).map((item) => (
             <div className="col-lg-3 col-md-6  col-sm-6 col-xs-12" key={item.id}>
             <div className="for_blog feat_property">
               <div className="thumb">
               <h4 className="mb15 text-center p-2 blog-text-header">
                     <Link legacyBehavior href={`/blog-details/${item.slidid}`}>
                       <a className="text-white"> { router.locale === "ar" ? item.tit2 : item.tit1}</a>
                     </Link>
                   </h4>
                 <Link legacyBehavior href={`/blog-details/${item.slidid}`}>
                   <a>
                     <img className="img-whp" src={`https://housepointegypt.com/imgs/${item.img}`} alt={item.img} />
                   </a>
                 </Link>
               </div>
               {/* End .thumb */}
   
               <div className="details">
                 <div className="tc_content">
                   
                   <ul className="bpg_meta mb10">
                     <li className="list-inline-item">
                       <a href="#">
                         <i className="flaticon-calendar"></i>
                       </a>
                     </li>
                     <li className="list-inline-item">
                       <a href="#">{item.postedDate}</a>
                     </li>
                   </ul>
                   <p>{parse(item.txt.slice(0, 120))}</p>
                 </div>
                 {/* End .tc_content */}
   
   
                 <div className="fp_footer">
                   <ul className="fp_meta float-start mb0">
                   </ul>
                   <a className="fp_pdate float-end text-thm" href="#">
                     Read More <span className="flaticon-next"></span>
                   </a>
                 </div>
                 {/* End fb_footer */}
               </div>
               {/* End .thumb */}
             </div>
           </div>
        ))}
    </div>
  );
};

export default FeaturedProperties;
