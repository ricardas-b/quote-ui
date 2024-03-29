import React from "react";

import { ExternalLink } from "./ExternalLink";
import { BASE_QUOTE_URL, STATIC_URL } from "../settings";


class AboutCard extends React.Component {
    render() {
        return (
            <>
                <h2 className="card-caption">About</h2>
                <div>This web-GUI is built on top of Quote API, see API details below</div>
                <div className={"inside-card-separator-60"}></div>


                <div>
                    API entry point:
                    <ExternalLink url={BASE_QUOTE_URL} text={BASE_QUOTE_URL}/>
                </div>
                <br />

                <div>
                    API Documentation:
                    <ExternalLink url={STATIC_URL + "schema.yml"} text={"OpenAPI Schema"}/>
                </div>
                <br />

                <div>
                    Database File:
                    <ExternalLink url={STATIC_URL + "db.sqlite3"} text={"SQLite DB"}/>
                </div>
                <br />

                <div>
                    CORS: Enabled
                    <div></div>
                </div>
            </>
        );
    }
}


export { AboutCard };