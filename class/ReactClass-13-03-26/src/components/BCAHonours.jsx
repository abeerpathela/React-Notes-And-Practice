import React from "react";

function BCAHonours(props){
    return(
        <div>
            <h1>BCA Honours</h1>
            <ul>
                {
                    props.students.map((student)=>{
                        if(student.course == "BCA" && student.marks > 50){
                            return <li>{student.name} - {student.marks}</li>
                        }
                        return null;
                    })
                }
            </ul>
        </div>
    )
}

export default BCAHonours;