import { useTranslation } from "react-i18next";
import BreadCrumb from "../../../../../../components/common/BreadCrumb";

const BreadCrumb2 = ({ length, Title, PropType, Slug }) => {
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
      name: "maadi",
      link: `/rent/${PropType}/Maadi`,
    },
    {
      name: "Maadi-Sarayat",
      link: `/rent/${PropType}/Maadi/Maadi-Sarayat`,
    },
    {
      name: `${Title}`,
      link: `/rent/${PropType}/Maadi/Maadi-Sarayat/${Slug && Slug.trim(" ")}`,
    },
  ];
  return (
    <div className="breadcrumb_content style2">
      <BreadCrumb locations={locations} />
    </div>
  );
};

export default BreadCrumb2;
