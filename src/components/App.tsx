import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Auth from './Auth';
import Profile from './Profile';

import GlobalStyles from '../styles/global'
import * as C from "../styles/components";

export default function App() {
  const [activeUser, setActiveUser] = useState('');

  return (
    <Router>
      <GlobalStyles/>
      <C.Container className="App">
        <C.Header>ONLY.</C.Header>
        <Routes>
          <Route path="/" element={<Auth setActiveUser={setActiveUser} />} />
          <Route path="/profile" element={<Profile activeUser={activeUser} setActiveUser={setActiveUser} />} />
        </Routes>
      </C.Container>
    </Router>
  );
}

