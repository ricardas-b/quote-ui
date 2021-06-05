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

                    <div>
                        <div>
                            API starting point:
                            <div className="url-details">
                                <a href="http://127.0.0.1:8000/api/v1/quotes/">
                                    http://127.0.0.1:8000/api/v1/quotes <i className="fa fa-external-link-square" aria-hidden="true"></i>&nbsp;
                                </a>
                            </div>
                        </div>

                        <br />
                        <div>
                            API Documentation:
                            <div className="url-details">
                                <a href="file:///schema.txt">OpenAPI Schema <i className="fa fa-external-link-square" aria-hidden="true"></i>&nbsp;</a>
                            </div>
                        </div>

                        <br />
                        <div>
                            Database File:
                            <div className="url-details">
                                <a href="file:///db.sqlite3">SQLite DB <i className="fa fa-external-link-square" aria-hidden="true"></i>&nbsp;</a>
                            </div>
                        </div>

                        <br />
                        <div>
                            CORS: Enabled
                            <div></div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}


export default AboutCard;