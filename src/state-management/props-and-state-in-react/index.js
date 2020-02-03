import React,{Component} from 'react'



class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date(), str:props.name2};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        console.log(">>>>>>>>>")
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
            , str: 'ffffffffffff3'
        });
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                <h2>It is ffff {this.state.str}.</h2>
            </div>
        );
    }
}

class App2 extends Component {
    render() {
        return  <Clock name={"ccccc"} name2={"f44444wedwedwedwe"}/>
    }
}

  export default  App2;