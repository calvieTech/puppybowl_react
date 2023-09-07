import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/style.css";

function PuppyPlayerPage() {
	const id = useParams().id;
	const [puppy, setPuppy] = useState(null);
	console.log(`id:`, id);

	useEffect(() => {
		const getAPuppyById = async () => {
			const response = await fetch(
				`https://fsa-puppy-bowl.herokuapp.com/api/2307-FSA-ET-WEB-FT/players/${id}`
			);
			const data = await response.json();
			const player = data.data.player;
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
					<div className="puppy__content">
						<h2>ID: {puppy.id}</h2>
						<h3>Breed: {puppy.breed}</h3>
						<h4>Status: {puppy.status}</h4>
						<h5>Team ID: {puppy.teamId}</h5>
					</div>
					<Link
						className="puppy_backToAllPlayers"
						to={"/puppybowl_react"}>
						Back To All Players
					</Link>
				</div>
			)}
		</>
	);
}

export default PuppyPlayerPage;
