import './App.css';
import React from "react";


class App extends React.Component {



    render() {


        return (
            <div className="App" id='drum-machine'>
                <header className="App-header">
                    <p>
                        Drum Machine
                    </p>
                </header>
                <body>
                <DrumMachine/>
                </body>
            </div>
        );
    }
}

class DrumMachine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayContent: 'Initial value',
            drumKeys: [
                {triggerKey: 'Q', id: 'bellHigh'},
                {triggerKey: 'W', id: 'bellLow'},
                {triggerKey: 'E', id: 'closedHat'},
                {triggerKey: 'A', id: 'crash'},
                {triggerKey: 'S', id: 'openHat'},
                {triggerKey: 'D', id: 'rimShot'},
                {triggerKey: 'Z', id: 'snareHigh'},
                {triggerKey: 'X', id: 'snareLow'},
                {triggerKey: 'C', id: 'tamborine'}
            ]
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    handleKeyDown(event) {
        switch (event.key.toUpperCase()) {
            case 'Q':
                console.log('Q pressed');
                document.getElementById(event.key.toUpperCase()).play();
                this.setState({displayContent: event.key})
                break;
            case 'W':
                console.log('W pressed');
                document.getElementById(event.key.toUpperCase()).play();
                this.setState({displayContent: event.key})
                break;
            case 'E':
                console.log('E pressed');
                document.getElementById(event.key.toUpperCase()).play();
                this.setState({displayContent: event.key})
                break;
            case 'A':
                console.log('A pressed');
                document.getElementById(event.key.toUpperCase()).play();
                this.setState({displayContent: event.key})
                break;
            case 'S':
                console.log('S pressed');
                document.getElementById(event.key.toUpperCase()).play();
                this.setState({displayContent: event.key})
                break;
            case 'D':
                console.log('D pressed');
                document.getElementById(event.key.toUpperCase()).play();
                this.setState({displayContent: event.key})
                break;
            case 'Z':
                console.log('Z pressed');
                document.getElementById(event.key.toUpperCase()).play();
                this.setState({displayContent: event.key})
                break;
            case 'X':
                console.log('X pressed');
                document.getElementById(event.key.toUpperCase()).play();
                this.setState({displayContent: event.key})
                break;
            case 'C':
                console.log('C pressed');
                document.getElementById(event.key.toUpperCase()).play();
                this.setState({displayContent: event.key})
                break;
            default:
                break;
        }

    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown)
    }

    handleClick(event){
        console.log(event.target);
        document.getElementById(event.target.innerText).play();
        this.setState({displayContent: event.target.id})
    }

    render() {
        return (
            <div id='drumMachine'>
                <div id='display'>
                    <Display content={this.state.displayContent}/>
                </div>
                <div id='drumPads'>
                    <DrumKeys keyColl={this.state.drumKeys} clickHandler={this.handleClick}/>
                </div>
            </div>
        )
    }

}

class Display extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <p>{this.props.content}</p>
            )
    }

}

class DrumKeys extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {

        const drumKeys = this.props.keyColl.map(element => <DrumKey clickHandler={this.props.clickHandler} keyObj={element}/>)

        return (
            <div className='drum-key-container'>
                {drumKeys}
            </div>
        );
    }
}

class DrumKey extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className='drum-pad' id={this.props.keyObj.id} onClick={this.props.clickHandler}>
                <p>{this.props.keyObj.triggerKey}</p>
                <audio id={this.props.keyObj.triggerKey} className='clip' type='audio/wav' src={process.env.PUBLIC_URL +`/drum-sounds/${this.props.keyObj.id}.wav`}/>
            </div>
        );
    }
}




export default App;
