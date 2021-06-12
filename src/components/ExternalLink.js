import React from "react";


class ExternalLink extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ...props };
    }

    render() {
        return (
            <div className="external-link">
                <a href={this.state.url}>
                    {this.state.text}
                    <span> </span>
                    <i className="fa fa-external-link-square" aria-hidden="true"></i>
                </a>
            </div>
        );
    }
}


export { ExternalLink };