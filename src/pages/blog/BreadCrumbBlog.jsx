

import BreadCrumb from "../../components/common/BreadCrumb";
import { useTranslation } from "react-i18next";

const BreadCrumb2 = ({length , PropType }) => {
  const {t} = useTranslation()

  const locations = [
 
 
    
 
 
  ]
  return (
    <div className="breadcrumb_content style2">
      <BreadCrumb title="Blog" locations={locations}  />
      <h2 className="breadcrumb_title my-3"> {t("BLOGSPOINT")}</h2>
    </div>
  );
};

export default BreadCrumb2;