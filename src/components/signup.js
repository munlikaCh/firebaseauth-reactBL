import React, { useRef } from "react";
import { useUserContext } from "../context/userContext";

const Signup = () => {
  const emailRef = useRef();
  const nameRef = useRef();
  const psdRef = useRef();
  const { registerUser } = useUserContext();

  const onSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = psdRef.current.value;
    //  if ( name == null || name.isEmpty) {
    //   return '! Please enter your name';
    // } 
    // if (email == null || email.isEmpty) {
    //   return '! Please enter your e-mail';
    // } else if (!email.contains('@gmail.com')) {
    //   return '! Sorry, only letters(a-z), numbers(0-9), and periods(.) are allowed.';
    // } 
    // if ( password == null || password.isEmpty) {
    //   return '! Please enter your password';
    // }
    // then
    if (email && password && name) registerUser(email, password, name);
  };

  return (
    <div className="form">
      <h2>Create account</h2>
      <form onSubmit={onSubmit}>
        <input placeholder="Name" type="name" ref={nameRef} />
        <input placeholder="Email" type="email" ref={emailRef} />
        <input placeholder="Password" type="password" ref={psdRef} />
        <button type="submit">SIGN UP</button>
      </form>
    </div>
  );
};

export default Signup;
