import MobileMenu from "./common/header/MobileMenu";

import Header from "../pages/home/Header";

import CopyrightFooter from "./common/footer/CopyrightFooter";
import Footer from "./common/footer/Footer";
import PopupSignInUp from "./common/PopupSignInUp";
import React from 'react'

const Layout = ({children}) => {
  return (
    <>
          {/* <!-- Main Header Nav --> */}
          <Header />

{/* <!--  Mobile Menu --> */}
<MobileMenu />

{/* <!-- Modal --> */}
<PopupSignInUp />
    
    {children}

       {/* <!-- Our Footer --> */}
       <section className="footer_one">
        <div className="container">
          <div className="row">
            <Footer />
          </div>
        </div>
      </section>

      {/* <!-- Our Footer Bottom Area --> */}
      <section className="footer_middle_area pt40 pb40">
        <div className="container">
          <CopyrightFooter />
        </div>
      </section>
    
    </>
  )
}

export default Layout