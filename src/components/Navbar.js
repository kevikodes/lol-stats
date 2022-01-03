import { signOut } from "firebase/auth";
import React from "react";
import styled from "styled-components";
import { auth } from "../utils/firebase";

const Navbar = ({ user }) => {
  const handleLogout = async () => {
    try {
      await signOut(auth).then(() => {
        // window.location.reload();
        console.log("logged out");
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Container>
      <NavHeader>LOL Stats and Lore</NavHeader>
      {!user ? (
        <LoginBtn>Login/Register</LoginBtn>
      ) : (
        <>
          <h3 style={{ color: "white", fontSize: "20px" }}>
            Welcome, {user.email}
          </h3>
          <LoginBtn onClick={handleLogout}>Logout</LoginBtn>
        </>
      )}
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  min-height: 100px;
  width: 100%;
  background-color: blueviolet;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
`;

const NavHeader = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: white;
  letter-spacing: 2px;
  cursor: pointer;
`;

const LoginBtn = styled.div`
  color: white;
  border-radius: 20px;
  border: 1px solid white;
  padding: 10px;
  cursor: pointer;
`;
