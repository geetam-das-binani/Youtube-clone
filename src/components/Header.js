import React, { useState } from "react";
import "../styles/header.css";
import youtubeImage from "../youtubeImage.png";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";

import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";

export default function Header() {
	const [InputVal, setInputVal] = useState("");
	return (
		<div className="header">
			<div className="header__left">
				<MenuIcon />
				<Link className='headerLeft__link'  to="/">
					<img
						src={youtubeImage}
						alt="youtube-logo"
						className="youtube__image"
						
					/>
					<span className="headerLeft__linkPart">IN</span>
				</Link>
			</div>
			<div className="header__input">
				<input
					value={InputVal}
					onChange={(e) => setInputVal(e.target.value)}
					type="text"
					placeholder="Search"
				/>
				<Link className="search__link" to={`/search/${InputVal}`}>
					<SearchIcon />
				</Link>
			</div>
			<div className="header__icons">
				<VideoCallIcon className="header_icon" />
				<NotificationsIcon className="header_icon" />
				<Avatar src="https://lh3.googleusercontent.com/a/AAcHTtdXf4V0MN7TJcyDi7nBuAl2Mvi2RAeHFe5hdpD_ew=s288-c-no" />
			</div>
		</div>
	);
}
