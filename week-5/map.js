const arr=[1,2,3,4,]
// const newarr=[]


// for(let i=0;i<arr.length;i++){
//     newarr.push(arr[i]*2)
// }
// console.log(newarr);
function maparr(i){
  return  i*2;

}

const out=arr.map(maparr);
console.log(out);

console.log(arr.map((i) =>{
   return  i*2;
}))