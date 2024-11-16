import {useState} from "react";
import Output from "./Output";

export default function Greeting() {

    const [changedText, setChangedText] = useState(false);

    function changeTextHandler () {
        setChangedText(prev => !prev);
    }

    return (
        <div>
            <Output>{!changedText ? 'Hello World!' : 'Have a good night!'}</Output>
            <p>It's good to see you</p>
            <button onClick={changeTextHandler}>Change Text</button>
        </div>
    )
}