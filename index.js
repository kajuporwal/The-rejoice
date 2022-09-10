import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import Navbar from './component/Navbar';
// import Yoga_1 from './component/Yoga_1';
// import Api from './component/Api.js';

const root = ReactDOM.createRoot(document.getElementById('root'));


// function ncard(val){
//   return(
//     <Yoga_1 
//       key={val.id}
//       title={val.title}
//       img={val.img}
//       des={val.des} />
//   )
// }

root.render(
  <React.StrictMode>
  
    <App />

    {/* <Navbar/> */}
{/* {Api.map(ncard)} */}

  </React.StrictMode>
);

reportWebVitals();
