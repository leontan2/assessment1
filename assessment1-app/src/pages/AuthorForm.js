import React, { useState } from 'react';
import Usercard from "../components/Usercard.js";
import './AuthorForm.css'; // Import the CSS file

const AuthorForm = () => {
  const [authorName, setAuthorName] = useState('');
  const [submittedAuthors, setSubmittedAuthors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Submitted author name:', authorName);

    if (authorName.trim() !== "") {
      setSubmittedAuthors([...submittedAuthors, authorName]);
    }
    // Clear the input field after submission
    setAuthorName('');
  };

  const handleReset = () => {
    setSubmittedAuthors([]); 
  };

  return (
    <div className="author-form-container">
      <div className="form-container">
        <form onSubmit={handleSubmit} onReset={handleReset}>
          <label>
            Author Name:
          </label>
          <input
            type="text"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
          />
          <button type="submit">Submit</button>
          <button type="reset" style={{ marginLeft: '10px' }}>Reset</button>
        </form>
      </div>
      <div className="user-cards-container">
        {submittedAuthors.slice().reverse().map((author, index) => (
          <Usercard key={index} index={index} author={author} />
        ))}
      </div>
    </div>
  );
};

export default AuthorForm;
