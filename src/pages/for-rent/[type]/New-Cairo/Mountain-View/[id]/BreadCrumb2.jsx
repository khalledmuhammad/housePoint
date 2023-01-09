import BreadCrumb from "../../../../../../components/common/BreadCrumb";

const BreadCrumb2 = ({ length, Title, PropType , Slug }) => {
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
    {
      name: "Mountain-View",
      link: `/for-rent/${PropType}/New-Cairo/Mountain-View`,
    },
    {
      name: `${Title}`,
      link: `/for-rent/${PropType}/New-Cairo/Mountain-View/${Slug.trim(" ")}`,
    },
  ];
  return (
    <div className="breadcrumb_content style2">
      <BreadCrumb locations={locations} />
    </div>
  );
};

export default BreadCrumb2;
