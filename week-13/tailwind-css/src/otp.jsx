import { useRef, useState } from "react"
import { Button } from "./Button";

export function Otp(){
    const ref1=useRef();
    const ref2=useRef();
    const ref3=useRef();
    const ref4=useRef();
    const ref5=useRef();
    const ref6=useRef();
    const[disabled,setdiable]=useState(true)
    return <div className="flex justify-center">
        <Otpbox reference={ref1} onDone ={() => {
            ref2.current.focus()
        }}/>
        <Otpbox reference={ref2} onDone ={() => {
            ref3.current.focus()
        }}/>
        <Otpbox reference={ref3}  onDone ={() => {
            ref4.current.focus()
        }}/>
        <Otpbox  reference={ref4} onDone ={() => {
            ref5.current.focus()
        }}/>
        <Otpbox  reference={ref5} onDone ={() => {
            ref6.current.focus()
        }}/>
        <Otpbox  reference={ref6} onDone ={() => {
            setdiable(false)
        }}/>
        <Button disabled={disabled}></Button>
    </div>
}
function Otpbox({reference,onDone}){
    return <div>
        <input ref={reference} onChange={(e) =>{ onDone()} } type="text" className="m-1 w-[40px] h-[50px] rounded-xl bg-blue-500 outline-none px-4 text-white" />
    </div>
}

