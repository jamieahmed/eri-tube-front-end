import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const Container = styled.div`
  position: sticky;
  background-color: black;
  height: 56px;
  top: 0;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0px 20px;
  position: relative;
`;

const Search = styled.div`
  width: 40%;
  position: absolute;
  left: 0px;
  right: 0px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid red;
  border-radius: 3px;
  cursor: pointer;
  color: red;
  &:hover {
    border: 1px solid tomato;
    color: white;
  }
`;

const Input = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  color: red;
  font-weight: bold;
  font-style: italic;
  width: 100%;
`;

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid red;
  color: red;
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  &:hover {
    background-color: tomato;
    color: white;
  }
`;

const Navbar = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Search>
            <Input placeholder="Search" />
            <SearchOutlinedIcon />
          </Search>
          <Link to="signin" style={{ textDecoration: "none" }}>
            <Button>
              <AccountCircleOutlinedIcon />
              SIGN IN
            </Button>
          </Link>
        </Wrapper>
      </Container>
    </>
  );
};

export default Navbar;
