import React from "react";
import { BASE_AUTHOR_URL, BASE_BOOK_URL, BASE_QUOTE_URL } from "./settings";


class Label extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: props.data };
    }

    render() {
        return (
            <span className="label label-info">{this.state.data.name}</span>
        );
    }
}


class LabelList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: props.data };
    }

    render() {
        return (
            <p className="tag-details">{this.state.data.map(data => <Label key={data.id} data={data}/>)}</p>
        );
    }
}


class ExternalLink extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: props.data };
    }

    render() {
        return (
            <div className="external-link">
                <a href={this.state.data.url}>
                    {this.state.data.url}
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
        this.state = { data: props.data };
    }

    async fetchData(bookId) {
        await fetch(BASE_BOOK_URL + bookId)
            .then(result => result.json())
            .then(result => { this.setState({ data: result })
            });
    }

    componentDidMount() {
        this.fetchData(this.state.data.id);
    }

    render() {
        return (
            <div className="book-details">{this.state.data.title}</div>
        );
    }
}


class Author extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: props.data };
    }

    async fetchData(authorId) {
        await fetch(BASE_AUTHOR_URL + authorId)
            .then(result => result.json())
            .then(result => { this.setState({ data: result })});
    }

    componentDidMount() {
        this.fetchData(this.state.data.id);
    }

    render() {
        const firstName = this.state.data.first_name;
        const middleName = this.state.data.middle_name;
        const lastName = this.state.data.last_name;
        const fullName = `${firstName}${middleName ? (" " + middleName) : ""} ${lastName}`;

        return (
            <div className="author-details">{fullName}</div>
        );
    }
}


// TODO: Delete
var quoteStateTemplate = {
    id: 0,
    text: "",
    author: "/authors/0/",
    book: "/books/0/",
    date: "0000-00-00",
    tags: []
};


class Quote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            isLoaded: false
        };
    }

    async fetchData(quoteId) {
        await fetch(BASE_QUOTE_URL + quoteId)
            .then(result => result.json())
            .then(result => {this.setState({
                data: result,
                isLoaded: true
            })});
    }

    componentDidMount() {
        this.fetchData(this.state.data.id);
    }

    render() {
        if (this.state.isLoaded) {
            const bookId = this.state.data.book.split("/").reverse()[1];
            const authorId = this.state.data.author.split("/").reverse()[1];

            return (
                <div>
                    <Book data={{id: bookId}}/>
                    <Author data={{id: authorId}}/>
                    <div className="date-details">{this.state.data.date}</div>
                    <LabelList data={this.state.data.tags}/>
                    <p className="quote-text" style={{columnCount: this.state.data.text.split(" ").length > 30 ? 2 : 1}}>{this.state.data.text}</p>
                    <ExternalLink data={{url: (BASE_QUOTE_URL + this.state.data.id)}}/>
                </div>
            );
        } else {
            return ( <div>Loading...</div> );
        }
    }
}


function updateQuoteList(quoteIds) {
    this.setState({data: {quoteIds: quoteIds}});
}

class QuoteList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            isLoaded: false
        };

        updateQuoteList = updateQuoteList.bind(this);
    }

    render() {
        return (
            <div>
                {this.state.data.quoteIds.length > 0 ? <h2>Results</h2> : ""}


                {this.state.data.quoteIds
                    .map((id) => <Quote key={id} data={{id: id}}/>)
                    .map((item, index) => [index > 0 && <div><br/><br/><br/><br/></div>, item ])
                }
            </div>
        );
    }


}



export { Quote, QuoteList, updateQuoteList };

