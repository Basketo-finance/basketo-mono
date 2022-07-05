import { Button, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";

const Explore = () => {
  return (
    <Grid mt={5} mb={5}>
      <Container>
        <Grid textAlign={"center"}>
          <Grid
            display={"flex"}
            justifyContent={"space-around"}
            alignItems={"center"}
            mt={10}
          >
            <Grid>
              <Paper sx={{ width: 400, height: 300 }}></Paper>
            </Grid>
            <Grid
              style={{
                padding: 30,
                borderRadius: 10,
                width: 400,
                height: 300,
              }}
              textAlign={"left"}
            >
              <Typography sx={{ fontWeight: 700 }} variant="h5">
                Invest in best <br /> performing Baskets
              </Typography>
              <Typography sx={{ fontWeight: 500, mt: '10px' }}>
                Explore the wide range of crypto baskets and choose the one that
                suits you the best, invest in it with just a single click.
              </Typography>
              <Button size="small" variant="outlined" sx={{ mt: "20px" }}>
                Explore Baskets
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default Explore;
