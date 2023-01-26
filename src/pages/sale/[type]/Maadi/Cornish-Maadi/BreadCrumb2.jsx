import { useTranslation } from "react-i18next";
import BreadCrumb from "../../../../../components/common/BreadCrumb";

const BreadCrumb2 = ({ length, PropType }) => {
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
      link: `/sale/${PropType}/maadi`,
    },
  ];
  return (
    <div className="breadcrumb_content style2">
      <BreadCrumb title="cornish-maadi" locations={locations} />
      <h2 className="breadcrumb_title my-3">
        {length} {PropType} For Sale in Cornish Maadi
      </h2>
    </div>
  );
};

export default BreadCrumb2;
