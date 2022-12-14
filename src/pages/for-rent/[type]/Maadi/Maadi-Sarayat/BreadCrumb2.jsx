import { useTranslation } from "react-i18next";
import BreadCrumb from "../../../../../components/common/BreadCrumb";

const BreadCrumb2 = ({ length, PropType }) => {
  const {t} = useTranslation()

  const locations = [
    {
      name: `${t("RENT")}`,
      link: "/for-rent",
    },
    {
      name: `${PropType}`,
      link: `/for-rent/${PropType}`,
    },
    {
      name: "maadi",
      link: `/for-rent/${PropType}/Maadi`,
    },
  ];

  return (
    <div className="breadcrumb_content style2">
      <BreadCrumb title="maadi-sarayat" locations={locations} />
      <h2 className="breadcrumb_title my-3">
        {length} {PropType} For Rent in Maadi Sarayt
      </h2>
    </div>
  );
};

export default BreadCrumb2;
