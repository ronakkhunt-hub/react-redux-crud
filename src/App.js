import { Provider } from 'react-redux';
import store from './Redux/store';

import './App.css';
import Todo from './Components/Todo';

function App() {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  );
}

export default App;
