// import { Fragment } from "react";

import { useState } from "react";

function ListGroup() {
  let items = ["New York", "San Fransico", "Tokyo", "London", "Paris"];
  // items = [];
  //Hook react
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const getMessage = () => {
    return items.length === 0 ? <p>Not Items found</p> : null;
  };

  return (
    //<></>   == <Fragment> </Fragment>
    <>
      <h1>List</h1>
      {getMessage()}
      {items.length === 0 && "Not Items found"}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
