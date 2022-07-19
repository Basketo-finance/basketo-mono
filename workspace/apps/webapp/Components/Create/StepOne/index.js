import styled from '@emotion/styled';
import {
  Alert,
  Autocomplete,
  Box,
  Button,
  Grid,
  Snackbar,
  TextField,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { coinsList } from '../../../mocks/coins';
import CommonModal from '../Modal';
import Graph from '../../Common/Graph';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToken,
  updatedTokens,
  getTokens,
  deleteToken,
  handleIsEnable,
  getIsEnable,
} from '../../../features/selectTokens';
import Tokens from './Tokens';

const MyTextField = styled(TextField)`
  & .MuiOutlinedInput-root {
    border-radius: 10px;
  }
`;

const StepOne = ({ handleGraphdata, setActiveStep, graphData, setDays }) => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [alert, setAlert] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  const dispatch = useDispatch();
  const { selectedTokens } = useSelector(getTokens);
  const isEnabled = useSelector(getIsEnable);

  const handleTokens = (e, val) => {
    if (val !== null && !selectedTokens.some((item) => item.name == val)) {
      dispatch(
        handleIsEnable({
          value: false,
        })
      );
      const symbol = coinsList.filter((item) =>
        val == item.name ? { ...item } : ''
      );
      const token = {
        id: symbol[0].id,
        name: val,
        symbol: symbol[0].symbol,
        ratio: 0,
        img: symbol[0].image_url,
      };
      dispatch(addToken({ token }));
    }
  };

  const handleRatio = (e, token) => {
    const val = 100 - ratioSum(selectedTokens);

    if (Number(e.target.value) <= val + token.ratio) {
      const updateTokens = selectedTokens.map((item) =>
        item.name == token.name
          ? { ...item, ratio: Number(e.target.value) }
          : { ...item }
      );
      updateTokens.map((item) =>
        item.ratio > 0 && ratioSum(updateTokens) == 100
          ? dispatch(
              handleIsEnable({
                value: true,
              })
            )
          : dispatch(
              handleIsEnable({
                value: false,
              })
            )
      );
      dispatch(
        updatedTokens({
          tokens: updateTokens,
        })
      );
    } else {
      setAlert({
        open: true,
        message: 'Sum of Percentages exceeds 100.',
        severity: 'error',
      });
    }
  };

  const handleRemove = (token) => {
    dispatch(
      deleteToken({
        token,
      })
    );
    ratioSum(selectedTokens) == 100
      ? dispatch(
          handleIsEnable({
            value: true,
          })
        )
      : dispatch(
          handleIsEnable({
            value: false,
          })
        );
  };

  const ratioSum = (tokens) =>
    tokens.reduce((item, obj) => item + obj.ratio, 0);

  return (
    <>
      <Snackbar
        onClose={() => setAlert((prev) => ({ ...prev, open: false }))}
        open={alert.open}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity={alert?.severity} sx={{ width: '100%' }}>
          {alert?.message}
        </Alert>
      </Snackbar>
      <Box>
        <Autocomplete
          id="free-solo-demo"
          freeSolo
          onChange={handleTokens}
          options={coinsList.map((option) => option.name)}
          sx={{ marginTop: '20px' }}
          renderInput={(params) => (
            <MyTextField {...params} label="Select Tokens" />
          )}
        />

        {selectedTokens.length !== 0 ? (
          <Grid>
            <Grid mt={2}>
              <Grid
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'center'}
              >
                <Typography>Your Tokens</Typography>
                <Grid display={'flex'} alignItems={'center'} gap="0.5rem">
                  <Typography>{selectedTokens.length}/5</Typography>
                  <Button
                    variant={isEnabled ? 'contained' : 'disabled'}
                    onClick={() => (setModalOpen(true), handleGraphdata())}
                    size="small"
                  >
                    Show Graph
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid mt={1} sx={{ height: '20rem', overflowY: 'scroll' }}>
              <Tokens
                selectedTokens={selectedTokens}
                handleRatio={handleRatio}
                handleRemove={handleRemove}
              />
            </Grid>
            <Grid display={'flex'} justifyContent="flex-end">
              <Button
                variant={isEnabled ? 'contained' : 'disabled'}
                onClick={() => setActiveStep(1)}
              >
                Next
              </Button>
            </Grid>
          </Grid>
        ) : (
          <Grid mt={2}>
            <Typography variant="h5" textAlign={'center'}>
              Please Select Tokens
            </Typography>
          </Grid>
        )}
        <CommonModal setOpen={setModalOpen} open={modalOpen}>
          <Graph data={graphData} setDays={setDays} />
        </CommonModal>
      </Box>
    </>
  );
};

export default StepOne;
