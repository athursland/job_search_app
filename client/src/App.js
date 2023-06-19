// import * as React from 'react';
import React, {useEffect, useState} from 'react'

function App() {


  /* connect backend api to frontend */

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => { 
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  return (
    <div>
      {(typeof backendData.users === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        backendData.users.map((user, i) => (
          <p key={i}>{user}</p>
        ))
      )
      }
    </div>
  )
}

export default App