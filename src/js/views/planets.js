import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planets = props => {
	const { store, actions } = useContext(Context);
	const {theid} = useParams();
	console.log(theid)
	
	useEffect(()=>{
		actions.loadSinglePlanet(theid)
	},[])
	
	
	return (
		<div className="d-flex">
			<img  style={{marginLeft:"30%"}} src={`https://starwars-visualguide.com/assets/img/planets/${theid}.jpg`}/>
			<div className="d-flex" style={{width:"500px",marginTop:"30px"}}>
				<div className="info"style={{marginLeft:"20px"}}>
					<h2>Name: {store.singlePlanet?.properties?.name}</h2>
					<h4 style={{marginTop:"20px"}}>Diameter: {store.singlePlanet?.properties?.diameter}</h4>
					<h4 style={{marginTop:"20px"}}>Gravity: {store.singlePlanet?.properties?.gravity}</h4>
					<h4 style={{marginTop:"20px"}}>Population: {store.singlePlanet?.properties?.population}</h4>
					<h4 style={{marginTop:"20px"}}>Climate: {store.singlePlanet?.properties?.climate}</h4>
					<h4 style={{marginTop:"20px"}}>Terrain: {store.singlePlanet?.properties?.terrain}</h4>
					<h4 style={{marginTop:"20px"}}>Surface water: {store.singlePlanet?.properties?.surface_water}</h4>
				</div>	
			</div>
		</div>
	);
};
Planets.propTypes = {
	match: PropTypes.object
};
