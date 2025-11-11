import { Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Header from './components/Header';
import AddItem from './page/AddItem';
import Items from './page/Items';
import Products from './page/Products';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/items" element={<Items />}></Route>
        <Route path="/additem" element={<AddItem />}></Route>
        <Route path="/products/:productId" element={<Products />}></Route>
      </Routes>
    </>
  );
}

export default App;
