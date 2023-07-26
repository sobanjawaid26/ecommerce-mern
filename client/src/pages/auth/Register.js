import React, {useState} from "react";
import {auth} from '../../firebase';
import {toast} from 'react-toastify';

const Register = () => {
  const [email, setEmail] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log('env',process.env);
    const config = {
      // URL from env file is not working, need a fix for that
      //url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
      url: 'https://localhost:3000/register/complete',
      handleCodeInApp: true
    }
    await auth.sendSignInLinkToEmail(email, config);
    toast.success(`Email is sent to ${email}. Click the link to complete your notification`);
    // save use email in local storage
    window.localStorage.setItem('emailForRegistration', email);
    // clear the state
    setEmail('');
  };

  const registerForm = () => 
    <form onSubmit={handleSubmit}>
      <input 
        type="email" 
        className="form-control" 
        value={email} 
        onChange={e => setEmail(e.target.value)}
        autoFocus
        />
        <button
          type="submit"
          className="btn btn-raised">
            Register
        </button>
    </form>;

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-mid-6 offset-md-3">
          <h4>Register</h4>
          
          {registerForm()}
        </div>
      </div>
    </div>
  );
};

export default Register;
