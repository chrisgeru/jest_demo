import React, {Component} from 'react';
import './App.css';
import {getRandomQuote} from "./Quotes";

export class Home extends React.Component {

    render() {
        return (
            <h1 className="App">
                {this.props.quote}
            </h1>
        )
    }
}

export class App extends Component {

    state = {quote: ""};

    async componentDidMount() {
        const quote = await getRandomQuote();
        this.setState({quote})
    }

    render() {
        return (
            <Home quote={this.state.quote}/>
        );
    }
}
