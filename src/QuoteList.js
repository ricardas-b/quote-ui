import React from "react";
import { Quote } from "./Quote";
import Label from "./Label";


class QuoteList extends React.Component {
    renderQuoteComponents(quotes){
        return quotes.map(item =>
            <Quote
                book={item.book}
                author={item.author}
                date={item.date}
                tags={item.tags}
                quote={this.quote}
                id={this.id}
            />
        );
    }
    return() {
        <div>
            {this.props.quotes}
        </div>
    };
}


export { QuoteList };