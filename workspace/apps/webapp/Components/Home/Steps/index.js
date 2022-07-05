import { Container, Typography, Divider } from "@mui/material";
import React from "react";
import { stepOne, stepThree, stepTwo } from "../../../mocks/descriptions";
import Description from "../../Common/Description";
import Steps from "../../Common/Steps";

const HowItWorks = () => {
  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 8, mb: { xs: 2, sm: 4 } }}>
        <Typography
          color={"secondary.dark"}
          sx={{
            mb: { xs: "1rem", md: "3rem" },
            letterSpacing: "3px",
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          HOW IT WORKS
        </Typography>
        <Steps
          stepCount="STEP ONE"
          title="Explore & pick the best Baskets for you."
          description={<Description description={stepOne} />}
          flexDirection="row"
          imgUrl="/images/step_1.png"
        />
        <Steps
          stepCount="STEP TWO"
          title="Securely invest any amount."
          description={<Description description={stepTwo} />}
          flexDirection="row-reverse"
          imgUrl="/images/step_2.png"
        />
        <Steps
          stepCount="STEP THREE"
          title="Subscribe to Basket updates."
          description={<Description description={stepThree} />}
          flexDirection="row"
          imgUrl="/images/step_3.png"
        />
      </Container>
      <Container maxWidth="lg">
        <Divider />
      </Container>
    </>
  );
};

export default HowItWorks;
