import React, { useState } from 'react';


const AgeCalculator = () => {
  const [birthDateTime, setBirthDateTime] = useState('');
  const [ageDetails, setAgeDetails] = useState(null);

  const calculateAge = () => {
    const now = new Date();
    const birthDateObj = new Date(birthDateTime);

    const years = now.getFullYear() - birthDateObj.getFullYear();
    const months = now.getMonth() - birthDateObj.getMonth();
    const days = now.getDate() - birthDateObj.getDate();
    const hours = now.getHours() - birthDateObj.getHours();
    const minutes = now.getMinutes() - birthDateObj.getMinutes();
    const seconds = now.getSeconds() - birthDateObj.getSeconds();

    const age = {
      years: years - (months < 0 || (months === 0 && days < 0) ? 1 : 0),
      months: (months + 12) % 12,
      days: days < 0 ? new Date(now.getFullYear(), now.getMonth(), 0).getDate() + days : days,
      hours: hours < 0 ? 24 + hours : hours,
      minutes: minutes < 0 ? 60 + minutes : minutes,
      seconds: seconds < 0 ? 60 + seconds : seconds,
    };

    setAgeDetails(age);
  };

  return (
    <div className="age-calculator-container">
      <h1>Age Calculator</h1>
      <input
        type="datetime-local"
        value={birthDateTime}
        onChange={(e) => setBirthDateTime(e.target.value)}
      />
      <button onClick={calculateAge}>Calculate Age</button>
      {ageDetails && (
        <p>
          Your age is: {ageDetails.years} years, {ageDetails.months} months,{' '}
          {ageDetails.days} days, {ageDetails.hours} hours, {ageDetails.minutes}{' '}
          minutes, and {ageDetails.seconds} seconds.
        </p>
      )}
    </div>
  );
};

export default AgeCalculator;
