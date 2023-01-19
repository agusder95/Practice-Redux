import { useState } from "react";
import Button from "../button";
import { H3, Menu2Wrapper } from "./styles";


function Menu2() {

     const [numr, setNumr] = useState (0);

     return (
          <Menu2Wrapper>
               <Button text={'Resta'} funcion ={ () => setNumr(numr + 1)} />

               <H3> {numr} </H3>
               
          </Menu2Wrapper>
     );
}

export default Menu2;