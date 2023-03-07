import { useState } from 'react';
import { observer } from 'mobx-react';
import userStore from './store/dataStore/userStore/userStore';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <p>Username from store: {`${userStore.user.firstName} ${userStore.user.lastName}`}</p>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </div>
  );
}

export default observer(App);
