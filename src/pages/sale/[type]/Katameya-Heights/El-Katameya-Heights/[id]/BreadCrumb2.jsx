import { useTranslation } from "react-i18next";
import BreadCrumb from "../../../../../../components/common/BreadCrumb";

const BreadCrumb2 = ({ length, Title, PropType, Slug }) => {
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
    {
      name: "El-Katameya-Heights",
      link: `/sale/${PropType}/katameya-heights/el-katameya-heights`,
    },
    {
      name: `${Title}`,
      link: `/sale/${PropType}/katameya-heights/el-katameya-heights/${
        Slug && Slug.trim(" ")
      }`,
    },
  ];
  return (
    <div className="breadcrumb_content style2">
      <BreadCrumb locations={locations} />
    </div>
  );
};

export default BreadCrumb2;
