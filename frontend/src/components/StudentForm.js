import React, { useState } from "react";
import axios from "axios";

const StudentForm = ({ addStudent }) => {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append("name", name);
    formData.append("course", course);
    if (image) formData.append("image", image);
    try {
      await addStudent(formData); // This should be your function calling axios
      setMessage("Student added successfully!");
      
      setName("");
      setCourse("");
      setImage(null);
      e.target.reset();

    } catch (error) {
      setMessage("Failed to add student.");
      console.error(error);
    }
  };

  return (
    <div className="text-center">
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Student Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Course" value={course} onChange={(e) => setCourse(e.target.value)} />
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        <button type="submit">Add Student</button>
      </form>
      <p>{message}</p>
    </div>
  );
};


export default StudentForm;
