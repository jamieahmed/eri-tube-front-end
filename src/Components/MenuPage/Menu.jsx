import React from "react";
import "./Menu.css";
import styled from "styled-components";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import TheatersOutlinedIcon from "@mui/icons-material/TheatersOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import AnnouncementIcon from "@mui/icons-material/Announcement";

const Container = styled.div`
  flex: 1;
  background-color: black;
  color: red;
  font-size: 14px;
  position: sticky;
  top: 0;
  font-weight: bold;
  font-style: italic;
  height: 100%;
`;

const Wrapper = styled.div`
  padding: 18px 26px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bolder;
  margin-bottom: 25px;
  font-family: Arial, Helvetica, sans-serif;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0px;
  &:hover {
    background-color: tomato;
    color: white;
  }
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid red;
`;
const Login = styled.div``;

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid red;
  color: red;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  &:hover {
    background-color: tomato;
    color: white;
  }
`;

const MoreLinks = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
`;

const GroupA = styled.div`
  display: flex;
`;
const GroupB = styled.div`
  display: flex;
`;
const InfoLink = styled.div`
  margin: 5px;
`;

const Menu = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Link to="/" style={{ textDecoration: "none", color: "red" }}>
            <Logo>Eri Tube</Logo>
          </Link>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Item>
              <HomeIcon />
              Home
            </Item>
          </Link>
          <Item>
            <ExploreOutlinedIcon />
            Explore
          </Item>
          <Item>
            <TheatersOutlinedIcon />
            Shorts
          </Item>
          <Item>
            <SubscriptionsOutlinedIcon />
            Subscriptions
          </Item>
          <Hr />
          <Item>
            <VideoLibraryOutlinedIcon />
            Library
          </Item>
          <Item>
            <PlayCircleIcon />
            Your videos
          </Item>
          <Item>
            <HistoryOutlinedIcon />
            Watch later
          </Item>
          <Item>
            <ThumbUpOutlinedIcon />
            Liked videos
          </Item>
          <Item>
            <HistoryOutlinedIcon />
            History
          </Item>

          <Hr />
          <Login>
            Sign in to like, comment,subscribe and more.
            <Link to="signin" style={{ textDecoration: "none" }}>
              <Button>
                <AccountCircleOutlinedIcon />
                SIGN IN
              </Button>
            </Link>
          </Login>
          <Hr />
          <Item>
            <LibraryMusicOutlinedIcon />
            Music
          </Item>
          <Item>
            <SportsBasketballOutlinedIcon />
            Sports
          </Item>
          <Item>
            <SportsEsportsOutlinedIcon />
            Gaming
          </Item>
          <Item>
            <MovieOutlinedIcon />
            Movies
          </Item>
          <Item>
            <ArticleOutlinedIcon />
            News
          </Item>
          <Item>
            <LiveTvOutlinedIcon />
            Live
          </Item>
          <Hr />
          <Item>
            <SettingsOutlinedIcon />
            Settings
          </Item>
          <Item>
            <FlagOutlinedIcon />
            Report history
          </Item>
          <Item>
            <HelpOutlineOutlinedIcon />
            Help
          </Item>
          <Item>
            <AnnouncementIcon />
            Send feedback
          </Item>
          <Item>
            <SettingsBrightnessOutlinedIcon />
            Dark Mode
          </Item>
          <Hr />
          <MoreLinks>
            <GroupA>
              <InfoLink>About</InfoLink>
              <InfoLink>ContactUs</InfoLink>
              <InfoLink>Developers</InfoLink>
            </GroupA>
            <GroupB>
              <span>© 2022 Eri Tube LLC</span>
            </GroupB>
          </MoreLinks>
        </Wrapper>
      </Container>
    </>
  );
};

export default Menu;
