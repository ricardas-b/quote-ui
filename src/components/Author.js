import React from "react";

import { BASE_AUTHOR_URL } from "../settings";


class Author extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            first_name: "",
            middle_name: "",
            last_name: ""
        };
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
        const fullName = `${this.state.first_name}${this.state.middle_name ? (" " + this.state.middle_name) : ""} ${this.state.last_name}`;

        return (
            <div className="author-details">{fullName}</div>
        );
    }
}


export { Author };