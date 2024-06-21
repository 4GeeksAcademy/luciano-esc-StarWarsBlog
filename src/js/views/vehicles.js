import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Vehicles = props => {
	const { store, actions } = useContext(Context);
	const {theid} = useParams();
	console.log(theid)
	
	useEffect(()=>{
		actions.loadSingleVehicle(theid)
	},[])
	
	
	return (
		<div className="d-flex">
			<img   style={{marginLeft:"30%"}} src={`https://starwars-visualguide.com/assets/img/vehicles/${theid}.jpg`}/>
			<div className="d-flex" style={{width:"500px",marginTop:"30px"}}>
				<div className="info" style={{marginLeft:"20px"}}>
				<h2>Name: {store.singleVehicle?.properties?.name}</h2>
				<h4>Model: {store.singleVehicle?.properties?.model}</h4>
				<h4>Vehicle class: {store.singleVehicle?.properties?.vehicle_class}</h4>
				<h4>Manufacturer: {store.singleVehicle?.properties?.manufacturer}</h4>
				<h4>Cost in credits: {store.singleVehicle?.properties?.cost_in_credits}</h4>
				<h4>Passengers: {store.singleVehicle?.properties?.passengers}</h4>
				<h4>Crew: {store.singleVehicle?.properties?.crew}</h4>
				<h4>Max atmosphering speed: {store.singleVehicle?.properties?.max_atmosphering_speed}</h4>
				<h4>Cargo capacity: {store.singleVehicle?.properties?.cargo_capacity}</h4>
				</div>	
			</div>
		</div>
	);
};
Vehicles.propTypes = {
	match: PropTypes.object
};