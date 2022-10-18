import React from "react";
import "./Chart.css";

const ListItem = (entry: [string, any]) => {
	const [title, count] = entry;
	if (typeof count === "number") {
		return (
			<p key={title}>
				{title}: {count}
			</p>
		);
	} else {
		return <p key={title}>{title}: error</p>;
	}
};

export default function Chart(props: any) {
	const { data } = props;
	const { searchTerm, counts } = data;

	return (
		<div className="container">
			<h3>{searchTerm}</h3>
			<div>
				{Object.entries(counts).map((x) => {
					return ListItem(x);
				})}
			</div>
		</div>
	);
}
