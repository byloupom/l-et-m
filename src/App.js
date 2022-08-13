import { customTheme } from "./themes/theme.ts";
import "./App.css";
import { ThemeProvider, CssBaseline, Container, Box, Typography } from "@mui/material";
import Hero from "./components/Hero";

import { Routes, Route, Link, useLocation } from "react-router-dom";
import Accueil from "./components/Accueil/Accueil";
import Dormir from "./components/Dormir/Dormir";
import betise from "./images/betise.png";
import { useLayoutEffect } from 'react'

const Wrapper = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    // document.documentElement.scrollTo({top: 0, behavior: "smooth"});
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
} 

function App() {
  return (
    <div className="App">
      <Wrapper>
        <ThemeProvider theme={customTheme}>
          <CssBaseline enableColorScheme />
          <Link to="/" style={{ textDecoration: "none" }}>
            <Hero />
          </Link>
          <Container maxWidth="md">
            <Routes>
              <Route path="/" element={<Accueil />} />
              <Route path="/dormir" element={<Dormir />} />
              <Route path="*" element={<h1>Page not found.</h1>} />
            </Routes>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              mt={6}
              mb={6}
              sx={{ transform: "rotate(13deg)" }}
            >
              <img src={betise} alt="Bétise de Cambray" width="100px" />
            </Box>
            <Box display="flex" 
        alignItems="center"
        justifyContent="center"><Typography 
        color="text.secondary"
        sx={{ mt: 1, fontFamily: "Monospace" }}

      >
        📨 Louis et Marianne, 14 rue de Strasbourg, 92600 Asnières-sur-Seine
      </Typography></Box>
      <Box display="flex" 
        alignItems="center"
        justifyContent="center"><Typography 
        color="text.secondary"
        sx={{ mt: 1, fontFamily: "Monospace" }}

      >
        (v1.025)
      </Typography></Box>
          </Container>
        </ThemeProvider>
      </Wrapper>
    </div>
  );
}
export default App;
