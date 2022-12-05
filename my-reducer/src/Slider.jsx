import { useState } from 'react'

const Slider = ({onChange, min, max}) => {
    // console.log("Slider")
  const [value, setValue] = useState(1);
    return (
    <div>
        <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => {
            const value = Number(e.target.value);
            onChange(value);
            setValue(value);
        }}/>
        <br/>
        {value}
    </div>
  )
}

export default Slider