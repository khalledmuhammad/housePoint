import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const TableData = ({ data }) => {
  const router = useRouter();

  const handleEdit = (val) => {
    router.push({ pathname: "/EditProperty", query: { val: val } });
  };
  const handleDelete = async (val) => {
    try {
      // Make the DELETE request to the server to delete the property
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API}/delete-property/${val}`,
        {
          method: "DELETE",
        }
      );

      // If the request was successful, show a success message
      if (response.ok) {
        toast.success(`Successfully deleted property with id_property: ${val}`);
      } else {
        throw new Error("Failed to delete property");
      }
    } catch (err) {
      toast.danger(err);
    }
  };

  const [properties, setproperties] = useState(data);
  let theadConent = [
    "Listing Title",
    "Date published",
    "Status",
    "View",
    "Action",
  ];
  let tbodyContent = properties.map((item) => (
    <tr key={item.Id_property}>
      <td scope="row">
        <div className="feat_property list favorite_page style2">
          <div>
            <p>{item.Title}</p>
            <p>{item.titlear}</p>

            <div className="thmb_cntnt">
              <ul className="tag mb0">
                <li className="list-inline-item">
                  <a href="#">{item.Property_for}</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="details">
            <div className="tc_content">
              <h4>{item.title}</h4>
              <p>
                <span className="flaticon-placeholder"></span>
                {item.name} , {item.name2}
              </p>
              <a className="fp_price text-thm" href="#">
                ${item.Price}
                <small>/mo</small>
              </a>
            </div>
          </div>
        </div>
      </td>
      {/* End td */}

      <td>{item.Date}</td>
      {/* End td */}

      <td>
        <span className="status_tag badge">{item.Property_for}</span>
      </td>
      {/* End td */}

      <td>{item.Id_property}</td>
      {/* End td */}

      <td>
        <ul className="view_edit_delete_list mb0">
          <li
            className="list-inline-item"
            data-toggle="tooltip"
            data-placement="top"
            title="Edit"
          >
            <button
              className="btn btn-blue"
              onClick={() => handleEdit(item.Id_property)}
            >
              <span className="flaticon-edit"></span>
            </button>
          </li>
          {/* End li */}

          <li
            className="list-inline-item"
            data-toggle="tooltip"
            data-placement="top"
            title="Delete"
          >
            <button
              className="btn btn-danger"
              onClick={() => handleDelete(item.Id_property)}
            >
              <span className="flaticon-garbage"></span>
            </button>
          </li>
        </ul>
      </td>
      {/* End td */}
    </tr>
  ));

  return (
    <>
      <table className="table">
        <thead className="thead-light">
          <tr>
            {theadConent.map((value, i) => (
              <th scope="col" key={i}>
                {value}
              </th>
            ))}
          </tr>
        </thead>
        {/* End theaad */}

        <tbody>{tbodyContent}</tbody>
      </table>
    </>
  );
};

export default TableData;
