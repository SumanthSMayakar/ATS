import React from 'react'
import DataProvider from './GlobalContext'
import MainRoute from './Component/MainRoute';


function App() {
  return (
    <DataProvider>
      <MainRoute/>
    </DataProvider>
  )
}

export default App