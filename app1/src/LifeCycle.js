import React from 'react';


export default class App extends React.Component {
    constructor(props) {
        super(props);
        alert("constructor");
    }

    componentWillMount() {
        alert('componentWillMount');
    }

    componentDidMount() {
        alert('componentDidMount');
    }

    render() {
        return (
            <div>'Hello World!'</div>
        )
    }
}