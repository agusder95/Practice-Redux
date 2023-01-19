import { useState } from "react";
import Button from "../button";
import { H3, Menu1Wrapper } from "./styles";

function Menu1() {

     const [nums, setNums] = useState(0);

     return (
          <Menu1Wrapper>
               <Button text={'Suma'} funcion ={ () => setNums(nums + 1)} />

               <H3> {nums} </H3>
          </Menu1Wrapper>
     );
}

export default Menu1;