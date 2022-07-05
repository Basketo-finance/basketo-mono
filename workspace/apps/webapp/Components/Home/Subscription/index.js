import { useState } from 'react';
import {
    Button,
    Container,
    Grid,
    InputAdornment,
    styled,
    TextField as MuiTextField,
    Typography
} from '@mui/material';
import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined';

const colors = {
    main: '#0B754E',
    bg: '#E5FFF6',
    inputBg: '#fff',
};

const TextField = styled(MuiTextField)(() => ({
    '& .MuiOutlinedInput-root': {
        'background': colors.inputBg,
        '& fieldset': {
            borderColor: colors.main,
            borderWidth: '2px',
        },
        '& ::placeholder': {
            color: colors.main,
            fontWeight: 'bold',
        },
    },
}));

const Subscription = () => {

    const [email, setEmail] = useState('');

    function handleSubmit(e) {

        e.preventDefault();
        console.log(email);
        setEmail('');
    }

    return (

        <div style={{ margin: '4rem 0', padding: '4rem 0', background: colors.bg }}>
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
                            variant="h1"
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
                                            <MarkEmailUnreadOutlinedIcon style={{ color: colors.main }} />
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
        </div>
    );
};

export default Subscription;