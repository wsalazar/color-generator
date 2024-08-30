import { useState } from "react"

const Form = ({handleSubmit}) => {
  const [color, setColor] = useState('')

  return (
    <>
    <form className="color-form" onSubmit={(e) => handleSubmit(e, color)}>
      <input 
      type="color" 
      name="color" 
      id="color"
      style={{height: "2rem"}} 
      onChange={(e) => setColor(e.target.value)}
      />
      <input 
      type="text" 
      name="text" 
      id="text" 
      value={color}
      onChange={(e) => setColor(e.target.value)}
      placeholder="#f15025"
      />
      <button 
      className="btn" 
      type="submit"
      style={{background:`${color}`, width: "10rem", height: "2rem"}} 
      >Generate Color</button>
    </form>
    </>
  )
}
export default Form