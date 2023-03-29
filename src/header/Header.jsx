import { AppBar, Avatar, Toolbar, Typography } from "@mui/material";


function Header() {
    return (
      <AppBar position="static">
        <Toolbar>
          {/* Logo de la empresa a la izquierda */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           Burger Quien
          </Typography>
  
          {/* Avatar a la derecha */}
          <Avatar alt="Mi Avatar" src="/ruta/al/avatar.jpg" />
        </Toolbar>
      </AppBar>
    );
  }
  
  export default Header;
  