// import { useEffect } from "react";
// import { useState } from "react";

import { useEffect } from "react";
import { useRef } from "react"

// // export  function usePost(){
//     const[post,setpost]=useState({})

//   async function getposts() {

//     const res=await fetch("https://jsonplaceholder.typicode.com/todos/1")
//     const json=await res.json();
//     setpost(json)
    


    
//   } 

//     useEffect(() =>{
//         //why we use function here because of useefffect function shouldnot 
//         getposts();
//     },[])

//     return post.title;


// }

//here it is more generic than above

// export function useFetch(url){
//     const[postdeta,setpostdet]=useState({})
//     const[loading,setloading]=useState(true)

//   async function getdetails() {
//     setloading(true)
//     const res= await fetch(url);
//     const json=await res.json();
//     setpostdet(json)
//     setloading(false)
    
//   }  

//     useEffect(() => {
//         getdetails()

//     }, [url])

//     return{
//         postdeta,loading
//     }



// }



// export default  function usePrev(value){
//    const ref=useRef()

//    useEffect(() => {

    //it re render the componenet

//     ref.current=value
    //it render componnet when it chande
//      },[value])

first it returnds th value
//    return  ref.current;

//     }


