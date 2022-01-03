import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = ({ emailRef, passwordRef }) => {
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      ).then(() => {
        console.log("logged in");
        // window.location = "/dashboard";
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Container>
      <LoginForm onSubmit={handleLogin}>
        <FormHeader>Login</FormHeader>
        <FormInput>
          <input placeholder="Email..." type="email" required ref={emailRef} />
        </FormInput>
        <FormInput>
          <input
            placeholder="Password..."
            type="password"
            required
            ref={passwordRef}
          />
        </FormInput>
        <FormSubmit type="submit">Login</FormSubmit>
        <ActionLink>
          Need an account? <Link to="/register">Register</Link>
        </ActionLink>
      </LoginForm>
    </Container>
  );
};

export default Login;
const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

const LoginForm = styled.form`
  min-width: 500px;
  display: flex;
  max-height: 700px;
  background-color: blueviolet;
  flex-direction: column;
  margin: 30px;
  padding: 30px;
  border-radius: 20px;
`;

const FormHeader = styled.h1`
  font-size: 2rem;
  color: white;
  font-weight: 700;
  text-align: center;
  margin-bottom: 40px;
`;

const FormInput = styled.div`
  > input {
    border: none;
    outline: none;
    background-color: white;
    color: black;
    font-size: 1.2rem;
    padding: 10px;
    width: 100%;
    border-radius: 20px;
    ::placeholder {
      color: black;
      font-size: 1.2rem;
    }
  }
  background-color: white;
  color: white;
  border-radius: 20px;
  margin-bottom: 30px;
`;

const FormSubmit = styled.button`
  font-size: 1.2rem;
  color: white;
  border: 2px solid white;
  border-radius: 10px;
  display: flex;
  width: 50%;
  justify-content: center;
  padding: 10px;
  font-weight: 800;
  margin: 0 auto;
  cursor: pointer;
  margin-bottom: 20px;
  background-color: blueviolet;
`;

const ActionLink = styled.div`
  font-size: 1.1rem;
  color: white;
  text-align: center;

  > a {
    font-weight: 600;
    color: white;
  }
`;
