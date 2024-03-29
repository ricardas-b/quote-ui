import React from "react";

import { QuoteSearchForm } from "./QuoteSearchForm";


class SearchCard extends React.Component {
    render() {
        return (
            <div className="search-card">
                <h2 className="card-caption">Search for Quotes Using Tags</h2>
                <div className={"inside-card-separator-15"}></div>
                <QuoteSearchForm />
            </div>
        );
    }
}


export { SearchCard };