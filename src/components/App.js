import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

function App() {

const onSubmit=(term)=>{
return axios.get('https://api.unsplash.com/search/photos',{
  params:{query:term},
  headers:{
    Authorization: 'Client-ID pCFBplzvvLfvB2NYJE7wdjjbY6oh7-0oGxuzAebrtR0'

  }
})



}

  return (
    <>
      <div className="ui container" style={{ marginTop: '20px' }}>
        <SearchBar onSearchSubmit={onSubmit} />
      </div>

    </>
  );
}

export default App;
