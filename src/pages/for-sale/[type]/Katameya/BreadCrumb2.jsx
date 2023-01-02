import BreadCrumb from "../../../../components/common/BreadCrumb";

const BreadCrumb2 = ({ length, PropType }) => {
  const locations = [
    {
      name: "for-sale",
      link: "/for-sale",
    },
    {
      name: "apartment",
      link: "/for-sale/Apartment",
    },
  ];
  return (
    <div className="breadcrumb_content style2">
      <BreadCrumb title="Maadi" locations={locations} />
      <h2 className="breadcrumb_title my-3">
        {" "}
        {length && length} {PropType} for Sale In Katamya
      </h2>
    </div>
  );
};

export default BreadCrumb2;
