import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/style.css";

function PuppyPlayer({ puppy }) {
	const { id } = puppy;

	return (
		<div className="puppy__player">
			<h2 className="puppy__title">{puppy.name}</h2>
			<img
				src={puppy.imageUrl}
				width={250}
				alt=""
			/>
			<div className="puppy__content">
				<h3>Breed: {puppy.breed}</h3>
				<h4>Status: {puppy.status}</h4>
				<h5>Team ID: {puppy.teamId}</h5>
			</div>
			<Link
				className="puppy__info"
				to={`${id}`}>
				See More Details
			</Link>
		</div>
	);
}

export default PuppyPlayer;
