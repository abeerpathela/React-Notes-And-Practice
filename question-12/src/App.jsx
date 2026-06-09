import React from "react";

function App(){
  const students = [
    { id: 1, name: "Amit" },
    { id: 2, name: "Riya" },
    { id: 3, name: "John" },
    { id: 4, name: "Sneha" }
  ];
  return(
    <div>
      <h1>Student DropDown</h1>
      <select>
        <option>Select Student</option>
        {
          students.map((student)=>(
            <option key={student.id}>{student.name}</option>
          ))
        }
      </select>
    </div>
  )
}

export default App;