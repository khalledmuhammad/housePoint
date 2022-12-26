import Link from "next/link";
import { useTranslation } from "react-i18next";

const FindProperties = () => {
  const {t} = useTranslation()
  return (
    <>
    
        <div className="col-sm-6 col-lg-4 col-xl-4" >
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
        </div>
        
     {/*    <div className="col-sm-6 col-lg-4 col-xl-4" >
          <Link legacyBehavior href="/Maadi">
            <a className="properti_city style2 d-block">
             Maadi
            </a>
          </Link>
          <Link legacyBehavior href="/Maadi/Maadi-Sarayat">
            <a className="properti_city style2 d-block">
             Maadi Sarayat
            </a>
          </Link>
          <Link legacyBehavior href="/Maadi/Maadi-Degla">
            <a className="properti_city style2 d-block">
             Maadi Degla
            </a>
          </Link>
        </div> */}
        
    {/*     <div className="col-sm-6 col-lg-4 col-xl-4" >
          <Link legacyBehavior href="/Maadi">
            <a className="properti_city style2 d-block">
             Maadi
            </a>
          </Link>
          <Link legacyBehavior href="/Maadi/Maadi-Sarayat">
            <a className="properti_city style2 d-block">
             Maadi Sarayat
            </a>
          </Link>
          <Link legacyBehavior href="/Maadi/Maadi-Degla">
            <a className="properti_city style2 d-block">
             Maadi Degla
            </a>
          </Link>
        </div> */}
     
    </>
  );
};

export default FindProperties;
