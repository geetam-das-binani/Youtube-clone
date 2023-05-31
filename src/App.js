import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import SearchPage from "./components/SearchPage";
import RecommendedVideos from "./components/RecommendedVideos";
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App() {

	
	return (
		<div className="app">
			<BrowserRouter>
				<Header />
				<Routes>
					<Route
						path="/"
						element={
							<div className="app__page">
								<Sidebar />
								<RecommendedVideos />
							</div>
						}
					/>
					<Route path="/search/:searchTerm" element={
						<div className="app__page">
						<Sidebar />
						<SearchPage />
					</div>
					} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}
