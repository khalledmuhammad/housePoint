import Link from "next/link";

const BreadCrumb = ({ title = "" , Maadi}) => {
  return (
    <>
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
        <Link href="/">

          <a >Home</a>
          </Link>
        </li>
      {Maadi &&  <li className="breadcrumb-item">
        <Link href="/Maadi">
          <a >Maadi</a>
          </Link>
        </li>}
        <li className="breadcrumb-item active" aria-current="page">
          {title}
        </li>
      </ol>
    </>
  );
};

export default BreadCrumb;
