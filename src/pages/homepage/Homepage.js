import React, { useEffect } from "react";
import tedxlogo from "../../assets/images/TedXLogo.webp";
import ticket_image from '../../assets/images/Tedx_Ticket.jpg';
// import ticket from "../../assets/images/ticket.png";
import banner_temp from "../../assets/images/banner_temp.png"
import "../../components/homepage/homepage_animation.js";
import { canvasDots } from "../../components/homepage/homepage_animation.js";
import { particles } from "../../components/homepage/homepage_paricles";
import Theme from "../../components/Theme/Theme";
import Newspeaker from "../../components/newSpeaker/newSpeaker";
import CurrentSpons from "../../components/currSpons/currSpons"
import "../../components/homepage/homepage_animation.js";
import "./Homepage.css";
import Rules from "../../components/Rules/Rules";
import BuyTicketbutton from "../../components/buyButton/buyButton";
import { useWindowSize } from "react-hooks-window-size";
import Highlights from "../../components/highlights/Highlights";

// import { Link } from "react-router-dom";
import Homepagedate from "../../components/homepagedate/homepagedate";

const Homepage = () => {
	const size = useWindowSize(1500, 1500);

	useEffect(() => {
		if (size.width >= 1010) canvasDots();
		else particles();
	}, [size.width]);

	return (
		<>
			<div className="homepage">
				<div classname="tedx-heading">
					<span className="tedx-red">TED</span>
      					<span className="tedx-black">x</span>
      					<span className="pccoer-white">PCCOER</span>
					{/*<img className="tedx_logo" src={tedxlogo} alt="" />*/}

					{/* <div className="tedx_desc">
						TEDxBITSHyderabad is an annual event that aims to bring together
						inquisitive minds and spark engaging conversations. With a
						confluence of thought provoking speakers, we hope to bring forward
						fresh perspectives and novel concepts, giving every participant
						something to take home.
					</div> */}

					{/*<Link to ='/payments'>
						<div className="buy_ticket">
							BUY TICKETS
						</div>
					</Link>*/}

				</div>

				 
<div classname="theme-name">
					<span className="first">BEYOND THE OBVIOUS</span>
					
      					
      					
					{/*<img className="tedx_logo" src={tedxlogo} alt="" />*/}

					{/* <div className="tedx_desc">
						TEDxBITSHyderabad is an annual event that aims to bring together
						inquisitive minds and spark engaging conversations. With a
						confluence of thought provoking speakers, we hope to bring forward
						fresh perspectives and novel concepts, giving every participant
						something to take home.
					</div> */}

					{/*<Link to ='/payments'>
						<div className="buy_ticket">
							BUY TICKETS
						</div>
					</Link>*/}

				</div>


				<img className="ticket_image" src={ticket_image} alt="TedX Ticket" />

				<BuyTicketbutton />

			</div>



			<canvas className="dots" />



			<Theme />

			<div className="speak_heading">
				<span>SPEAKERS</span> FOR CONFERENCE 2024
			</div>
			<Newspeaker />
			<div className="speak_heading">
				<span>SPONSORS</span> FOR CONFERENCE 2024
			</div> 
			<CurrentSpons />
			<div style={{ margin: "20px 60px" }}>
				<Highlights />
			</div>
			<Rules /> 
		</>
	);
};

export default Homepage;
