import React, { useState } from 'react';
import './StudentMarks.css'; // Import the CSS file

const StudentMarks = () => {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    sub1: '',
    sub2: '',
    sub3: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateMarks = (mark) => {
    return mark >= 0 && mark <= 100;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name.trim()) {
      alert('Please enter student name');
      return;
    }

    const marks = [formData.sub1, formData.sub2, formData.sub3];
    if (marks.some(mark => mark === '' || !validateMarks(Number(mark)))) {
      alert('All marks must be between 0-100');
      return;
    }

    const total = marks.reduce((sum, mark) => sum + Number(mark), 0);
    setStudents([...students, { 
      ...formData,
      sub1: Number(formData.sub1),
      sub2: Number(formData.sub2),
      sub3: Number(formData.sub3),
      total 
    }]);

    // Reset form
    setFormData({
      name: '',
      sub1: '',
      sub2: '',
      sub3: ''
    });
  };

  return (
    <div className="container">
      <h2>Student Marks Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        
        {[1, 2, 3].map((subNum) => (
          <div className="form-group" key={subNum}>
            <label>
              Subject {subNum}:
              <input
                type="number"
                name={`sub${subNum}`}
                value={formData[`sub${subNum}`]}
                onChange={handleChange}
                min="0"
                max="100"
                required
              />
            </label>
          </div>
        ))}

        <button type="submit" className="submit-btn">
          Add Student
        </button>
      </form>

      <h2>Student Marks Table</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Subject 1</th>
            <th>Subject 2</th>
            <th>Subject 3</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.sub1}</td>
              <td>{student.sub2}</td>
              <td>{student.sub3}</td>
              <td>{student.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentMarks;