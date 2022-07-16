import { InfoRounded } from "@mui/icons-material";
import { Box, Typography, Paper, Tooltip, IconButton,  } from "@mui/material";
import { ResponsiveContainer, LineChart, Line } from "recharts";

const Overview = () => {
  return (
    <Box>
        <Typography variant='subtitle2' fontSize='12px' sx={{display:'flex',alignItems:'center'}} >
            OVERVIEW  
            <Tooltip title="Overview of your Basketo account" >
                <InfoRounded sx={{height:'0.7em',width:'0.7em', color:'divider'}} /> 
            </Tooltip>
        </Typography>
        <Box sx={{display:'grid',marginTop:'20px', gridTemplateColumns:'1fr 1fr 1fr',gap:'20px', maxWidth:'100%',overflowX:'auto'}} >

        {
            ['NET WORTH', 'TOTAL HOLDINGS', "PROFIT/LOSS"].map((text, i)=>
            (
        <Paper variant="section" color='primary' key={i} 
        sx={{ padding:'20px', borderRadius:'12px', height:'max-content',maxWidth:'250px',overflowX:'auto', minWidth:"200px"}}>
        {/* <ResponsiveContainer width="100%" height="60%">
            <LineChart width='100%' height='200px' data={data}>
            <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} dot={false} />
            </LineChart>
        </ResponsiveContainer> */}
            <Typography variant="h3" >
            000.00
            <Typography component='span' variant="caption" >USDT</Typography>
            </Typography>
            <Typography variant="caption" fontSize={'12px'} >{text}</Typography>
        </Paper>
            ))
        }
        </Box>
    </Box>
  )
}

export default Overview;