import style from './App.module.css';
import Navigation from './components/Navigation';
import Aside from './components/Aside';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className={style.app}>
      <Navigation style={style} />
      <div className={style.container}>
        <Aside style={style} />
        <Main style={style} />
      </div>
      <Footer style={style} />


    </div>
  );
}

export default App;
