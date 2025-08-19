import './App.css';
import ListItem from './components/ListItem';
import Logo, { Logo2 } from './components/Logo';

let num = 10;

let myBigSize = {
  fontSize: 50,
};

let products = [
  { id: 1, title: '1번 아이템' },
  { id: 2, title: '2번 아이템' },
  { id: 3, title: '3번 아이템' },
];

function App() {
  return (
    <>
      <Logo />
      <Logo2 />
      <h1 className="Blue-color">안녕 {num === 10 ? '10이다' : '아니다'}</h1>
      <div style={myBigSize}>스타일</div>
      {products.map(item => (
        <ListItem item={item} />
      ))}
    </>
  );
}

export default App;
