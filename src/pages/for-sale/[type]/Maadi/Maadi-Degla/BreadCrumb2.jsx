import BreadCrumb from "../../../../../components/common/BreadCrumb";

const BreadCrumb2 = ({ length, PropType }) => {
  const locations = [
    {
      name: "for-sale",
      link: "/for-sale",
    },
    {
      name: `${PropType}`,
      link: `/for-sale/${PropType}`,
    },
    {
      name: "maadi",
      link: `/for-sale/${PropType}/Maadi`,
    },
  ];

  return (
    <div className="breadcrumb_content style2">
      <BreadCrumb title="maadi-degla" locations={locations} />
      <h2 className="breadcrumb_title my-3">
        {length} {PropType} in maadi degla
      </h2>
    </div>
  );
};

export default BreadCrumb2;
