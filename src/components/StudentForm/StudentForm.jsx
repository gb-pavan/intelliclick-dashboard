import React, { useState } from 'react';
import './StudentForm.css';

const StudentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    class: '',
    board: '',
    interactedWith: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form is submitted', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="student-form">
      <div>
        <label htmlFor="name">Student Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="mobileNumber">Mobile Number:</label>
        <input
          type="tel"
          id="mobileNumber"
          name="mobileNumber"
          value={formData.mobileNumber}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="class">Class:</label>
        <input
          type="text"
          id="class"
          name="class"
          value={formData.class}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="board">Board:</label>
        <input
          type="text"
          id="board"
          name="board"
          value={formData.board}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="interactedWith">Interacted With:</label>
        <input
          type="text"
          id="interactedWith"
          name="interactedWith"
          value={formData.interactedWith}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default StudentForm;
