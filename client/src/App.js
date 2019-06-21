import React, { useEffect, useState, useCallback } from 'react';
import './App.css';

function App() {
  const [wallet, setWallet] = useState({});

  const handleFileUpload = event => {
    const filereader = new FileReader();

    filereader.addEventListener('loadend', async event => {
      try {
        const json = JSON.parse(event.target.result);
        await setWallet(json);
      } catch (err) {
        alert(
          'Something want wrong, make sure you have uploaded the correct file'
        );
        console.log(err);
      }
    });

    filereader.readAsText(event.target.files[0]);
  };

  console.log(wallet);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <p>Login with your AR Wallet</p>
          <input type="file" onChange={handleFileUpload} style={{ borderStyle: 'dashed', padding: 30, borderWidth: 5, borderColor: 'rgba(255, 255, 255, 0.25)', display: 'flex', backgroundColor: 'rgba(255, 255, 255, 0.05)'}}/>
        </div>
        <aside>
          <h4>Files</h4>
          { wallet.toString() }
        </aside>
      </header>
    </div>
  );
}

export default App;
