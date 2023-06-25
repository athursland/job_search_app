// import * as React from 'react';
import React, { Typography} from 'react'
import Login from './Login'
import SignIn from './SignIn'

function App() {
  /* connect backend api to frontend */

  // const [backendData, setBackendData] = useState([{}])

  // useEffect(() => { 
  //   fetch("/api").then(
  //     response => response.json()
  //   ).then(
  //     data => {
  //       setBackendData(data)
  //     }
  //   )
  // }, [])

  return (
    // <div>
    //   {(typeof backendData.users === 'undefined') ? (
    //     <p>Hello World</p>
    //   ) : (
    //     backendData.users.map((user, i) => (
    //       <p key={i}>{user}</p>
    //     ))
    //   )
    //   }
    // </div>
    <div>
      {/* <Typography variant="h1">Hello, World!</Typography> */}
      <Login />
      {/* <SignIn /> */}
    </div> 

  );
}

export default App