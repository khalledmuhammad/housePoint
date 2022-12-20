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

const home = [
  {
    name: "Home",
    routerPath: "/",
  },
];

const listing = [
  {
    name: "All properties",
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
  {
    id: 2,
    title: "Listing Single",
    items: [
      {
        name: "Single V1",
        routerPath: "/singleProperty",
      },
      {
        name: "Single V2",
        routerPath: "/listing-details-v2",
      },
      {
        name: "Single V3",
        routerPath: "/listing-details-v3",
      },
      {
        name: "Single V4",
        routerPath: "/listing-details-v4",
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

const pages = [
  {
    name: "About Us",
    routerPath: "/about-us",
  },
  {
    name: "Gallery",
    routerPath: "/gallery",
  },
  {
    name: "Faq",
    routerPath: "/faq",
  },
  {
    name: "LogIn",
    routerPath: "/login",
  },
  { name: "Compare", routerPath: "/compare" },
  { name: "Membership", routerPath: "/membership" },

  {
    name: "Register",
    routerPath: "/register",
  },
  {
    name: "Service",
    routerPath: "/service",
  },
  {
    name: "404 Page",
    routerPath: "/404",
  },
  {
    name: "Terms & Conditions",
    routerPath: "/terms",
  },
];

const MobileMenuContent = () => {
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
              <span className="brand-text">FindHouse</span>
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
                  {val.name}
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
                  {val.name}
                </a>
              </Link>
            </MenuItem>
          ))}

          {/* End Pages Listing */}
          {/* 
          <SubMenu
            title="Property"
            className={
              property.some((parent) => {
                return parent.items.some(
                  (page) =>
                    page.routerPath === route.pathname ||
                    page.routerPath + "/[id]" === route.pathname
                );
              })
                ? "parent-menu-active"
                : undefined
            }
          >
            {property.map((item) => (
              <SubMenu
                title={item.title}
                className={
                  item.items.some(
                    (page) =>
                      page.routerPath === route.pathname ||
                      page.routerPath + "/[id]" === route.pathname
                  )
                    ? "ui-active plus alt"
                    : "plus alt"
                }
                key={item.id}
              >
                {item.items.map((val, i) => (
                  <MenuItem key={i}>
                    <Link legacyBehavior  href={val.routerPath}>
                      <a
                        className={
                          route.pathname === val.routerPath ||
                          val.routerPath + "/[id]" === route.pathname
                            ? "ui-active"
                            : undefined
                        }
                      >
                        {val.name}
                      </a>
                    </Link>
                  </MenuItem>
                ))}
              </SubMenu>
            ))}
          </SubMenu> */}
          {/* End Pages Property */}

        {/*   <SubMenu
            title="Blog"
            className={
              blog.some(
                (page) =>
                  page.routerPath === route.pathname ||
                  page.routerPath + "/[id]" === route.pathname
              )
                ? "parent-menu-active"
                : undefined
            }
          >
            {blog.map((val, i) => (
              <MenuItem key={i}>
                <Link legacyBehavior href={val.routerPath}>
                  <a
                    className={
                      route.pathname === val.routerPath ||
                      val.routerPath + "/[id]" === route.pathname
                        ? "ui-active"
                        : undefined
                    }
                  >
                    {val.name}
                  </a>
                </Link>
              </MenuItem>
            ))}
          </SubMenu> */}
          {/* End pages Blog */}

          {/*   <SubMenu
            title="Pages"
            className={
              pages.some((page) => page.routerPath === route.pathname)
                ? "parent-menu-active"
                : undefined
            }
          >
            {pages.map((val, i) => (
              <MenuItem key={i}>
                <Link legacyBehavior  href={val.routerPath}>
                  <a
                    className={
                      route.pathname === val.routerPath
                        ? "ui-active"
                        : undefined
                    }
                  >
                    {val.name}
                  </a>
                </Link>
              </MenuItem>
            ))}
          </SubMenu> */}
          {/* End pages Pages */}

          <MenuItem>
            <Link legacyBehavior href="/contact">
              <a
                className={
                  route.pathname === "/contact" ? "ui-active" : undefined
                }
              >
                Contact
              </a>
            </Link>
          </MenuItem>

          <MenuItem>
            <Link legacyBehavior href="/login">
              <a
                className={
                  route.pathname === "/login" ? "ui-active" : undefined
                }
              >
                <span className="flaticon-user"></span> Login
              </a>
            </Link>
          </MenuItem>

          <MenuItem>
            <Link legacyBehavior href="/register">
              <a
                className={
                  route.pathname === "/register" ? "ui-active" : undefined
                }
              >
                <span className="flaticon-edit"></span> Register
              </a>
            </Link>
          </MenuItem>
        </Menu>
      </SidebarContent>

      <SidebarFooter>
        <Link legacyBehavior href="/create-listing">
          <a className="btn btn-block btn-lg btn-thm circle">
            <span className="flaticon-plus"></span> Create Listing
          </a>
        </Link>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default MobileMenuContent;
