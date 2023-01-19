import Button from "../button";
import { Menu3Wrapper } from "./styles";

function Menu3() {
     return (
          <Menu3Wrapper>
               <Button text={"clean"} funcion ={() => console.log("borrado")}/>
          </Menu3Wrapper>

          
     );
}

export default Menu3;