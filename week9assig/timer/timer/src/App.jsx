// import { BrowserRouter, Routes, Route,Link,useNavigate, Outlet } from "react-router-dom";

import { useRef } from "react";
import { use } from "react";

// function App(){
  
//   return(
//     <>
    
//     <BrowserRouter>
//     {/* <Link  to="/">Home </Link>
//     <Link  to="/neet/12">12th </Link>
//     <Link  to="/neet/11">11th</Link> */}
//     <Routes>
//       <Route path="/"  element={<Layout/>}> 
//       <Route  path="/neet/12"  element={<Class12/>}/>
//       <Route  path="/neet/11"  element={<Class11/>}/>
//       <Route  path="/"  element={<Home/>}/>
//       <Route  path="*" element={<Err/>}/>

//       </Route>
     

//     </Routes>
//     </BrowserRouter>

    
//     </>
//   )


//   function Layout(){
//     return(
//       <>
//       <Link  to="/">Home </Link>
//     <Link  to="/neet/12">12th </Link>
//     <Link  to="/neet/11">11th</Link>
//     <Outlet/>
//      Footer/contact
//       </>
//     )
    
     
//   }

//   function Class12(){
//     //here we navigating the page by iusing usenavigate
//     const navi=useNavigate();
//     function direct(){
//       navi("/")
//     }
//     return <div>
//       this claa 12
//       <button  onClick={direct}>Go back</button>

//     </div>

//   }
//   function Class11(){
//     return <div>
//       this claa 11
//     </div>
//   }
 
//    function Home(){
//     return <div>
//       this is home
//     </div>
//   }

//   function Err(){
//     return <div>
//       hey ur in wrong route bruhh
//     </div>
//   }
// }
// export default App;


//useRef-is a hook that consists of reference   but it does not rerender compnnent



function App(){
  const inputfvs=useRef()
  function focuscmp(){
    inputfvs.current.focus()

  }


return(

  <> 
  <input ref={inputfvs} type="text"/>
  <input type="text"/>
  <button onClick={focuscmp}>submit</button>



  </>
)

}

export default App;
