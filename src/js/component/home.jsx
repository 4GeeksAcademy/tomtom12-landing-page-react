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
		<Card></Card>
		<Footer></Footer>
		
		
			
		</div>
	);
};

export default Home;
