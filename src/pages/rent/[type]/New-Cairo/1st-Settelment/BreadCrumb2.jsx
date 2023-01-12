import { useTranslation } from "react-i18next";
import BreadCrumb from "../../../../../components/common/BreadCrumb";

const BreadCrumb2 = ({ length, PropType }) => {
  const { t } = useTranslation();

  const locations = [
    {
      name: `${t("RENT")}`,
      link: "/rent",
    },
    {
      name: `${PropType}`,
      link: `/rent/${PropType}`,
    },
    {
      name: "new-cairo",
      link: `/rent/${PropType}/New-Cairo`,
    },
  ];

  return (
    <div className="breadcrumb_content style2">
      <BreadCrumb title="1st-Settelment" locations={locations} />
      <h2 className="breadcrumb_title my-3">
        {length} {PropType} For Rent in first-settlement
      </h2>
    </div>
  );
};

export default BreadCrumb2;
