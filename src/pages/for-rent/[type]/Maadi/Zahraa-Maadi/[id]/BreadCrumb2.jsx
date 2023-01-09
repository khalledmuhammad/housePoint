import { useTranslation } from "react-i18next";
import BreadCrumb from "../../../../../../components/common/BreadCrumb";

const BreadCrumb2 = ({ length, Title, PropType , Slug }) => {
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
    {
      name: "zahraa-maadi",
      link: `/for-rent/${PropType}/Maadi/Zahraa-Maadi`,
    },
    {
      name: `${Title}`,
      link: `/for-rent/${PropType}/Maadi/Zahraa-Maadi/${Slug.trim(" ")}`,
    },
  ];
  return (
    <div className="breadcrumb_content style2">
      <BreadCrumb  locations={locations} />
    </div>
  );
};

export default BreadCrumb2;
