import { useState } from "react";
import './sample.css'

export const student = () => {
  const [myname] = useState("nethaji")
  return (
    <div id="nethaji">
      <h2>
        welcome to {myname} component
      </h2>
    </div>
  )
}

export default student