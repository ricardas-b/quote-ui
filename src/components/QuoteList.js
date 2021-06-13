import React from "react";
import { Quote } from "./Quote";


class QuoteList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props
        };
    }

    render() {
        console.log("QuoteList, render: triggered");
        console.log("QuoteList, render, this.props.quoteIds:");
        console.log(this.props.quoteIds);
        console.log("------------------------------");
        return (
            <div>
                {this.props.quoteIds.length > 0 ? <h2>Results</h2> : ""}
                {this.props.quoteIds
                    .map((id) => <Quote key={id} id={id}/>)
                    .map((item, index) => [index > 0 && <div><br/><br/><br/></div>, item ])
                }
            </div>
        );
    }
}


export { QuoteList };