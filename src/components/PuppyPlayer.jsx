import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function PuppyPlayer({ puppy }) {
	const { id } = puppy;

	return (
		<>
			<h2 className="puppy__title">{puppy.name}</h2>
			<img
				src={puppy.imageUrl}
				width={250}
				alt=""
			/>
			<h3>Breed: {puppy.breed}</h3>
			<h4>Status: {puppy.status}</h4>
			<h5>Team ID: {puppy.teamId}</h5>
			<Link
				className="puppy__info"
				to={`${id}`}>
				See More Details
			</Link>
		</>
	);
}

export default PuppyPlayer;
