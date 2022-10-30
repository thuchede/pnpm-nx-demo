import React, { useEffect, useState } from 'react';
import { Message } from '@geekcamp-demo/api-interfaces';
import { MyNewLib } from '@geekcamp-demo/my-new-lib';

export const App = () => {
  const [m, setMessage] = useState<Message>({ message: '' });

  useEffect(() => {
    fetch('/api')
      .then((r) => r.json())
      .then(setMessage);
  }, []);

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>Welcome to web!</h1>
        <img
          width="450"
          src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png"
          alt="Nx - Smart, Fast and Extensible Build System"
        />
      </div>
      <MyNewLib></MyNewLib>
      <div>{m.message}</div>
    </>
  );
};

export default App;
