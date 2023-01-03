import { useRouter } from "next-translate-routes";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const FindProperties = () => {
  const { t } = useTranslation();
  const router = useRouter();
  return (
    <div
      className="d-md-flex p-3 gap-5 justify-content-center w-100 align-content-center"
      dir={router.locale === "ar" ? "rtl" : ""}
    >
      <div className="  border border-dark d-flex flex-column text-center p-4 my-2 ">
        <h4 className="py-2">
          {" "}
          <i className="fa fa-home"></i> {t("PRIMELOC")}
        </h4>
        <Link legacyBehavior href="/Maadi">
          <a className="  d-block">{t("MAADI")}</a>
        </Link>
        <Link legacyBehavior href="/Maadi/Maadi-Sarayat">
          <a className=" d-block">{t("MAADISARAYAT")}</a>
        </Link>
        <Link legacyBehavior href="/Maadi/Maadi-Degla">
          <a className=" d-block">{t("MAADIDEGLA")}</a>
        </Link>
        <Link legacyBehavior href="/Katameya-Heights">
          <a className=" d-block">{t("KATAMYA")}</a>
        </Link>
        <Link legacyBehavior href="/New-Cairo">
          <a className=" d-block">{t("NEWCAIRO")}</a>
        </Link>
      </div>

      <div className="text-left border border-dark  row my-2 p-4 ">
        <h4 className="py-2 text-center">
          <i className="fa fa-search"></i> {t("MOSTSEARCHES")}
        </h4>

        <div className="col-sm-6 text-center">
          <Link legacyBehavior href="/for-rent/Apartment/Maadi">
            <a className="  d-block">{t("APRENTMAADI")}</a>
          </Link>
          <Link legacyBehavior href="/for-rent/Apartment/Maadi/Maadi-Sarayat">
            <a className=" d-block">{t("APRENTMAADISA")}</a>
          </Link>
          <Link legacyBehavior href="/for-rent/Apartment/Maadi/Maadi-Degla">
            <a className=" d-block">{t("APRENTMAADIDEGLA")}</a>
          </Link>
          <Link legacyBehavior href="/for-rent/Apartment/Katameya">
            <a className=" d-block">{t("APRENTKAT")}</a>
          </Link>
          <Link legacyBehavior href="/for-rent/Apartment/New-Cairo">
            <a className=" d-block">{t("APRENTNEWCAIRO")}</a>
          </Link>
          <Link legacyBehavior href="/for-rent/villa/Maadi">
            <a className="  d-block">{t("VILLARENTMAADI")}</a>
          </Link>
          <Link legacyBehavior href="/for-rent/villa/Maadi/Maadi-Sarayat">
            <a className=" d-block">{t("VILLARENTMAADISA")}</a>
          </Link>

          <Link legacyBehavior href="/for-rent/villa/Katameya">
            <a className=" d-block">{t("VILLARENTMAADIDEGLA")}</a>
          </Link>
          <Link legacyBehavior href="/for-rent/villa/Katameya">
            <a className=" d-block">{t("VILLARENTKAT")}</a>
          </Link>

          <Link legacyBehavior href="/for-rent/villa/New-Cairo">
            <a className=" d-block">{t("VILLARENTNEWCAIRO")}</a>
          </Link>
        </div>

        <div className="col-sm-6 text-center p-2">
          <Link legacyBehavior href="/for-sale/Apartment/Maadi">
            <a className=" d-block">{t("APSALEMAADI")}</a>
          </Link>
          <Link legacyBehavior href="/for-sale/Apartment/Maadi/Maadi-Sarayat">
            <a className=" d-block">{t("APSALEMAADISA")}</a>
          </Link>
          <Link legacyBehavior href="/for-sale/Apartment/Katameya">
            <a className=" d-block">{t("APSALEMAADIDEGLA")}</a>
          </Link>

          <Link legacyBehavior href="/for-rent/Ground-Floor/Maadi">
            <a className=" d-block">{t("GRRENTMAADI")}</a>
          </Link>
          <Link
            legacyBehavior
            href="/for-rent/Ground-Floor/Maadi/Maadi-Sarayat"
          >
            <a className=" d-block">{t("GRRENTMAADISA")}</a>
          </Link>

          <Link legacyBehavior href="/for-rent/Ground-Floor/Maadi/Maadi-Degla">
            <a className=" d-block"> {t("GRRENTMAADIDG")}</a>
          </Link>

          <Link legacyBehavior href="/for-rent/Ground-Floor/Katameya">
            <a className=" d-block"> {t("GRRENTKATAMYA")}</a>
          </Link>

          <Link legacyBehavior href="/for-sale/villa/Maadi-Degla">
            <a className=" d-block"> {t("VILLASALEMAADIDEGLA")} </a>
          </Link>
          <Link legacyBehavior href="/for-sale/villa/New-Cairo">
            <a className=" d-block">{t("VILLASALENEWCAIRO")}</a>
          </Link>

          <Link legacyBehavior href="/for-rent/Penthouse/Maadi">
            <a className=" d-block">{t("PENTRENTMAADI")}</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FindProperties;
