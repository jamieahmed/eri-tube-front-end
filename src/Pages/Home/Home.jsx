import React from "react";
import "./Home.css";
import Card from "../../Components/HomepageInfo/Card";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  color: white;
`;

const Home = () => {
  return (
    <>
      <Container>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Container>
    </>
  );
};

export default Home;
