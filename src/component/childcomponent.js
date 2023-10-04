import Consumer from "./consumer";
import Grandchildcomponent from "./grandchildcomponent";

function Childcomponent(props){
    return(
        <>
       <div style={{
        border:`10px solid red`,
        padding:`10px`,
        marginLeft:`50px`,
        width:`300px`,
        margin:`200px`
       }}>
          <Grandchildcomponent />
          {/* <Consumer/> */}
       </div>
        </>
    )
}

export default Childcomponent;