import React, { useState, useEffect } from 'react';
import { Frame } from 'frame';

const Filter = ({text}) => {
    const [filterState, setFilterState] = useState({
        buttonDisabled: true,
        filterText: ''
    });

    useEffect(() => {
        setFilterState({
            filterText: text,
            buttonDisabled: !text || text === '' 
        });
    }, [text]);

    const handleFilterChange = e => {
        setFilterState({
            filterText: e.target.value,
            buttonDisabled: e.target.value === ''
        });
    };

    return (
        <Frame>
            <input className='inline frame' type="text" onChange={handleFilterChange} value={filterState.filterText} />
            <button disabled={filterState.buttonDisabled}>Filter</button>
        </Frame>
    );
};

export default Filter;