import React from "react";

function StudentTable(props){
    return(
        <div>
            <table>
                <thead>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Marks</th>
                    <th>Attendance</th>
                    <th>Final Status</th>
                </thead>
                <tbody>
                    {props.students.map((student)=>(
                        <tr style={{color: student.marks > 50 ? (student.attendance > 60  ? "green" : "orange"):"red" }}>
                            <td>{student.name}</td>
                            <td>{student.marks}</td>
                            <td>{student.course}</td>
                            <td>{student.attendance}%</td>
                            <td>{student.marks > 50 ? (student.attendance > 60 ? "Pass" : "Attendance Shortage"):"Fail"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default StudentTable;