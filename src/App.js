import logo from './logo.svg';
import './App.css';
import Content from './components/Content'
import Design from './components/Design';
import Design1 from './components/Design1';
import Nav from './components/Nav'
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme({

});

function App() {
  return (

    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="xl">
        <Nav />
        <main>
          <Design1 />
          <Container maxWidth="lg" className='footer' >
            <Grid xs={12} sm={12}>
              <div>
                <center>
                  Designed & Developed by <a href="https://www.rishwanth.com">Rishwanth Perumandla @Griet</a>
                </center>

              </div>
            </Grid>
          </Container>
        </main>
      </Container>
    </ThemeProvider>

  );
}

export default App;
