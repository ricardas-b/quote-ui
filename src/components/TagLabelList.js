import React from "react";

import { TagLabel } from "./TagLabel";


class TagLabelList extends React.Component {
    render() {
        return (
            <div className={"tag-label-list"}>
                {this.props.tags.map(tag => <TagLabel key={tag.id} name={tag.name}/>)}
            </div>
        );
    }
}


export { TagLabelList };