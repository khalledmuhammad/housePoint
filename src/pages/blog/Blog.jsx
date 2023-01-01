import Link from "next/link";
import { useState } from "react";
import parse from 'html-react-parser';
import { useRouter } from "next/router";


const Blog = ({data}) => {
  const [blogContent , setBlogContent] = useState(data)
  const router = useRouter()

  return (
    <>
      {blogContent && blogContent.map((item) => (
        <div className="col-lg-4 col-md-6" key={item.id}>
          <div className="for_blog feat_property">
            <div className="thumb">
            <h4 className="mb15 text-center p-2 blog-text-header">
                  <Link legacyBehavior href={`blog/${router.locale === "ar" ? item.slug_ar : item.slug_en }`}>
                    <a className="text-white"> { router.locale === "ar" ? item.tit2 : item.tit1}</a>
                  </Link>
                </h4>
                <Link legacyBehavior href={`blog/${router.locale === "ar" ? item.slug_ar : item.slug_en }`}>
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
    </>
  );
};

export default Blog;
