import React from 'react';
import ReactTags from 'react-tag-autocomplete';

import { QuoteList } from './QuoteList';
import { TagLabelList } from './TagLabelList';
import { STARTS_WITH_TAGS_URL, TAGGED_QUOTE_URL, TAGS_URL } from "../settings";



class QuoteSearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTags: [],
            suggestedTags: [],
            quoteIds: [],
            remainingTags: []   // Considering the tags that are already selected, keep the list or the remaining tags that would still give non-empty quote search results
        };

        this.reactTags = React.createRef()
    }

    // DEV
    async fetchPaginatedData(url, previousData=[]) {
        return fetch(url)
            .then(response => response.json())
            .then(response => {
                //const newData = response.results.map(item => item.name);
                const newData = response.results;
                const accumulatedData = [...previousData, ...newData];

                if (response.next !== null) {
                    return this.fetchPaginatedData(response.next, accumulatedData);
                }

                console.log(accumulatedData);
                return accumulatedData;
            });
    }

    componentDidMount() {
        this.fetchPaginatedData(TAGS_URL).then(data => this.setState({remainingTags: data}));
    }
    // /DEV

    handleTagSelectionChange(tags) {
        let tagIds = tags.map(tag => tag.id).join(",");

        fetch(TAGGED_QUOTE_URL + tagIds)
            .then(result => result.json())
            .then(result => {
                const quoteIds = result.results.map(quote => quote.id);
                this.setState({
                    selectedTags: tags,
                    quoteIds: quoteIds
                });
            });
    }

    onDelete(i) {
        const tags = this.state.selectedTags.slice(0)
        tags.splice(i, 1)
        this.handleTagSelectionChange(tags);
    }

    onAddition(tag) {
        const tags = [].concat(this.state.selectedTags, tag)
        this.handleTagSelectionChange(tags);
    }

    async onInput(query) {
        await fetch(STARTS_WITH_TAGS_URL + query)
            .then(result => result.json())
            .then(tagList => {
                // Filter out suggested tags that might already be selected
                let newTagSuggestions = tagList.results;
                let currentTags = this.state.selectedTags;
                let suggestionsWithoutDuplicates = [];

                for (let i=0; i<newTagSuggestions.length; i++) {
                    let newTag = newTagSuggestions[i];
                    let isDuplicate = false;

                    for (let j=0; j<currentTags.length; j++) {
                        let currentTag = currentTags[j];

                        if (newTag.name === currentTag.name) {
                            isDuplicate = true;
                        }
                    }

                    if (!isDuplicate) {
                        suggestionsWithoutDuplicates.push(newTag);
                    }
                }

                this.setState({ suggestedTags: suggestionsWithoutDuplicates })
            });
    }

    render() {
        return (
            <div>
                Selected tags:
                <div className={"inside-card-separator-15"}></div>
                <form onSubmit={null} style={{width: "100%"}}>
                    <label>
                        <ReactTags
                            ref={this.reactTags}
                            tags={this.state.selectedTags}
                            suggestions={this.state.suggestedTags}
                            onDelete={this.onDelete.bind(this)}
                            onAddition={this.onAddition.bind(this)}
                            onInput={this.onInput.bind(this)}
                            minQueryLength={1}
                            maxSuggestionsLength={25}
                        />
                        <br/>
                    </label>
                </form>

                <details open={false}>
                    <summary>Possible tags</summary>
                    <TagLabelList tags={this.state.remainingTags}/>
                </details>

                <div className={"inside-card-separator-30"}></div>

                <QuoteList quoteIds={this.state.quoteIds} />
            </div>
        );
    }
}


export { QuoteSearchForm };