import React from "react";
import { Quote } from "./Quote";


class QuoteList extends React.Component {
    render() {
        return (
            <div>
                {this.props.quoteIds.length > 0 ? <h2>Results</h2> : ""}
                {this.props.quoteIds
                    .map((id) => <Quote key={id} id={id}/>)
                }
            </div>
        );
    }
}


export { QuoteList };