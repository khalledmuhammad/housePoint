import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLength } from "../../../features/properties/propertiesSlice";
import { useState } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { store } from "../../../app/store";

const FeaturedItem = ({ properties }) => {
  const {
    keyword,
    location,
    status,
    Property_type,
    price,
    bathrooms,
    bedrooms,
    garages,
    yearBuilt,
    area,
    amenities,
  } = useSelector((state) => state.properties);

  const { statusType, featured, isGridOrList } = useSelector(
    (state) => state.filter
  );

  const dispatch = useDispatch();

  // keyword filter
  const keywordHandler = (item) =>
    item.Title.toLowerCase().includes(keyword?.toLowerCase());

  // location handler
  const locationHandler = (item) => {
    return item.location.toLowerCase().includes(location.toLowerCase());
  };

  // status handler
  const statusHandler = (item) =>
    item.type.toLowerCase().includes(status.toLowerCase());

  // properties handler
  const propertiesHandler = (item) =>
    item.Property_type.includes(Property_type);

  // price handler
  const priceHandler = (item) =>
    item.price < price?.max && item.price > price?.min;

  // bathroom handler
  const bathroomHandler = (item) => {
    if (bathrooms !== "") {
      return item.itemDetails[1].number == bathrooms;
    }
    return true;
  };

  // bedroom handler
  const bedroomHandler = (item) => {
    if (bedrooms !== "") {
      return item.itemDetails[0].number == bedrooms;
    }
    return true;
  };

  // garages handler
  const garagesHandler = (item) =>
    garages !== ""
      ? item.garages?.toLowerCase().includes(garages.toLowerCase())
      : true;

  // built years handler
  const builtYearsHandler = (item) =>
    yearBuilt !== "" ? item?.built == yearBuilt : true;

  // area handler
  const areaHandler = (item) => {
    if (area.min !== 0 && area.max !== 0) {
      if (area.min !== "" && area.max !== "") {
        return (
          parseInt(item.itemDetails[2].number) > area.min &&
          parseInt(item.itemDetails[2].number) < area.max
        );
      }
    }
    return true;
  };

  // advanced option handler
  const advanceHandler = (item) => {
    if (amenities.length !== 0) {
      return amenities.find((item2) =>
        item2.toLowerCase().includes(item.amenities.toLowerCase())
      );
    }
    return true;
  };

  // status filter
  const statusTypeHandler = (a, b) => {
    if (statusType === "recent") {
      return a.created_at + b.created_at;
    } else if (statusType === "old") {
      return a.created_at - b.created_at;
    } else if (statusType === "") {
      return a.created_at + b.created_at;
    }
  };

  // featured handler
  const featuredHandler = (item) => {
    if (featured !== "") {
      return item.featured === featured;
    }
    return true;
  };

  /*   useSelector(state=>state.properties.AllProperties)
   */

  const [pageNumb, setPageNum] = useState(0);
  const propertiesperPage = 25;
  const pageVisited = pageNumb * propertiesperPage;
  const pageCount = Math.ceil(
    properties && properties.length / propertiesperPage
  );

  // status handler
  let content = properties
    ?.filter(keywordHandler)
    ?.filter(propertiesHandler)
    /*
    ?.filter(locationHandler)
    ?.filter(statusHandler)
    ?.filter(propertiesHandler)
    ?.filter(priceHandler)
    ?.filter(bathroomHandler)
    ?.filter(bedroomHandler)
    ?.filter(garagesHandler)
    ?.filter(builtYearsHandler)
    ?.filter(areaHandler)
    ?.filter(advanceHandler)
    ?.sort(statusTypeHandler)
    ?.filter(featuredHandler) */
    ?.slice(pageVisited, pageVisited + propertiesperPage)
    .map((item) => (
      <div
        className={`${
          isGridOrList ? "col-12 feature-list  " : "col-md-6 col-lg-6"
        } `}
        key={item.id}
      >
        <div
          className={`feat_property home7 style4 ${
            isGridOrList ? "d-flex   align-items-center" : undefined
          }`}
        >
          <div className="thumb">
            <img
              className="img-whp"
              src={`https://housepointegypt.com/photos/${item.file_image}`}
              alt="fp1.jpg"
            />
            <div className="thmb_cntnt">
              <ul className="tag mb0">
                <li className="list-inline-item">
                  <a href="#">#{item.Id_property}</a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="text-capitalize">
                    {item.Property_for}
                  </a>
                </li>
              </ul>

              <Link legacyBehavior href={`/singleProperty/${item.Id_property}`}>
                <a className="fp_price">
                  {item.Property_for === "Rent"
                    ? `${item.Price} ${item.Price_ex}/month `
                    : `${item.Price} ${item.Price_ex}`}
                </a>
              </Link>
            </div>
          </div>
          <div className="details">
            <div className="tc_content">
              <p className="text-thm">{item.type}</p>
              <h4>
                <Link
                  legacyBehavior
                  href={`/singleProperty/${item.Id_property}`}
                >
                  <a>{item.Title}</a>
                </Link>
              </h4>
              <p>
                <span className="flaticon-placeholder"></span>
                {item.name} , {item.name2}
              </p>
            </div>
            {/* End .tc_content */}

            <div className="fp_footer">
              <ul className="row  ">
                <li className="col-sm-6">
                  <Link
                    legacyBehavior
                    href={`/singleProperty/${item.Id_property}`}
                  >
                    <a className="text-dark">
                      <i className="fa fa-home "></i>
                      {item.Surface_area}sqm<sup>2</sup>
                    </a>
                  </Link>
                </li>
                <li className="col-sm-6">
                  <Link
                    legacyBehavior
                    href={`/singleProperty/${item.Id_property}`}
                  >
                    <a className="text-dark">
                      <i className="fa fa-bath"></i> {item.No_of_bathrooms}{" "}
                      bathrooms
                    </a>
                  </Link>
                </li>
                <li className="col-sm-6">
                  <Link
                    legacyBehavior
                    href={`/singleProperty/${item.Id_property}`}
                  >
                    <a className="text-dark">
                      <i className="fa fa-bed"></i> {item.No_of_bedrooms}{" "}
                      bedrooms{" "}
                    </a>
                  </Link>
                </li>
                <li className="col-sm-6">
                  <Link
                    legacyBehavior
                    href={`/singleProperty/${item.Id_property}`}
                  >
                    <a className="text-dark">
                      <i className="fa fa-eye"></i> {item.views}{" "}
                    </a>
                  </Link>
                </li>
              </ul>
              <div className="fp_pdate float-end">{item.ztype_en}</div>
            </div>

            {/* End .fp_footer */}
          </div>
        </div>
      </div>
    ));

  // add length of filter items
  useEffect(() => {
    dispatch(addLength(content && content.length));
  }, [dispatch, addLength, content]);

  const handlePageClick = async (data) => {
    console.log(data.selected);

    setPageNum(data.selected);
  };

  return (
    <>
      {content}

      <div className="mbp_pagination">
        <ReactPaginate
          previousLabel={""}
          nextLabel={""}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={"page_navigation  justify-content-center"}
          pageClassName={"page-item "}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link flaticon-left-arrow "}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link flaticon-right-arrow "}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          activeClassName={"active"}
        />
      </div>
    </>
  );
};

export async function getStaticProps() {
  const proper = store.getState();
  const properties = proper.properties.AllProperties;
  console.log(properties);
  return {
    props: {
      properties,
    },
  };
}

export default FeaturedItem;
