import React from 'react';

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            date: new Date()
        }
    }

    componentWillMount() {
        setInterval(() => this.setState({ date: new Date() }), 1000);
    }

    render () {
        return (
            <div style={{ fontSize: 40 }}>
                {this.state.date.toLocaleTimeString()}
            </div>
        );
    }
}
