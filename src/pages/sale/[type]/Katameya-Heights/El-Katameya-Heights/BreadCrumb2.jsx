import { useTranslation } from "react-i18next";
import BreadCrumb from "../../../../../components/common/BreadCrumb";

const BreadCrumb2 = ({ length, PropType }) => {
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
      link: `/sale/${PropType}/katameya-heights`,
    },
  ];
  return (
    <div className="breadcrumb_content style2">
      <BreadCrumb title="EL-Katameya-Heights" locations={locations} />
      <h2 className="breadcrumb_title my-3">
        {" "}
        {length && length} {PropType} for Sale In Katamya
      </h2>
    </div>
  );
};

export default BreadCrumb2;
