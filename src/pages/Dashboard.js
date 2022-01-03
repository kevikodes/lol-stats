import React from "react";
import Champions from "../components/Champions";
import styled from "styled-components";

const Dashboard = () => {
  return (
    <Container>
      <Header>Champions</Header>
      <Champions />
    </Container>
  );
};

export default Dashboard;

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Header = styled.h1`
  font-size: 2.2rem;
  text-align: center;
  margin-bottom: 30px;
`;
