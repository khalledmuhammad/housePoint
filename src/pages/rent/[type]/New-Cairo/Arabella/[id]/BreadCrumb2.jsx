import BreadCrumb from "../../../../../../components/common/BreadCrumb";

const BreadCrumb2 = ({ length, Title, PropType, Slug }) => {
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
    {
      name: "Arabella",
      link: `/rent/${PropType}/New-Cairo/Arabella`,
    },
    {
      name: `${Title}`,
      link: `/rent/${PropType}/New-Cairo/Arabella/${Slug && Slug.trim(" ")}`,
    },
  ];
  return (
    <div className="breadcrumb_content style2">
      <BreadCrumb locations={locations} />
    </div>
  );
};

export default BreadCrumb2;
