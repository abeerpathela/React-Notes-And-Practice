import React, { useState } from "react";

function WelcomeMessage(props){
    // const [name,setName]=useState(props.name);
    // const [language,setLanguage]=useState(props.language);
    return(
        <div>
            {
                language == 'en' ? (<h3>Hello, {props.name}!</h3>):(<h3>Bonjour, {props.name}!</h3>)
            }
        </div>
    )
}

export default WelcomeMessage