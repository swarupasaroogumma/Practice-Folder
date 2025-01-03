const express=require('express');
function total(n){
    let t=0;
    for( let i=1;i<=n;i++){
        t=t+i;


    }
    return t;

}

const app=express();

app.get("/",function(req,res){

    const n=req.query.n;
     const ans =total(n);
     res.send(ans.toString());
 })

app.listen(3001);