import styled from '@emotion/styled';
import {
  Box,
  Grid,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

const MyTextField = styled(TextField)`
  & .MuiOutlinedInput-root {
    border-radius: 10px;
  }
`;

const Tokens = ({ selectedTokens, handleRatio, handleRemove }) => {
  return (
    <>
      {selectedTokens &&
        selectedTokens.map((token) => (
          <Paper
            style={{
              background: '#f8f9fa',
              textAlign: 'center',
              marginBottom: '10px',
            }}
            key={token.id}
          >
            <Box p={2}>
              <Grid
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
                alignItems={'center'}
              >
                <Grid display="flex" gap="10px">
                  <Grid>
                    <img src={token.img} style={{ width: '3rem' }} />
                  </Grid>
                  <Grid textAlign={'left'} width="10rem">
                    <Typography variant="body1" fontWeight={700}>
                      {token.name}
                    </Typography>
                    <Typography
                      variant="caption"
                      fontWeight={500}
                      opacity={0.5}
                    >
                      {token.symbol}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid>
                  <MyTextField
                    value={token.ratio}
                    type={'number'}
                    label="Ratio"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">%</InputAdornment>
                      ),
                    }}
                    onChange={(e) => handleRatio(e, token)}
                  />
                </Grid>
                <Grid>
                  <DeleteIcon
                    fontSize="medium"
                    sx={{ cursor: 'pointer' }}
                    onClick={() => handleRemove(token)}
                  />
                </Grid>
              </Grid>
            </Box>
          </Paper>
        ))}
    </>
  );
};

export default Tokens;
