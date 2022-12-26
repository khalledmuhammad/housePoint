import "react-pro-sidebar/dist/css/styles.css";
import {
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  Menu,
  MenuItem,
  SubMenu,
  SidebarContent,
} from "react-pro-sidebar";
import Link from "next/link";
import { useRouter } from "next/router";
import LocaleSwitcher from "../LocalSwitcher";
import { useTranslation } from "react-i18next";

const home = [
  {
    name: "HOME",
    routerPath: "/",
  },
];

const listing = [
  {
    name: "PROPERTIESALL",
    routerPath: "/AllProperties",
  },
];

const property = [
  {
    id: 1,
    title: "User Admin",
    items: [
      {
        name: "Dashboard",
        routerPath: "/my-dashboard",
      },
      {
        name: "My Properties",
        routerPath: "/my-properties",
      },
      {
        name: "My Message",
        routerPath: "/my-message",
      },
      {
        name: "My Review",
        routerPath: "/my-review",
      },
      {
        name: "My Favourites",
        routerPath: "/my-favourites",
      },
      {
        name: "My Profile",
        routerPath: "/my-profile",
      },
      {
        name: "My Package",
        routerPath: "/my-package",
      },
      {
        name: "My Saved Search",
        routerPath: "/my-saved-search",
      },
      {
        name: "Add Property",
        routerPath: "/create-listing",
      },
    ],
  },
 
];

const blog = [
  { id: 1, name: "Blog List 1", routerPath: "/blog-list-1" },
  { id: 2, name: "Blog List 2", routerPath: "/blog-list-2" },
  { id: 3, name: "Blog List 3", routerPath: "/blog-list-3" },
  {
    id: 4,
    name: "Blog Details",
    routerPath: "/blog-details",
  },
];



const MobileMenuContent = () => {
  const {t} = useTranslation()
  const route = useRouter();
  return (
    <ProSidebar>
      <SidebarHeader>
        <div className="sidebar-header">
          <Link legacyBehavior href="/">
            <a className="sidebar-header-inner">
              <img
                className="nav_logo_img img-fluid mt20"
                src="/assets/images/header-logo2.png"
                alt="header-logo.png"
              />
              <span className="brand-text">House Point</span>
            </a>
          </Link>
          {/* End .logo */}

          <div
            className="fix-icon"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <span className="flaticon-close"></span>
          </div>
          {/* Mobile Menu close icon */}
        </div>

        {/* End logo */}
      </SidebarHeader>

      <SidebarContent>
        <Menu>
          {home.map((val, i) => (
            <MenuItem key={i} active={true}>
              <Link legacyBehavior href={val.routerPath}>
                <a
                  className={
                    val.routerPath === route.pathname ? "ui-active" : undefined
                  }
                >
                  {t(`${val.name}`)}
                </a>
              </Link>
            </MenuItem>
          ))}
          {/* End Home Home */}

          {listing.map((val, i) => (
            <MenuItem key={i}>
              <Link legacyBehavior href={val.routerPath}>
                <a
                  className={
                    route.pathname === val.routerPath ? "ui-active" : undefined
                  }
                >
                  {t(`${val.name}`)}
                </a>
              </Link>
            </MenuItem>
          ))}

        

          <MenuItem>
            <Link legacyBehavior href="/contact">
              <a
                className={
                  route.pathname === "/contact" ? "ui-active" : undefined
                }
              >
                  {t(`CONTACT`)}
              </a>
            </Link>
          </MenuItem>

          <MenuItem>
          <LocaleSwitcher />

          </MenuItem>

        
        </Menu>
      </SidebarContent>

    {/*   <SidebarFooter>
        <Link legacyBehavior href="/create-listing">
          <a className="btn btn-block btn-lg btn-thm circle">
            <span className="flaticon-plus"></span> Create Listing
          </a>
        </Link>
      </SidebarFooter> */}
    </ProSidebar>
  );
};

export default MobileMenuContent;
