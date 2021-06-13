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
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onDelete(i) {
        const tags = this.state.tags.slice(0)
        tags.splice(i, 1)
        this.setState({ tags: tags })
        console.log("QuoteSearchForm, onDelete, this.setState");
    }

    onAddition(tag) {
        const tags = [].concat(this.state.tags, tag)
        this.setState({ tags: tags })
        console.log("QuoteSearchForm, onAddition, this.setState");
    }

    async onInput(query) {
        const ttl = await fetch(STARTS_WITH_TAGS_URL + query)
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
                console.log("QuoteSearchForm, onInput, this.setState");
            });
    }

    handleSubmit(event) {
        console.log("QuoteSearchForm, handleSubmit: triggered");
        event.preventDefault();
        let tagIds = this.state.tags.map(tag => tag.id).join(",");

        fetch(TAGGED_QUOTE_URL + tagIds)
            .then(result => result.json())
            .then(result => {
                const quoteIds = result.results.map(quote => quote.id);
                console.log("QuoteSearchForm, handleSubmit: quoteIds fetched");
                console.log(quoteIds);
                console.log("##############################");
                this.setState({quoteIds: quoteIds});
                console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");

            })
    }

    render() {
        console.log("QuoteSearchForm, render: triggered");
        console.log("QuoteSearchForm, this.state.quoteIds:");
        console.log(this.state.quoteIds);
        console.log("---------------------------");
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
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

                    <input className="button" type="submit" value="Search"/>
                </form>
                <QuoteList quoteIds={this.state.quoteIds} />
            </div>
        );
    }
}


export default QuoteSearchForm;