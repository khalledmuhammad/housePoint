import { useTranslation } from "react-i18next";
import BreadCrumb from "../../../../../../components/common/BreadCrumb";

const BreadCrumb2 = ({ length, Title, PropType }) => {

  const {t} = useTranslation()

  const locations = [
    {
      name: t("FORSALE"),
      link: "/for-sale",
    },
    {
      name: `${PropType}`,
      link: `/for-sale/${PropType}`,
    },
    {
      name: "new-cairo",
      link: `/for-sale/${PropType}/New-Cairo`,
    },
    {
      name: "chouifat",
      link: `/for-sale/${PropType}/New-Cairo/chouifat`,
    },
  ];
  return (
    <div className="breadcrumb_content style2">
      <BreadCrumb title={Title} locations={locations} />
    </div>
  );
};

export default BreadCrumb2;
