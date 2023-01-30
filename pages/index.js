import React, { useEffect, useState, useContext } from "react";

//INTERNAL IMPORT
//import { TextZContext } from "../Context/TextZContext";
import { Filter, Friend } from "../Components/index";

const TextZ = () => {
   //const {} = useContext(TextZContext);
  return (
    <div>
     <Filter />
     <Friend />
    </div>
  );
};

export default TextZ;