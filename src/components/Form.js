import {useState} from 'react'
import '../styles/Form.css'

const Form = ({ fetchApiCurrent, fetchApiForecast, apiResultsCurrent, enableLocation }) => {
  const [input, setInput] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    e.target[0].blur()
    fetchApiCurrent(input)
    fetchApiForecast(input)
  }

  const handleClick = () => {
    setInput(null)
    enableLocation()
  }

  if (apiResultsCurrent) {
    return (
      <form onSubmit={handleSubmit} className='location-name'>
        <i className="fa-solid fa-location-dot" onClick={handleClick}></i>
        <input type="text" onChange={(e) => setInput(e.target.value)} value={`${input === null ? apiResultsCurrent.name : input}`} placeholder="Search..." />
      </form>
    )
  } else {
    return (
      <form onSubmit={handleSubmit} className='location-name no-data'>
        <i className="fa-solid fa-location-dot" onClick={handleClick}></i>
        <input type="text" onChange={(e) => setInput(e.target.value)} value={`${input === null ? "" : input}`} placeholder="Search..." />
      </form>
    )
  }
}

export default Form
