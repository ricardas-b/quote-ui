import React from "react";
import { BASE_AUTHOR_URL, BASE_BOOK_URL, BASE_QUOTE_URL } from "./settings";


class Label extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ...props };
    }

    render() {
        return (
            <span className="label label-info">{this.state.name}</span>
        );
    }
}


class LabelList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ...props };
    }

    render() {
        return (
            <p className="tag-details">{this.state.tags.map(tag => <Label key={tag.id} name={tag.name}/>)}</p>
        );
    }
}


class ExternalLink extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ...props };
    }

    render() {
        return (
            <div className="external-link">
                <a href={this.state.url}>
                    {this.state.url}
                    <span> </span>
                    <i className="fa fa-external-link-square" aria-hidden="true"></i>
                </a>
            </div>
        );
    }
}


class Book extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ...props };
    }

    async fetchData(bookId) {
        await fetch(BASE_BOOK_URL + bookId)
            .then(result => result.json())
            .then(result => { this.setState({...result})
            });
    }

    componentDidMount() {
        this.fetchData(this.state.id);
    }

    render() {
        return (
            <div className="book-details">{this.state.title}</div>
        );
    }
}


class Author extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ...props };
    }

    async fetchData(authorId) {
        await fetch(BASE_AUTHOR_URL + authorId)
            .then(result => result.json())
            .then(result => { this.setState({ ...result })});
    }

    componentDidMount() {
        this.fetchData(this.state.id);
    }

    render() {
        const firstName = this.state.first_name;
        const middleName = this.state.middle_name;
        const lastName = this.state.last_name;
        const fullName = `${firstName}${middleName ? (" " + middleName) : ""} ${lastName}`;

        return (
            <div className="author-details">{fullName}</div>
        );
    }
}


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



export { Quote, QuoteList, updateQuoteList };

