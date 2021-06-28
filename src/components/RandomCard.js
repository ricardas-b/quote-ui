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
            <>
                <h2 className="card-caption">Random Quote Card Caption: TBD</h2>
                <div className={"inside-card-separator-15"}></div>
                <button className="custom-button" type="button" onClick={() => this.fetchData()}>
                    Another <i className="fa fa-random"></i>
                </button>
                <div className={"inside-card-separator-60"}></div>
                {quoteComponent}
            </>
        );
    }
}


export default RandomCard;