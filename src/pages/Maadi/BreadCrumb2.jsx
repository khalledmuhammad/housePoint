import { useTranslation } from "react-i18next";
import BreadCrumb from "../../components/common/BreadCrumb";

const BreadCrumb2 = ({length}) => {
  const {t} = useTranslation()

  return (
    <div className="breadcrumb_content style2">
      <BreadCrumb title={t("MAADI")} />
      <h2 className="breadcrumb_title my-3">{length} {t("PROPIN")} {t("MAADI")}</h2>
    </div>
  );
};

export default BreadCrumb2;
