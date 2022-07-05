import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import Filters from '../Filters';

const colors = {
    main: '#667085',
    inputBg: '#F2F4F7',
};

const SearchBar = ({ search, setSearch, filters, setFilters }) => {

    return (

        <Container maxWidth="lg" sx={{ mt: 2, mb: 2 }}>
            <Typography variant="h3" sx={{ fontSize: '2.5rem', mb: 3 }}>
                Discover, invest, & participate in Baskets
            </Typography>

            <Grid
                container
                alignItems="center"
                spacing={ 1 }
                sx={{ mb: 2 }}
            >
                <Grid item sx={{ flex: 1 }}>
                    <TextField
                        variant="outlined"
                        color="primary"
                        fullWidth
                        placeholder="Search"
                        value={ search }
                        onChange={ (e) => setSearch(e.target.value) }
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                background: colors.inputBg,
                                fontWeight: 'bold',
                                '& fieldset': {
                                    border: 'none',
                                },
                                '& ::placeholder': {
                                    color: colors.main,
                                    fontWeight: 'bold',
                                },
                            },
                        }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon sx={{ color: colors.main }} />
                                </InputAdornment>
                            ),
                            endAdornment: search && (
                                <InputAdornment position="end">
                                    <IconButton onClick={ () => setSearch('') }>
                                        <ClearIcon sx={{ color: colors.main }} />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>

                <Grid item>
                    <Filters filters={ filters } setFilters={ setFilters } />
                </Grid>
            </Grid>

            <Box sx={{ mb: 2 }}>
                { filters.getAll().map((filter, i) => (

                    <Chip
                        key={ i }
                        label={ filter.label }
                        // variant="outlined"
                        color="info"
                        onClick={ () => filter.clear(filters, setFilters) }
                        onDelete={ () => filter.clear(filters, setFilters) }
                        sx={{ mr: 0.5, mb: 0.5 }}
                    />
                ))}

                { filters.getAll().length !== 0 && (

                    <Chip
                        label="Clear All"
                        variant="outlined"
                        color="error"
                        onClick={ () => filters.clearAll(filters, setFilters) }
                        sx={{ mr: 0.5, mb: 0.5 }}
                    >
                        Clear All
                    </Chip>
                )}
            </Box>

            <Divider />
        </Container>
    );
};

export default SearchBar;