import React from "react";

import { Author } from "./Author";
import { Book } from "./Book";
import { ExternalLink } from "./ExternalLink";
import { TagLabelList } from "./TagLabelList";
import { BASE_QUOTE_URL } from "../settings";


class Quote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props,
            isLoaded: false
        };
    }

    async fetchData(quoteId) {
        await fetch(BASE_QUOTE_URL + quoteId)
            .then(result => result.json())
            .then(result => {this.setState({
                ...result,
                isLoaded: true
            })});
    }

    componentDidMount() {
        this.fetchData(this.state.id);
    }

    render() {
        if (this.state.isLoaded) {
            const bookId = this.state.book.split("/").reverse()[1];
            const authorId = this.state.author.split("/").reverse()[1];

            return (
                <div className={"quote-component"}>
                    <Book id={bookId}/>
                    <Author id={authorId}/>
                    <div className="date-details">{this.state.date}</div>
                    <TagLabelList tags={this.state.tags}/>
                    <div className={"inside-card-separator-15"}></div>
                    <p className="quote-text" style={{columnCount: this.state.text.split(" ").length > 30 ? 2 : 1}}>{this.state.text}</p>   {/* Reduce text column count of short quotes to just 1 column to improve visual layout */}
                    <ExternalLink url={(BASE_QUOTE_URL + this.state.id)} text={"Resource Link"}/>
                </div>
            );
        } else {
            return ( <div>Loading...</div> );
        }
    }
}


export { Quote };