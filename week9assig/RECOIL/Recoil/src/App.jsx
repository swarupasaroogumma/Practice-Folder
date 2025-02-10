// import React from 'react'; // Add this line at the top
// import { RecoilRoot, useSetRecoilState,atom, useRecoilValue } from 'recoil';
// import { counter } from './atoms/counter';


import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { counter, isevenselector } from "./atoms/counter";

// import { memo, useEffect, useState } from "react";
// import { RecoilRoot } from "recoil";



//recoil is used for state managemnt library it reduces the render better than the context api and usestate
// function App() {
  

//   return (
//     <>
//     {/* wrapping component inside recoilroot */}
//     <RecoilRoot>
//        <CounterComponent/>
//     </RecoilRoot>
    
     
//     </>
//   )
// }

// function  CounterComponent(){

//   return(
//     <>
//       <CurrentCount />
//     {/* <Countcmp/> */}
//     <Increament/>
//     <Decrementcom/>

//     </>
//   )
// }

// function CurrentCount() {
//   const cnt = useRecoilValue(counter);
//   return <div>
//     {cnt}
//   </div>
// }
// function Increament(){

//   const setcount=useSetRecoilState(counter)

//   function incre(){
//     setcount( c =>c + 1 )

//   }


//   return(
//     <>
//     <button onClick={incre}>Increament</button>

//     </>
//   )
// }
// function Decrementcom(){

//   const setcount=useSetRecoilState(counter)

//   function incre(){
//     setcount( c => c-1)

//   }


//   return(
//     <>
//     <button onClick={incre}>deccreament</button>

//     </>
//   )
// }



// export default App


//memo is state management used for optimze the re-renders when we use thse state


// function  App(){


//   return(
//     <div>
//       <Coumtcp/>
//     </div>
//   )

// }



// function Coumtcp(){
//  const[count,setcount]=useState(0);
//  useEffect(() =>{
//   setInterval(function(){

//     setcount( c => c+1)
//   },300)
//  },[])
//   return(
//     <div>
//       <INCRE/>
//       <Decre/>
//     </div>
//   )

// }


// const INCRE=memo(
//   function inc(){
//  return <div>
//   1
//  </div>

//   }
// )

// const Decre=memo(
//   function inc(){
//  return <div>
//   1
//  </div>

//   }
// )
// export default App;


//selector and atoms usage


function App(){
  return(
    <>
    <RecoilRoot>
      <Button/>
      <Counter/>
      <Iseven/>

    </RecoilRoot>

    </>
  )
}

function Button(){
  const setcount=useSetRecoilState(counter)
  function incre(){
    setcount( c => c+2);

  }
  function decrease(){
    setcount( c => c-1);

  }


  return <div>

    
    <button  onClick={incre}>increase</button>
    <button  onClick={decrease}>increase</button>
  </div>

}

function Counter(){
  const count=useRecoilValue(counter)
  return <div>
    {count}
  </div>
}

function Iseven(){
  const even=useRecoilValue(isevenselector);

  return <div>
    {even ? "even" :"odd"}
  </div>



}
export default App;