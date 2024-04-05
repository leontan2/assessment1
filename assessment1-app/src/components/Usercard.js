import React from 'react';
import './Cards.css'; // Make sure the filename matches the component name and correct import path

const Usercard = ({ index, author }) => { // Destructure `index` prop
    return (
        <div className="user-card">
            <h2>{index + 1}: {author}</h2>
        </div>
      );
};

export default Usercard;
