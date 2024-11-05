import React, { useState } from 'react';
import useHandleInput from '../../../hooks/useHandleInput';

interface SearchBoxProps {
    textSearch: string;
    inputFunction: any;
}

const SearchBox = ({inputFunction, textSearch}: SearchBoxProps) => {


    return (
        <div>
            <label className='header__search--label'>Buscar</label>
            <input
                className='header__search--searchBox'
                type='text'
                name='searchText'
                value={textSearch}
                onChange={(e) => inputFunction(e)}
            />

        </div>
    )
}

export default SearchBox;