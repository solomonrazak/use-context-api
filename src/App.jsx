import { useState } from 'react'
import './App.css'
import Header from './container/Header'
import Auth from './container/Auth'

import { UserContextProvider } from './context/UserContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
   <div>
  
    <Header />
    <Auth />
    
    
   
   </div>
   </UserContextProvider>
   
  )
}

export default App
