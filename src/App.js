import logo from './logo.svg';
import './App.css';
import Content from './components/Content'
import Design from './components/Design';
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
      <div className="ripple-background">
        <div className="circle xxlarge shade1"></div>
        <div className="circle xlarge shade2"></div>
        <div className="circle large shade3"></div>
        <div className="circle mediun shade4"></div>
        <div className="circle small shade5"></div>
      </div>
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
              <div size="small">
                <center>
                  <img src={require("./images/thermopadslogo.png")} />
                </center>

              </div>
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
