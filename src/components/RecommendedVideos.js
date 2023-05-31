import React from "react";
import "../styles/recommendedVideos.css";
import VideoCard from "../components/VideoCard";
import features from "../features.png";
import ViewOnce from "../ViewOnce.jpg";
import channel from "../channel.jpg";

export default function RecommendedVideos() {
	return (
		<div className="recommendedVideos">
			<h2>Recommended</h2>

			<div className="recommendedVideos__videos">
				<VideoCard
					title="Top 5 Best Photo Editing Apps For Android ⚡⚡⚡ April 2020"
					views="2.3M views"
					timestamp="3 days ago"
					channelImage={channel}
					channel="Tracking Tech"
					image="https://i.ytimg.com/vi/qTMcHv_09xI/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDyA1gk1ks1cYINOf9yyEAtV6Jlxg"
					alt='Best Photo Editing Apps'
				/>
				<VideoCard
					title="7 OMG FACTS About FLIPKART That You May Not Know!"
					views="1.3M views"
					timestamp="1 week ago"
					channelImage={channel}
					channel="Tracking Tech"
					image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVxJcU1Rp9WKmXF_XyZ6novRcwqAhpwO1FzUIM8RrD_jWPzbSkXvKXP93SH-__Zz5M4hL9DAGvFOE&usqp=CAU&ec=48600113"
					alt='flipkart facts'
				/>
				<VideoCard
					title="Mi 11 Ultra Unboxing & First Impressions | The Real Ultra Flagship?! ⚡120Hz,120X Zoom,SD888 & More "
					views="1M views"
					timestamp="5 days ago"
					channelImage={channel}
					channel="Tracking Tech"
					image="https://i.ytimg.com/vi/Yt26FqOy9UI/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBq1xUxnvYNB4qWK3EO35MIb4SJtQ"
					alt='Mi 11'
				/>{" "}
				<VideoCard
					title="BGMI On Play Store😍, realme 11 Series India Launch,moto Edge 40 @2X,XXX,Galaxy A14,iQOO Z7s"
					views="990k views"
					timestamp="2 days ago"
					channelImage={channel}
					channel="Tracking Tech"
					image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHWRf-U5FDbzowhh1yu15onrQ-bfJmHDeYyIrjr7D4GA&usqp=CAU&ec=48600113"
					alt='BGMI On Play Store😍'
				/>{" "}
				<VideoCard
					title="Top 5 Crazy Tech Gadgets Under Rs.500⚡June 2023"
					views="875k views"
					timestamp="1 month ago"
					channelImage={channel}
					channel="Tracking Tech"
					image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIwo04uidk-m9lO0ZKIHBGQeMgN6N_I0VeQVncqGwStw&usqp=CAU&ec=48600113"
					alt='Crazy Tech Gadgets'

				/>{" "}
				<VideoCard
					title="8-best-whatsapp-features-you-may-be-able-to-use-soon "
					views="600k views"
					timestamp="5 months ago"
					channelImage={channel}
					channel="Tracking Tech"
					image={features}
					alt='8-best-whatsapp-features'
				/>
				<VideoCard
					title="WA_VIEW_ONCE_ALERT_ANDROID"
					views="820k views"
					timestamp="4 months ago"
					channelImage={channel}
					channel="Tracking Tech"
					image={ViewOnce}
					alt=' WHATSAPP VIEW_ONCE_ALERT'
				/>
			</div>
		</div>
	);
}
