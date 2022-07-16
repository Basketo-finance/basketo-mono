import { Avatar, Card, CardHeader, Divider, Typography } from '@mui/material';
import { Box } from '@mui/system';

//this is a presentational component for an individual basket card
//TODO: implement graph component

export function BasketCard({
  sx, // Styling
  data, // Object {title, symbol, growth:{percent, period}, basketeer, graphData, description}
  showGrowth, // Boolean
  showDescription, // Boolean
  showGraph, // Boolean
  ref,
  ...props
}) {
  return (
    <Card
      sx={{
        maxWidth: '400px',
        minWidth: '250px',
        borderRadius: '15px',
        cursor: 'pointer',
        transition: '200ms',
        '&:hover': {
          borderColor: 'secondary.main',
          transform: 'translate(0px,-1.5px)',
        },
        ...sx,
      }}
      variant="outlined"
      {...props}
    >
      <Box sx={{ padding: '15px 20px 10px 20px' }}>
        <Typography variant="h6">{data?.title || 'No title'}</Typography>

        {showGrowth && (
          <Typography
            variant="caption"
            sx={{ color: 'secondary.main', fontWeight: '400' }}
          >
            {data?.symbol || 'SYMBOL'}&nbsp;|&nbsp;
            <Typography
              component={'span'}
              variant="caption"
              sx={{
                color:
                  data?.growth?.percent[0] === '+'
                    ? 'success.main'
                    : 'error.main',
              }}
            >
              {data?.growth?.percent || '0'}%
            </Typography>
            &nbsp;in the past {data?.growth?.period || 'period'}
          </Typography>
        )}
      </Box>
      <Divider sx={{ margin: '0px 20px' }} />
      {showDescription && (
        <>
          <Typography sx={{ margin: '10px 20px', fontSize: '14px' }}>
            {data?.description}
          </Typography>
          <Divider sx={{ margin: '0px 20px' }} />
        </>
      )}
      <Box sx={{ display: 'flex', alignItems: 'center', padding: '15px 20px' }}>
        <Avatar sx={{ width: '1.3em', height: '1.3em' }} />
        &nbsp;&nbsp;<Typography>{data?.basketeer || 'Basketeer'}</Typography>
      </Box>
    </Card>
  );
}
export default BasketCard;
