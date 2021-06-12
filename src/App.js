import React from "react";

import AboutCard from "./components/AboutCard";
import RandomCard from "./components/RandomCard";
import SearchCard from "./components/SearchCard";
import NavigationPanel from "./components/NavigationPanel";


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {activeCard: "random"};
		this.handleCardChange = this.handleCardChange.bind(this);
		this.navigationPanelComponent = React.createRef();
	}

	componentDidMount() {
		console.log("App, componentDidMount, state");
		console.log(this.state);
		this.setState({activeCard: "random"});
		console.log(this.state);
		console.log("-----------------------------");
	}

	handleCardChange(cardName) {
		console.log("App, handleCardChange, cardName: " + cardName);
		console.log("App, handleCardChange, state");
		console.log(this.state);
		this.setState({activeCard: cardName});
		this.navigationPanelComponent.current.changeActiveCard(cardName);
		console.log(this.state);
		console.log("-----------------------------");
	}

	render() {
		console.log("App, render, ac: " + this.state.activeCard);
		console.log("-----------------------------");

		return (
			<div className="App">
				<NavigationPanel ref={this.navigationPanelComponent} activeCard={this.state.activeCard} onCardChange={this.handleCardChange}/>
				{(this.state.activeCard === "about") && <AboutCard />}
				{(this.state.activeCard === "random") && <RandomCard />}
				{(this.state.activeCard === "search") && <SearchCard />}
			</div>
		);
	}
}


export default App;
