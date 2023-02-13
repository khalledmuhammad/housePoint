import { useEffect, useState } from "react";
import HeaderMenuContent from "../../components/common/header/HeaderMenuContent";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const router = useRouter();

  const { t } = useTranslation("");

  useEffect(() => {
    let lang = router.locale == "ar" ? "ar" : "en";
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
      className={`header-nav menu_style_home_one  navbar-scrolltofixed stricky main-menu  ${
        navbar ? "stricky-fixed " : "stricky-fixed"
      }`}
    >
      <div className="container-fluid p0">
        {router.locale == "ar" ? (
          <>
            {/* <!-- Ace Responsive Menu --> */}

            <Link legacyBehavior href="/">
              <a className="navbar_brand float-end dn-smd">
                <img
                  className="logo1 img-fluid"
                  src="/assets/images/hPLogo.png"
                  alt="hPLogo.png"
                  width="150px"
                />
                <img
                  className="logo2 img-fluid"
                  src="/assets/images/hPLogo.png"
                  alt="hPLogo.png"
                  width="150px"

                />
              </a>
            </Link>
            {/* site logo brand */}

            <nav className="float-start" dir="rtl">
              <HeaderMenuContent />
            </nav>
            {/* End .navbar */}
          </>
        ) : (
          <>
            {/* <!-- Ace Responsive Menu --> */}

            <Link legacyBehavior href="/">
              <a className="navbar_brand float-start dn-smd">
                <img
                  className="logo1 img-fluid"
                  src="/assets/images/hPLogo.png"
                  alt="hPLogo.png"
                  width="150px"
                />
                <img
                  className="logo2 img-fluid"
                  src="/assets/images/hPLogo.png"
                  alt="hPLogo.png"
                  width="150px"
                />
              </a>
            </Link>
            {/* site logo brand */}

            <nav>
              <HeaderMenuContent />
            </nav>
            {/* End .navbar */}
          </>
        )}
      </div>
    </header>
    // {/* <!-- /.theme-main-menu --> */}
  );
};

export default Header;
