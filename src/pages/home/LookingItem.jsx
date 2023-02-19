import find from "../../data/find";

const LookingItem = () => {
  return (
    <>
      {find.map((item) => (
        <li className="list-inline-item" key={Math.random() }>
          <div className="icon">
            <span className={item.icon}></span>
        <a href={item.Link} className="text-white py-2">{item.title}</a>   
          </div>
        </li>
      ))}
    </>
  );
};

export default LookingItem;
