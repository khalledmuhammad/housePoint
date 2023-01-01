import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

const BreadCrumb = ({ title = "" , Maadi , locations }) => {
  const { t } = useTranslation("");


  const router = useRouter()
  return (
    router.locale==="ar" ? "" :
    <>
      <ol className="breadcrumb" >
        <li className="breadcrumb-item">
        <Link legacyBehavior href="/">

          <a >Home</a>
          </Link>
        </li>
        {
         locations && locations.map(item=> <li className="breadcrumb-item">
         <Link legacyBehavior href={`${item.link}`}>
           <a >{item.name}</a>
           </Link>
         </li>)
        }
      {Maadi &&  <li className="breadcrumb-item">
        <Link legacyBehavior href="/Maadi">
          <a >Maadi</a>
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
