import Footer from "../Components/Footer";
import Hero from "../Components/Home/Hero";
import TopBaskets from "../Components/Home/TopBaskets";
import Navbar from "../Components/Navbar";
import Partners from "../Components/Home/Partners";
import CreateBaskets from "../Components/Home/CreateBaskets";
import Steps from "../Components/Home/Steps";
import Subscription from "../Components/Home/Subscription";
import FAQ from "../Components/Home/FAQ";
import {Paper} from "@mui/material";

const index = () => {
  return (
    <Paper variant='window' sx={{overflowX:'hidden'}} >
      <Navbar />
      <div style={{ paddingTop: "70px" }}>
        <Hero />
        <TopBaskets />
        <Partners />
        <Steps />
        <CreateBaskets />
        <Subscription />
        <FAQ />
        <Footer />
      </div>
    </Paper>
  );
};

export default index;
