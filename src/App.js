import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";
import Profile from "./components/Profile/profile";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Portfolio from "./pages/Portfolio/portfolio";

const App = () => {
	return (
		<Container>
			<Grid container>
				<Grid size={{ xs: 12, sm: 12, md: 4, lg: 3 }}>
					<Profile />
				</Grid>
				<Grid size="grow">
          <Header />
          <Portfolio/>
					<Footer />
				</Grid>
			</Grid>
		</Container>
	);
};

export default App;
