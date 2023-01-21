import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import Link from "next/link";

const PropertyDetails = ({ Properties }) => {
  const { t } = useTranslation();
  const router = useRouter();
  if (Properties) {
    return (
      <>
        <div className="col-md-6 col-lg-6 col-xl-4">
          <ul className="list-inline-item">
            <li>
              <p>
                id: <span>{Properties.Id_property}</span>
              </p>
            </li>
            <li>
              <p>
                {t("PRICE")} :{" "}
                <span>
                  {" "}
                  {Properties.Price} {Properties.Price_ex}{" "}
                </span>
              </p>
            </li>
            <li>
              <p>
                {t("PROPSIZE")} : <span>{Properties.Surface_area} Sq Ft</span>
              </p>
            </li>
          </ul>
        </div>
        {/* End .col */}

        <div className="col-md-6 col-lg-6 col-xl-4">
          <ul className="list-inline-item">
            <li>
              <p>
                {t("BEDS")} :{" "}
                <span>
                  {Properties.No_of_bedrooms ? Properties.No_of_bedrooms : 0}
                </span>
              </p>
            </li>
            <li>
              <p>
                {t("BATHS")} :{" "}
                <span>
                  {Properties.No_of_bathroom ? Properties.No_of_bathroom : 0}
                </span>
              </p>
            </li>
            <li>
              <p>
                {t("FURNISHED")} :{" "}
                <span>
                  {router.locale === "ar" ? Properties.ff_ar : Properties.ff_en}
                </span>
              </p>
            </li>
            <li>
              <p>
                {t("PROPFOR")} :{" "}
                <span>
                  {router.locale === "ar"
                    ? Properties.type_ar
                    : Properties.type_en}
                </span>
              </p>
            </li>
          </ul>
        </div>
        {/* End .col */}

        <div className="col-md-6 col-lg-6 col-xl-4">
          <ul className="list-inline-item">
            <li>
              <p>
                {t("PROPSTATUS")} : <span>{Properties.Property_for}</span>
              </p>
            </li>
            <li>
              <p>
                {t("PROPDATA")} : <span>{Properties.Date}</span>
              </p>
            </li>
          </ul>
        </div>

        <div className="Tags">
          <Link
            href={{
              pathname: "/Tag/[Slug]",
              query: {
                name: Properties.name,
              },
            }}
            as={`/Tag/${Properties.name.toLowerCase()}`}
          >
            <a>{Properties.name}</a>
          </Link>
          {/* ---------------------------------------------------- */}

          <Link
            href={{
              pathname: "/Tag/[Slug]",
              query: {
                type_en_slug: Properties.type_en_slug,
              },
            }}
            as={`/Tag/${Properties.type_en_slug.toLowerCase()}`}
          >
            <a>{Properties.type_en_slug}</a>
          </Link>
          {/* ---------------------------------------------------- */}
          <Link
            href={{
              pathname: "/Tag/[Slug]",
              query: {
                property_for: Properties.Property_for,
              },
            }}
            as={`/Tag/${Properties.Property_for.toLowerCase()}`}
          >
            <a>{Properties.Property_for}</a>
          </Link>
          {/* ---------------------------------------------------- */}

          <Link
            href={{
              pathname: "/Tag/[Slug]",
              query: {
                property_for: Properties.Property_for,
                name: Properties.name,
              },
            }}
            as={`/Tag/${Properties.Property_for.toLowerCase()}-in-${Properties.name.toLowerCase()}`}
          >
            <a>{Properties.Property_for + " in " + Properties.name}</a>
          </Link>
          {/* ---------------------------------------------------- */}

          <Link
            href={{
              pathname: "/Tag/[Slug]",
              query: {
                type_en_slug: Properties.type_en_slug,
                property_for: Properties.Property_for,
              },
            }}
            as={`/Tag/${Properties.type_en_slug.toLowerCase()}-for-${Properties.Property_for.toLowerCase()}`}
          >
            <a>{Properties.type_en_slug + " for " + Properties.Property_for}</a>
          </Link>
        </div>
      </>
    );
  } else {
    return <h1>...loading</h1>;
  }
};

export default PropertyDetails;
