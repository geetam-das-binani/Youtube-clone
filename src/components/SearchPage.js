import React from "react";
import "../styles/searchPage.css";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import ChannelRow from "../components/ChannelRow";
import VideoRow from "../components/VideoRow";
import channel from "../channel.jpg";
import features from "../features.png";
import ViewOnce from "../ViewOnce.jpg";

export default function SearchPage() {
	return (
		<div className="searchPage">
			<div className="searchPage__filter">
				<TuneOutlinedIcon />
				<h2>FILTER</h2>
			</div>
			<hr />
			<ChannelRow
				image={channel}
				channel="Tracking Tech"
				verified
				subs="10M"
				noOfVideos={982}
				description="You can find awesome tech gadgets here"
			/>
			<hr />
			<VideoRow
				image="https://i.ytimg.com/vi/qTMcHv_09xI/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDyA1gk1ks1cYINOf9yyEAtV6Jlxg"
				views="2.3M views"
				channel="Tracking Tech"
				description="You can find awesome tech gadgets here bla vl kjdjandj nsklnfsklfn nsdf sdsdsd sdsdsdsdsd sdsdsd"
				subs="10M"
				timestamp="3 days ago"
				title="Top 5 Best Photo Editing Apps For Android ⚡⚡⚡ April 2020"
			/>
			<VideoRow
				description="You can find awesome tech gadgets here bla vl kjdjandj nsklnfsklfn nsdf sdsdsd sdsdsdsdsd sdsdsd"
				subs="10M"
				title="7 OMG FACTS About FLIPKART That You May Not Know!"
				views="1.3M views"
				timestamp="1 week ago"
				channel="Tracking Tech"
				image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVxJcU1Rp9WKmXF_XyZ6novRcwqAhpwO1FzUIM8RrD_jWPzbSkXvKXP93SH-__Zz5M4hL9DAGvFOE&usqp=CAU&ec=48600113"
			/>
			<VideoRow
				description="You can find awesome tech gadgets here bla vl kjdjandj nsklnfsklfn nsdf sdsdsd sdsdsdsdsd sdsdsd"
				subs="10M"
				title="Mi 11 Ultra Unboxing & First Impressions | The Real Ultra Flagship?! ⚡120Hz,120X Zoom,SD888 & More "
				views="1M views"
				timestamp="5 days ago"
				channelImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8PTTPT-Xiyvy3FYwYvqzqxUc_a-2uxrgEcGSA0dF6cA&usqp=CAU&ec=48600113"
				channel="Tracking Tech"
				image="https://i.ytimg.com/vi/Yt26FqOy9UI/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBq1xUxnvYNB4qWK3EO35MIb4SJtQ"
			/>
			<VideoRow
				description="You can find awesome tech gadgets here bla vl kjdjandj nsklnfsklfn nsdf sdsdsd sdsdsdsdsd sdsdsd"
				subs="10M"
				title="BGMI On Play Store😍, realme 11 Series India Launch,moto Edge 40 @2X,XXX,Galaxy A14,iQOO Z7s"
				views="990k views"
				timestamp="2 days ago"
				channelImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8PTTPT-Xiyvy3FYwYvqzqxUc_a-2uxrgEcGSA0dF6cA&usqp=CAU&ec=48600113"
				channel="Tracking Tech"
				image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHWRf-U5FDbzowhh1yu15onrQ-bfJmHDeYyIrjr7D4GA&usqp=CAU&ec=48600113"
			/>
			<VideoRow
				description="You can find awesome tech gadgets here bla vl kjdjandj nsklnfsklfn nsdf sdsdsd sdsdsdsdsd sdsdsd"
				title="Top 5 Crazy Tech Gadgets Under Rs.500⚡June 2023"
				views="875k views"
				subs="10M"
				timestamp="1 month ago"
				channelImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8PTTPT-Xiyvy3FYwYvqzqxUc_a-2uxrgEcGSA0dF6cA&usqp=CAU&ec=48600113"
				channel="Tracking Tech"
				image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIwo04uidk-m9lO0ZKIHBGQeMgN6N_I0VeQVncqGwStw&usqp=CAU&ec=48600113"
			/>
			<VideoRow
				description="You can find awesome tech gadgets here bla vl kjdjandj nsklnfsklfn nsdf sdsdsd sdsdsdsdsd sdsdsd"
				subs="10M"
				title="8-best-whatsapp-features-you-may-be-able-to-use-soon "
				views="600k views"
				timestamp="5 months ago"
				channelImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8PTTPT-Xiyvy3FYwYvqzqxUc_a-2uxrgEcGSA0dF6cA&usqp=CAU&ec=48600113"
				channel="Tracking Tech"
				image={features}
			/>
			<VideoRow
					title="WA_VIEW_ONCE_ALERT_ANDROID"
					views="820k views"
					timestamp="4 months ago"
					channelImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8PTTPT-Xiyvy3FYwYvqzqxUc_a-2uxrgEcGSA0dF6cA&usqp=CAU&ec=48600113"
					channel="Tracking Tech"
					image={ViewOnce}
				description="You can find awesome tech gadgets here bla vl kjdjandj nsklnfsklfn nsdf sdsdsd sdsdsdsdsd sdsdsd"
			
			/>
		</div>
	);
}
