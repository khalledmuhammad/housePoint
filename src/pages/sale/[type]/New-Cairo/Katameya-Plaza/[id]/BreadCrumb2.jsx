import { useTranslation } from "react-i18next";
import BreadCrumb from "../../../../../../components/common/BreadCrumb";

const BreadCrumb2 = ({ length, Title, PropType, Slug }) => {
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
      name: "new-cairo",
      link: `/sale/${PropType}/New-Cairo`,
    },
    {
      name: "Katameya-Plaza",
      link: `/sale/${PropType}/New-Cairo/Katameya-Plaza`,
    },
    {
      name: `${Title}`,
      link: `/sale/${PropType}/New-Cairo/Katameya-Plaza/${
        Slug && Slug.trim(" ")
      }`,
    },
  ];
  return (
    <div className="breadcrumb_content style2">
      <BreadCrumb  locations={locations} />
    </div>
  );
};

export default BreadCrumb2;
