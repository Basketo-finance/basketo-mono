import { useState } from 'react';
import {
    Button,
    Container,
    Grid,
    InputAdornment,
    TextField,
    Typography,
    Paper,
    useTheme
} from '@mui/material';
import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined';

const Subscription = () => {
    const theme = useTheme();
    const [email, setEmail] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        setEmail('');
    }

    return (

        <Paper variant='section' color='primary' style={{
        margin: '4rem 0', 
        padding: '4rem 0', 
        }} >
            <Container maxWidth="lg">
                <Grid
                    container
                    justifyContent="space-between"
                    flexDirection="row"
                >
                    <Grid
                        item
                        xs={ 12 }
                        md={ 5 }
                        lg={ 4.5 }
                        sx={{ mb: { xs: 2, md: 0 } }}
                    >
                        <Typography
                            component="div"
                            fontSize="2rem"
                            sx={{ mb: 2 }}
                        >
                            Get early-access
                        </Typography>

                        <Typography>
                            Get a chance to create baskets before everyone else and stay up-to-date with latest updates and news.
                        </Typography>
                    </Grid>

                    <Grid
                        item
                        xs={ 12 }
                        md={ 5 }
                        lg={ 4.5 }
                    >
                        <form action="#" onSubmit={ handleSubmit }>
                            <TextField
                                variant="outlined"
                                color="primary"
                                type="email"
                                placeholder="Email"
                                required
                                value={ email }
                                onChange={ (e) => setEmail(e.target.value) }
                                sx={{ mb: 1.5, width: '100%' }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <MarkEmailUnreadOutlinedIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />

                            <Button
                                type="submit"
                                size="large"
                                variant="contained"
                                sx={{
                                    width: '100%',
                                    fontSize: '1rem'
                                }}
                            >
                                Signup
                            </Button>
                        </form>
                    </Grid>
                </Grid>
            </Container>
        </Paper>
    );
};

export default Subscription;