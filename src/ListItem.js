import React from "react";

const ListItem = ({ text,Delete ,update }) => {
  return (
    <div>
      <div className="listItems">
        <li>{text}</li>
        <div className="btnContainer">
        <button onClick={update} className="editBtn" >Update</button>
        <button onClick={ Delete}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
