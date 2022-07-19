import { useEffect, useState } from 'react';
import { Box, Step, StepLabel, Stepper, Typography } from '@mui/material';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import { useSelector } from 'react-redux';
import { getTokens } from 'apps/webapp/features/selectTokens';

const Create = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [graphData, setGraphData] = useState(null);
  const [days, setDays] = useState(1);
  const { selectedTokens } = useSelector(getTokens);

  const steps = ['Choose Tokens', 'Details', 'Review'];

  const renderStep = () => {
    switch (activeStep) {
      case 0:
        return (
          <>
            <StepOne
              handleGraphdata={handleGraphdata}
              setActiveStep={setActiveStep}
              graphData={graphData}
              setDays={setDays}
            />
          </>
        );
      case 1:
        return <StepTwo setActiveStep={setActiveStep} />;
      case 2:
        return (
          <StepThree
            handleGraphdata={handleGraphdata}
            graphData={graphData}
            setDays={setDays}
            setActiveStep={setActiveStep}
          />
        );
      default:
        break;
    }
  };

  const handleGraphdata = () => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/graph_data`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'post',
      body: JSON.stringify({ basketData: selectedTokens, days: days }),
    })
      .then((res) => res.json())
      .then((res) => setGraphData(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (selectedTokens.length !== 0) handleGraphdata();
  }, [days]);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Box sx={{ maxWidth: 'md', width: '100%', padding: '15px' }}>
        <Typography variant="h3">Create a Basket</Typography>
        <Box
          sx={{
            width: '100%',
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '15px',
            margin: '15px 0px',
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
      </Box>
    </Box>
  );
};

export default Create;
