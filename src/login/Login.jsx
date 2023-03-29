import { Box, Button, Container, TextField , Grid} from "@mui/material";

import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";



const theme = createTheme({
    paper: {
       
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
    
      form: {
        width: '100%', // Fix IE 11 issue.
    
      },
      submit: {
      },
  });
  

export default function Login() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState({
    error: false,
    message: "",
  });

  const emailValidation = (email) => {
    // expresion regular para validar email
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return regex.test(email);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!emailValidation(email)) {
      setError({
        error: true,
        message: "El email no es valido",
      });
      return;
    }
    console.log(email);
    setError({
      error: false,
      message: "",
    });
  };

  return (
   <Container>
    <Grid
  container
  direction="column"
  justifyContent="center"
  alignItems="center"
>
    <h1>Login</h1>

<Box
  component="form"
  onSubmit={onSubmit}
  autoComplete="off"
>
  <TextField
    label="Email"
    variant="outlined"
    id="email"
    type="email"
    fullWidth
    required
    error={error.error}
    helperText={error.message}
    onChange={(e) => setEmail(e.target.value)}
    value={email}
  />
  <TextField
    label="Password"
    variant="outlined"
    id="password"
    type="password"
    fullWidth
    required
    pt={2}
    
  />

  <Button
    variant="outlined"
    type="submit"
    sx={{ mt: 2 }}
  >
    Submit
  </Button>
</Box>
</Grid>
</Container>
    
  );
}
