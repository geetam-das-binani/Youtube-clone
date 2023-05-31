import React from "react";
import "../styles/sidebarRow.css";

export default function SidebarRow({ Icon, title, selected}) {
	
	return (
		<div  className={`sidebarRow ${selected && "selected"} `} >
			{Icon}
			<h3 className="sidebarRow__title">{title}</h3>
		</div>
	);
}
