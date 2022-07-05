import { Card } from "@mui/material";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

export const MyH3 = styled(Typography)(({ theme }) => ({
  fontSize: "80px",
  fontWeight: "400",
  marginTop: "-50px",
  [theme.breakpoints.down("md")]: {
    fontSize: "60px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "40px",
  },
}));

export const MyCard = styled(Card)(({ theme }) => ({
  minWidth: 275,
  textAlign: "center",
  boxShadow: "none",
  borderRadius: "none",
  overflow: "unset",
}));
