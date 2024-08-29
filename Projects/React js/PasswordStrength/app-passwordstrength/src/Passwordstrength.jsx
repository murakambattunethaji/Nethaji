import React, { useState } from "react";

function PasswordStrength() {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");

  const checkPasswordStrength = (password) => {
    let strengthValue = 0;

    if (password.length >= 8) {
      strengthValue += 1;
    }

    let hasUppercase = /[A-Z]/.test(password);
    let hasLowercase = /[a-z]/.test(password);
    let hasNumber = /\d/.test(password);
    let hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (hasUppercase) strengthValue += 1;
    if (hasLowercase) strengthValue += 1;
    if (hasNumber) strengthValue += 1;
    if (hasSpecialChar) strengthValue += 1;

    if (strengthValue <= 2) {
      setStrength("Weak");
    } else if (strengthValue === 3) {
      setStrength("Medium");
    } else if (strengthValue >= 4) {
      setStrength("Strong");
    }
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    checkPasswordStrength(newPassword);
  };

  return (
    <div style={{ marginLeft: "400px", marginTop: "50px", width: "500px", height: "auto" }}>
      <div style={{ marginRight: "20px", color: "green", textAlign: "center" }}>
        <h2> Password Strength Testing</h2>
      </div>
      <div>
        <label htmlFor="password">Enter your password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div id="strengthIndicator" className={`strength ${strength.toLowerCase()}`}>
        Strength: {strength}
      </div>
    </div>
  );
}

export default PasswordStrength;