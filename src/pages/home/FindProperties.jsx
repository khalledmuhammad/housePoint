import { useRouter } from "next-translate-routes";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const FindProperties = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const direction = router.locale === "ar" ? "left" : "right";
  return (
    <div
      className="d-md-flex p-3 gap-5 justify-content-center w-100 align-content-center"
      dir={router.locale === "ar" ? "rtl" : ""}
    >
      <div className="text-left border border-dark  row my-2 p-4 ">
        <h4 className="py-2 text-center">
          <i className="fa fa-search"></i> {t("MOSTSEARCHES")}
        </h4>

        <div className="col-xxs-6 col-sm-6 text-left p-2">
          <Link legacyBehavior href="/rent/apartments/maadi">
            <a className="  d-block">
              {" "}
              <i className={`fa fa-caret-${direction}`}></i> {t("APRENTMAADI")}
            </a>
          </Link>
          <Link legacyBehavior href="/rent/apartments/maadi/maadi-sarayat">
            <a className=" d-block">
              {" "}
              <i className={`fa fa-caret-${direction}`}></i>{" "}
              {t("APRENTMAADISA")}
            </a>
          </Link>
          <Link legacyBehavior href="/rent/apartments/maadi/maadi-degla">
            <a className=" d-block">
              {" "}
              <i className={`fa fa-caret-${direction}`}></i>{" "}
              {t("APRENTMAADIDEGLA")}
            </a>
          </Link>
          <Link legacyBehavior href="/rent/apartments/katameya-heights">
            <a className=" d-block">
              {" "}
              <i className={`fa fa-caret-${direction}`}></i> {t("APRENTKAT")}
            </a>
          </Link>
          <Link legacyBehavior href="/rent/apartments/new-cairo">
            <a className=" d-block">
              {" "}
              <i className={`fa fa-caret-${direction}`}></i>{" "}
              {t("APRENTNEWCAIRO")}
            </a>
          </Link>
          <Link legacyBehavior href="/rent/villas/maadi">
            <a className="  d-block">
              {" "}
              <i className={`fa fa-caret-${direction}`}></i>{" "}
              {t("VILLARENTMAADI")}
            </a>
          </Link>
          <Link legacyBehavior href="/rent/villas/maadi/maadi-sarayat">
            <a className=" d-block">
              {" "}
              <i className={`fa fa-caret-${direction}`}></i>{" "}
              {t("VILLARENTMAADISA")}
            </a>
          </Link>

          <Link legacyBehavior href="/rent/villas/maadi/maadi-degla">
            <a className=" d-block">
              {" "}
              <i className={`fa fa-caret-${direction}`}></i>{" "}
              {t("VILLARENTMAADIDEGLA")}
            </a>
          </Link>
          <Link legacyBehavior href="/rent/villas/katameya-heights">
            <a className=" d-block">
              {" "}
              <i className={`fa fa-caret-${direction}`}></i> {t("VILLARENTKAT")}
            </a>
          </Link>

          <Link legacyBehavior href="/rent/villas/new-cairo">
            <a className=" d-block">
              {" "}
              <i className={`fa fa-caret-${direction}`}></i>{" "}
              {t("VILLARENTNEWCAIRO")}
            </a>
          </Link>
        </div>

        <div className="col-xxs-6 col-sm-6  text-left p-2">
          <Link legacyBehavior href="/sale/apartments/maadi">
            <a className=" d-block">
              {" "}
              <i className={`fa fa-caret-${direction}`}></i> {t("APSALEMAADI")}
            </a>
          </Link>
          <Link legacyBehavior href="/sale/apartments/maadi/maadi-sarayat">
            <a className=" d-block">
              <i className={`fa fa-caret-${direction}`}></i>{" "}
              {t("APSALEMAADISA")}
            </a>
          </Link>
          <Link legacyBehavior href="/sale/apartments/maadi/maadi-degla">
            <a className=" d-block">
              <i className={`fa fa-caret-${direction}`}></i>
              {t("APSALEMAADIDEGLA")}
            </a>
          </Link>

          <Link legacyBehavior href="/rent/ground-floors/maadi">
            <a className=" d-block">
              <i className={`fa fa-caret-${direction}`}></i>
              {t("GRRENTMAADI")}
            </a>
          </Link>
          <Link legacyBehavior href="/rent/ground-floors/maadi/maadi-sarayat">
            <a className=" d-block">
              <i className={`fa fa-caret-${direction}`}></i>{" "}
              {t("GRRENTMAADISA")}
            </a>
          </Link>

          <Link legacyBehavior href="/rent/ground-floors/maadi/maadi-degla">
            <a className=" d-block">
              <i className={`fa fa-caret-${direction}`}></i>{" "}
              {t("GRRENTMAADIDG")}
            </a>
          </Link>

          <Link legacyBehavior href="/rent/ground-floors/katameya-heights">
            <a className=" d-block">
              <i className={`fa fa-caret-${direction}`}></i>{" "}
              {t("GRRENTKATAMYA")}
            </a>
          </Link>

          <Link legacyBehavior href="/sale/villas/maadi/maadi-degla">
            <a className=" d-block">
              <i className={`fa fa-caret-${direction}`}></i>{" "}
              {t("VILLASALEMAADIDEGLA")}{" "}
            </a>
          </Link>
          <Link legacyBehavior href="/sale/villas/new-cairo">
            <a className=" d-block">
              <i className={`fa fa-caret-${direction}`}></i>{" "}
              {t("VILLASALENEWCAIRO")}
            </a>
          </Link>

          <Link legacyBehavior href="/rent/penthouses/maadi">
            <a className=" d-block">
              {" "}
              <i className={`fa fa-caret-${direction}`}></i>{" "}
              {t("PENTRENTMAADI")}
            </a>
          </Link>
        </div>
      </div>
      <div className="  border border-dark d-flex flex-column text-left p-4 my-2 ">
        <h4 className="py-2">
          {" "}
          <i className="fa fa-home"></i> {t("PRIMELOC")}
        </h4>
        <Link legacyBehavior href="maadi">
          <a className="  d-block">
            {" "}
            <i className={`fa fa-caret-${direction}`}></i> {t("MAADI")}
          </a>
        </Link>
        <Link legacyBehavior href="maadi/maadi-sarayat">
          <a className=" d-block">
            {" "}
            <i className={`fa fa-caret-${direction}`}></i> {t("MAADISARAYAT")}
          </a>
        </Link>
        <Link legacyBehavior href="maadi/maadi-degla">
          <a className=" d-block">
            {" "}
            <i className={`fa fa-caret-${direction}`}></i> {t("MAADIDEGLA")}
          </a>
        </Link>
        <Link legacyBehavior href="katameya-heights">
          <a className=" d-block">
            {" "}
            <i className={`fa fa-caret-${direction}`}></i> {t("KATAMYA")}
          </a>
        </Link>
        <Link legacyBehavior href="new-cairo">
          <a className=" d-block">
            {" "}
            <i className={`fa fa-caret-${direction}`}></i> {t("NEWCAIRO")}
          </a>
        </Link>
      </div>
    </div>
  );
};

export default FindProperties;
