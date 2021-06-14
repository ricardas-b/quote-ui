import React from 'react';
import ReactTags from 'react-tag-autocomplete';

import { QuoteList } from './QuoteList';
import { STARTS_WITH_TAGS_URL, TAGGED_QUOTE_URL } from "../settings";




class QuoteSearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            substring: '',
            tags: [],
            suggestions: [],
            quoteIds: []
        };

        this.reactTags = React.createRef()
    }

    handleTagSelectionChange(tags) {
        let tagIds = tags.map(tag => tag.id).join(",");

        fetch(TAGGED_QUOTE_URL + tagIds)
            .then(result => result.json())
            .then(result => {
                const quoteIds = result.results.map(quote => quote.id);
                this.setState({
                    tags: tags,
                    quoteIds: quoteIds,
                });
            })
    }

    onDelete(i) {
        const tags = this.state.tags.slice(0)
        tags.splice(i, 1)
        this.handleTagSelectionChange(tags);
    }

    onAddition(tag) {
        const tags = [].concat(this.state.tags, tag)
        this.handleTagSelectionChange(tags);
    }

    async onInput(query) {
        await fetch(STARTS_WITH_TAGS_URL + query)
            .then(result => result.json())
            .then(tagList => {
                // Filter out suggested tags that might already be selected
                let newTagSuggestions = tagList.results;
                let currentTags = this.state.tags;
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

                this.setState({ suggestions: suggestionsWithoutDuplicates })
            });
    }

    render() {
        return (
            <div>
                <form onSubmit={null}>
                    <label>
                        Tags:
                        <ReactTags
                            ref={this.reactTags}
                            tags={this.state.tags}
                            suggestions={this.state.suggestions}
                            onDelete={this.onDelete.bind(this)}
                            onAddition={this.onAddition.bind(this)}
                            onInput={this.onInput.bind(this)}
                            minQueryLength={1}
                            maxSuggestionsLength={25}
                        />
                        <br/>
                    </label>
                </form>
                <QuoteList quoteIds={this.state.quoteIds} />
            </div>
        );
    }
}


export default QuoteSearchForm;