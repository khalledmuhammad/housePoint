import Link from "next/link";
import { useTranslation } from "react-i18next";

const FindProperties = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="col-sm-6 col-lg-4 col-xl-4 text-left border border-dark p-3 ">
        <h4 className="py-2">{t("PRIMELOC")}</h4>
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

      <div className="col-sm-6 col-lg-6 col-xl-6 text-left border border-dark mx-5 p-3 row ">
        <h4 className="py-2 text-center">{t("MOSTSEARCHES")}</h4>
        <div className="col-sm-6">
          <Link legacyBehavior href="/for-rent/Apartment/Maadi">
            <a className="  d-block">apartment for rent maadi</a>
          </Link>
          <Link legacyBehavior href="/for-rent/Apartment/Maadi/Maadi-Sarayat">
            <a className=" d-block">apartment for rent maadi sarayat</a>
          </Link>
          <Link legacyBehavior href="/for-rent/Apartment/Maadi/Maadi-Degla">
            <a className=" d-block">apartment for rent maadi degla</a>
          </Link>
          <Link legacyBehavior href="/for-rent/Apartment/Katameya">
            <a className=" d-block">apartment for rent katamya</a>
          </Link>
          <Link legacyBehavior href="/for-rent/Apartment/New-Cairo">
            <a className=" d-block">apartment for rent new cairo</a>
          </Link>
          <Link legacyBehavior href="/for-sale/Apartment/Maadi">
            <a className=" d-block">apartment for sale maadi</a>
          </Link>
          <Link legacyBehavior href="/for-sale/Apartment/Maadi/Maadi-Sarayat">
            <a className=" d-block">apartment for sale maadi sarayat</a>
          </Link>
          <Link legacyBehavior href="/for-sale/Apartment/Katameya">
            <a className=" d-block">apartment for sale maadi degla</a>
          </Link>
          <Link legacyBehavior href="/for-sale/Apartment/New-Cairo">
            <a className=" d-block">apartment for sale new cairo</a>
          </Link>
        </div>

        <div className="col-sm-6">
        <Link legacyBehavior href="/for-rent/villa/Maadi">
            <a className="  d-block">villa for rent maadi</a>
          </Link>
          <Link legacyBehavior href="/for-rent/villa/Maadi/Maadi-Sarayat">
            <a className=" d-block">villa for rent maadi sarayat</a>
          </Link>
          <Link legacyBehavior href="/for-rent/villa/Maadi/Maadi-Degla">
            <a className=" d-block">villa for rent maadi degla</a>
          </Link>
          <Link legacyBehavior href="/for-rent/villa/Katameya">
            <a className=" d-block">villa for rent katamya</a>
          </Link>
          <Link legacyBehavior href="/for-rent/villa/New-Cairo">
            <a className=" d-block">villa for rent new cairo</a>
          </Link>
          <Link legacyBehavior href="/for-sale/villa/Maadi">
            <a className=" d-block">villa for sale maadi</a>
          </Link>
          <Link legacyBehavior href="/for-sale/villa/Maadi/Maadi-Sarayat">
            <a className=" d-block">villa for sale maadi sarayat</a>
          </Link>
          <Link legacyBehavior href="/for-sale/villa/Katameya">
            <a className=" d-block">villa for sale maadi degla</a>
          </Link>
          <Link legacyBehavior href="/for-sale/villa/New-Cairo">
            <a className=" d-block">villa for sale new cairo</a>
          </Link>


        </div>
      </div>
    </>
  );
};

export default FindProperties;
