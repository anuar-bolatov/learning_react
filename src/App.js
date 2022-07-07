import './App.css';
// import User from './user';
// import List from './List';
import Form from './form';

/* const listItems = [
  {listItem: '🐶 Dog'},
  {listItem: '🐱 Cat'},
  {listItem: '🐔 Chicken'},
  {listItem: '🐮 Cow'},
  {listItem: '🐴 Horse'}
]; */

function App() {
  return (
    //Card with user, button, and
    /* <div className="App">
      <div className="User" >
        <User login="anuarbolatov" />
        <br />
        <List listItems={listItems}/>
      </div>
    </div> */

    <div className="App">
      <div className="formWrapper">
        <h1>Hi</h1>
        <Form />
      </div>
      
    </div>
  );
}

export default App; 