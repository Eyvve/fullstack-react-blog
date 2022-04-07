import React from 'react'

function Article() {
    // recoit en props article.id pour la key article.title, article.author et article.content
  return (
    <>
    <div>
        <h2>{/* Titre de l'article */}</h2>
        <h3>{/* Auteur de l'article */}</h3>
        <p>{/* Contenu de l'article */}</p>
    </div>
    </>
  )
}

export default Article