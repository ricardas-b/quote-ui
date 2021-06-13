import React from "react";
import {BASE_AUTHOR_URL} from "../settings";


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


export { Author };