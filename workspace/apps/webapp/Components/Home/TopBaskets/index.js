import {
  Container,
  Grid,
  Tooltip,
  Typography,
} from "@mui/material";
import { BasketCard } from "@basketo/web-ui";

const baskets =  [{
  title: "Defi Basket",
  symbol: "DEFB",
  growth: {percent:"+2.03",period:"hour"},
  basketeer: "Defi Dao",
},
{
  title: "Hodl Basket",
  symbol: "HODL",
  growth: {percent:"+1.03",period:"hour"},
  basketeer: "Defi Dao",
},
{
  title: "Stable Basket",
  symbol: "STBLB",
  growth: {percent:"+0.43",period:"hour"},
  basketeer: "Arch Dao",
},
]


const TopBaskets = () => {
   
  return (
    <Container maxWidth="lg" sx={{ mt: 5, mb: 2 }}>
      <Typography
          variant='subtitle2'
          sx={{
            letterSpacing: "0.23em",
            textAlign: "left",
            margin:'1em 0em'
          }}
        >
          TRENDING BASKETS
      </Typography>
      <Grid
        container
        columns={{ xs: 4, md: 12 }}
        spacing={{ md: 4, xs: 2 }}
      >
        {baskets &&
          baskets.map((basket, i) => (
            <Grid item xs={4} key={i}>
              <Tooltip title={<Typography variant='h6' >Coming soon!!</Typography>} >
                <div>
                <BasketCard data={basket} showGrowth  />
                </div>
              </Tooltip>
            </Grid>
          ))}
      </Grid>
      <style>{`
        .overlay {
          position: absolute;
          bottom: 0;
          left: 100%;
          right: 0;
          background-color: #eee;
          overflow: hidden;
          width: 0;
          height: 100%;
          transition: .3s ease;
        }

        .myContainer {
          position: relative;
        }

        .myContainer:hover .overlay {
          width: 100%;
          left: 0;
        }

        .text {
          color: #000;
          opacity: 1;
          font-size: 20px;
          position: absolute;
          top: 50%;
          left: 50%;
          -webkit-transform: translate(-50%, -50%);
          -ms-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
          white-space: nowrap;
        }
      `}</style>
    </Container>
  );
};

export default TopBaskets;
