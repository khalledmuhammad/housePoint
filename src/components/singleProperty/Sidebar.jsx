import ContactWithAgent from "../common/agent-view/ContactWithAgent";
import Categorie from "../common/listing/Categorie";


const Sidebar = () => {
  return (
    <>
      <div className="sidebar_listing_list">
        <div className="sidebar_advanced_search_widget">
          
          <ContactWithAgent />
        </div>
      </div>
      {/* End .sidebar_listing_list */}

   
      {/* End .Featured Properties */}

      <div className="terms_condition_widget">
        <div className="widget_list">
       
        </div>
      </div>
      {/* End .Categories Property */}
    </>
  );
};

export default Sidebar;
