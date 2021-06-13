import React from "react";

import QuoteSearchForm from "./QuoteSearchForm";


class SearchCard extends React.Component {
    render() {
        return (
            <div className="search-card">
                <div>
                    <QuoteSearchForm />
                </div>
            </div>
        );
    }
}


export default SearchCard;