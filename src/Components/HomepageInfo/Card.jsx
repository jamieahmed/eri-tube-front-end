import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const videoPreviewImage =
  "https://tse4.mm.bing.net/th?id=OIP.XvtySZFYv7aGNHpIh6Tw9gHaEK&pid=Api&P=0";
const channelImage =
  "https://tse2.mm.bing.net/th?id=OIP.4gcGG1F0z6LjVlJjYWGGcgHaHa&pid=Api&P=0";

const Container = styled.div`
  display: ${(props) => props.type === "sm" && "flex"};
  width: 250px;
  height: auto;
  margin-bottom: 45px;
  cursor: pointer;
  gap: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: ${(props) => (props.type === "sm" ? "120px" : "202px")};
  background-color: #999;
  flex: 1;
`;

const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "16px"};
  gap: 12px;
  flex: 1;
`;

const ChannelImage = styled.img`
  display: ${(props) => props.type === "sm" && "none"};
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: white; ;
`;

const Texts = styled.div``;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: white;
`;

const ChannelName = styled.h2`
  font-size: 14px;
  color: white;
  margin: 9px 0px;
`;

const Info = styled.div`
  font-size: 14px;
  color: white;
`;

const Card = () => {
  return (
    <Link
      to="/video/gosomewhere"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <Container>
        <Image src={videoPreviewImage} />
        <Details>
          <ChannelImage src={channelImage} />
          <Texts>
            <Title>video title</Title>
            <ChannelName>Channel Name</ChannelName>
            <Info>20.000K views 23 day ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
