import './App.css';
import User from './user';
import List from './List';

const listItems = [
  {listContent: 'Dog'},
  {listContent: 'Cat'},
  {listContent: 'Chicken'},
  {listContent: 'Cow'},
  {listContent: 'Horse'}
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
