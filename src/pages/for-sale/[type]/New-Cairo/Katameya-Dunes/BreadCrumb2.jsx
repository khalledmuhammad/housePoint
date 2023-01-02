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
      name: "new-cairo",
      link: `/for-sale/${PropType}/New-Cairo`,
    },
  ];
  return (
    <div className="breadcrumb_content style2">
      <BreadCrumb title="Katameya-Dunes" locations={locations} />
      <h2 className="breadcrumb_title my-3">
        {length} {PropType} For Sale in Katameya Dunes
      </h2>
    </div>
  );
};

export default BreadCrumb2;
