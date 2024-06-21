import React, { useState } from "react";


const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites:[],
			heart:true,
		},
		actions: {
			// Use getActions to call a function within a fuction
		
			loadCharacters: async ()=>{
				const store=getStore()
				try{
					const characterLoad = await fetch("https://www.swapi.tech/api/people");
					const characterList= await characterLoad.json();
					setStore({characters: characterList.results});
					console.log(store.characters)
				} catch (error){
					console.log("error loading character --> ", error);
				}
				},

			loadPlanets: async ()=>{
				const store=getStore()
				try{
					const planetsLoad = await fetch("https://www.swapi.tech/api/planets");
					const planetList= await planetsLoad.json();
					setStore({planets: planetList.results});
					console.log(store.planets)
				} catch (error){
					console.log("error loading character --> ", error);
				}
			},

			loadVehicles: async ()=>{
				const store=getStore()
				try{
					const vehicleLoad = await fetch("https://www.swapi.tech/api/vehicles");
					const vehicleList= await vehicleLoad.json();
					setStore({vehicles: vehicleList.results});
					console.log(store.vehicles)
				} catch (error){
					console.log("error loading character --> ", error);
				}
			},

			loadSingleCharacter: async (id)=>{
				const store=getStore()
				try{
					const characterLoad = await fetch("https://www.swapi.tech/api/people/"+id);
					const characterProfile = await characterLoad.json();
					setStore({singleCharacter: characterProfile.result})
					console.log(store.singleCharacter)
				} catch (error){
					console.log("error loading character --> ", error);
				}
			},

			loadSinglePlanet: async (id)=>{
				const store=getStore()
				try{
					const planetLoad = await fetch("https://www.swapi.tech/api/planets/"+id);
					const planet= await planetLoad.json();
					setStore({singlePlanet: planet.result});
					console.log(store.singlePlanet)
				} catch (error){
					console.log("error loading character --> ", error);
				}
			},

			loadSingleVehicle: async (id)=>{
				const store=getStore()
				try{
					const vehicleLoad = await fetch("https://www.swapi.tech/api/vehicles/"+id);
					const vehicle= await vehicleLoad.json();
					setStore({singleVehicle: vehicle.result});
					console.log(store.singleVehicle)
				} catch (error){
					console.log("error loading character --> ", error);
				}
			},

			addToFavorites: (name,id,link)=>{
				const store=getStore()
				const favlist = store.favorites
				const fav= {name: name, id: id, link:link }
				setStore({favorites : [...store.favorites, fav]})
				
				console.log(store.favorites)
				
			},

			removeFromFavorites :(index)=>{
				const store=getStore()
				const favList= [...store.favorites]
				favList.splice(index,1)
				setStore({favorites: favList})
			},
			favoritesHeart: (name,id,link)=>{
				const store= getStore()
				const actions = getActions()
				const favlist=store.favorites
				
				for(let item in favlist){
					if(favlist[item].name == name){return <button className="btn btn-outline-danger" onClick={()=>{actions.removeFromFavorites(item)}}><i className="fas fa-heart"></i></button>}
					}
				return <button className="btn btn-outline-danger" onClick={()=>{actions.addToFavorites(name,id,link)}}><i className="far fa-heart"></i></button>
				
			}


		}
	};
};

export default getState;
