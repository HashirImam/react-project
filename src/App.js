import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './component/ui/Header';
import Axios from 'axios';
import CharacterGrid from './characters/CharacterGrid';
import Search from './component/ui/Search'

const App = () => {
  const [items,setItems] = useState([])
  const [isLoading,setIsLoadind] = useState(true)
  const [query,setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      const result = await Axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      )

    // console.log(result.data)

    setItems(result.data)
    setIsLoadind(false)
  }

  fetchItems()
  }, [query])


  return (
    <div className="container">
      <Header />
      <Search getQuery = {(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
