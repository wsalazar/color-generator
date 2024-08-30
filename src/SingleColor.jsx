import { toast } from "react-toastify";


const SingleColor = ({id, value}) => {

  const saveToClipboard = async () => {
    if (! navigator.clipboard) {
      toast.error("No clipboard available.")
      return;
    }
    let color = "#"+value.hex;
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(color);
      } catch (err) {
        toast.error("Failed to copy color to clipboard.")
        return;
      }
      toast.success(color+ " has been copied to clipboard.")
    }
  }
  
  return (
    <>
      <article 
      style={{background:`#${value.hex}`, width: "5rem", height: "3rem"}} 
      key={id}
      className="color"
      onClick={saveToClipboard}
      >
        <p className="percent-value">{value.weight}%</p>
        <p className="color-value">#{value.hex}</p>      
      </article>
    </>
  )
}
export default SingleColor