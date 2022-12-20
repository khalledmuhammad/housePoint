import BreadCrumb from "../../../components/common/BreadCrumb";

const BreadCrumb2 = ({length}) => {
  return (
    <div className="breadcrumb_content style2">
      <BreadCrumb title="Maadi-Sarayat"  Maadi={true}  />
      <h2 className="breadcrumb_title my-3">  {length} Property In Maadi Sarayat</h2>
    </div>
  );
};

export default BreadCrumb2;
