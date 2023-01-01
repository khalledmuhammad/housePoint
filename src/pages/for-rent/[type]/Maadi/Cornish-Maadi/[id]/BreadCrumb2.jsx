import BreadCrumb from "../../../../../../components/common/BreadCrumb";

const BreadCrumb2 = ({length , Title , PropType }) => {
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
    } ,
    {
      name:"cornish-maadi",
      link: `/for-rent/${PropType}/Maadi/Cornish-Maadi`
    }
 
  ]
  return (
    <div className="breadcrumb_content style2">
      <BreadCrumb title={Title} locations={locations}  />
    </div>
  );
};

export default BreadCrumb2;
