import logo from './logo.svg';
import './App.css';
import Content from './components/Content'
import Design from './components/Design';
import Nav from './components/Nav'
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme();
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Nav />
        <main>
          {/* <Grid container spacing={5} sx={{ mt: 3 }}>
            <Grid item xs={12} sm={6}>
              <Design />
            </Grid>
            <Grid item xs={12} sm={6}>
              <div>
                <img src={require("./images/convection.png")} />
              </div>
            </Grid>
          </Grid> */}
          <Design />
          <Container maxWidth="lg" className='footer' >
            <Grid xs={12} sm={12}>
              <div>
                <center>
                  Designed & Developed by <a href="https://www.rishwanth.com">Rishwanth Perumandla</a>
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
