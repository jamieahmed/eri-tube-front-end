import React from "react";
import styled from "styled-components";
import Card from "../HomepageInfo/Card";

const Container = styled.div`
  flex: 2;
`;

const Recommendation = () => {
  return (
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
    </Container>
  );
};

export default Recommendation;
