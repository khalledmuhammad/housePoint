import { useTranslation } from "react-i18next";
import BreadCrumb from "../../../../../../components/common/BreadCrumb";

const BreadCrumb2 = ({ length, Title, PropType }) => {
  const { t } = useTranslation();

  const locations = [
    {
      name: t("FORSALE"),
      link: "/sale",
    },
    {
      name: `${PropType}`,
      link: `/sale/${PropType}`,
    },
    {
      name: "maadi",
      link: `/sale/${PropType}/Maadi`,
    },
    {
      name: "cornish-maadi",
      link: `/sale/${PropType}/Maadi/Cornish-Maadi`,
    },
  ];
  return (
    <div className="breadcrumb_content style2">
      <BreadCrumb title={Title} locations={locations} />
    </div>
  );
};

export default BreadCrumb2;
