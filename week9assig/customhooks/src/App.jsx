// import { useState } from 'react'
// //custom hook creation
// function useValue(){
//   const [count, setCount] = useState(0)
// function incct(){
//   setCount( c=> c+1)
// }
//   return {
//     count:count,
//     incct:incct
//   }
// }

import { useState } from "react";
 import{ usePrev } from "../hooks/useFetch";


// import { use } from "react";
// import  { useFetch } from "../hooks/useFetch";
// import { useState } from "react";

// function App() {
//   //destructing the array
//   const{count,incct}=useValue()
  
//   return (
//     <>
//     <button onClick={incct}>increase{count}</button>
//     </>
//   )
// }

// export default App



//lets try to fetch the dta from backeng using our custom hook useFetch

// function App(){
//   const[currrentpost,setcurrentpost]=useState(1)
//   const{  postdeta,loading }=useFetch("https://jsonplaceholder.typicode.com/todos/" + currrentpost)
//   if(loading){
//     return <>
//     loading bacha.. jara wait some time
//     </>
//   }

//   return(
//     <>
//     <button onClick={() => {setcurrentpost(1)}}>1</button>
//     <button onClick={() => {setcurrentpost(2)}}>2</button>
//     <button onClick={() => {setcurrentpost(3)}}>3</button>
//     {JSON.stringify(postdeta.title)}
//     </>
//   )

// }

// export default App;



//usePrev hook stores th old value


function App(){
  const[state,setstate]=useState(0);
  const prev=usePrev(state)
   function changest(){
    setstate( c => c+1)
   }

  return(
    <>
    <p>{state}</p>
    <button onClick={changest}>button</button>
    <p>previous state{prevv}</p>


    </>
  )


  


}
export default App;