import "./App.css";
import Search from "./Search";
import Chart from "./Chart";
import React, { useState } from "react";

function App() {
	const [data, setData] = useState();

	return (
		<div className="App">
			<header className="App-header ">
				<h1>Paper Scraper</h1>
				<h3 className="lighter-text">what the papers are talking about</h3>
			</header>
			<Search setData={setData} />
			{data && <Chart data={data}/>}
		</div>
	);
}

export default App;
