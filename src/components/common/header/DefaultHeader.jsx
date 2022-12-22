import { useEffect, useState } from "react";
import HeaderMenuContent from "./HeaderMenuContent";
import LocaleSwitcher from "../LocalSwitcher";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const router = useRouter();

  const { t } = useTranslation("");

  useEffect(() => {
    let dir = router.locale == "ar" ? "ltr" : "ltr";
    let lang = router.locale == "ar" ? "ar" : "en";
    document.querySelector("html").setAttribute("dir", dir);
    document.querySelector("html").setAttribute("lang", lang);
  }, [router.locale]);

  const changeBackground = () => {
    if (window.scrollY >= 95) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <header
      className={`header-nav menu_style_home_one style2 navbar-scrolltofixed stricky main-menu  ${
        navbar ? "stricky-fixed " : ""
      }`}
    >
      <div className="container-fluid p0">

        {
                  router.locale== "ar" ? 
                  <>
                   <Link legacyBehavior href="/">
          <a className="navbar_brand float-end dn-smd">
            <img
              className="logo1 img-fluid"
              src="/assets/images/header-logo2.png"
              alt="header-logo2.png"
            />
            <img
              className="logo2 img-fluid"
              src="/assets/images/header-logo2.png"
              alt="header-logo2.png"
            />
            <span>HousePoint</span>
          </a>
        </Link>
        <nav className="float-start" dir="rtl">
          <HeaderMenuContent dark={true} />
        </nav>
                  
                  </>
                  :
                  <>
                   <Link legacyBehavior href="/">
          <a className="navbar_brand float-start dn-smd">
            <img
              className="logo1 img-fluid"
              src="/assets/images/header-logo2.png"
              alt="header-logo2.png"
            />
            <img
              className="logo2 img-fluid"
              src="/assets/images/header-logo2.png"
              alt="header-logo2.png"
            />
            <span>HousePoint</span>
          </a>
        </Link>
        <nav>
          <HeaderMenuContent dark={true} />
        </nav>
                  </>

        }
       
        
      </div>
    </header>
    // {/* <!-- /.theme-main-menu --> */}
  );
};

export default Header;
