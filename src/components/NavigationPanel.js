import React from "react";
import renderCard from "../utils";
import RandomQuoteCard from "../RandomQuoteCard";
import AboutCard from "../AboutCard";


class NavigationPanel extends React.Component {
    constructor(props) {
        super(props);
        console.log("NavigationPanel, constructor, props");
        console.log(props)
        this.state = {activeCard: props.activeCard};
        console.log("NavigationPanel, constructor, state");
        console.log(this.state);
        console.log("-----------------------------");
    }

    changeActiveCard(newActiveCard) {
        this.setState({activeCard: newActiveCard});
    }

    render() {
        let randomButton, searchButton, aboutButton;

        if (this.state.activeCard === "random") {
            randomButton = <button className="nav-button nav-button-active" type="button">Random</button>
        } else {
            randomButton = <button className="nav-button" type="button" onClick={() => this.props.onCardChange("random")}>Random</button>
        }

        if (this.state.activeCard === "search") {
            searchButton = <button className="nav-button nav-button-active" type="button">Search</button>
        } else {
            searchButton = <button className="nav-button" type="button" onClick={() => this.props.onCardChange("search")}>Search</button>
        }

        if (this.state.activeCard === "about") {
            aboutButton = <button className="nav-button nav-button-active" type="button">About</button>
        } else {
            aboutButton = <button className="nav-button" type="button" onClick={() => this.props.onCardChange("about")}>About</button>
        }

        return (
            <div className="navigation-panel" >
                {randomButton}
                {searchButton}
                {aboutButton}
                <hr className="nav-separator"/>
            </div>
        );
    }
}


export default NavigationPanel;