import React from "react";
import Label from "./Label";


class Quote extends React.Component {
    renderLabelComponents(tags){
        return tags.map(item => <Label tagText={item.tag} key={item.id}/>);
    }

    render() {
        return (
            <div>
                <div className="card-details">
                    <div className="card-details-inner">
                        <div className="options">
                            <div className="book-details">{this.props.book}</div>
                            <div className="author-details">{this.props.author}</div>
                            <div className="date-details">{this.props.date}</div>
                            <div className="tag-details">{this.renderLabelComponents(this.props.tags)}</div>
                        </div>
                    </div>
                </div>

                <br />
                <p className="quote-text" style={{columnCount: this.props.quote.split(" ").length > 30 ? 2 : 1}}>
                    {this.props.quote}
                </p>

                <div className="external-link">
                    <a href={"http://127.0.0.1:8000/api/v1/quotes/" + this.props.id}>
                        {"http://127.0.0.1:8000/api/v1/quotes/" + this.props.id}
                        <i className="fa fa-external-link-square" aria-hidden="true"></i>&nbsp;
                    </a>
                </div>
            </div>
        );
    }
}


export {Quote};
