import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const {theid} = useParams();
	console.log(theid)
	
	useEffect(()=>{
		actions.loadSingleCharacter(theid)
	},[])
	
	
	return (
		<div className="d-flex">
			<img style={{marginLeft:"30%"}} src={`https://starwars-visualguide.com/assets/img/characters/${theid}.jpg`}/>
			<div className="d-flex" style={{width:"500px", marginTop:"30px"}}>	
				<div className="info" style={{marginLeft:"20px"}}>
					<h2>Name: {store.singleCharacter?.properties?.name}</h2>
					<h4 style={{marginTop:"20px"}}>Gender: {store.singleCharacter?.properties?.gender}</h4>
					<h4 style={{marginTop:"20px"}}>Birth year: {store.singleCharacter?.properties?.birth_year}</h4>
					<h4 style={{marginTop:"20px"}}>Height: {store.singleCharacter?.properties?.height}</h4>
					<h4 style={{marginTop:"20px"}}>Weigth: {store.singleCharacter?.properties?.mass}</h4>
					<h4 style={{marginTop:"20px"}}>Hair color: {store.singleCharacter?.properties?.hair_color}</h4>
					<h4 style={{marginTop:"20px"}}>Eye color: {store.singleCharacter?.properties?.eye_color}</h4>
				</div>
			</div>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
