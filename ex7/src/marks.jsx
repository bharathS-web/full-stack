import React, { useState } from 'react';

function Marks() {
  const [student, setStudent] = useState({ name: '', sub1: '', sub2: '', sub3: '' });
  const [students, setStudents] = useState([]);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };
   
  const handleSubmit = (e) => {
    e.preventDefault();
    setStudents([...students, student]);
    setStudent({ name: '', sub1: '', sub2: '', sub3: '' }); 
  };

  return (
    <div className="container">
      <h2>Student Marks Entry</h2>

      <form onSubmit={handleSubmit}>

        <input type="text" name="name" placeholder="Name" value={student.name} onChange={handleChange} required />
        <input type="number" name="sub1" placeholder="Subject 1" value={student.sub1} min="0"  max="100" onChange={handleChange} required />
        <input type="number" name="sub2" placeholder="Subject 2" value={student.sub2} min="0"  max="100" onChange={handleChange} required />
        <input type="number" name="sub3"  placeholder="Subject 3" value={student.sub3} min="0"  max="100" onChange={handleChange} required />

        <button type="submit">Add Student</button>
        
      </form>

      <h3>Student List</h3>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Sub1</th>
            <th>Sub2</th>
            <th>Sub3</th>
          </tr>
        </thead>
        <tbody>
          {students.map( (s, index) => (
            <tr key={index}>
              <td>{s.name}</td>
              <td>{s.sub1}</td>
              <td>{s.sub2}</td>
              <td>{s.sub3}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Marks;
