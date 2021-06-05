import React from "react";
import RandomQuoteCard from "./RandomQuoteCard";
import AboutCard from "./AboutCard";
import renderCard from "./utils";


class SearchQuoteCard extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <div>
                        <button className="nav-button" type="button" onClick={() => renderCard(<RandomQuoteCard />)}>Random</button>&nbsp;
                        <button className="nav-button nav-button-active" type="button">Search</button>&nbsp;
                        <button className="nav-button" type="button" onClick={() => renderCard(<AboutCard />)}>About</button>
                    </div>

                    <hr className="nav-separator"/>
                    <br />

                    <div>Search tab. TBD</div>
                </div>
            </div>
        );
    }
}


export default SearchQuoteCard;