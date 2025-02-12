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


export const notificationss=atom({
    key:"notify",
    default:{
        home:3,
        jobs:6,
        message:49,
        network:77,
        notifications:122

    }


})

export const totalnotif=selector({
    key:"notifact",
    get:({get}) => {
        const allnotif=get(notificationss)

        return allnotif.home+ allnotif.jobs + allnotif.message +allnotif.network +allnotif.notifications
    }
})


