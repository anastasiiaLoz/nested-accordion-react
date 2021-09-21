import React from "react";
import Collapsible from "../collapsibleComponent/Collapsible";
import styles from "../collapsibleComponent/Collapsible.module.css";
import { data } from "../data.js";

const Accordion = () => {
  // const continent = data.map(continent => continent.name);
  // console.log(continent);

  // const country = data.map(continent => continent.children.map(country => country.name));
  // console.log(country);

  // const lang = data.map((continent, key) => continent.children.map(country => country.children.map(lang => lang.name)));
  // console.log(lang);
  return (
    <>
      {data.map(continent => (
        <Collapsible label={continent.name}>
          {data.map(continent =>
            continent.children.map(country => (
              <Collapsible label={country.name}>
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
