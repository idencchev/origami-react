import { Route, Link, Switch, Redirect } from 'react-router-dom';
///import { Route, Routes } from "react-router-dom";
import style from './App.module.css';
import Navigation from './components/Navigation';
import Aside from './components/Aside';
import Main from './components/Main';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  return (
    <div className={style.app}>
      <Navigation style={style} />
      <div className={style.container}>
        <Aside style={style} />
     
        <Route path="/about" component={About} />
      
        <Main style={style} />
      </div>
      <Footer style={style} />


    </div>
  );
}

export default App;
