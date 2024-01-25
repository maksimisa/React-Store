import React from 'react';
import Card from './components/Card';
import Header from "./components/Header";
import Drawer from './components/Drawer';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems]= React.useState([
    {"title":"Among Us","price":75,"imageUrl":"/img/games/1.png"},
    {"title":"Beholder 3","price":349,"imageUrl":"/img/games/2.png"}]);
  const [cartOpened, setCartOpened]= React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');
  
  const arr = [{"title":"Смартфон Samsung Galaxy","price":28890,"imageUrl":"/img/games/1.png"},
  {"title":"Фитнес-трекер Xiaomi","price":2790,"imageUrl":"/img/games/2.png"},
  {"title":"Стиральная машина Beko","price":30990,"imageUrl":"/img/games/3.png"},
  {"title":"Смартфон Apple iPhone 14","price":84000,"imageUrl":"/img/games/4.png"},
  {"title":"Кофемашина Polaris","price":30000,"imageUrl":"/img/games/5.png"},
  {"title":"Компьютер HP Pavilion","price":69990,"imageUrl":"/img/games/6.png"},
  {"title":"Гарнитура Edifier","price":3900,"imageUrl":"/img/games/7.png"},
  {"title":"Игровая консоль Xbox Series X","price":54990,"imageUrl":"/img/games/8.png"}]
  React.useEffect(()=> {
    fetch('https://624ecf0577abd9e37c8b54d2.mockapi.io/items')
    .then((res) => {
        return res.json();
    })
    .then((json) => {
      setItems(json);
    });
  }, []);

  const onAddToCart = (obj) => {
    setCartItems([...cartItems, obj])
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items = {cartItems} onClose={() => setCartOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
        <h2>{searchValue ? `Поиск по '${searchValue}'` : "Все товары"}</h2>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="Search" />
          <input onChange = {onChangeSearchInput} placeholder="Поиск..."/>
        </div>
        </div>
        
        <div className="d-flex flex-wrap">
          {arr.map((item) => (
          <Card 
          title={item.title} 
          price={item.price} 
          imageUrl={item.imageUrl}
          onPlus={(obj) => onAddToCart(obj)} 
          />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
