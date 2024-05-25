import React, { useState, useEffect } from "react";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import Carousel from "nuka-carousel/lib/carousel";

function Gallery() {
	const onInit = () => {
		console.log("lightGallery has been initialized");
	};
	const [data, setData] = useState("");

	const generatedToken = process.env.REACT_APP_TIMECONSTRAINED_TOKEN;

	useEffect(() => {
		const url = `https://graph.instagram.com/me/media?fields=id,media_url,media_type,permalink&access_token=${generatedToken}`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setData(data);
			});
	}, []);

	const getInstagramImages = (data, maxToShow) => {
		let imageArray = data.data;
		if (data) {
			let onlyPics = imageArray.filter(
				(imageArray) => imageArray.media_type === "IMAGE"
			);

			return onlyPics.map((image, index) => {
				if (index < maxToShow) {
					return (
						<div
							key={index}
							className="imgContainer h-full flex justify-content-center align-items-center "
						>
							<img
								className="max-h-screen max-w-screen m-auto rounded md:p-24"
								src={image.media_url}
								alt="pictures from the instagram feed of soprano juhee kang"
							/>
						</div>
					);
				}
				return null;
			});
		}
	};

	return (
	<div className="imageCarouselContainer px-5 flex justify-center h-fit w-screen bg-gradient-to-b from-slate-50 via-slate-200 to-slate-50">

					<Carousel
					
						defaultControlsConfig={{
              nextButtonText: ">",
							prevButtonText: "<",
							nextButtonStyle: {
                height: "200px",
								left: "0rem",
								zIndex: "0",
							},
							prevButtonStyle: {
                height: "200px",
							},
							pagingDotsStyle: {
                position: "relative",
								bottom: "-5px",
								padding: "15px",
								fill: "gray",
							},
						}}
						animation={"slide"}
						wrapAround={true}
						
					>
						{getInstagramImages(data, 9)}
					</Carousel>
        </div>
	
	);
}

export default Gallery;
