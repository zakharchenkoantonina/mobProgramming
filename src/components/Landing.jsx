import React from "react";
import image3 from "../assets/IMG-0448.jpeg";
import Staatsoper from "../assets/Staatsoper.jpg";

function Landing() {
	return (
		<div className="imageAbout_container w-screen h-auto relative">
			
			<div className="headerContainer relative h-36 flex">
				{/* Background image */}
				<img className='fixed -z-10 md:-translate-y-20 lg:-translate-y-40 overflow-auto w-screen h-auto self-center ' src={Staatsoper} alt="Background" />
				<div className="absolute bg-slate-50 opacity-80 h-full w-full z-10"></div>
			</div>
				{/* Portrait image */}
							
			<div className="absolute z-20 rounded-full w-32 h-32 overflow-hidden transform -translate-x-1/2 -translate-y-1/2 top-36 left-1/2 ">
				<img className="" src={image3} alt="Portrait"/>
			</div>
			

			{/* /////////////ABOUT/////////// */}
			<div className="about h-auto px-5 py-24 md:px-9  flex flex-1 justify-center relative z-10 w-auto bg-gradient-to-b from-slate-50   via-slate-200 to-slate-300">
				<div className="bg-slate-50 flex flex-col justify-center h-fit rounded-lg">
					<h1 className='prata p-5 absolut text-center text-3xl  text-slate-700'>Juhee Manon Kang</h1>
					<p className="px-5 pb-12  lg:px-12  leading-relaxed text-slate-700 place-self-center lg:text-sm  text-justify max-w-xl md:max-h-screen  lato">
						Welcome to my official website! My name is Juhee Manon Kang,
						and I am a lyrical soprano who has had the privilege of performing on some of the most prestigious stages in the world.
						<br></br><br></br>
						I was born in Vienna, a city that has always held a special place in my heart,
						and spent much of my childhood in South Korea. From a young age, I knew that music was my calling,
						and I worked tirelessly to hone my skills and develop my unique sound.
						Over the years, I have had the incredible opportunity to perform as both a soloist and a choir member
						in productions of the Wiener Staatsoper, which was an absolute dream come true. I have also been fortunate
						enough to become a proud member of the Norwegian Opera and Ballet, where I continue to be inspired and challenged every single day.
						<br></br><br></br>
						This website is my way of sharing my journey with all of you, and I am thrilled to be able to
						connect with fans and music lovers from around the world.
						Thank you so much for visiting, and I hope that my music brings you as much joy as it brings me.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Landing;
