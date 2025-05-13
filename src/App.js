import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";
import Profile from "./components/Profile/profile";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Portfolio from "./pages/Portfolio/portfolio";
import Resume from "./pages/Resume/resume";
import { Route, Routes } from "react-router";
import "./App.css";
const App = () => {
  return (
    <Container className="container_shadow">
      <Grid container>
        <Grid size={{ xs: 12, sm: 12, md: 4, lg: 3 }}>
          <Profile />
        </Grid>
        <Grid size="grow">
          <Header />
          <Routes>
            <Route path="/" index element={<Resume />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>

          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
