import React, { useState } from 'react'
import Clickcounters from './Clickcounters'

const Counters = (props) => {
  const [count, setcount] = useState(0)

  const Hovercounter = () => {
    setcount(count + 1)
  }
  return (
    <div>
{props.render}
    </div>
  )
}

export default Counters
