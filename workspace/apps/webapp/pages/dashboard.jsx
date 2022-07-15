import { Paper, Box, IconButton, Typography, Card, useMediaQuery, CardHeader } from "@mui/material";
import { BasketCard, Navigation } from "@basketo/web-ui"
import { useState } from "react";
import Navbar from "../Components/Navbar";
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [ { pv: 2400 }, { pv: 1398 }, { pv: 9800 }, { pv: 3908 }, { pv: 4800 }, { pv: 3800 }, { pv: 4300 } ];

const Dashboard = () => {

  return (
    <Paper variant="window" sx={{display:'flex',justifyContent:'center'}} >
      {/* <Navbar/> */}
      <Navigation />
          
        <Box sx={{padding:'30px 20px',width:'100%',maxWidth:'lg',
        display:'grid',gridTemplateColumns:{xs:'1fr',md:'2fr 1fr', gap:'20px'}}} >
          
        <Box>
        <Box  >
          <Typography variant='subtitle2' fontSize='12px' >OVERVIEW</Typography>
          <Box sx={{display:'grid',marginTop:'20px', gridTemplateColumns:{xs:'1fr',sm:'1fr 1fr 1fr'},gap:'20px'}} >

            {
              ['NET WORTH', 'TOTAL HOLDINGS', "PROFIT/LOSS"].map((text, i)=>
              (
            <Card variant="outlined" key={i} sx={{ padding:'20px', borderRadius:'12px', height:'max-content'}}>
            {/* <ResponsiveContainer width="100%" height="60%">
              <LineChart width='100%' height='200px' data={data}>
                <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer> */}
              <Typography variant="h2" >
                0.00
                <Typography component='span' variant="caption" >USDT</Typography>
              </Typography>
              <Typography variant="caption" fontSize={'12px'} >{text}</Typography>
            </Card>
              ))
            }
          </Box>
        </Box>  

        <Box sx={{marginTop:'20px'}} >
            <Typography variant='subtitle2' fontSize='12px' >YOUR PORTFOLIO</Typography>
            <Box sx={{display:'grid',gridTemplateColumns:'1fr 1fr', gap:'20px', marginTop:'20px'}} >
            {Array.from({length:10}).map((_,i)=>(
                <BasketCard 
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
          <Card variant="outlined" sx={{width:'100%',height:'500px', borderRadius:'15px'}} >

          </Card>
        </Box>
        </Box>
    </Paper>
)
}

export default Dashboard;