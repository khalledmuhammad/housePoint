import GlobalFilter from "./GlobalFilter";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "next-i18next";



import {

  addProperty_for,
} from "../../features/properties/propertiesSlice";



const GlobalHeroFilter = ({ className = "" }) => {
    const { t } = useTranslation();

    const dispatch = useDispatch()
    const PropetyFor = useSelector(state=>state.properties.Property_for)
    console.log(PropetyFor)

    return (
        <div className={`home_adv_srch_opt ${className}`}>
            <ul className="nav nav-pills" id="pills-tab" role="tablist">
            <li className="nav-item"  onClick={()=>dispatch(addProperty_for("Rent"))} >
                    <a
                        className={`nav-link ${PropetyFor === "Rent" && "active"} `}
                        id="pills-profile-tab"
                        data-bs-toggle="pill"
                        href="#pills-profile"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false"
                    >
                        
                        {t("RENT")}
                    </a>
                </li>
                <li className="nav-item"  onClick={()=>dispatch(addProperty_for("Sale"))} >
                    <a
                        className={`nav-link ${PropetyFor === "Sale" && "active"} `}
                        id="pills-home-tab"
                        data-bs-toggle="pill"
                        href="#pills-home"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                    >
                        {t("BUY")}


                    </a>
                </li>

             
            </ul>
            {/* End nav-pills */}

            <div className="tab-content home1_adsrchfrm" id="pills-tabContent">
                <div
                    className="tab-pane fade show active"
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                >
                    <GlobalFilter />
                </div>
                <div
                    className="tab-pane fade"
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                >
                    <GlobalFilter />
                </div>
            </div>
        </div>
    );
};


export default GlobalHeroFilter;
