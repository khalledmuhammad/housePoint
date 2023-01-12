import { useState } from "react";

const TableData = ({ data }) => {

  const handleEdit = (val) => {
    
  };
  const handleDelete = (val) => {


  };

  const [properties, setproperties] = useState(data);
  let theadConent = [
    "Listing Title",
    "Date published",
    "Status",
    "View",
    "Action",
  ];
  let tbodyContent = properties?.slice(0, 15)?.map((item) => (
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

      <td>2,345</td>
      {/* End td */}

      <td>
        <ul className="view_edit_delete_list mb0">
          <li
            className="list-inline-item"
            data-toggle="tooltip"
            data-placement="top"
            title="Edit"
          >
            <button className="btn btn-blue" onClick={()=>handleEdit(item.Id_property)}>
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
            <button className="btn btn-danger" onClick={()=>handleDelete(item.Id_property)}>
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
