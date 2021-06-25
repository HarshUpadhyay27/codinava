import React, {useState} from 'react'
import Headers from './components/Headers'
import Main from './components/Main'

const App = () => {
  const [filter, setFilter] = useState("")

  const searchData = (value)=>{
    setFilter(value)
  }

  return (
    <div className="main">
      <Headers searchGif={searchData} />
      <Main newValue={filter}/>
    </div>
  )
}

export default App
