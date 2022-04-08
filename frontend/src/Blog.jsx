import React from 'react'

import ArticleForm from './ArticleForm'
import Articles from './Articles'
import Authentification from './Authentification'

function Blog() {

// const [isConnected, setIsConnected] = useState(false);

  return (
    <>
    <Authentification />
    <br></br>
    <ArticleForm />
    <Articles />
    </>
  )
}

export default Blog