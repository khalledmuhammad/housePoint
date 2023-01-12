import BreadCrumb from "../../../../../components/common/BreadCrumb";

const BreadCrumb2 = ({ length, PropType }) => {
  const locations = [
    {
      name: "for-rent",
      link: "/rent",
    },
    {
      name: `${PropType}`,
      link: `/rent/${PropType}`,
    },
    {
      name: "new-cairo",
      link: `/rent/${PropType}/New-Cairo`,
    },
  ];
  return (
    <div className="breadcrumb_content style2">
      <BreadCrumb title="Madinaty" locations={locations} />
      <h2 className="breadcrumb_title my-3">
        {length} {PropType} For Rent in Madinaty
      </h2>
    </div>
  );
};

export default BreadCrumb2;
