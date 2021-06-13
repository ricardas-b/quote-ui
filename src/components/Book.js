import React from "react";
import {BASE_BOOK_URL} from "../settings";


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


export { Book };