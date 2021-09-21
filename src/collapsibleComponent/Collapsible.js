import React, { useState, useRef } from "react";
import styles from "../collapsibleComponent/Collapsible.module.css";
import Chevron from "../collapsibleComponent/Chevron";

function Collapsible(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [setRotate, setRotateState] = useState(styles.icon);
  function toggle() {
    setIsOpen(!isOpen);
    setRotateState(!isOpen ? styles.rotate : styles.icon);
  }

  const parentRef = useRef();

  return (
    <div className={styles.parentNode}>
      <button className={styles.toggle} onClick={toggle}>
        {props.label}
        <Chevron width={12} fill={"#777"} className={`${setRotate}`} />
      </button>
      <div
        className={styles.contentParent}
        ref={parentRef}
        style={
          isOpen
            ? {
                height: parentRef.current.scrollHeight + "px"
              }
            : {
                height: "0px"
              }
        }
      >
        <div className={styles.children}>{props.children}</div>
      </div>
    </div>
  );
}

export default Collapsible;
