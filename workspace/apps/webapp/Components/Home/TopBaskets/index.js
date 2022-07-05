import {
  Button,
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  styled,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const BasketCard = styled(Card)(({ theme }) => ({
  borderRadius: "25px",
  border: "1px solid #CCCCCC",
  boxShadow: "none",
  "&:hover": {
    // boxShadow: "5px 5px #CCCCCC",
    cursor: "pointer",
  },
}));

const TopBaskets = () => {
  const [baskets, setBaskets] = useState([
    {
      id: 1,
      name: "Super Basket",
      symbol: "SUPB",
      growth: "+2.03% in the past hour",
      baskete: "SuperTeam Dao",
    },
    {
      id: 2,
      name: "Super Basket",
      symbol: "SUPB",
      growth: "+2.03% in the past hour",
      baskete: "SuperTeam Dao",
    },
    {
      id: 3,
      name: "Super Basket",
      symbol: "SUPB",
      growth: "+2.03% in the past hour",
      baskete: "SuperTeam Dao",
    },
  ]);

  return (
    <Container maxWidth="lg" sx={{ mt: 2, mb: 2 }}>
      <Grid
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
      >
        <Typography
          color={"secondary.dark"}
          sx={{
            mb: { xs: "1rem", sm: "3rem" },
            letterSpacing: "3px",
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          TRENDING BASKETS
        </Typography>
        {/* <Button variant="text" color="success" endIcon={<ArrowForwardIcon />}>
          See More
        </Button> */}
      </Grid>
      <Grid
        container
        columns={{ xs: 4, sm: 8, md: 12 }}
        spacing={{ md: 4, xs: 2 }}
      >
        {baskets &&
          baskets.map((basket) => (
            <Grid item xs={4} key={basket.id}>
              <BasketCard className="myContainer">
                <CardHeader
                  title={basket.name}
                  subheader={`${basket.symbol} | ${basket.growth}`}
                />
                <CardMedia
                  component="img"
                  height="150"
                  image="/graph.png"
                  sx={{ padding: "10px 10px", borderRadius: "25px" }}
                />
                <div style={{ padding: "0 10px" }}>
                  <hr style={{ color: "#CCCCCC" }} />
                </div>
                <CardActions sx={{ gap: "0.5rem" }}>
                  <AccountCircleIcon fontSize="large" color="text.secondary" />
                  <Typography variant="body2" color="text.secondary">
                    {basket.baskete}
                  </Typography>
                </CardActions>
                <div className="overlay">
                  <div className="text">Coming Soon!!</div>
                </div>
              </BasketCard>
            </Grid>
          ))}
      </Grid>
      <style>{`
        .overlay {
          position: absolute;
          bottom: 0;
          left: 100%;
          right: 0;
          background-color: #eee;
          overflow: hidden;
          width: 0;
          height: 100%;
          transition: .3s ease;
        }

        .myContainer {
          position: relative;
        }

        .myContainer:hover .overlay {
          width: 100%;
          left: 0;
        }

        .text {
          color: #000;
          opacity: 1;
          font-size: 20px;
          position: absolute;
          top: 50%;
          left: 50%;
          -webkit-transform: translate(-50%, -50%);
          -ms-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
          white-space: nowrap;
        }
      `}</style>
    </Container>
  );
};

export default TopBaskets;
