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
      name: "maadi",
      link: `/rent/${PropType}/Maadi`,
    },
  ];

  return (
    <div className="breadcrumb_content style2">
      <BreadCrumb title="West-Golf" locations={locations} />
      <h2 className="breadcrumb_title my-3">
        {length} {PropType} in West Golf
      </h2>
    </div>
  );
};

export default BreadCrumb2;
