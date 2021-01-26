import React from 'react';
import styles from "./Word.module.css";
import Letter from "./Letters";

interface props {
    word: String;
    increase: Function;
    won: Function;
}

function getVisibles(): Map<string,boolean> {
    var obj = new Map<string,boolean>()
    for(let i = 65;i < 91;i++) {
        obj.set(String.fromCharCode(i),false);
    }
    return obj;
}

const Word:React.FC<props> = (props:props) => {
    const[visibles,setVisibles] = React.useState<Map<string, boolean>>(getVisibles());
    const[update,setUpdate] = React.useState(true);
    const[missed,setMissed] = React.useState<String[]>([]);

    function isLetter(c:string): boolean {
        let n: number = c.charCodeAt(0);
        return (n >=65 && n < 91) || (n >= 97 && n < 123);
    }

    const handleKey = (e:any) => {
        let key: string = e.key;
        key = key.toUpperCase();
        if(isLetter(key)) {
            let is: boolean | undefined = visibles.get(key)
            if(!is && props.word.indexOf(key) === -1){
                props.increase()
                missed.push(key);
                setMissed(missed);
            }
            visibles.set(key,true);
            setVisibles(visibles);
            setUpdate(!update)
            if(check()) {
                props.won()
            }
        }
    }

    const check = ():boolean => {
        for(var i = 0; i < props.word.length; i++) {
            if(!visibles.get(props.word.charAt(i))){
                return false;
            }
        }
        return true;
    }

    React.useEffect(() => {
        window.addEventListener('keyup', handleKey);
        return () => window.removeEventListener('keyup',handleKey);
    }, [handleKey])

    return (
        <div>
            <div className={styles.missed}>
                <h2>Missed Letters:</h2>
                <div className={styles.missedLetters}>
                    {
                        missed.map((value:String,index:number) => {
                            return <p key={index}>{ value } </p>
                        })
                    }
                </div>
            </div>
            <div className={styles.Main}>
                {
                    props.word.split('').map((value:string,index:number) => {
                        let vis = visibles.get(value)
                        if(vis === undefined) vis = false
                        return <Letter key={index} letter={value} visible={vis}/>
                    })
                }
            </div>
        </div>
    );
}

export default Word;
