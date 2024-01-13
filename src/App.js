import Component from "./allComponent/component1/Component";
import Component2 from "./allComponent/component2/Component2";
import Button from "./allComponent/button/Button";
import Example from "./allComponent/Example";
import Header from "./allComponent/header/Header";
import Footer from "./allComponent/footer/Footer";

import User from "./allComponent/user/User";
function App() {

  const navbar = ['Главная ', "О нас", "Контакты"]

  return (
    <div>
      <h1>Hello React World!</h1>
        <Header navbar = {navbar}/>
        <Component text = {'Ayana'}/>
        <Component2 age = { 21 }/>
        <Button text={'Delete'}/>
        <Button text={'Add'}/>
        <Button text={'Update'}/>
        <Example>
          <p style={{
            color: "green",
            fontSize: "20px"
          }}>
            Ayana
          </p>
        </Example>
        <Footer link={'online.geeks.kg/'}/>
        <User name={"Ayana Ibraeva "}>
          <p>From now on my work begins</p>
          <img src="https://alfa-turizm.hazirsite.pro/wsx_resimler/kapadokya-iz-alanii/ekskursiya-v-kappadokiyu-iz-alanii-2.jpeg" alt=""/>
          <p>One of the most beautiful places in Turkey!</p>
        </User>
    </div>
  );
}

export default App;
