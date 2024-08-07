import React from 'react'
import * as math from 'mathjs'
import { useState,useMemo } from 'react'
import "./Keybrd.css"
import Screen from './Screen'
import Button from './Button'
const Keybrd = () => {
    const [text, setText] = useState([])
    const [res, setres] = useState("")
    const bcolor="#F5EB24";
    const tcol="black"
    const size="20px"
    const addtext=(val)=>{
        setText((text)=>[...text,val + ""])
    }
    const evl=()=>{
        const inp=text.join("")
        setres(math.evaluate(inp))
        // setres(eval(inp))
    }
    const reset=()=>{
        setres("")
        setText([])
    }
    return (
        <>
            <div className="screen flex flex-col">
                <Screen text={text} result={res}/>
                <div className="kb flex flex-col min-h-[50vh] w-full mt-10">
                    <div className="row grid grid-cols-4 justify-stretch w-full gap-6 ">
                        <Button symbol="AC" handleclick={reset}/>
                        <Button symbol="0" handleclick={addtext}/>
                        <Button symbol="." handleclick={addtext}/>
                        <Button symbol="=" handleclick={evl} color={bcolor} tcolor={tcol} fsize={size}/>
                    </div>
                    <div className="row grid grid-cols-4  justify-stretch w-full gap-6 mt-5">
                    <Button symbol="1" handleclick={addtext}/>
                    <Button symbol="2" handleclick={addtext}/>
                    <Button symbol="3" handleclick={addtext}/>
                    <Button symbol="+" handleclick={addtext} color={bcolor} tcolor={tcol} fsize={size}/>
                    </div>
                    <div className="row grid grid-cols-4  justify-stretch w-full gap-6 mt-5">
                    <Button symbol="4" handleclick={addtext}/>
                    <Button symbol="5" handleclick={addtext}/>
                    <Button symbol="6" handleclick={addtext}/>
                    <Button symbol="-" handleclick={addtext} color={bcolor} tcolor={tcol} fsize={size}/>
                    </div>
                    <div className="row grid grid-cols-4  justify-stretch w-full gap-6 mt-5 ">
                    <Button symbol="7" handleclick={addtext}/>
                    <Button symbol="8" handleclick={addtext}/>
                    <Button symbol="9" handleclick={addtext}/>
                    <Button symbol="*" handleclick={addtext} color={bcolor} tcolor={tcol} fsize={size}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Keybrd