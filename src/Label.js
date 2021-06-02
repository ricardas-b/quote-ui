import React from "react";
import './Label.css';


class Label extends React.Component {
    /* Used to represent content tags */

    render() {
        return (
            <span className="label label-info"> {this.props.tagText} </span>
        );
    }
}


export default Label;
