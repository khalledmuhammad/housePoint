import Link from "next/link";
import { useTranslation } from "react-i18next";

const FindProperties = () => {
  const {t} = useTranslation()
  return (
    <>
    
        <div className="col-sm-6 col-lg-4 col-xl-4 text-center  " >
          <h4 >{t("PRIMELOC")}</h4>
          <Link legacyBehavior href="/Maadi">
            <a className="properti_city style2 d-block">
             {t("MAADI")}
            </a>
          </Link>
          <Link legacyBehavior href="/Maadi/Maadi-Sarayat">
            <a className="properti_city style2 d-block">
            {t("MAADISARAYAT")}

            </a>
          </Link>
          <Link legacyBehavior href="/Maadi/Maadi-Degla">
            <a className="properti_city style2 d-block">
            {t("MAADIDEGLA")}
            </a>
          </Link>
          <Link legacyBehavior href="/Katameya-Heights">
            <a className="properti_city style2 d-block">
            {t("KATAMYA")}
            </a>
          </Link>
          <Link legacyBehavior href="/New-Cairo">
            <a className="properti_city style2 d-block">
            {t("NEWCAIRO")}
            </a>
          </Link>
        </div>
        
     {/*    <div className="col-sm-6 col-lg-4 col-xl-4 text-center" >
          <h3 className="text-center">Most Searches</h3>
          <Link legacyBehavior href="/Maadi">
            <a className="properti_city style2 d-block">
             {t("MAADI")}
            </a>
          </Link>
          <Link legacyBehavior href="/Maadi/Maadi-Sarayat">
            <a className="properti_city style2 d-block">
            {t("MAADISARAYAT")}

            </a>
          </Link>
          <Link legacyBehavior href="/Maadi/Maadi-Degla">
            <a className="properti_city style2 d-block">
            {t("MAADIDEGLA")}
            </a>
          </Link>
          <Link legacyBehavior href="/Katameya-Heights">
            <a className="properti_city style2 d-block">
            {t("KATAMYA")}
            </a>
          </Link>
          <Link legacyBehavior href="/New-Cairo">
            <a className="properti_city style2 d-block">
            {t("NEWCAIRO")}
            </a>
          </Link>
        </div> */}
        

     
    </>
  );
};

export default FindProperties;
