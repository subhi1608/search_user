import React from "react";
const ListItem = (props) => {
    const { data ,value,handleMouseOver,index,selectedIndex} = props

    const {id,name,address,matches} = data


    const highlightMatch = (key,text) => {
      const regex = new RegExp(`(${value})`, 'gi');
      return text.split(regex).map((part, index) => {
        if (regex.test(part) && matches && matches[key] && !matches["items"]) {
          return <span key={index} className="highlight">{part}</span>;
        } else {
          return part;
        }
      });
    };

    return (
      <div className={`list_item ${index===selectedIndex?"hover":""}`} onMouseOver={()=>handleMouseOver(index)}>
        <div >{highlightMatch("id",id)}</div>
        <div >{highlightMatch("name",name)}</div>
        <div >{highlightMatch("address",address)}</div>
       { matches && matches["items"] && <div> <strong  className="highlight">{value} </strong>
       found in items
       </div> }
      </div>
    );
  };

export default ListItem;