import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import DisplayCard from "../component/displayCard";

export const Home = () => {

	const {store,actions} = useContext(Context)

	return (
	<>
	<div className="titulo" style={{marginTop:"50px"}}>
		<h2>Characters</h2>
		<div  className="bigRow" style={{height:"620px"}}>
		{store.characters?.map((item,index)=>(
		<DisplayCard  key={index} id={item.uid} name={item.name} list="characters" link="single"/>))}
		</div>
	</div>
	<div className="titulo" style={{marginTop:"50px"}}>
		<h2>Planets</h2>
		<div  className="bigRow" style={{height:"500px"}}>
		{store.planets?.map((item,index)=>(
		<DisplayCard  key={index} id={item.uid} name={item.name} list="planets" link="planets"/>))}
		</div>
	</div>
	<div className="titulo" style={{marginTop:"50px"}}>
		<h2>vehicles</h2>
		<div  className="bigRow" style={{height:"425px"}}>
		{store.vehicles?.map((item,index)=>(
		<DisplayCard  key={index} id={item.uid} name={item.name} list="vehicles" link="vehicles"/>))}
		</div>
	</div>
	</>)
};