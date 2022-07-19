import { Button, Grid } from '@mui/material';
import { getTokens } from '../../../features/selectTokens';
import { useSelector } from 'react-redux';
import Explore from '../../Common/Explore';
import { getBasketDetails } from '../../../features/basketDetails';
import { useEffect } from 'react';

const StepThree = ({ graphData, setDays, setActiveStep, handleGraphdata }) => {
  const { selectedTokens } = useSelector(getTokens);
  const { basketDetails } = useSelector(getBasketDetails);

  useEffect(() => {
    graphData === null && handleGraphdata();
  }, []);

  return (
    <>
      <Explore
        selectedTokens={selectedTokens}
        basketDetails={basketDetails}
        graphData={graphData}
        setDays={setDays}
      />
      <Grid mt={3} display={'flex'} justifyContent={'space-between'}>
        <Button
          color="primary"
          variant="contained"
          onClick={() => setActiveStep(1)}
        >
          Back{' '}
        </Button>
      </Grid>
    </>
  );
};

export default StepThree;
