import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";

const Steps = ({ stepCount, title, description, flexDirection, imgUrl }) => {
  return (
    <Grid
      container
      justifyContent="space-around"
      // flexDirection={flexDirection}
      // alignItems="center"
      sx={{
        flexDirection: {
          xs: "column",
          md: flexDirection
        },
        alignItems: { md: "center" }
      }}
    >
      <Grid
        item
        xs={12}
        // sm={5.75}
        md={5}
        lg={4.5}
        sx={{ m: { xs: "20px 0", md: 0 } }}
      >
        <img src={imgUrl} style={{ width: "100%" }} />
      </Grid>

      <Grid
        item
        xs={12}
        // sm={5.75}
        md={5}
        lg={4.5}
      >
        <Typography fontSize="0.9rem" sx={{ mb: 2 }}>
          {stepCount}
        </Typography>
        <Typography
          variant="h1"
          component="div"
          fontSize="2rem"
          sx={{ mb: 2}}
        >
          {title}
        </Typography>

        <Typography
          variant="body1"
          component="div"
          fontSize="0.9rem"
          sx={{ mb: 2 }}
        >
          {description}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Steps;
