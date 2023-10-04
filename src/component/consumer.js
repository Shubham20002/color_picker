
import { colorContext } from "../context";
function Consumer(){
    
    return (
        //this component is created to learn how to consume context with consumer method(without using usecontext hook)
        <>
        <colorContext.Consumer>
{(value)=><h1>{value}</h1>}
        </colorContext.Consumer>
        </>
    )
}

export default Consumer;