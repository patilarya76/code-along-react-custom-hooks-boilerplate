import React from 'react';
import useStorage from './CustomHooks/useStorage';

const App =()=> {
  const {setstorage} = useStorage();

  return (
    <>
     <div>
<input style={{alignItems:"center", marginLeft:"700px",height:"7vh",width:"15vw",border:"5px solid green",color:"black",borderRadius:"5px"}}   type="text" placeholder='Enter Some Text' onChange={(e)=> setstorage(e.target.value)} />
      </div> 
       
    </>
  )
}

export default App
