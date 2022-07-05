import Link from 'next/link';
// import { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import basketsData from '../basketsData';

const Baskets = ({ queryString }) => {

    // const [baskets, setBaskets] = useState(null);
    // const [isLoading, setLoading] = useState(false);

    // useEffect(() => {

    //     setLoading(true);
    //     fetch('/api/baskets' + queryString)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setBaskets(data);
    //             setLoading(false);
    //         });
    // }, [queryString]);

    return (

        <Container maxWidth="lg" sx={{ mt: 4, mb: 8 }}>
            {/* { isLoading && 'Loading...' } */}
            <Grid container spacing={ 2 }>
                { basketsData.map(basket => (

                    <Grid item
                        key={ basket.symbol }
                        xs={ 12 } sm={ 6 }
                        md={ 4 } lg={ 3 }
                    >
                        <Link href={ '/explore/' + basket.symbol }>
                            <a>
                                <Card
                                    // elevation={ 1 }
                                    sx={{
                                        minHeight: 250,
                                        borderRadius: '30px'
                                    }}
                                >
                                    <CardHeader
                                        avatar={
                                            <Avatar
                                                src={ basket.image }
                                                alt={ basket.symbol }
                                                sx={{ width: 48, height: 48 }}
                                            />
                                        }
                                        sx={{ pt: 3, pb: 0 }}
                                    />

                                    <CardContent>
                                        <Typography variant="h5" component="div">
                                            { basket.name }
                                        </Typography>

                                        <Typography variant="body2" color="text.secondary">
                                            { basket.description }
                                        </Typography>

                                        <Chip
                                            label={ (basket.growthRate >= 0 && '+') + basket.growthRate + '%' }
                                            sx={{
                                                mt: 2,
                                                height: 'auto',
                                                background: (basket.growthRate >= 0 ? '#32D583' : '#F04438'),
                                                color: '#fff',
                                                fontWeight: 600,
                                                borderRadius: '0.4rem',
                                                '& .MuiChip-label': {
                                                    p: '0.25rem 0.5rem',
                                                },
                                            }}
                                        />
                                    </CardContent>
                                </Card>
                            </a>
                        </Link>
                    </Grid>
                )) }
            </Grid>
        </Container>
    );
};

export default Baskets;