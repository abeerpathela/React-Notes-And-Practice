import React from "react";
import { useState } from "react";
import CommentItem from "./CommentItem";

function PostCard(props){
    const [post,setPost]=useState(props.post);
    return(
        <div style={{ border: "2px solid black", marginBottom: "8px"}} >
            <h1>{post.username}</h1>
            <p>{post.content}</p>
            <p style={{ color: post.likes > 50 ? "red" : "black" }}>{post.likes}</p>
            <h3>User Comments</h3>
            <ul>
            {
                post.comments.map((comment)=>(
                    <CommentItem text={comment}/>
                ))
            }
            </ul>
        </div>
    )
}

export default PostCard