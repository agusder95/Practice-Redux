import { AppWrapper } from "./AppStyle";
import Header from "./components/header";
import Menu1 from "./components/menu1";
import Menu2 from "./components/menu2";
import Menu3 from "./components/menu3";



function App() {
  return (
    <AppWrapper>
      <Header />
      <Menu1 />
      <Menu2 />
      <Menu3 />
    </AppWrapper>    
  );
}

export default App;
