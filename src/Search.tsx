import React, { useState } from "react";
import axios from "axios";

export default function InputForm() {

	const [searchTerm, setSearchTerm] = useState("");
	const [isLoading, setIsloading] = useState(false);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsloading(true);
		const { data } = await axios.get(
			"https://paper-scrape.fly.dev/?search=" + searchTerm
		);
        console.log(data);
        
        setIsloading(false);
        
	};
	return isLoading ? (
		<p>searching for "{searchTerm}"</p>
	) : (
		<form onSubmit={(e) => handleSubmit(e)}>
			<label>
				Search the Front Pages:
				<input
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
			</label>
			<input type="submit" value="Submit" />
		</form>
	);
}
