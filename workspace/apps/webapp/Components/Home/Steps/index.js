import { Container, Typography, Divider, useTheme } from "@mui/material";
import { stepOne, stepThree, stepTwo } from "../../../mocks/descriptions";
import Description from "./Description";
import Steps from "./Steps";

const HowItWorks = () => {
  const {palette:{mode}} = useTheme();
  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 8, mb: { xs: 2, sm: 4 } }}>
        <Typography
        variant='subtitle2'
          sx={{
            mb: { xs: "1rem", md: "3rem" },
          }}
        >
          HOW IT WORKS
        </Typography>
        <Steps
          stepCount="STEP ONE"
          title="Explore & pick the best Baskets for you."
          description={<Description description={stepOne} />}
          flexDirection="row"
          imgUrl={`/images${mode=='dark'?'D':''}/step_1.png`}
        />
        <Steps
          stepCount="STEP TWO"
          title="Securely invest any amount."
          description={<Description description={stepTwo} />}
          flexDirection="row-reverse"
          imgUrl={`/images${mode=='dark'?'D':''}/step_2.png`}
        />
        <Steps
          stepCount="STEP THREE"
          title="Subscribe to Basket updates."
          description={<Description description={stepThree} />}
          flexDirection="row"
          imgUrl={`/images${mode=='dark'?'D':''}/step_3.png`}
        />
      </Container>
      <Container maxWidth="lg">
        <Divider />
      </Container>
    </>
  );
};

export default HowItWorks;
