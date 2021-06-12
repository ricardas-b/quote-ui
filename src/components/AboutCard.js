import React from "react";

import { ExternalLink } from "./ExternalLink";


class AboutCard extends React.Component {
    render() {
        return (
            <div className="about-card">
                <div>
                    API starting point:
                    <ExternalLink url={"http://127.0.0.1:8000/api/v1/quotes/"} text={"http://127.0.0.1:8000/api/v1/quotes/"}/>
                </div>
                <br />

                <div>
                    API Documentation:
                    <ExternalLink url={"file:///schema.txt"} text={"OpenAPI Schema"}/>
                </div>
                <br />

                <div>
                    Database File:
                    <ExternalLink url={"file:///db.sqlite3"} text={"SQLite DB"}/>
                </div>
                <br />

                <div>
                    CORS: Enabled
                    <div></div>
                </div>
            </div>
        );
    }
}


export default AboutCard;