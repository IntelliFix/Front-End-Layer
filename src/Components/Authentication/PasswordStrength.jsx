import React, { useState } from "react";
import "./PasswordStrength.css"; // Corrected typo in import statement
import './Authentication.css';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye'



const strengthLabels = ["weak", "medium", "medium", "strong"];

export const PasswordStrength = ({ placeholder, onChange }) => {
  const [strength, setStrength] = useState("");
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);

  const togglePasswordVisibility = () => {
    if (type === 'password') {
      setIcon(eye);
      setType('text')
    } else {
      setIcon(eyeOff)
      setType('password')
    }
  }

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
      <div className="password-input-container">
        <input
          id='password-input'
          name="password"
          placeholder="Password"
          spellCheck="false"
          className="control"
          type={type}
          onChange={handleChange}
          required
          autoComplete="current-password"
        />
        <span onClick={togglePasswordVisibility}>
          <Icon className="password-toggle-icon" icon={icon} size={25} />
        </span>
      </div>

      <div className={`bars ${strength}`}> {/* Changed single quotes to backticks for string interpolation */}
        <div></div>
      </div>
      <div className="strength">
        {strength && `${strength} password`}
      </div>
    </>
  );
};
