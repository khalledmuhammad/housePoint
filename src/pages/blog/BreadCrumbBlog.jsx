import { useTranslation } from "react-i18next";
import BreadCrumb from "../../components/common/BreadCrumb";

const BreadCrumbBlog = () => {
  const {t} = useTranslation()
  return (
    <div className="breadcrumb_content style2">
      <BreadCrumb title="Blog" />
      <h2 className="breadcrumb_title text-center">{t("BLOGSPOINT")}</h2>
    </div>
  );
};

export default BreadCrumbBlog;
