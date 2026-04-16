import React from "react";

function ProfileCard(props){
    return(
        <div>
            <h3>{props.name}</h3>
            <p>{props.age}</p>
            <p style={{ color: props.isOnline == true ? "green" : "gray"}}>{props.isOnline ? "online":"offline"}</p>
        </div>
    )
}

export default ProfileCard