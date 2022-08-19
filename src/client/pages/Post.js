import React, { Component } from 'react';
import { useParams, useLocation } from 'react-router-dom';

const Post = () => {
  
   console.log(useParams());
   console.log(useLocation());

   const { id }  = useParams(); 
   const query = new URLSearchParams(useLocation().search); 

	return (
                <div>
                     This is my Post page
                     <h2>Id is = {id}</h2>
                     <h2>{query.get("first")}</h2>
                     <h2>{query.get("last")}</h2>

	
		</div>
        )
}

export default Post;

