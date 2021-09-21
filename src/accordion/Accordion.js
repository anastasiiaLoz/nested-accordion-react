import React from "react";
import Collapsible from "../collapsibleComponent/Collapsible";
import styles from "../collapsibleComponent/Collapsible.module.css";
import { data } from "../data.js";

const Accordion = () => {
  const getCountry = () => data.map(value => value.children);

  const getLang = () =>
    data.map((value, key) => {
      return value.children.map(lang => lang.children);
    });

  return (
    <>
      {data.map(value => (
        <Collapsible label={value.name}>
          {getCountry().map(country => (
            <Collapsible label={country.name}>
              <ul className={styles.background}>
                {getLang().map(lang => (
                  <li key={lang.name}> {lang.name}</li>
                ))}
              </ul>
            </Collapsible>
          ))}
        </Collapsible>
      ))}
    </>
  );
};

export default Accordion;
