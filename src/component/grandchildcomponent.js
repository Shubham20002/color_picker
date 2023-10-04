import { useContext } from "react";
import { colorContext } from "../context";
function Grandchildcomponent(){
    const color=useContext(colorContext);
    return (
        <>
<h1>{color}</h1>
        </>
    )
}

export default Grandchildcomponent;