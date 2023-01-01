import BreadCrumb from "../../../components/common/BreadCrumb";

const BreadCrumb2 = ({length , PropType }) => {
  const locations = [
 
    {
      name: "for-rent",
      link: "/for-rent"
    },
 
  ]
  return (
    <div className="breadcrumb_content style2">
      <BreadCrumb title={PropType} locations={locations} />
      <h2 className="breadcrumb_title my-3">{length} {PropType} For Rent</h2>
    </div>
  );
};

export default BreadCrumb2;
