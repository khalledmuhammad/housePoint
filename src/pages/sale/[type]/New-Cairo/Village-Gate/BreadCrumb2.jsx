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
      name: "new-cairo",
      link: `/sale/${PropType}/New-Cairo`,
    },
  ];
  return (
    <div className="breadcrumb_content style2">
      <BreadCrumb title="Village-Gate" locations={locations} />
      <h2 className="breadcrumb_title my-3">
        {length} {PropType} For Sale in Village Gate
      </h2>
    </div>
  );
};

export default BreadCrumb2;
