import React from 'react';

import ButtonPage from './components/Button/Page'
import AlertPage from "./components/Alert/Page";
import MenuPage from "./components/Menu/Page";

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
        <div>Menu展示</div>
        <div style={{margin: 10}}>
           <MenuPage />
        </div>
    </div>
  );
}

export default App;
