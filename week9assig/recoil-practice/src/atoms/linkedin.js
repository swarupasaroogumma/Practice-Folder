import {atom, selector} from "recoil"


export const home=atom({
    default:0,
    key:"home"


})



export const network=atom({
    default:140,
    key:"network"


})

export const jobs=atom({
    default:0,
    key:"jobs"


})

export const notifications=atom({
    default:5,
    key:"notifications"


})

export  const totalcost=selector({
    key:"total",
    get:({get}) =>{
        const homect=get(home)
        const networkct=get(network)
        const jobsct=get(jobs)
        const notificationsct=get(notifications)
       return  homect+networkct+jobsct+notificationsct


    }
})



