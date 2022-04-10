import React from 'react'

import { useState } from 'react'

import ArticleForm from './ArticleForm'
import Articles from './Articles'
import Authentification from './Authentification'
import Connexion from './Connexion'

function Blog() {

const [IsLogged, setIsLogged] = useState(false);
const [currentUserId, setCurrentUserId] = useState();
const [userId, setUserId] = useState("");


  return (
    <>
    <h3>bonjour {userId}</h3>
    {/* <Authentification currentUserId={currentUserId} isConnected={isConnected} /> */}
    <Authentification setIsLogged={setIsLogged} />
    <Connexion setIsLogged={setIsLogged}  />
    <br></br>
    <ArticleForm IsLogged={IsLogged} currentUserId={currentUserId} />
    <Articles />
    </>
  )
}

export default Blog