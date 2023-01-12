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
          <Link legacyBehavior href="/rent/Apartment/Maadi">
            <a className="  d-block">
              {" "}
              <i class={`fa fa-caret-${direction}`}></i> {t("APRENTMAADI")}
            </a>
          </Link>
          <Link legacyBehavior href="/rent/Apartment/Maadi/Maadi-Sarayat">
            <a className=" d-block">
              {" "}
              <i class={`fa fa-caret-${direction}`}></i> {t("APRENTMAADISA")}
            </a>
          </Link>
          <Link legacyBehavior href="/rent/Apartment/Maadi/Maadi-Degla">
            <a className=" d-block">
              {" "}
              <i class={`fa fa-caret-${direction}`}></i> {t("APRENTMAADIDEGLA")}
            </a>
          </Link>
          <Link legacyBehavior href="/rent/Apartment/Katameya-Heights">
            <a className=" d-block">
              {" "}
              <i class={`fa fa-caret-${direction}`}></i> {t("APRENTKAT")}
            </a>
          </Link>
          <Link legacyBehavior href="/rent/Apartment/New-Cairo">
            <a className=" d-block">
              {" "}
              <i class={`fa fa-caret-${direction}`}></i> {t("APRENTNEWCAIRO")}
            </a>
          </Link>
          <Link legacyBehavior href="/rent/villa/Maadi">
            <a className="  d-block">
              {" "}
              <i class={`fa fa-caret-${direction}`}></i> {t("VILLARENTMAADI")}
            </a>
          </Link>
          <Link legacyBehavior href="/rent/villa/Maadi/Maadi-Sarayat">
            <a className=" d-block">
              {" "}
              <i class={`fa fa-caret-${direction}`}></i> {t("VILLARENTMAADISA")}
            </a>
          </Link>

          <Link legacyBehavior href="/rent/villa/Maadi/Maadi-Degla">
            <a className=" d-block">
              {" "}
              <i class={`fa fa-caret-${direction}`}></i>{" "}
              {t("VILLARENTMAADIDEGLA")}
            </a>
          </Link>
          <Link legacyBehavior href="/rent/villa/Katameya-Heights">
            <a className=" d-block">
              {" "}
              <i class={`fa fa-caret-${direction}`}></i> {t("VILLARENTKAT")}
            </a>
          </Link>

          <Link legacyBehavior href="/rent/villa/New-Cairo">
            <a className=" d-block">
              {" "}
              <i class={`fa fa-caret-${direction}`}></i>{" "}
              {t("VILLARENTNEWCAIRO")}
            </a>
          </Link>
        </div>

        <div className="col-xxs-6 col-sm-6  text-left p-2">
          <Link legacyBehavior href="/sale/Apartment/Maadi">
            <a className=" d-block">
              {" "}
              <i class={`fa fa-caret-${direction}`}></i> {t("APSALEMAADI")}
            </a>
          </Link>
          <Link legacyBehavior href="/sale/Apartment/Maadi/Maadi-Sarayat">
            <a className=" d-block">
              <i class={`fa fa-caret-${direction}`}></i> {t("APSALEMAADISA")}
            </a>
          </Link>
          <Link legacyBehavior href="/sale/Apartment/Maadi/Maadi-Degla">
            <a className=" d-block">
              <i class={`fa fa-caret-${direction}`}></i>
              {t("APSALEMAADIDEGLA")}
            </a>
          </Link>

          <Link legacyBehavior href="/rent/Ground-Floor/Maadi">
            <a className=" d-block">
              <i class={`fa fa-caret-${direction}`}></i>
              {t("GRRENTMAADI")}
            </a>
          </Link>
          <Link legacyBehavior href="/rent/Ground-Floor/Maadi/Maadi-Sarayat">
            <a className=" d-block">
              <i class={`fa fa-caret-${direction}`}></i> {t("GRRENTMAADISA")}
            </a>
          </Link>

          <Link legacyBehavior href="/rent/Ground-Floor/Maadi/Maadi-Degla">
            <a className=" d-block">
              <i class={`fa fa-caret-${direction}`}></i> {t("GRRENTMAADIDG")}
            </a>
          </Link>

          <Link legacyBehavior href="/rent/Ground-Floor/Katameya-Heights">
            <a className=" d-block">
              <i class={`fa fa-caret-${direction}`}></i> {t("GRRENTKATAMYA")}
            </a>
          </Link>

          <Link legacyBehavior href="/sale/villa/Maadi/Maadi-Degla">
            <a className=" d-block">
              <i class={`fa fa-caret-${direction}`}></i>{" "}
              {t("VILLASALEMAADIDEGLA")}{" "}
            </a>
          </Link>
          <Link legacyBehavior href="/sale/villa/New-Cairo">
            <a className=" d-block">
              <i class={`fa fa-caret-${direction}`}></i>{" "}
              {t("VILLASALENEWCAIRO")}
            </a>
          </Link>

          <Link legacyBehavior href="/rent/Penthouse/Maadi">
            <a className=" d-block">
              {" "}
              <i class={`fa fa-caret-${direction}`}></i> {t("PENTRENTMAADI")}
            </a>
          </Link>
        </div>
      </div>
      <div className="  border border-dark d-flex flex-column text-left p-4 my-2 ">
        <h4 className="py-2">
          {" "}
          <i className="fa fa-home"></i> {t("PRIMELOC")}
        </h4>
        <Link legacyBehavior href="/Maadi">
          <a className="  d-block">
            {" "}
            <i class={`fa fa-caret-${direction}`}></i> {t("MAADI")}
          </a>
        </Link>
        <Link legacyBehavior href="/Maadi/Maadi-Sarayat">
          <a className=" d-block">
            {" "}
            <i class={`fa fa-caret-${direction}`}></i> {t("MAADISARAYAT")}
          </a>
        </Link>
        <Link legacyBehavior href="/Maadi/Maadi-Degla">
          <a className=" d-block">
            {" "}
            <i class={`fa fa-caret-${direction}`}></i> {t("MAADIDEGLA")}
          </a>
        </Link>
        <Link legacyBehavior href="/Katameya-Heights">
          <a className=" d-block">
            {" "}
            <i class={`fa fa-caret-${direction}`}></i> {t("KATAMYA")}
          </a>
        </Link>
        <Link legacyBehavior href="/New-Cairo">
          <a className=" d-block">
            {" "}
            <i class={`fa fa-caret-${direction}`}></i> {t("NEWCAIRO")}
          </a>
        </Link>
      </div>
    </div>
  );
};

export default FindProperties;
