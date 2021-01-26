import React from 'react';
import styles from "./Letters.module.css";

interface props {
    letter: string;
    visible: boolean;
}

const Letter: React.FC<props> = (props: props) => {
    const first = React.useRef(true);

    React.useEffect(() => {
        if(first.current) {
            first.current = false;
            return;
        }
        console.log(props.visible);
        console.log("Is visible");
    }, [props.visible]);

  return (
      <div className={`${styles.letter} ${props.visible ? "": styles.hidden}`}>
          <span>{ props.visible ? props.letter : "" }</span>
    </div>
  );
}

export default Letter;
