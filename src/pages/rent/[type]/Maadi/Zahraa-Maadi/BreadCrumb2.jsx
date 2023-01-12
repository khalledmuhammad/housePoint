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
      name: "maadi",
      link: `/rent/${PropType}/Maadi`,
    },
  ];

  return (
    <div className="breadcrumb_content style2">
      <BreadCrumb title="zahraa-maadi" locations={locations} />
      <h2 className="breadcrumb_title my-3">
        {length} {PropType}For Rent in Zahraa Maadi{" "}
      </h2>
    </div>
  );
};

export default BreadCrumb2;
