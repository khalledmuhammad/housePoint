import Link from "next/link";
import { useRouter } from "next/router";
import {
  isParentPageActive,
  isSinglePageActive,
} from "../../../../utils/daynamicNavigation";

const SidebarMenu = () => {
  const route = useRouter();

  const myProperties = [
    { id: 1, name: "My properties", route: "/my-properties" },
  ];
  const myBlogs = [{ id: 2, name: "My blogs", route: "/my-blogs" }];

  return (
    <>
      <ul className="sidebar-menu">
        <li className="sidebar_header header">
          <Link legacyBehavior href="/">
            <a>
              <img
                src="/assets/images/hPLogo.png"
                alt="hPLogo.png"
                width="100px"
              />
              <span>House Point</span>
            </a>
          </Link>
        </li>
        {/* End header */}

        <li className="title">
          <span>Main</span>
          <ul>
            <li
              className={`treeview ${
                isSinglePageActive("/my-dashboard", route.pathname)
                  ? "active"
                  : ""
              }`}
            >
              <Link legacyBehavior href="/my-dashboard">
                <a>
                  <i className="flaticon-layers"></i>
                  <span> Dashboard</span>
                </a>
              </Link>
            </li>
            <li
              className={`treeview ${
                isSinglePageActive("/my-message", route.pathname)
                  ? "active"
                  : ""
              }`}
            >
              <Link legacyBehavior href="/my-message">
                <a>
                  <i className="flaticon-envelope"></i>
                  <span> Message</span>
                </a>
              </Link>
            </li>
          </ul>
        </li>
        {/* End Main */}

        <li className="title">
          <span>Manage Listings</span>
          <ul>
            <li
              className={`treeview ${
                isParentPageActive(myProperties, route.pathname) ? "active" : ""
              }`}
            >
              <a data-bs-toggle="collapse" href="#my-property">
                <i className="flaticon-home"></i> <span>My Properties</span>
                <i className="fa fa-angle-down pull-right"></i>
              </a>
              <ul className="treeview-menu collapse" id="my-property">
                {myProperties.map((item) => (
                  <li key={item.id}>
                    <Link legacyBehavior href={item.route}>
                      <a>
                        <i className="fa fa-circle"></i> {item.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            {/* end properties */}
            <li
              className={`treeview ${
                isParentPageActive(myBlogs, route.pathname) ? "active" : ""
              }`}
            >
              <a data-bs-toggle="collapse" href="#my-blogs">
                <i className="flaticon-home"></i> <span>My Blogs</span>
                <i className="fa fa-angle-down pull-right"></i>
              </a>
              <ul className="treeview-menu collapse" id="my-blogs">
                {myBlogs.map((item) => (
                  <li key={item.id}>
                    <Link legacyBehavior href={item.route}>
                      <a>
                        <i className="fa fa-circle"></i> {item.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
};

export default SidebarMenu;
