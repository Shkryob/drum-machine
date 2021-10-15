import {useState, useRef, useEffect} from 'react'
import {connect} from "react-redux";

function DrumPad({info, dispatch}) {
    const audioEl = useRef(null);

    function play() {
        audioEl.current.play();
        dispatch({ type: "SET_DISPLAY", display: audioEl.current.src });
    }

    function keyPress(e) {
        if (e.code.toLowerCase() === 'key' + info.key.toLowerCase()) {
            play();
        }
    }

    useEffect(() => {
        document.addEventListener('keypress', keyPress)

        return () => {
            document.removeEventListener('keypress', keyPress)
        }
    }, []);


    return (
        <button onClick={play} className="drum-pad" id={info.sound}>
            { info.key }
            <audio className="clip" src={info.sound} id={info.key} ref={audioEl} />
        </button>
    )
}

export default connect()(DrumPad);
