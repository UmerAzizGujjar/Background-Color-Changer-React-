import { useState } from 'react'
import Button from './components/button'

import './App.css'

function App() {
  const [color, setcolor] = useState("Coral")

  return (
      <div className='w-screen h-screen duration-200 flex justify-center' 
      style={{backgroundColor:color}}>
        <div className='fixed bottom-6 rounded-xl  flex flex-wrap px-2  '> 
          <div className='flex flex-wrap justify-center gap-3 bg-white rounded-xl px-4 py-4 '>

             <Button color="Red" setcolor={setcolor}/>

             <Button color="Black" setcolor={setcolor}/>

             <Button color="Yellow" setcolor={setcolor}/>

             <Button color="Brown" setcolor={setcolor}/>

             <Button color="Pink" setcolor={setcolor}/>

             <Button color="Olive" setcolor={setcolor}/>

             <Button color="Teal" setcolor={setcolor}/>

             <Button color="Turquoise" setcolor={setcolor}/>

             <Button color="Green" setcolor={setcolor}/>

          </div>
        </div>
        
      </div>

  )
}

export default App
