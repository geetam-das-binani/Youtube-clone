import React from "react";
import Avatar from "@mui/material/Avatar";
import "../styles/channelRow.css";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
export default function ChannelRow({
	image,
	channel,
	verified,
	subs,
	noOfVideos,
	description,
}) {
	return (
		<div className="channelRow">
			<Avatar className="channel__logo" src={image} alt={channel} />
			<div className="channelRow__text">
				<h4>
				{channel} {verified && < CheckCircleOutlineIcon  />}
				</h4>
				<p>{subs} subscribers . { noOfVideos} videos</p>
				<p>{description}</p>
			</div>
		</div>
	);
}
