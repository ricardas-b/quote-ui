import React from "react";
import {BASE_QUOTE_URL} from "../settings";


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
                <div>
                    <Book id={bookId}/>
                    <Author id={authorId}/>
                    <div className="date-details">{this.state.date}</div>
                    <LabelList tags={this.state.tags}/>
                    <p className="quote-text" style={{columnCount: this.state.text.split(" ").length > 30 ? 2 : 1}}>{this.state.text}</p>
                    <ExternalLink url={(BASE_QUOTE_URL + this.state.id)}/>
                </div>
            );
        } else {
            return ( <div>Loading...</div> );
        }
    }
}