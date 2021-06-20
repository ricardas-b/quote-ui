import React from "react";

import { Label } from "./Label";


class LabelList extends React.Component {
    render() {
        return (
            <p className="tag-details">{this.props.tags.map(tag => <Label key={tag.id} name={tag.name}/>)}</p>
        );
    }
}


export { LabelList };