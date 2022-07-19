import { Avatar, Box, Button, Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import Graph from './Graph';

const Explore = ({ selectedTokens, graphData, setDays, basketDetails }) => {
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{ mt: 4, mb: 4 }}
      >
        <Box display="flex" alignItems="center" sx={{ '> *': { mr: 2 } }}>
          <Avatar
            // src={basket.image}
            // alt={basket.symbol + ' logo'}
            sx={{ width: 48, height: 48 }}
          />

          <Typography
            variant="h3"
            sx={{ fontSize: '2rem', fontWeight: 'bold' }}
          >
            {basketDetails.name}
          </Typography>
        </Box>

        {/* <Button variant="contained" size="large" disabled>
          Invest
        </Button> */}
      </Box>

      <Box sx={{ mb: 2 }}>
        <Graph data={graphData} setDays={setDays} />
      </Box>

      <Box sx={{ mb: 2 }}>
        <Grid container justifyContent="space-between">
          <Grid item>
            <Typography
              variant="h6"
              sx={{
                fontSize: '0.9rem',
                fontWeight: 'bold',
                color: '#777',
              }}
            >
              Token
            </Typography>
          </Grid>

          <Grid item>
            <Typography
              variant="h6"
              sx={{
                fontSize: '0.9rem',
                fontWeight: 'bold',
                color: '#777',
              }}
            >
              Weight {'(%)'}
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ mt: 1, mb: 1.5 }} />

        {selectedTokens.map((coin) => (
          <Grid container justifyContent="space-between" key={coin.name}>
            <Grid item display="flex" alignItems="center" sx={{ mb: 2 }}>
              <Avatar
                src={coin.img}
                alt={coin.name + ' logo'}
                sx={{ mr: 2.5, width: 28, height: 28 }}
              />

              <Typography
                variant="h6"
                sx={{
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  textTransform: 'capitalize',
                }}
              >
                {coin.name}
              </Typography>
            </Grid>

            <Grid item>
              <Typography
                variant="h6"
                sx={{
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  textTransform: 'capitalize',
                }}
              >
                {coin.ratio}%
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Box>

      <Box>
        <Typography variant="h5">About</Typography>
        <Divider sx={{ mt: 1, mb: 1 }} />
        <Typography>{basketDetails.description}</Typography>
      </Box>
    </>
  );
};

export default Explore;
