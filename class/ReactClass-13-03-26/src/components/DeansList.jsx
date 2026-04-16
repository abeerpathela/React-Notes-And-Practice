import React from "react";

function DeansList(props){
    return(
        <div>
            <h1>Deans List</h1>
            <ul>
            {
                props.students.map((student)=>{
                    if(student.marks > 85) {
                        return <li>{student.name}</li>
                    }
                    return null;
                })
            }
            </ul>
        </div>
    )
}

export default DeansList;