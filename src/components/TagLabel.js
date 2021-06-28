import React from "react";


class TagLabel extends React.Component {
    render() {
        return (
            <span className="tag-label">{this.props.name}</span>
        );
    }
}


export { TagLabel };