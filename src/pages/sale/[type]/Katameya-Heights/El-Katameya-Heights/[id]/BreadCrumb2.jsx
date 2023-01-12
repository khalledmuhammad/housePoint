import { useTranslation } from "react-i18next";
import BreadCrumb from "../../../../../../components/common/BreadCrumb";

const BreadCrumb2 = ({ length, Title, PropType }) => {
  const { t } = useTranslation();

  const locations = [
    {
      name: `${t("SALE")}`,
      link: "/sale",
    },
    {
      name: `${PropType}`,
      link: `/sale/${PropType}`,
    },
    {
      name: "Katameya-Heights",
      link: `/sale/${PropType}/Katameya-Heights`,
    },
    {
      name: "El-Katameya-Heights",
      link: `/sale/${PropType}/Katameya-Heights/El-Katameya-Heights`,
    },
  ];
  return (
    <div className="breadcrumb_content style2">
      <BreadCrumb title={Title} locations={locations} />
    </div>
  );
};

export default BreadCrumb2;
