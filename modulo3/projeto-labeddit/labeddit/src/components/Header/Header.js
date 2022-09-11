import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { StyledToolbar } from './styled';
import { useNavigate } from 'react-router-dom';
import { goToFeed, goToLogin} from '../../routes/coordinator'


export default function Header() {
    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    const logout = () =>{
      localStorage.removeItem('token');
      goToLogin(navigate)
    }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <StyledToolbar>
          <Button onClick={() => goToFeed(navigate)} color="inherit">Labeddit</Button>
          {token ? <Button onClick={logout} color="inherit">Logout</Button> : <Button onClick={() => goToLogin(navigate)} color="inherit">Login</Button>}
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}