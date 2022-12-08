import React from "react";
import Beauty from "./myproject/Beauty";
import Childheader from "./myproject/Childheader";
import ElectronicItem from "./myproject/ElectronicItem";
import Footer from "./myproject/Footer";
import Headerbar from "./myproject/Headerbar";
import Slidebar from "./myproject/Slidebar";
import Theory from "./myproject/Theory";
import Winter from "./myproject/Winter";

function App() {
  return (
    <div className="App">
    <Headerbar/>
    <Childheader/>
    <Slidebar/>
    <ElectronicItem/>
    <Beauty/>
    <Winter/>
    <Theory/>
    <Footer/>
    </div>
  );
}

export default App;
