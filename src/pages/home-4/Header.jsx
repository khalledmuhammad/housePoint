import { useEffect, useState } from "react";
import HeaderMenuContent from "../../components/common/header/HeaderMenuContent";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import LocaleSwitcher from "../../components/common/LocalSwitcher";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const router = useRouter();

  const { t } = useTranslation("");

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
        navbar ? "stricky-fixed " : ""
      }`}
    >
      <div className="container-fluid p0">
        {/* <!-- Ace Responsive Menu --> */}

        <Link legacyBehavior href="/">
          <a className="navbar_brand float-start dn-smd">
            <img
              className="logo1 img-fluid"
              src="/assets/images/header-logo.png"
              alt="header-logo.png"
            />
            <img
              className="logo2 img-fluid"
              src="/assets/images/header-logo2.png"
              alt="header-logo2.png"
            />
            <span>HousePoint</span>
            <LocaleSwitcher />

            
          </a>
        </Link>
        {/* site logo brand */}

        <nav>
          <HeaderMenuContent />


        </nav>
        {/* End .navbar */}
      </div>
    </header>
    // {/* <!-- /.theme-main-menu --> */}
  );
};

export default Header;
