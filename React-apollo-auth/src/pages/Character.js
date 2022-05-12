import React from 'react'
import { useParams } from 'react-router';
import { useCharacter } from '../hooks/useCharacter';
import Logout from "../Auth/Logout"
import { Auth0Provider } from "@auth0/auth0-react";
import "./Character.css";
export default function Character() {
    const {id}=useParams();
    const{error,loading,data}=useCharacter(id);
    
   if(error) return <div> something went wrong</div>
   if(loading) return <div>spinner...</div>
  return (<>
  <Auth0Provider
                    domain="dev-t7uorqjf.us.auth0.com"
                    clientId="z9RHu4Q5iMvflXI76MJ52KgbgWnLjNwG"
                    redirectUri="http://localhost:3000"
                  >
                    <Logout />
                  </Auth0Provider>
    <div className="Character">
        <img src={data.character.image} height={750} width={750} alt="episode"/>
        <div className="Character-content">
            <h1>{data.character.name}</h1>
            <p>{data.character.gender}</p>
            <div className="Character-episode">
                {data.character.episode.map((episode) =>{
                    return (<div>
                        {episode.name} - <b>{episode.episode}</b>
                        </div>);
                })}
            </div>
        </div>

    </div>
    </>
  );
}
