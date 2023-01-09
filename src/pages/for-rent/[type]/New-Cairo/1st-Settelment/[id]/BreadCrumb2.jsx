import BreadCrumb from "../../../../../../components/common/BreadCrumb";

const BreadCrumb2 = ({ length, Title, PropType, Slug }) => {
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
      name: "1st-Settelment",
      link: `/for-rent/${PropType}/New-Cairo/1st-Settelment`,
    },
    {
      name: `${Title}`,
      link: `/for-rent/${PropType}/New-Cairo/1st-Settelment/${
        Slug && Slug.trim(" ")
      }`,
    },
  ];
  return (
    <div className="breadcrumb_content style2">
      <BreadCrumb locations={locations} />
    </div>
  );
};

export default BreadCrumb2;
