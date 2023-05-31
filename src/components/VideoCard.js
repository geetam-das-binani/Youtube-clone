import React from "react";
import "../styles/videoCard.css";
import Avatar from "@mui/material/Avatar";

export default function VideoCard({
	image,
	title,
	views,
	channel,
	timestamp,
	channelImage,
	alt
}) {
	return (
		<div className="videoCard">
			<img className="thumbnail__image" src={image} alt={alt} />
			<div className="videoCard__info">
				<Avatar
					src={channelImage}
					alt={channel}
					className="videoCard__avatar"
				/>
				<div className="video__text">
					<h4>{title}</h4>
					<p>{channel}</p>
					<p>
						{views} . {timestamp}
					</p>
				</div>
			</div>
		</div>
	);
}
