import './App.scss';
import Header from './components/Header/Header';
import Categories from './components/Categories/Categories';
import StateProvider from './store/StateProvider';

function App() {
  return (
    <div className="App">
      <StateProvider>
        <Header />
        <Categories />
      </StateProvider>
    </div>
  );
}

export default App;
