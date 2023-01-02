import BreadCrumb from "../../../../../components/common/BreadCrumb";

const BreadCrumb2 = ({ length, PropType }) => {
  const locations = [
    {
      name: "for-rent",
      link: "/for-rent",
    },
    {
      name: `${PropType}`,
      link: `/for-rent/${PropType}`,
    },
    {
      name: "new-cairo",
      link: `/for-rent/${PropType}/New-Cairo`,
    },
  ];

  return (
    <div className="breadcrumb_content style2">
      <BreadCrumb title="5th-Settlement" locations={locations} />
      <h2 className="breadcrumb_title my-3">
        {length} {PropType} For Rent in 5th-Settlement
      </h2>
    </div>
  );
};

export default BreadCrumb2;
