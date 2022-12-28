import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import LocaleSwitcher from "../LocalSwitcher";

const HeaderMenuContent = ({ float = "", dark }) => {
  const route = useRouter();
  const { t } = useTranslation("");

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
            <span className="title  ">{t("HOME")}</span>
          </a>
          {/* <!-- Level Two--> */}
        </Link>
      </li>
      {/* End .dropitem */}
      <li>
        <Link href="/AllProperties">
          <a
            className={
              listing.some((page) => page.routerPath === route.pathname)
                ? "ui-active"
                : undefined
            }
          >
            <span className="title">{t("PROPERTIESALL")}</span>
          </a>
        </Link>
        {/* <!-- Level Two--> */}
      </li>

      <li>
        <Link href="/for-rent">
          <a
            className={
              listing.some((page) => page.routerPath === route.pathname)
                ? "ui-active"
                : undefined
            }
          >
            <span className="title">{t("FORENT")}</span>
          </a>
        </Link>
        {/* <!-- Level Two--> */}
      </li>

      <li>
        <Link href="/for-sale">
          <a
            className={
              listing.some((page) => page.routerPath === route.pathname)
                ? "ui-active"
                : undefined
            }
          >
            <span className="title">{t("FORSALE")}</span>
          </a>
        </Link>
      </li>

      <li>
        <Link href="/blog">
          <a
            className={
              listing.some((page) => page.routerPath === route.pathname)
                ? "ui-active"
                : undefined
            }
          >
            <span className="title">{t("BLOGS")}</span>
          </a>
        </Link>
      </li>

    
    

      <li className="last">
        <Link legacyBehavior href="/contact">
          <a
            className={route.pathname === "/contact" ? "ui-active" : undefined}
          >
            {t("CONTACT")}
          </a>
        </Link>
      </li>

      <li className={`list-inline-item list_s ${float}`}>
        <LocaleSwitcher dark={dark} />
      </li>

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
