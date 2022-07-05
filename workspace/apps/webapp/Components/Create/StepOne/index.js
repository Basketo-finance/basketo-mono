import styled from "@emotion/styled";
import {
  Autocomplete,
  Box,
  Button,
  Grid,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const StepOne = ({ data }) => {
  const MyTextField = styled(TextField)`
    & .MuiOutlinedInput-root {
      border-radius: 10px;
    }
  `;

  const [coins, setCoins] = useState([]);

  return (
    <>
      <Box sx={{ height: "20rem" }}>
        {data && (
          <Autocomplete
            id="free-solo-demo"
            freeSolo
            options={data.map((option) => option.name)}
            sx={{ marginTop: "20px" }}
            renderInput={(params) => (
              <MyTextField {...params} label="Select Tokens" />
            )}
          />
        )}
        <Grid>
          <Grid mt={2}>
            <Grid display={"flex"} justifyContent={"space-between"}>
              <Typography>Your Tokens</Typography>
              <Typography>1/5</Typography>
            </Grid>
          </Grid>
          <Grid mt={1}>
            <Paper
              style={{
                background: "#f8f9fa",
                textAlign: "center",
              }}
            >
              <Box p={2}>
                <Grid
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                  alignItems={"center"}
                >
                  <Grid textAlign={"left"}>
                    <Typography variant="body1" fontWeight={700}>
                      Bitcoin
                    </Typography>
                    <Typography
                      variant="caption"
                      fontWeight={500}
                      opacity={0.5}
                    >
                      BTC
                    </Typography>
                  </Grid>
                  <Grid>
                    <MyTextField
                      type={"number"}
                      label="Ratio"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">%</InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid>
                    <DeleteIcon fontSize="medium" />
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default StepOne;
