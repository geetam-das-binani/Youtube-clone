import React from "react";
import "../styles/videoRow.css";

export default function VideoRow({
	views,
	subs,
	description,
	timestamp,
	channel,
	title,
	image,
}) {
	return (
		<div className="videoRow">
			<img src={image} alt={channel} />
			<div className="videoRow__text">
				<h4>{title}</h4>
				<p className="videoRow__headline">
					{channel} .{" "}
					<span className="videoRow__thumbnail">
						<span className="videoRow__Subs">{subs}</span> Subscribers
					</span>{" "}
					{views} views . {timestamp}{" "}
				</p>
				<p className="videoRow__description">{description}</p>
			</div>
		</div>
	);
}
