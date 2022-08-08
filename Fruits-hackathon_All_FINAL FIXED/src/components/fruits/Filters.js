import React from 'react'

const Filters = ({ filters, families, handleChange }) => {
  return (
    <div className='filter-container'>
      {/* Family dropdown */}
      <select className='dropdown' name='family' value={filters.family} onChange={handleChange}>
        <option value='All'>All</option>
        {/* Loop through familyList */}
        {families.map(family => <option key={family} value={family}>{family}</option>)}
      </select >
      {/* Search field */}
      <input className='search-box' type='text' name='searchTerm' placeholder='Search...' value={filters.searchTerm} onChange={handleChange} />
    </div >
  )
}

export default Filters
