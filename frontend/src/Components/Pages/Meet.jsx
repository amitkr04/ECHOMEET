import React from "react";
import css from "../../Styles/Meet.module.css";
import Background from "../../assets/Images/meet_background.jpg";
import { TbVideoPlus } from "react-icons/tb";
import { IoMdVideocam } from "react-icons/io";

const Meet = () => {
  return (
    <>
      <div className={css.meetContainer}>
        <div>
          <img
            src={Background}
            className={css.background}
            alt="background image"
          />
        </div>
        <div className={css.content}>
          <h2 className={css.welcome}>Welcome!!</h2>
          <h2>Unbounded Connections: Elevate Your</h2>
          <h2>Meetings with Free, Future-Forward</h2>
          <h2>video Conferencing!!</h2>
        </div>

        <div className={css.inputText}>
          <input type="text" placeholder="Name your meet"></input>
          <button>
            <TbVideoPlus /> New Meet
          </button>
        </div>

        <div className={css.inputNumber}>
          <input type="Number" placeholder="Enter code"></input>
          <button>
            <IoMdVideocam /> Join Meet
          </button>
        </div>
      </div>
    </>
  );
};

export default Meet;
