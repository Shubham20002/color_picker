import { useState } from "react";
import Childcomponent from "./childcomponent";
import { colorContext } from "../context";

export default function Parentcomponent(){
    const [color,setColor]=useState("#000000");

    return(
        <>
        <h3>Pick Color</h3>
        <input type="color" name="" id="" onChange={(e)=>{setColor(e.target.value)}}/>
        <colorContext.Provider value={color}>
        <Childcomponent  />
        </colorContext.Provider>
        {/* <h1 style={{margin:100}}>color:{color}</h1> */}
        </>
    )
}

