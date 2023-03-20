import { useState } from "react";

interface Prop {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: Prop) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //event handler

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <h1>No item found</h1>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
            }}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
