import React from "react";


class Label extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ...props };
    }

    render() {
        return (
            <span className="label label-info">{this.state.name}</span>
        );
    }
}


export { Label };