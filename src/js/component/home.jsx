import React from "react";

//include images into your bundle

import Card from "./card";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Footer from "./footer";


//create your first component
const Home = () => {

	return (
		
		<div >
		<Navbar></Navbar>	
		<Jumbotron></Jumbotron>
		<div className="container mx-auto px-0 ">
		<div className="row mx-auto  px-0 justify-content-between flex-nowrap">
		<Card text ="do you ever feel?"></Card>
		<Card text ="like a plastic bag."></Card>
		<Card text ="drifting through the wind"></Card>
		<Card text ="wanting to start ahead"></Card>
		</div>
		</div>
		<Footer></Footer>
		
		
			
		</div>
	);
	
	
};

export default Home;
