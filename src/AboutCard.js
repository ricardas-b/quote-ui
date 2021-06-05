import React from "react";
import RandomQuoteCard from "./RandomQuoteCard";
import SearchQuoteCard from "./SearchQuoteCard";
import renderCard from "./utils";


class AboutCard extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <div>
                        <button className="nav-button" type="button" onClick={() => renderCard(<RandomQuoteCard />)}>Random</button>&nbsp;
                        <button className="nav-button" type="button" onClick={() => renderCard(<SearchQuoteCard />)}>Search</button>&nbsp;
                        <button className="nav-button nav-button-active" type="button">About</button>
                    </div>

                    <hr className="nav-separator"/>
                    <br />

                    <div>About tab. TBD</div>
                </div>
            </div>
        );
    }
}


export default AboutCard;