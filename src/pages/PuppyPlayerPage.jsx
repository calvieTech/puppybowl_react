import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/style.css";

function PuppyPlayerPage() {
	const id = useParams().id;
	const [puppy, setPuppy] = useState(null);
	console.log(`id:`, id);

	useEffect(() => {
		const getAPuppyById = async () => {
			const response = await fetch(
				`https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT/players/${id}`
			);
			const data = await response.json();
			console.log(response);
			const player = data.data.player;
			console.log(player);
			setPuppy(player);
		};

		getAPuppyById();
	}, [id]);

	return (
		<>
			{puppy && (
				<div className="puppy__player">
					<h2 className="puppy__title">{puppy.name}</h2>
					<img
						src={puppy.imageUrl}
						width={250}
						alt=""
					/>
					<h3>Breed: {puppy.breed}</h3>
					<h4>Status: {puppy.status}</h4>
					<h5>Team ID: {puppy.teamId}</h5>
					<button className="puppy_backToAllPlayers">
						Back To All Players
					</button>
				</div>
			)}
		</>
	);
}

export default PuppyPlayerPage;
