import React from "react";
import RandomQuoteCard from "./RandomQuoteCard";
import AboutCard from "./AboutCard";
import renderCard from "./utils";
import QuoteSearchForm from "./QuoteSearchForm";

import { Quote, QuoteList } from "./ComponentLibrary";


class QuoteSearchCard extends React.Component {
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

                    <div>
                        <QuoteSearchForm />
                    </div>

                    <br />
                    <br />
                    <br />
                    <div id={"quotecontainer"}>
                        <QuoteList quoteIds={[]}/>
                    </div>



                </div>
            </div>
        );
    }
}


export default QuoteSearchCard;