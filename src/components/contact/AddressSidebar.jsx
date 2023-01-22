import { useTranslation } from "react-i18next";
import Social from "../common/footer/Social";

const AddressSidebar = () => {
  const { t } = useTranslation();
  return (
    <div className="contact_localtion">
      <p>{t("BREIFDESC")}</p>
   {/*    <div className="content_list">
        <h5>{t("ADDRESS")}</h5>
        <p>
          2301 Ravenswood Rd Madison, <br />
          WI 53711
        </p>
      </div> */}
      <div className="content_list">
        <h5>{t("PHONE")}</h5>
        <p>01221409530</p>
      </div>
      <div className="content_list">
        <h5>{t("MAIL")}</h5>
        <p>info@housepointegypt.com</p>
      </div>

      <h5>{t("FOLLOWUS")}</h5>
      <ul className="contact_form_social_area">
        <Social />
      </ul>
    </div>
  );
};

export default AddressSidebar;
