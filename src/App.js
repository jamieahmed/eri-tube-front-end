import React from 'react';
import "./App.css";
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components'
import Navbar from './Components/NavBarPage/Navbar';
import Menu from './Components/MenuPage/Menu';
import SignIn from './Pages/Authentication/SignIn'
import Home from './Pages/Home/Home'
import Search from './Pages/Search/Search';
import Video from './Pages/Video/Video'

const Container = styled.div`
  display: flex;
  background-color:red;
`;

const Main = styled.div`
  flex: 7;
`;
const Wrapper = styled.div`
  padding: 20px;
`;


const App = () => {
  return (
    <>
      <Container>
        <Menu />
        <Main>
          <Navbar />
          <Wrapper>
            <Routes>
              <Route path="/">
                <Route index element={<Home type="random" />} />
                <Route path="trends" element={<Home type="trend" />} />
                <Route path="subscriptions" element={<Home type="subscriptions" />} />
                <Route path="search" element={<Search />} />
                <Route
                  path="signin"
                  element={<SignIn />}
                />
                <Route path="video">
                  <Route path=":id" element={<Video />} />
                </Route>
              </Route>
            </Routes>
          </Wrapper>
        </Main>
      </Container>
    </>
  )
}

export default App
