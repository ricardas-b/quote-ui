import React from "react";
import './App.css';



async function fetchRandomQuote() {
	// Get data from API
	const quote = await fetch("http://127.0.0.1:8000/api/v1/quotes/random/")
		.then(async result => {
			// Wait for data to be fetched so it can be modified. Without the
			// internal async/await tag objects get accessed before they are
			// even fetched

			var quoteObj = await result.json();
			var tagStrings = [];
			quoteObj.tags.forEach(tagObj => tagStrings.push(tagObj.tag))
			quoteObj.tags = tagStrings.join(", ");
			return quoteObj;
		});
	const author = await fetch(quote.author).then(result => result.json());
	const book = await fetch(quote.book).then(result => result.json());

	// Update React component state
	this.setState({
		quote: quote.text,
		book: book.title,
		author: `${author.first_name}${author.middle_name ? " " + author.middle_name : ""} ${author.last_name}`,
		date: quote.date,
		tags: quote.tags
	});
}



class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			quote: "",
			book: "",
			author: "",
			date: "",
			tags: "",
		};
	}

	componentDidMount() {
		fetchRandomQuote.call(this);   // Two ways to pass context (<this>) to a function: use either <call> or <apply>
	}

	render() {
		const { quote, book, author, date, tags } = this.state;
		
		return (
			<div className="App">
				<div className="random-quote">
					{quote}<br /><br />
					{book}<br />
					{author}<br />
					{date}<br />
					{tags}<br />
				</div>
			</div>
		);
	}
}



export default App;
