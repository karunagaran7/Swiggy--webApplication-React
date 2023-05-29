import React, { useState } from "react";


function Accordion(props) {
  const [isOpen, setIsOpen] = useState(true);
 

  const handleClick = () => {
    setIsOpen(!isOpen);

  };
  

  return (
    <div >
      <button onClick={handleClick}>{isOpen ? "▲" : "▼"}</button>
      <div>{isOpen && props.children}</div>
    </div>
  ); 
}

export default Accordion;
