import React from "react";
import Label from "./Label";
import RANDOM_QUOTE_URL from "./settings";
import './RandomQuoteCard.css';


async function fetchRandomQuote() {
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


class RandomQuoteCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: "",
            book: "",
            author: "",
            date: "",
            tags: [],
            id: "",
        };
    }

    componentDidMount() {
        fetchRandomQuote.call(this);   // Two ways to pass context (<this>) to a function: use either <call> or <apply>
    }

    renderLabelComponents(tags){
        return tags.map(item => <Label tagText={item.tag} key={item.id}/>);
    }

    render() {
        const { quote, book, author, date, tags, id } = this.state;

        return (
            <div className="card">
                <div className="card-content">

                    <h1>A Brief Episode from Everyday Life In Soviet Times</h1>
                    <div className="subtitle">Random Quote | Search | About</div>

                    <div className="next-quote">
                        <button className="button" type="button" onClick={() => fetchRandomQuote.call(this)}>Next</button>
                    </div>

                    <br />
                    <div className="card-details">
                        <div className="card-details-inner">
                            <div className="options">
                                <div className="book-details">{book}</div>
                                <div className="author-details">{author}</div>
                                <div className="date-details">{date}</div>
                                <div className="tag-details">Tags: {this.renderLabelComponents(tags)}</div>
                            </div>
                        </div>
                    </div>

                    <br />
                    <p className="quote-text">
                        {quote}
                    </p>

                    <div className="url-details"><a href={"http://127.0.0.1:8000/api/v1/quotes/" + id}>{"http://127.0.0.1:8000/api/v1/quotes/" + id}</a></div>

                </div>
            </div>
        );
    }
}


export default RandomQuoteCard;