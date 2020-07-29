import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/ui/Header';
import Search from './components/ui/Search';
import CharacterGrid from './components/characters/CharacterGrid';
import axios from 'axios';

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios('http://hp-api.herokuapp.com/api/characters')

      if ({ query } == null) {
        setItems(result.data)
      } else if ({ query }) {
        setItems(result.data.filter(item => item.name.toLowerCase().includes(query)))

      }
      setIsLoading(false)
    }
    fetchItems()

  }, [query])
  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      < CharacterGrid isLoading={isLoading} items={items} />

    </div>
  )
}

export default App;