import Link from "next/link";
import { Container, Button, CardActions, CardContent, Typography } from "@mui/material";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

const Hero = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection:'column',
        justifyContent: "center",
        alignItems: "center",
        mt:'60px'
      }}
    >
      <Typography 
      sx={{textAlign:'center', 
          fontSize:{xs:'42px',md:'75px'},
          fontWeight:'400',
          lineHeight:'1.2em',
          mb:'30px'}} >
      Invest in diversified crypto portfolios with&nbsp;
      <span style={{ borderBottom:'3px solid #000' }}>Basketo</span>
      </Typography>
    
      <Link href="/explore" >
        <Button 
          variant="contained"
          sx={{fontSize:'18px'}}
          startIcon={
            <ArrowCircleUpIcon
              style={{ transform: "rotate(90deg)", fontSize: "25px" }}
            />
          }
        >
          Explore Baskets
        </Button>
      </Link>
              
    </Container>
  );
};

export default Hero;
