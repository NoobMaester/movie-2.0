import React from 'react'

const SearchBox = ({search, setSearch}) => {
    return (
        <div className='col col-sm-4'>
            <input type="text"
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            className='form-control' placeholder='Type to search...'/>
        </div>
    )
}

export default SearchBox
