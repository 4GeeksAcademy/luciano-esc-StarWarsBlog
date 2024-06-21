import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Navbar = () => {
	
	const {store , actions}=useContext(Context)
	console.log(store.favorites)
	const navigate = useNavigate()
	
	return (
		<nav className="navbar navbar-light bg-black mb-3">
			<Link to="/">
				<span className="navbar-brand text-danger mb-0 h1" style={{marginLeft:"10px"}}><h1>STAR WARS BLOG</h1></span>
			</Link>
			<div className="nav-item dropdown" style={{marginRight:"50px"}}>
				<a className="nav-link dropdown-toggle text-danger" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           	 		Favorites {store.favorites.length}
          		</a>
				<ul className="dropdown-menu">
            	{store.favorites.length !==0 ? store.favorites.map((item,index)=><li key={index} className="d-flex">
					<div style={{color:"blue"}} onClick={()=>navigate(`/${item.link}/${item.id}`)}>{item.name}</div><i style={{marginLeft:"5px"}} className="fas fa-times-circle" onClick={()=>actions.removeFromFavorites(index)}></i></li>) : <li>add favorites</li>}
				</ul>
			</div>
		</nav>
	);
};
