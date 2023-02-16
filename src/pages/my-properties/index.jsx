import Header from "../../components/common/header/dashboard/Header";
import SidebarMenu from "../../components/common/header/dashboard/SidebarMenu";
import MobileMenu from "../../components/common/header/MobileMenu";
import TableData from "./TableData";
import SearchBox from "./SearchBox";
import Router from "next/router";
import { useEffect } from "react";
import axios from "axios";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useSelector } from "react-redux";

const Index = ({ data }) => {
  useEffect(() => {
    if (localStorage.getItem("token")) {
    } else {
      Router.push("/login");
    }
  }, []);

  const isAuthenticated = useSelector((state) => state.agent.signedIn);

  useEffect(() => {
    if (!isAuthenticated) {
      Router.push("/login");
    }
  }, [isAuthenticated]);
  if (isAuthenticated) 
{  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header  />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      <div className="dashboard_sidebar_menu">
        <div
          className="offcanvas offcanvas-dashboard offcanvas-start"
          tabIndex="-1"
          id="DashboardOffcanvasMenu"
          data-bs-scroll="true"
        >
          <SidebarMenu />
        </div>
      </div>
      {/* End sidebar_menu */}

      {/* <!-- Our Dashbord --> */}
      <section className="our-dashbord dashbord bgc-f7 pb50">
        <div className="container-fluid ovh">
          <div className="row">
            <div className="col-lg-12 maxw100flex-992">
              <div className="row">
                {/* Start Dashboard Navigation */}
                <div className="col-lg-12">
                  <div className="dashboard_navigationbar dn db-1024">
                    <div className="dropdown">
                      <button
                        className="dropbtn"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#DashboardOffcanvasMenu"
                        aria-controls="DashboardOffcanvasMenu"
                      >
                        <i className="fa fa-bars pr10"></i> Dashboard Navigation
                      </button>
                    </div>
                  </div>
                </div>
                {/* End Dashboard Navigation */}

                <div className="col-lg-4 col-xl-4 mb10">
                  <div className="breadcrumb_content style2 mb30-991">
                    <h2 className="breadcrumb_title">My Properties</h2>
                  </div>
                </div>
                {/* End .col */}

                <div className="col-lg-8 col-xl-8">
                  <div className="candidate_revew_select style2 text-end mb30-991">
                    <ul className="mb0">
                      <li className="list-inline-item">
                        <div className="candidate_revew_search_box course fn-520">
                          <SearchBox />
                        </div>
                      </li>
                      {/* End li */}
                      {/* End li */}
                    </ul>
                  </div>
                </div>
                {/* End .col */}

                <div className="col-lg-12">
                  <div className="my_dashboard_review mb40">
                    <div className="property_table">
                      <div className="table-responsive mt0">
                        <TableData data={data} />
                      </div>
                      {/* End .table-responsive */}

                
                    </div>
                    {/* End .property_table */}
                  </div>
                </div>
                {/* End .col */}
              </div>
              {/* End .row */}

              <div className="row mt50">
                <div className="col-lg-12">
                  <div className="copyright-widget text-center">
                    <p>© 2020 Find House. Made with love.</p>
                  </div>
                </div>
              </div>
              {/* End .row */}
            </div>
            {/* End .col */}
          </div>
        </div>
      </section>
    </>
  );}
};

export async function getServerSideProps({ locale }) {
  const apiUrlEndpoint = `${process.env.NEXT_PUBLIC_API}/AllProp`;
  const { data } = await axios.get(apiUrlEndpoint);
  return {
    props: {
      data: data,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default Index;
