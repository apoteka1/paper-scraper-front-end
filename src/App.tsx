import "./App.css";
import Search from "./Search";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>Paper Scraper</h1>
				<h3 className="lighter-text">what the papers are talking about</h3>
			</header>
			<Search />
		</div>
	);
}

export default App;
