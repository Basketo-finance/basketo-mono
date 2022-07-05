import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import FilterListIcon from '@mui/icons-material/FilterList';

const tokenList = [
    'BTC', 'ETH', 'USDT',
    'BNB', 'LTC', 'NEO',
    'UNI', 'BAT', 'APE',
    'NEAR', '1INCH', 'MATIC'
];

const Filters = ({ filters, setFilters }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [tempFilters, setTempFilters] = useState({ ...filters });

    const toggleToken = (token) => {

        const tokens = new Set(tempFilters.tokens);
        if (tokens.has(token)) {
            tokens.delete(token);
        } else {
            tokens.add(token);
        }
        setTempFilters({ ...tempFilters, tokens });
    };

    const handleClickOpen = () => setIsOpen(true);
    const handleClose = (e, apply) => {

        if (apply) {
            setFilters({ ...tempFilters });
        } else {
            setTempFilters({ ...filters });
        }
        setIsOpen(false);
    };

    useEffect(() => {
        setTempFilters({ ...filters });
    }, [filters]);

    return (

        <>
            <IconButton
                size="large"
                color="primary"
                onClick={ handleClickOpen }
            >
                <FilterListIcon />
            </IconButton>

            <Dialog
                maxWidth="xs"
                open={ isOpen }
                onClose={ (e) => handleClose(e, false) }
            >
                <DialogTitle>Filters</DialogTitle>

                <DialogContent>
                    <FormControl fullWidth>
                        <FormLabel id="growth-rate">Growth Rate</FormLabel>
                        <RadioGroup
                            row
                            value={ tempFilters.growthRate }
                            onChange={ (e) => setTempFilters({
                                ...tempFilters,
                                growthRate: e.target.value
                            })}
                            name="growth-rate"
                            aria-labelledby="growth-rate"
                        >
                            <FormControlLabel
                                control={ <Radio /> }
                                value="any"
                                label="Any"
                            />
                            <FormControlLabel
                                control={ <Radio /> }
                                value="positive"
                                label="Positive"
                            />
                            <FormControlLabel
                                control={ <Radio /> }
                                value="negative"
                                label="Negative"
                            />
                        </RadioGroup>
                    </FormControl>

                    <FormControl fullWidth>
                        <FormLabel id="tokens">Tokens</FormLabel>
                        <Grid
                            container
                            spacing={ 0.5 }
                            sx={{ mt: 0.125 }}
                        >
                            { tokenList.map(token => (

                                <Grid item key={ token }>
                                    <Chip
                                        label={ token }
                                        // variant="outlined"
                                        { ...(tempFilters.tokens.has(token) && { color: 'info' }) }
                                        onClick={ () => toggleToken(token) }
                                        clickable
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </FormControl>
                </DialogContent>

                <DialogActions>
                    <Button
                        variant="contained"
                        onClick={ (e) => handleClose(e, true) }
                    >
                        Apply
                    </Button>
                    {/* <Button
                        variant="outlined"
                        color="error"
                        onClick={ (e) => {
                            filters.clearAll(filters, setFilters);
                            handleClose(e, false);
                        }}
                    >
                        Reset to Defaults
                    </Button> */}
                    <Button
                        variant="outlined"
                        color="error"
                        onClick={ (e) => handleClose(e, false) }
                    >
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default Filters;