import React from 'react';
import styles from "./Letters.module.css";

interface props {
    letter: string;
}

const Letter = (props: props) => {
  return (
    <div className={styles.letter}>
        <span>{ props.letter }</span>
    </div>
  );
}

export default Letter;
