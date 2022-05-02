import React from 'react';
import Router from './components/Router'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
 return <><Router/><ToastContainer position="top-center"
autoClose={2200}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover/>
 </>
}

export default App;