import {useState} from 'react';
function App()
{
  const [color, setcolor]=useState("olive")
  return(

    <>
    <div className=' flex w-full h-screen duration-200 justify-center' style={{backgroundColor:color}}>

      <div className='fixed flex flex-wrap justify-center bottom-12 inser-x-0 px-2'>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'> 
        
        <button onClick={()=>setcolor("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"red"}}>Red</button>

        <button onClick={()=>setcolor("green")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"green"}}>Green</button>

        <button onClick={()=>{setcolor("blue")}} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"blue"}}>Blue</button>

        <button onClick={()=>{setcolor("olive")}} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"olive"}}>Olive</button>

        <button onClick={()=>{setcolor("gray")}} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"gray"}}>Gray</button>

        <button onClick={()=>{setcolor("yellow")}} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"yellow", color:"black"}}>Yellow</button>

        <button onClick={()=>{setcolor("pink")}} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"pink", color:"black"}}>Pink</button>

        <button onClick={()=>{setcolor(("purple"))}} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"purple", color:"black"}}>Purple</button>

        <button onClick={()=>{setcolor("lavender")}} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"lavender", color:"black"}}>Lavender</button>

        <button onClick={()=>{setcolor("white")}} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"white", color:"black"}}>White</button>

        <button onClick={()=>{setcolor("black")}} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"black"}}>Black</button>

        </div>
      </div>
    </div>
    </>
  )
}

export default App;