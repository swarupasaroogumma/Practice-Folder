
// function App() {
//   return (
//     <div style={{backgroundColor:"#dfe6e9",height:"100vh"}}>
//       <div style={{display:"flex",justifyContent:"center"}}>
//         <div>
//           <div>
//             <Postcmp/>
//             <br/>
//           </div>
//           <div>
//           <Postcmp/>

import { useState } from "react";

//           </div>

//         </div>
        


//     </div>
      

//     </div>
//   );
// }

// const style = {
//   width: 200,
//   backgroundColor: "white",
//   borderRadius: 10,
//   borderColor: "gray",
//   borderWidth: 1,
//   // display:"flex",
//   padding:20

//  // Border requires a style (e.g., solid)
// };

// function Postcmp() {
//   return (
//     <div style={style}>
//     <div style={{display:"flex"}} >
//       <img  style={{width:30,height:30,borderRadius:200}}src={"data:image/jpeg;base64,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"} alt="Environment Config" />
//       <div style={{fontSize:10,  marginLeft:10}}>
//         <b>
//           10xdevs
//         </b>
        
//         <div>10k followers</div>
//         <div>2months ago</div>
         
         
//       </div>
//       </div>
//       <div style={{fontSize:12}}>
//         hi guys whatsup?this is so dumb website
//       </div>
    
//     </div>

//   );
// }

// export default App;


function App(){
 return(
  <div>
    <Toggle/>
  </div>
 );

}


function Toggle(){

  const[isvisible,setvisible]=useState(false)
  function toglin(){
    setvisible(!isvisible)
  }

  return(
  <div>
    <button onClick={toglin}>button component</button>
    {isvisible && <p>hi hlo</p>}
  </div>)

}
export default App;
