import {React, useState, useEffect} from 'react'

function Authentification({setIsLogged}) {


  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [credentials, setCredentials] = useState({
    username : '',
    password : ''
  })



  const handleConnect = (e) => {
    e.preventDefault()
    console.log('YOHO')
    handleSubmit()
  }

  const handleSubmit = async() => {
    const data = credentials
    await fetch("http://localhost:2345/addUser.php", {
      crossDomain: true,
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${btoa(`${username}:${password}`)}` 
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(responseJSON => console.log(responseJSON))
  }

  return (
      <form>
      <br></br>
        <h2>Inscription</h2>
        <label>Username</label>
        <br></br>
        <input className='form-control' type="text" onChange={(e) => {setUsername(e.target.value)}}></input>
        <br></br>
        <label>Password</label>
        <br></br>
        <input className='form-control' type='password'  onChange={(e) => {setPassword(e.target.value)}}></input>
        <br></br>
        <button className='btn btn-primary' onClick={(e) => {handleConnect(e)}}>S'inscrire</button>
        <br></br>
      </form>
  )
}

export default Authentification