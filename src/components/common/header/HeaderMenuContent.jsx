import Link from "next/link";
import { useRouter } from "next/router";

const HeaderMenuContent = ({ float = "" }) => {
  const route = useRouter();

  const home = [
    {
      id: 1,
      name: "Home",
      routerPath: "/",
    },
  ];

  const listing = [
    {
      id: 1,
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
    { id: 1, name: "About Us", routerPath: "/about-us" },
    { id: 2, name: "Gallery", routerPath: "/gallery" },
    { id: 3, name: "Faq", routerPath: "/faq" },
    { id: 4, name: "LogIn", routerPath: "/login" },
    { id: 5, name: "Compare", routerPath: "/compare" },
    { id: 6, name: "Membership", routerPath: "/membership" },

    { id: 7, name: "Register", routerPath: "/register" },
    { id: 8, name: "Service", routerPath: "/service" },
    { id: 9, name: "404 Page", routerPath: "/404" },
    { id: 10, name: "Terms & Conditions", routerPath: "/terms" },
  ];

  return (
    <ul
      id="respMenu"
      className="ace-responsive-menu text-end d-lg-block d-none"
      data-menu-style="horizontal"
    >
      <li>
        <Link legacyBehavior href="/" className="dropitem">
          <a
            className={
              home.some((page) => page.routerPath === route.pathname)
                ? "ui-active"
                : undefined
            }
          >
            <span className="title  ">Home</span>
          </a>
          {/* <!-- Level Two--> */}
        </Link>
      </li>
      {/* End .dropitem */}
      <li>
        <Link           href="/AllProperties" >
        <a
          className={
            listing.some((page) => page.routerPath === route.pathname)
              ? "ui-active"
              : undefined
          }
        >
          <span className="title">All properties</span>
        </a>
        </Link>
        {/* <!-- Level Two--> */}
      </li>

      {/* End .dropitem */}

      {/* End .dropitem */}

      {/*  <li className="dropitem">
        <a
          href="#"
          className={
            pages.some((page) => page.routerPath === route.pathname)
              ? "ui-active"
              : undefined
          }
        >
          <span className="title">Pages</span>
          <span className="arrow"></span>
        </a>
        <ul className="sub-menu ">
          {pages.map((item) => (
            <li key={item.id}>
              <Link legacyBehavior  href={item.routerPath}>
                <a
                  className={
                    route.pathname === item.routerPath ? "ui-active" : undefined
                  }
                >
                  {item.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </li> */}
      {/* End .dropitem */}

      {/*  <li className="dropitem">
        <a
          href="#"
          className={
            blog.some(
              (page) =>
                page.routerPath === route.pathname ||
                page.routerPath + "/[id]" === route.pathname
            )
              ? "ui-active"
              : undefined
          }
        >
          <span className="title">Blog</span>
          <span className="arrow"></span>
        </a>
        <ul className="sub-menu ">
          {blog.map((item) => (
            <li key={item.id}>
              <Link legacyBehavior  href={item.routerPath}>
                <a
                  className={
                    route.pathname === item.routerPath ||
                    item.routerPath + "/[id]" === route.pathname
                      ? "ui-active"
                      : undefined
                  }
                >
                  {item.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </li> */}
      {/* End .dropitem */}

      <li className="last">
        <Link legacyBehavior href="/contact">
          <a
            className={route.pathname === "/contact" ? "ui-active" : undefined}
          >
            Contact
          </a>
        </Link>
      </li>
      {/* End .dropitem */}

      <li className={`list-inline-item list_s ${float}`}>
        <a
          href="#"
          className="btn flaticon-user"
          data-bs-toggle="modal"
          data-bs-target=".bd-example-modal-lg"
        >
          <span className="dn-lg">Login/Register</span>
        </a>
      </li>
      {/* End .dropitem */}

      <li className={`list-inline-item add_listing ${float}`}>
        <Link legacyBehavior href="/create-listing">
          <a>
            <span className="flaticon-plus"></span>
            <span className="dn-lg"> Create Listing</span>
          </a>
        </Link>
      </li>
      {/* End .dropitem */}
    </ul>
  );
};

export default HeaderMenuContent;
