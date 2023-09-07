import React, { useState, useEffect } from "react";
import "../styles/style.css";
import LoadingGif from "../assets/loading2.gif";
import PuppyPlayer from "./PuppyPlayer";

function PuppyBowl() {
	const [puppies, setPuppies] = useState();
	const [isLoading, setIsLoading] = useState(true);
	const [searchPuppy, setSearchPuppy] = useState("");

	useEffect(() => {
		const getAllPuppies = async () => {
			setIsLoading(true);
			const response = await fetch(
				"https://fsa-puppy-bowl.herokuapp.com/api/2307-FSA-ET-WEB-FT/players"
			);
			const data = await response.json();
			const players = data.data.players;
			return players;
		};

		getAllPuppies()
			.then((response) => {
				setPuppies(response);
				setIsLoading(false);
			})
			.catch((err) => {
				console.error(err.message);
				throw new Error(err.message);
			});
	}, []);

	if (isLoading) {
		return <h1>{<img src={LoadingGif} />}</h1>;
	}

	const filteredPuppies = puppies.filter(
		(puppy) => puppy.name === searchPuppy
	);

	return (
		<div id="puppy_bowl">
			<h1 className="puppy__header">Puppy Bowl</h1>
			<div className="puppy__search">
				<label htmlFor="puppySearch">
					Search for Puppy:
				</label>
				<input
					type="text"
					id="puppySearch"
					value={searchPuppy}
					onChange={(e) => setSearchPuppy(e.target.value)}
				/>
				<button onClick={() => setSearchPuppy("")}>
					Clear
				</button>
			</div>
			{!searchPuppy
				? puppies.map((puppy) => {
						return (
							<div
								key={puppy.id}
								className="puppy__player">
								<PuppyPlayer puppy={puppy} />
							</div>
						);
				  })
				: filteredPuppies.map((puppy) => {
						return (
							<div
								key={puppy.id}
								className="puppy__player">
								<PuppyPlayer puppy={puppy} />
							</div>
						);
				  })}
		</div>
	);
}

export default PuppyBowl;
