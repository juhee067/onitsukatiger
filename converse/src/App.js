import './App.css';
import Header from './component/Header';
import MainVisual from './component/MainVisual';
import Shop from './component/Shop';

const App = () => {
  return (
   <div className='Wrap'>
   <Header/>
   <main>
   <MainVisual/>
   <Shop/>
   </main>
   </div>
  );
}

export default App;
