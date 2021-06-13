import React from "react";

import { Label } from "./Label";


class LabelList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ...props };
    }

    render() {
        return (
            <p className="tag-details">{this.state.tags.map(tag => <Label key={tag.id} name={tag.name}/>)}</p>
        );
    }
}


export { LabelList };