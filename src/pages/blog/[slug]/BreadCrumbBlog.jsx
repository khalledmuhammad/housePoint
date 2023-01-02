

import BreadCrumb from "../../../components/common/BreadCrumb";
import { useTranslation } from "react-i18next";

const BreadCrumb2 = ({Title }) => {

  const {t} = useTranslation()

  const locations = [
 
   
    {
      name:"blog",
      link: "/blog"

    }
 
 
  ]
  return (
    <div className="breadcrumb_content style2">
      <BreadCrumb title={Title} locations={locations}  />
    </div>
  );
};

export default BreadCrumb2;