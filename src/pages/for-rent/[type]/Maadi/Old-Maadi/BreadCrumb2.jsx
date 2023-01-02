import BreadCrumb from "../../../../../components/common/BreadCrumb";

const BreadCrumb2 = ({length , PropType}) => {

  const locations = [
 
    {
      name: "for-rent",
      link: "/for-rent"
    },
    {
      name:`${PropType}`,
      link: `/for-rent/${PropType}`
    },
    {
      name:"maadi",
      link: `/for-rent/${PropType}/Maadi`
    }
 
 
  ]
  return (
    <div className="breadcrumb_content style2">
      <BreadCrumb title="old-maadi" locations={locations}  />
      <h2 className="breadcrumb_title my-3">{length}  {PropType}  For Rent in Old Maadi</h2>
    </div>
  );
};

export default BreadCrumb2;
