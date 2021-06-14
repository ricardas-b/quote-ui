import React from "react";

import {Quote} from "./Quote";
import {RANDOM_QUOTE_URL} from "../settings";


class RandomCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {quoteId: null};
    }

    async fetchData() {
        await fetch(RANDOM_QUOTE_URL)
            .then(result => result.json())
            .then(result => {this.setState({quoteId: result.id})});
    }

    componentDidMount() {
        this.fetchData();
    }


    render() {
        let quoteComponent;

        if (this.state.quoteId !== null) {
            const id = this.state.quoteId;
            quoteComponent = <Quote key={id} id={id}/>
        } else {
            quoteComponent = <span>Loading...</span>
        }

        return (
            <div>
                <h2>Random Quote</h2>
                {quoteComponent}
            </div>
        );
    }
}


export default RandomCard;