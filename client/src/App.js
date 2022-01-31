import style from './App.module.css';
import Navigation from './components/Navigation';
import Aside from './components/Aside';
import Footer from './components/Footer';

function App() {
  return (
    <div className={style.app}>
      <Navigation style={style} />
      <Aside style={style} />
      <Footer style={style} />
      
    </div>
  );
}

export default App;
