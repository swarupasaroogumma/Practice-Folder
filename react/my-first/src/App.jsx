// import { useState } from "react";

import { useEffect, useState } from "react";

// function Increasse() {
//   const [count, setCount] = useState(0);

//   function inc() {
//     setCount(count + 1);
//   }

//   return (
//     <div>
      
//       <button onClick={inc}>Inccrease + {count}</button>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <h1>Hi there</h1>
//       <Increasse />
//     </div>
//   );
// }

// export default App;
 function Increeasebtn(){
  const[ct,sct]=useState(0);
  useEffect(function(){
    setInterval(function(){
      sct(function(ct){
        return ct+1;
      })
    },1000)

  },[])
  
 
  return <div>
    <h1>{ct}</h1>
  </div>

 }

function App(){
  return <div>
    <h1>whatsup guys</h1>
   <Increeasebtn/>
  </div>

}
export default App;
