import React, { useState } from "react";
import "./App.css";
import PuppyBowl from "./components/PuppyBowl";
import { Routes, Route } from "react-router-dom";
import PuppyPlayer from "./components/PuppyPlayer";
import PuppyPlayerPage from "./pages/PuppyPlayerPage";

function App() {
	return (
		<main>
			<Routes>
				<Route
					path="/puppybowl_react"
					element={<PuppyBowl />}
				/>
				<Route
					path="/puppybowl_react/:id"
					element={<PuppyPlayerPage />}
				/>
			</Routes>
		</main>
	);
}

export default App;
