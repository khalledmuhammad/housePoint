import { useTranslation } from "react-i18next";
import BreadCrumb from "../../../../components/common/BreadCrumb";

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
  ];
  return (
    <div className="breadcrumb_content style2">
      <BreadCrumb title="Maadi" locations={locations} />
      <h2 className="breadcrumb_title my-3">
        {" "}
        {length && length} {PropType} For Rent In Maadi
      </h2>
    </div>
  );
};

export default BreadCrumb2;
