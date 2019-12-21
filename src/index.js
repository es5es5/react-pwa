import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
  <div className="app">
    Hello world
  </div>
)

ReactDOM.render(<App />, document.getElementById("app"));

// if your browser has SW
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // GenerateSW will auto generate service-worker.js
    navigator.serviceWorker.register('/service-worker.js');
  })
}
