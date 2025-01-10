const axios=require("axios")

async function main() {
    //const response=await axios.get("https://httpdump.app/dumps/4763b698-53c7-479c-9400-ef3578659e3c")
    const response=await axios.post("https://httpdump.app/dumps/4763b698-53c7-479c-9400-ef3578659e3c",{
        
           "msg":"hi"
        
    },{
        headers:{
            "Authorization":"bcc-9"
        }
    })
    console.log(response.data)
    
}
main();