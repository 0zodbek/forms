import React, { useRef } from 'react';
import './registrUseRef.css'; // Импортируем CSS файл

function RegistrationForm() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const companyRef = useRef(null);
  const addressRef = useRef(null);
  const monthRef = useRef(null);
  const dayRef = useRef(null);
  const yearRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const userData = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
      company: companyRef.current.value,
      address: addressRef.current.value,
      dateOfBirth: `${monthRef.current.value}-${dayRef.current.value}-${yearRef.current.value}`
    };

    const existingData = JSON.parse(localStorage.getItem('userData')) || [];
    existingData.push(userData);
    localStorage.setItem('userData', JSON.stringify(existingData));

    firstNameRef.current.value = '';
    lastNameRef.current.value = '';

  };

  return (
    <div className="registration-form">
      <h2>YourEvent</h2>
      <h3>Online Registration</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" ref={firstNameRef} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
