//roll up

import { createConnection } from "mongoose";
import { createContext } from "react";
import { useContext } from "react";
import { useState } from "react";

// import { useState } from "react";


// function App(){

//   return(
//     <>
//     <Lightapp/>

//     </>
//   )

// }
// function Lightapp(){
//   const[bulbon,setbulbon]=useState(true)
//   return(
//     <>
    
//     <Bulbon bulbon={bulbon} />
//     <Toggle bulbon={bulbon} setbulbon={setbulbon}/>

//     </>
//   )
// }

// function Bulbon({bulbon}){
//   return(
//     <>
//     {bulbon ? "builbon" :"bulboff"}
//     </>
//   )
// }

// function Toggle({bulbon,setbulbon}){

//   return(
//     <>
//     <button onClick={toggle}>Toggle</button>
    
//     </>
//   )

//   function toggle(){
//     setbulbon(!bulbon)
//     //se
//   }
// }


// export default App;

//above we are passing props it increases complexity   propdrilling  thats y use useContext -it contains  createcontext,provider and consumer
//we have to define the context above all

const Bulbcontext=createContext();

//custom bulbprovider 

// function BulbProvider({children}){
//   const[light,off]=useState(true);
//  return  <Bulbcontext.Provider value={{light:light,off:off}}>
//     {children}

//   </Bulbcontext.Provider>

{/* <bulbprovider>
  <lightcomponent/>
</bulbprovider> */}

// }
function App(){
  const[light,off]=useState(true);

  return(
    <>
    {/* we provide the provider and values (propsdd) */}
    <Bulbcontext.Provider value={{light:light,off:off}}>

    <Lightcomp/>

    </Bulbcontext.Provider>
   

    </>
    
  )

}

function Lightcomp(){
  

  return(
    <>
   
    <Bulbstate/>

    <Toggle/>

    </>
  )
}


function Bulbstate(){
  //consume the values
  const{light}=useContext(Bulbcontext);
  return(
    <>
    {light ? "bulbon":"bulboff"}

  
  </>
  )
}

function Toggle(){
  const{light,off}=useContext(Bulbcontext);
  function toggle(){
    off(!light)
  }
  return(
    <>
    <button onClick={toggle}>submit</button>

    </>
  )
}


export default App;