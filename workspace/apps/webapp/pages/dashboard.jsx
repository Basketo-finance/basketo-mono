import { Paper, Box, Typography, Card, Chip, Tooltip, Button, Divider } from "@mui/material";
import { BasketCard, Navigation } from "@basketo/web-ui"
import Navbar from "../Components/Navbar";
import Overview from "../Components/dashboard/overview";
import { Info, InfoRounded } from "@mui/icons-material";


const data = [ { pv: 2400 }, { pv: 1398 }, { pv: 9800 }, { pv: 3908 }, { pv: 4800 }, { pv: 3800 }, { pv: 4300 } ];

const Dashboard = () => {

  return (
    <Paper variant="window" sx={{display:'flex',justifyContent:'center'}} >
      <Navbar/>
      <Navigation />
         {/* 2:1 grid layout  */}
        <Box sx={{padding:'90px 20px',width:'100%',maxWidth:'lg',
        display:'grid',gridTemplateColumns:{xs:'1fr',md:'2fr 1fr', gap:'20px'}}} >
          
        {/* left side part */}
        <Box>
          <Box sx={{margin:'15px 0px', display:'flex',justifyContent:'flex-end'}} >
            <Chip variant="outlined" sx={{margin:'0px 10px'}} label={'0x124...45345'} />
            <Chip variant="standard" label={'Ethereum Mainnet'}  />
          </Box>
          
        <Overview/>  

        <Box sx={{marginTop:'20px'}} >
        <Typography variant='subtitle2' fontSize='12px' sx={{display:'flex',alignItems:'center'}} >
            YOUR PORTFOLIO 
            <Tooltip title="List of Baskets you have invested in." >
                <InfoRounded sx={{height:'0.7em',width:'0.7em', color:'divider'}} /> 
            </Tooltip>
        </Typography>
            <Box sx={{display:'grid',gridTemplateColumns:{xs:'1fr',sm:'1fr 1fr'}, gap:'20px', marginTop:'20px'}} >
            {Array.from({length:10}).map((_,i)=>(
                <BasketCard key={i}
                data={{title:"Defi Basket", 
                      symbol:"DEFB", 
                      growth:{percent:'+0.01', period:'week'}, 
                      basketeer:'Defi Dao', 
                      description: "The DeFi is a capitalization-weighted Basket that tracks the performance of decentralized financial asset."
                    }} 
                // showDescription
                showGrowth
                />
            ))}
            </Box>
            

        </Box>
        </Box> 
        <Box>
          <Card variant="outlined" sx={{width:'100%',height:'500px', borderRadius:'15px', padding:'15px 20px'}} >
            <Box>
            <Typography variant="h3" >
            000.00
              <Typography component='span' variant="caption" >USDT</Typography>
            </Typography>
            <Typography variant="caption" fontSize={'12px'} >WALLET BALANCE</Typography>
            <Button variant='outlined' fullWidth sx={{mt:'20px'}} >Connect different wallet</Button>
            </Box>
            <Divider sx={{margin:'20px 0px'}} />
          </Card>
        </Box>
        </Box>
    </Paper>
)
}

export default Dashboard;