import { useState } from 'react';
import Navbar from '../../Components/Navbar';
import SearchBar from '../../Components/Explore/SearchBar';
import Baskets from '../../Components/Explore/Baskets';
import Footer from '../../Components/Footer';
import { Paper } from '@mui/material';

const filters = {
    growthRate: 'any',
    getGrowthRate: function () {
        return this.growthRate[0].toUpperCase() + this.growthRate.slice(1);
    },

    tokens: new Set(),
    getTokens: function () {
        return Array.from(this.tokens);
    },

    getAll: function () {

        const filters = [];
        if (this.growthRate !== 'any') {
            filters.push({
                label: this.getGrowthRate(),
                clear: (filters, setFilters) => {
                    setFilters({ ...filters, growthRate: 'any' });
                }
            });
        }

        filters.push(...this.getTokens().map(token => ({
            label: token,
            clear: (filters, setFilters) => {
                const tokens = new Set(filters.tokens);
                tokens.delete(token);
                setFilters({ ...filters, tokens });
            }
        })));

        return filters;
    },

    clearAll: (filters, setFilters) => {
        setFilters({
            ...filters,
            growthRate: 'any',
            tokens: new Set()
        });
    },

    toString: function () {

        // const tokens = encodeURIComponent(JSON.stringify(this.getTokens()));
        const tokens = JSON.stringify(this.getTokens());
        return `growthRate=${ this.growthRate }&tokens=${ tokens }`;
    }
};

const Explore = () => {

    const [query, setQuery] = useState({ search: '', filters });
    const queryString = `?q=${ query.search }&${ query.filters.toString() }`;

    return (

        <Paper variant='window' >
            <Navbar />
            <div style={{ paddingTop: '70px' }}>
                <SearchBar
                    search={ query.search }
                    setSearch={ (val) => setQuery({ ...query, search: val }) }
                    filters={ query.filters }
                    setFilters={ (val) => setQuery({ ...query, filters: val }) }
                />
                <Baskets queryString={ queryString } />
                <Footer />
            </div>
        </Paper>
    );
};

export default Explore;