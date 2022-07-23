import { Box, Typography, Tooltip } from "@mui/material";
import { BasketCard } from "@basketo/web-ui";
import { InfoRounded } from "@mui/icons-material";

const YourPortfolio = () => {
  return (
    <Box sx={{ marginTop: '20px' }}>
    <Typography
        variant="subtitle2"
        fontSize="12px"
        sx={{ display: 'flex', alignItems: 'center' }}
    >
        YOUR PORTFOLIO
        <Tooltip title="List of Baskets you have invested in.">
        <InfoRounded
            sx={{ height: '0.7em', width: '0.7em', color: 'divider' }}
        />
        </Tooltip>
    </Typography>
    <Box
        sx={{
        display: 'grid',
        width:'100%',
        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
        gap: '20px',
        marginTop: '20px',
        }}
    >
        {Array.from({ length: 5 }).map((_, i) => (
        <BasketCard
            key={i}
            data={{
            title: 'Defi Basket',
            symbol: 'DEFB',
            growth: { percent: '+0.01', period: 'week' },
            basketeer: 'Defi Dao',
            description:
                'The DeFi is a capitalization-weighted Basket that tracks the performance of decentralized financial asset.',
            }}
            // showDescription
            showGrowth
        />
        ))}
    </Box>
    </Box>
  )
}

export default YourPortfolio;