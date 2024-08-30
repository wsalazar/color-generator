import SingleColor from './SingleColor'
import { nanoid } from "nanoid";

const ColorList = ({values}) => {
  return (
    <>
    <section className='colors'>
    {values.map((value) => {
      return <SingleColor key={nanoid()} value={value}/>
    })}
     </section>
    </>
  )
}
export default ColorList