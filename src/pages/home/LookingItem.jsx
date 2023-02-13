import find from "../../data/find";

const LookingItem = () => {
  return (
    <>
      {find.map((item) => (
        <li className="list-inline-item" key={item.id}>
          <div className="icon">
            <span className={item.icon}></span>
        <a href={item.Link}> <p>{item.title}</p></a>   
          </div>
        </li>
      ))}
    </>
  );
};

export default LookingItem;
