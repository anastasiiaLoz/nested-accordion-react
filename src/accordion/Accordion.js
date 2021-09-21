import React from "react";
import Collapsible from "../collapsibleComponent/Collapsible";
import styles from "../collapsibleComponent/Collapsible.module.css";
import { data } from "../data.js";

const Accordion = () => {
  return (
    <>
      {data.map(continent => (
        <Collapsible label={continent.name}>
          {data.map(continent =>
            continent.children.map((country, key) => (
              <Collapsible key={key} label={country.name}>
                <ul className={styles.background}>
                  {data.map((continent, key) =>
                    continent.children.map(country => country.children.map(lang => <li key={key}> {lang.name}</li>))
                  )}
                </ul>
              </Collapsible>
            ))
          )}
        </Collapsible>
      ))}
    </>
  );
};

export default Accordion;
