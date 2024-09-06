import './App.css';
import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import Alert from './Components/Alert';



function App() {

  const [Mode, Setmode] = useState('light')
  // const [alert, setAlert] = useState(null)


  const togglemode1 = () => {

    if (Mode === 'light') {
      Setmode('dark')
      document.body.style.backgroundColor = 'rgb(36 74 104)'
    }
    else {
      Setmode('light')
      document.body.style.backgroundColor = 'white';
    }
  }

  // const showAlert = (message, type) => {
  //   setAlert({
  //     message: message,
  //     type: type
  //   })
  //   setTimeout(() => {
  //     setAlert(null)
  //   }, 1500)
  // }



  return (
    <>
      <Navbar title="TextUtils" Mode={Mode} togglemode1={togglemode1} />

      <div className='container my-3'>

        <TextForm heading="Enter Your Text Below" Mode={Mode} />
      </div>
    </>

  );
}

export default App;
