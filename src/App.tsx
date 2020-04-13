import React from 'react';

import ButtonPage from './components/Button/Page'
import AlertPage from "./components/Alert/Page";

function App() {
  return (
    <div>
        <div>按钮展示</div>
        <div style={{margin: 10}}>
            <ButtonPage />
        </div>
        <div>alert弹框</div>
        <div style={{margin: 10}}>
            <AlertPage />
        </div>
    </div>
  );
}

export default App;
