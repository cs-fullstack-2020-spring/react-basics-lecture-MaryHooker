import React from 'react';

import './App.css';

function NameDisplay(prop) {
  return (
    <div>
      <header>
        <p>Welcome {prop.userName} {prop.lname} {prop.comment}</p>
        <p>Hey again {prop.studentObject.name}</p>
        <p>Your grade is {prop.studentObject.grade}</p>
      </header>
    </div>
  );
}

export default NameDisplay;
