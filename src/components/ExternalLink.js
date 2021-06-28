import React from "react";


class ExternalLink extends React.Component {
    render() {
        return (
            <div className="external-link">
                <a href={this.props.url}>
                    {this.props.text}
                    <span>&nbsp;</span>
                    <i className="fa fa-external-link-square" aria-hidden="true"></i>
                </a>
            </div>
        );
    }
}


export { ExternalLink };