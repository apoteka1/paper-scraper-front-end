import React, { useState } from "react";
import "./Search.css"
import axios from "axios";

export default function Search(props: any) {
	const { setData } = props;
	const [searchTerm, setSearchTerm] = useState("");
	const [isLoading, setIsloading] = useState(false);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsloading(true);
		const { data } = await axios.get(
			"https://paper-scrape.fly.dev/?search=" + searchTerm
		);
		setData(data);
		setIsloading(false);
	};
	return isLoading ? (
		<p id="loading">searching for "{searchTerm}"</p>
	) : (
		<form onSubmit={(e) => handleSubmit(e)}>
			<label>
				Search the Front Pages for mentions of:
				<span> </span>
				<input
                    id="input"
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
			</label>
			<input id="submit" type="submit" value="Submit" />
		</form>
	);
}
