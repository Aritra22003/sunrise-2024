import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import Link from 'next/link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#121212',
      paper: '#1E1E1E',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B0B0B0',
    },
  },
});

const Home = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Typography variant="h4" gutterBottom>Welcome to the Task Manager</Typography>
        <Link href="/tasks" passHref>
          <Button variant="contained" color="primary">Go to Task Manager</Button>
        </Link>
      </Container>
    </ThemeProvider>
  );
};

export default Home;
