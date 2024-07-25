import "./registr.css"

function RegistrationForm() {
  return (
    <div className="registration-form">
      <h2>Create an account</h2>
      <p className="tittlee">Kindly fill the following details to create your account.</p>
      <form>
        <input type="text" placeholder="Enter your full name" />
        <input type="email" placeholder="Enter your email address" />
        <input type="text" placeholder="Enter your username" />
        <input type="password" placeholder="Enter password" />
        <textarea placeholder="Your Biography"></textarea>
        <button type="submit">CREATE ACCOUNT</button>
      </form>
      <p className="last">You will receive an email after setting up your account</p>
    </div>
  );
}

export default RegistrationForm;
