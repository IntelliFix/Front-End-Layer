import React, { useState } from "react";
import "./PasswordStrength.css"; // Corrected typo in import statement

const strengthLabels = ["weak", "medium", "medium", "strong"];

export const PasswordStrength = ({ placeholder, onChange }) => {
  const [strength, setStrength] = useState("");
  
  const getStrength = (password) => {
    let indicator = -1;
    if (/[a-z]/.test(password)) indicator++;
    if (/[A-Z]/.test(password)) indicator++;
    if (/\d/.test(password)) indicator++;
    if (/[^a-zA-Z0-9]/.test(password)) indicator++;
    if (password.length >= 16) indicator++;
    return strengthLabels[indicator];
};

  const handleChange = (event) => {
    const password = event.target.value;
    setStrength(getStrength(password));
    onChange(password);
  };

  return (
    <>
      <input
        name="password"
        spellCheck="false"
        className="control"
        type="password"
        placeholder={placeholder}
        onChange={handleChange}
      />
      <div className={`bars ${strength}`}> {/* Changed single quotes to backticks for string interpolation */}
        <div></div>
      </div>
      <div className="strength">
        {strength && `${strength} password`}
      </div>
    </>
  );
};
