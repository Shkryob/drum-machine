import logo from './logo.svg'
import './App.css'
import DrumPad from "./DrumPad";
import config from "./DrumConfig.json";
import { connect } from "react-redux";

const pads = config.drums;

function App({display}) {
    return (
        <div className="App">
            <header className="App-header">
                <div id="drum-machine">
                    { pads.map((pad) => <DrumPad key={pad.key} info={pad} />) }

                    <div id="display">
                        { display }
                    </div>
                </div>
            </header>
        </div>
    )
}

const mapStateToProps = (state) => ({
    display: state.display,
});

export default connect(mapStateToProps)(App);
