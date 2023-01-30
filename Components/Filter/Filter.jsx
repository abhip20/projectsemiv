import React, { useState, useContext } from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "./Filter.module.css";
import images from "../../assets";
import { TextZ, TextZContext } from "../../Context/TextZContext";
import { Model } from "../index";

const Filter = () => {
  const { account, addFriends } = useContext(TextZContext);

  //USESTATE
  const [addFriend, setAddFriend] = useState(false);
  return (
    <div className={Style.Filter}>
      <div className={Style.Filter_box}>
        <div className={Style.Filter_box_left}>
          <div className={Style.Filter_box_left_search}>
            <Image src={images.search} alt="image" width={35} height={35} />
            <input type="text" placeholder="search.." />
          </div>
        </div>
        <div className={Style.Filter_box_right}>
          <button>
            <Image src={images.clear} alt="clear" width={30} height={30} />
            CLEAR CHAT
          </button>
          <button onClick={() => setAddFriend(true)}>
            <Image src={images.user} alt="clear" width={30} height={30} />
            ADD FRIEND
          </button>
        </div>
      </div>

      {/* //MODEL COMPONENT */}
      {addFriend && (
        <div className={Style.Filter_model}>
          <Model
            openBox={setAddFriend}
            title="HEY!"
            head="Thankyou for using TextZ"
            info="TEXTZ is the bext place to send your messages. Dont worry your Messages are secure"
            smallInfo="Tell us your name please"
            image={images.hero}
            functionName={addFriends}
          />
        </div>
      )}
    </div>
  );
};

export default Filter;