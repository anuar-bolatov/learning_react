import './App.css';
import User from './user';
import List from './List';

const listItems = [
  {listItem: '🐶 Dog'},
  {listItem: '🐱 Cat'},
  {listItem: '🐔 Chicken'},
  {listItem: '🐮 Cow'},
  {listItem: '🐴 Horse'}
];


function App() {
  return (
    <div className="App">
      <div className="User" >
        <User login="anuarbolatov" />
        <br />
        <List listItems={listItems}/>
      </div>
    </div>
  );
}

export default App; 