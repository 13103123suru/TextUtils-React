import logo from './logo.svg';
import './App.css';
import Alert from'./components/Alert';
import Navbar from'./components/Navbar';
import Formf from './components/Formf';
import About from './components/About';
import { BrowserRouter as Router, Link,Switch, Route } from 'react-router-dom';
import {useState} from 'react';
function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);
  let usealert=(massage,type)=>{
      setAlert({
        massage:massage,
       type:type
      }) 
      setTimeout(()=>{
        setAlert(null)
      },1500)
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      usealert("DarkMode on successfully","Success");
      document.title='TextUtils - DarkMode';
    }
      else{
        setMode('light');
        document.body.style.backgroundColor='white';
        usealert("DarkMode on successfully","Success");
        document.title='TextUtils - LightMode';
      }
  }
  return (
    <>
    <Router>
    <Navbar title="Steel Hub" about="About Us" mode={mode}  toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Switch>
        <Route exact path="/about">
              <About mode={mode}/>
        </Route>
        <Route exact path="/">
               <Formf mode={mode} usealert={usealert}/>
         </Route>
    </Switch>
   </div>
   </Router>
   </>
  );
}

export default App;
