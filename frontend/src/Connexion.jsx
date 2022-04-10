import {React, useState, useEffect} from 'react'

function Connexion({setIsLogged, setUsername, setUserId}) {
    const [inputPassword, setInputPassword] = useState(null)
    const [inputUsername, setInputUsername] = useState(null)
    const [users, setUsers] = useState(null)


    useEffect(() => {
        userList()
    }, []);

    const userList = async() => {
        fetch("http://localhost:2345/getUser.php")
            .then(async response => {
                const data = await response.json();
                if (!response.ok) {
                    const error = (data && data.message) || response.statusText;
                    return Promise.reject(error);
                }
                setUsers(data)
            })
            // .catch(error => {
            //     setUsers({ errorMessage: error.toString() });
            //     console.error('Il y a eu une erreur', error);
            // })
    }
    const login = async(e) => {
        e.preventDefault()
        users.map((user, i) => {
           if(user.username === inputUsername && user.password === inputPassword){
               setIsLogged(true)
               setUsername(user.username)
               setUserId(user.id)
           } else {
               console.log("erreur")
           }
        })
    }

    return (
        <form>
        <br></br>
        <h2>Connexion</h2>
          <label>Username</label>
          <br></br>
          <input className='form-control' type="text" onChange={(e) => {setInputUsername(e.target.value)}}></input>
          <br></br>
          <label>Password</label>
          <br></br>
          <input className='form-control' type='password' onChange={(e) => {setInputPassword(e.target.value)}}></input>
          <br></br>
          <button className='btn btn-primary' onClick={(e) => {userList() && login(e)}}>Se connecter</button>
        <br></br>
        </form>
    )
}

export default Connexion