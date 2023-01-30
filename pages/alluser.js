import React, { useState, useEffect, useContext } from "react";
//INTRNAL IMPORT
import { UserCard } from "../Components/index";
import Style from "../styles/alluser.module.css";
import { TextZContext } from "../Context/TextZContext";

const alluser = () => {
  const { userLists, addFriends } = useContext(TextZContext);
  return (
    <div>
      <div className={Style.alluser_info}>
        <h3>Already Joined</h3>
      </div>

      <div className={Style.alluser}>
        {userLists.map((el, i) => (
          <UserCard key={i + 1} el={el} i={i} addFriends={addFriends} />
        ))}
      </div>
    </div>
  );
};

export default alluser;