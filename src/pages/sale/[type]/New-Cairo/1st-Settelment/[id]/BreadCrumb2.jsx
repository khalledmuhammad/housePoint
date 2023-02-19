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
      name: "1st-Settelment",
      link: `/sale/${PropType}/New-Cairo/1st-Settelment`,
    },
    {
      name: `${Title}`,
      link: `/sale/${PropType}/New-Cairo/1st-Settelment/${
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
