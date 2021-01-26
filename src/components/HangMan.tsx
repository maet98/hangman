import React from 'react';
import Head from "../imgs/head.png";
import Neck from "../imgs/neck.png";
import Corpus from "../imgs/corpus.png";
import RightArm from "../imgs/right-arm.png";
import LeftArm from "../imgs/left-arm.png";
import RightHand from "../imgs/right-hand.png";
import LeftHand from "../imgs/left-hand.png";
import RightLeg from "../imgs/right-leg.png";
import LeftLeg from "../imgs/left-leg.png";
import RightFoot from "../imgs/right-foot.png";
import LeftFoot from "../imgs/left-foot.png";
import Bar from "../imgs/bar.png";
import "./HangMan.css";

interface props {
    mistakes: number;
}

const order = [
    {
        name:'bar',
        src: Bar
    },
    {
        name: 'head' ,
        src: Head
    },
    {
        name: 'neck',
        src:Neck
    },{
        name: 'corpus', src: Corpus
    },{
        name: 'right-arm',
        src: RightArm 
    }, {
        name: 'left-arm',
        src: LeftArm 
    },{ 
        name: 'right-hand',
        src: RightHand 
    },{ 
        name: 'left-hand',
        src: LeftHand
    },{ name: 'right-leg', src: RightLeg },
    { name: 'left-leg', src: LeftLeg},
    { name: 'right-foot', src: RightFoot},
    {name: 'left-foot', src: LeftFoot}
];

const HangMan: React.FC<props> = (props: props) => {

  return (
      <div>
        {
            order.map((value, index) => {
                if(index-1 < props.mistakes) {
                    return <img className={value.name} key={index} src={value.src} />
                } else {
                    return null;
                }
            })
        }
    </div>
  );
}

export default HangMan;
