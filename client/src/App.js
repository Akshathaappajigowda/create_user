import React, { useEffect, useState } from 'react'

function App() {
  const [userData, setUserData] = useState([{}])
  
  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setUserData(data)
      }
    )
  }, [])
  console.log(userData);

  return (
    <div>
      {(typeof userData.users === 'undefined') ? (
        <p>Loading...</p>
      ): userData.users.map((user, i)=>(
        <h1 key={i}>{user}</h1>
      ))}
    </div>
  )
}

export default App