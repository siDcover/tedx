import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slides from './Slides';
import Carousel3 from "../../assets/images/collage/3.jpeg"
import Carousel2 from "../../assets/images/collage/21.jpeg"
import Carousel1 from "../../assets/images/collage/22.jpeg"
function Highlights() {
	const data = [
		{
			heading: "Highlights",
			bg: Carousel2,
			btn_text: "See More",
			link: "#",
			id: 1,
		},
		{
			heading: "Speakers",
			bg: Carousel3,
			btn_text: "See More",
			link: "#",
			id: 2,
		},
		{
			heading: "Gallery",
			bg: Carousel1,
			btn_text: "See More",
			link: "#",
			id: 3,
		},
	];
	return (
		<div>
			<div>
				<Carousel
					autoPlay
					centerMode
					infiniteLoop
					centerSlidePercentage={100}
					showStatus={false}
					showThumbs={false}
					showIndicators={false}
				>
					{data.map((item) => {
						return (
							<Slides
								key={item.id}
								heading={item.heading}
								desc={item.desc}
								bg={item.bg}
								btn_text={item.btn_text}
								link={item.link}
							/>
						);
					})}
				</Carousel>
			</div>
		</div>
	)
}

export default Highlights
