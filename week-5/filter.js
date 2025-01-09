const arr=[1,2,3,4,5];
// const filarr=[];
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2===0){
//         filarr.push(arr[i])
//     }
// }
// console.log(filarr)
console.log(arr.filter(
    (n) =>{
        if(n%2==0){
            return true
        }
        else{
            return false
        }
    }
))