import React from "react";
import Label from "./Label";
import RANDOM_QUOTE_URL from "./settings";
import './static/font-awesome/css/font-awesome.min.css';
import './RandomQuoteCard.css';
import AboutCard from "./AboutCard";
import renderCard from "./utils";
import SearchQuoteCard from "./SearchQuoteCard";


class RandomQuoteCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: "Loading...",
            book: "",
            author: "",
            date: "",
            tags: [],
            id: "",
        };
    }

    async fetchRandomQuote() {
        // Get a random quote from API
        const quote = await fetch(RANDOM_QUOTE_URL).then(result => result.json());
        const author = await fetch(quote.author).then(result => result.json());
        const book = await fetch(quote.book).then(result => result.json());

        // Update React component state
        this.setState({
            quote: quote.text,
            book: book.title,
            author: `${author.first_name}${author.middle_name ? (" " + author.middle_name) : ""} ${author.last_name}`,
            date: quote.date,
            tags: quote.tags,
            id: quote.id
        });
    }

    componentDidMount() {
        this.fetchRandomQuote();
    }

    renderLabelComponents(tags){
        return tags.map(item => <Label tagText={item.tag} key={item.id}/>);
    }

    render() {
        const { quote, book, author, date, tags, id } = this.state;

        return (
            <div className="card">
                <div className="card-content">

                    <div>
                        <button className="nav-button nav-button-active" type="button">Random</button>&nbsp;
                        <button className="nav-button" type="button" onClick={() => renderCard(<SearchQuoteCard />)}>Search</button>&nbsp;
                        <button className="nav-button" type="button" onClick={() => renderCard(<AboutCard />)}>About</button>
                    </div>

                    <hr className="nav-separator"/>
                    <br />

                    <div className="another-quote">
                        <button className="button" type="button" onClick={() => this.fetchRandomQuote()}>Another</button>
                    </div>

                    <br />
                    <div className="card-details">
                        <div className="card-details-inner">
                            <div className="options">
                                <div className="book-details">{book}</div>
                                <div className="author-details">{author}</div>
                                <div className="date-details">{date}</div>
                                <div className="tag-details">{this.renderLabelComponents(tags)}</div>
                            </div>
                        </div>
                    </div>

                    <br />
                    <p className="quote-text">
                        {quote}
                    </p>

                    <div className="url-details">
                        <a href={"http://127.0.0.1:8000/api/v1/quotes/" + id}>
                            {"http://127.0.0.1:8000/api/v1/quotes/" + id} <i className="fa fa-external-link-square" aria-hidden="true"></i>&nbsp;

                        </a>
                    </div>

                </div>
            </div>
        );
    }
}


export default RandomQuoteCard;