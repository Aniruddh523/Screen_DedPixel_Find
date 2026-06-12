import { useState } from 'react'


import './App.css'

function App() {
  const [color , setColor] = useState("green")

  return (
    <>
      <div className='w-full h-screen duration-200'
      style={{backgroundColor:color}}
      > <div className='fixed flex flex-wrap justify-center bottom-12
      inset-x-0 px-2'> <div className='flex - flex-wrap 
      justify-center gap-3 shadow-lg bg-white px-3 py-4 rounded-xl'>
     {/* buttons red  */}
        <button
        onClick={()=>setColor("red")}
        className="outline-none px-4 py-1 rounded-lg text-white shadow-lg"
        style={{backgroundColor: "red"}}
        >red</button>
     {/*  buttons green    */}
         <button
         onClick={()=>setColor('green')}
        className="outline-none px-4 py-1 rounded-lg text-white shadow-lg"
        style={{backgroundColor: "green"}}
        >Green</button>
      {/* buttons blue  */}
         <button
         onClick={()=>setColor("blue")}
        className="outline-none px-4 py-1 rounded-lg text-white shadow-lg"
        style={{backgroundColor: "blue"}}
        >Blue</button>

      {/* buttons yellow */}
         <button
         onClick={()=>setColor("yellow")}
        className="outline-none px-4 py-1 rounded-lg text-white shadow-lg"
        style={{backgroundColor: "yellow"}}
        >Yellow</button>
    
      {/* button blue */}

 <button
 onClick={()=>setColor("black")}
        className="outline-none px-4 py-1 rounded-lg text-white shadow-lg"
        style={{backgroundColor: "black"}}
        >black</button>


        {/* button violet */}
         <button 
         onClick={()=>setColor("violet")}
        className="outline-none px-4 py-1 rounded-lg text-white shadow-lg"
        style={{backgroundColor: "violet"}}
        >violet</button>
        </div>
        </div>
        </div>
    </>
  )
}

export default App
       
        

        

        

        




       
        
        
        
      

        
