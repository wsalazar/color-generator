import Form from './Form'
import ColorList from './ColorList'
import Values from 'values.js';
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';

const App = () => {
  const values = new Values('#f15025').all(10);
  const [colors, setColors] = useState(values)

  const handleSubmit = (e, color) => {
    e.preventDefault();
    
    if (color === '') {
      toast.error("Color value is empty.");
      return;
    }
    let newValues = []
    try {
      newValues = new Values(color).all(10);
      setColors(newValues)
      toast.success('New color added');
    } catch (e) {
      toast.error("Error occurred. Check selected color.");
      return;
    }
  }

  return (
    <>
      <Form handleSubmit={handleSubmit}/>
      <ColorList values={colors} />
      <main>
        <ToastContainer position='top-center' />
      </main>
    </>
  )
};
export default App;
