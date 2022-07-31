import React from 'react';
import {useNavigate} from 'react-router-dom';
import styled from "styled-components";

import * as C from "../styles/components";

interface ProfileProps {activeUser: string; setActiveUser: any;}

export default function Profile({activeUser, setActiveUser}: ProfileProps) {
  const navigate = useNavigate();
  const handleLogout = () => {
    setActiveUser('');
    navigate('/');
  }

  return (
    <Box>
      <Text>Здравствуйте, <b>{activeUser}</b></Text>
      <C.Button 
        color='#000' 
        bg="#F5F5F5" 
        width="200px"
        type="submit" 
        onClick={handleLogout} 
        value='Выйти' 
      />
    </Box>
  );
}

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`

const Text = styled.p`
  font-size: 40px;
  margin-bottom: 50px;
`

