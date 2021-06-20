import React from "react";


class Label extends React.Component {
    render() {
        return (
            <span className="label label-info">{this.props.name}</span>
        );
    }
}


export { Label };