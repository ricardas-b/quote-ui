import React from "react";
import { Quote } from "./Quote";


function updateQuoteList(quoteIds) {
    this.setState({quoteIds: quoteIds});
}


class QuoteList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props
        };

        updateQuoteList = updateQuoteList.bind(this);
    }

    render() {
        return (
            <div>
                {this.state.quoteIds.length > 0 ? <h2>Results</h2> : ""}
                {this.state.quoteIds
                    .map((id) => <Quote key={id} id={id}/>)
                    .map((item, index) => [index > 0 && <div><br/><br/><br/></div>, item ])
                }
            </div>
        );
    }
}


export { QuoteList, updateQuoteList };