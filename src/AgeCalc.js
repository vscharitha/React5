import React, { useState } from 'react';

const AgeCalc = () => {

    const [birthDate, setBirthDate] = useState('');
    const [age, setAge] = useState('');
  
    const calculateAge = () => {
      const birthDateObj = new Date(birthDate);
      const currentDate = new Date();
      const ageInMilliseconds = currentDate - birthDateObj;
      const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
      setAge(Math.floor(ageInYears));
    };
    
    return ( 
        <div>
            <h1>Age Calculator</h1>
      <div>
        <h5>Enter your date of birth </h5>
        <input
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
      </div>
      <button onClick={calculateAge}>Calculate Age</button>
      {age && <h4>You are {age} years old</h4>}
        </div>
     );
}
 
export default AgeCalc;