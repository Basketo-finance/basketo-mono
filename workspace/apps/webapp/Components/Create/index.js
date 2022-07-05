import React, { useState } from "react";
import { Box, Step, StepLabel, Stepper, Typography } from "@mui/material";
import StepOne from "./StepOne";
import Graph from "../Common/Graph";
import { useQuery } from "react-query";

const basketData = [
  { name: "bitcoin", ratio: 25, noOfDays: 7 },
  {
    name: "ethereum",
    ratio: 65,
    noOfDays: 7,
  },
  {
    name: "near",
    ratio: 10,
    noOfDays: 7,
  },
];

const Create = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = ["Choose Tokens", "Details", "Review"];

  const renderStep = () => {
    switch (activeStep) {
      case 0:
        return (
          <>
            <StepOne data={coin_data} />
          </>
        );
      default:
        break;
    }
  };

  const {
    isLoading: graph_data_loading,
    error: graph_data_error,
    data: graph_data,
  } = useQuery("graphData", () =>
    fetch(`https://basketo-api.herokuapp.com/api/graph_data`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body: JSON.stringify({ basketData: basketData }),
    })
      .then((res) => res.json())
      .catch((err) => console.log(err))
  );

  const {
    isLoading: coin_data_loading,
    error: coin_data_error,
    data: coin_data,
  } = useQuery("coinData", () =>
    fetch("https://basketo-api.herokuapp.com/api/coins")
      .then((res) => res.json())
      .catch((err) => console.log(err))
  );

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box sx={{ maxWidth: "md", width: "100%", padding: "15px" }}>
        <Typography variant="h3">Create a Basket</Typography>
        <Box
          sx={{
            width: "100%",
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "15px",
            margin: "15px 0px",
          }}
        >
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((step, i) => (
              <Step key={i}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {renderStep()}
        </Box>
        <Graph data={graph_data} />
      </Box>
    </Box>
  );
};

export default Create;
