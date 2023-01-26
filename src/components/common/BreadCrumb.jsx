import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

const BreadCrumb = ({ title = "" , Maadi , locations }) => {
  const { t } = useTranslation("");


  const router = useRouter()
  return (
    <>
      <ol className="breadcrumb" >
        <li className="breadcrumb-item">
        
        </li>
        <li className="breadcrumb-item">
        <Link legacyBehavior href="/">

          <a >{t("HOME")}</a>
          </Link>
        </li>
        {
         locations && locations.map(item=> <li key={Math.random()} className="breadcrumb-item">
         <Link legacyBehavior  href={`${item.link.toLowerCase()}`}>
           <a >{item.name}</a>
           </Link>
         </li>)
        }
      {Maadi &&  <li className="breadcrumb-item">
        <Link legacyBehavior href="/Maadi">
          <a >{t("MAADI")}</a>
          </Link>
        </li>}
        <li className="breadcrumb-item active" aria-current="page">
          {title}
        </li>
      </ol>
    </>
  );
};

export default BreadCrumb;
