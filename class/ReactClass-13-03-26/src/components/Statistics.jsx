import React from "react";


function Statistics(props){
    
    function calAvg(arr){
        let sum=0;
        arr.map((student)=>{
            sum=sum+student.marks;
        })
        return sum/arr.length;
    }

    return(
        <div>
            <h1>Statistics</h1>
            <p>Total Students: {props.students.length}</p>
            <p>
                Class Average: {calAvg(props.students)} 
            </p>
        </div>
    )
}

export default Statistics;