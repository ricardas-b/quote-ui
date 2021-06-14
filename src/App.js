import React from "react";

import AboutCard from "./components/AboutCard";
import RandomCard from "./components/RandomCard";
import SearchCard from "./components/SearchCard";
import NavigationPanel from "./components/NavigationPanel";

import './static/font-awesome/css/font-awesome.min.css';

import "./static/custom/css/App.css";
import "./static/custom/css/ReactTagAutocomplete.css";


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {activeCard: "random"};
		this.handleCardChange = this.handleCardChange.bind(this);
		this.navigationPanelComponent = React.createRef();
	}

	componentDidMount() {
		this.setState({activeCard: "random"});
	}

	handleCardChange(cardName) {
		this.setState({activeCard: cardName});
		this.navigationPanelComponent.current.changeActiveCard(cardName);
	}

	render() {
		return (
			<div className="app">
				<div className="card">
					<NavigationPanel ref={this.navigationPanelComponent} activeCard={this.state.activeCard} onCardChange={this.handleCardChange}/>
					<div className="card-content">
						{(this.state.activeCard === "about") && <AboutCard />}
						{(this.state.activeCard === "random") && <RandomCard />}
						{(this.state.activeCard === "search") && <SearchCard />}
					</div>
				</div>
			</div>
		);
	}
}


export default App;
