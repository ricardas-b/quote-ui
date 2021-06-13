import React from "react";

import { QuoteList } from "./QuoteList";
import QuoteSearchForm from "./QuoteSearchForm";


class SearchCard extends React.Component {
    render() {
        return (
            <div className="search-card">
                <div>
                    <QuoteSearchForm />
                </div>
                <div>
                    <QuoteList quoteIds={[]} />
                </div>
            </div>
        );
    }
}


export default SearchCard;