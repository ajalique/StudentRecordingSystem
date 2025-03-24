import React from "react";

const StudentList = ({ students }) => {
  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.length === 0 ? (
          <p>No students added yet.</p>
        ) : (
          students.map((student, index) => (
            <li key={index}>
              {student.name} - {student.course}
            </li>
          ))
        )}
      </ul>
      <img 
  src= "/PTC.jpg"
  alt="Student List Illustration" 
  style={{ width: "500px", marginTop: "20px" }} />
    </div>
  );
};

export default StudentList;
