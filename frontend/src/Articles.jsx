import React from 'react'

import Article from './Article'

function Articles() {
    // recoit en props le json de la bdd
  return (
    <>
    {/* Map les articles a partir du template existant dans Article.jsx*/}
    <Article />
    </>
  )
}

export default Articles