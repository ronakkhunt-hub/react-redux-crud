import { Provider } from 'react-redux';
import store from './Redux/store';

import './App.css';
import Todo from './Components/Todo/Todo';
import User from './Components/User/User';

function App() {
  return (
    <>
      <Provider store={store}>
        <User />
        <Todo />
      </Provider>
    </>
  );
}

export default App;
