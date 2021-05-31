import React from "react";
import './RandomQuoteCard.css';


async function fetchRandomQuote() {
    // Get data from API
    const quote = await fetch("http://127.0.0.1:8000/api/v1/quotes/random/")
        .then(async result => {
            // Wait for data to be fetched so it can be modified. Without the
            // internal async/await tag objects get accessed before they are
            // even fetched

            var quoteObj = await result.json();
            var tagStrings = [];
            quoteObj.tags.forEach(tagObj => tagStrings.push(tagObj.tag))
            quoteObj.tags = tagStrings.join(", ");
            return quoteObj;
        });
    const author = await fetch(quote.author).then(result => result.json());
    const book = await fetch(quote.book).then(result => result.json());

    // Update React component state
    this.setState({
        quote: quote.text,
        book: book.title,
        author: `${author.first_name}${author.middle_name ? " " + author.middle_name : ""} ${author.last_name}`,
        date: quote.date,
        tags: quote.tags,
        id: quote.id
    });
}


class RandomQuoteCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: "",
            book: "",
            author: "",
            date: "",
            tags: "",
            id: "",
        };
    }

    componentDidMount() {
        fetchRandomQuote.call(this);   // Two ways to pass context (<this>) to a function: use either <call> or <apply>
    }

    render() {
        const { quote, book, author, date, tags, id } = this.state;

        return (
            <div className="card">
                <div className="card-content">

                    <h1>A Brief Episode from Everyday Life In Soviet Times</h1>
                    <div className="subtitle">Random Quote</div>
                    <br />
                    <p className="quote-text">
                        {quote}
                    </p>
                    <br />

                    <div className="card-details">
                        <div className="card-details-inner">
                            <div className="options">
                                <div className="book-details">{book}</div>
                                <div className="author-details">{author}</div>
                                <div className="date-details">{date}</div>
                                <div className="tag-details">Tags: {tags}</div>
                                <div className="url-details">URL: {"http://127.0.0.1:8000/api/v1/quotes/" + id}</div>
                            </div>
                            <div className="next-quote">
                                <button className="button" type="button">Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default RandomQuoteCard;