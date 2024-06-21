import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";

const DisplayCard=({id, list, name, link})=>{
	const {store,actions}= useContext(Context)


return(
    <div>
		<div className="card" style={{width:"350px", marginLeft:"30px", marginRight:"30px"}}>
			<img  className="card-img-top" src={`https://starwars-visualguide.com/assets/img/${list}/${id}.jpg`}/>
			<div className="card-body">
			        <h2 className="card-title">{name}</h2>
					<Link className="btn btn-warning" to={`/${link}/${id}`}>Read more</Link>
					{actions.favoritesHeart(name,id,link)}
            </div>
			</div>
    </div>

);

};
export default DisplayCard;