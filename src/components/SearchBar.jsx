import React, { useState } from 'react';

const SearchBar = ({onSearchSubmit}) => {


  const [term,setTerm]=useState([]);


  const onFormSubmit=(event)=>{
    event.preventDefault();
    onSearchSubmit(term)
  }



  return (
    <div className="ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
        <label>Image Search</label>
        <input value={term} type="text" onChange={e=>setTerm(e.target.value)} />
        <button type="submit">SEARCH</button>
        </div>
      </form>
    </div>

  )
}

export default SearchBar;