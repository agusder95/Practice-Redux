import { ButtonWrapper } from "./styles";

function Button({funcion,text}) {
     return (
          <ButtonWrapper onClick={funcion} >
               {text} 
          </ButtonWrapper>
     );
}

export default Button;