import React from 'react'

function ArticleForm() {
    // reçoit la fonction fetch de Blog.jsx
    const handlePost = (e) => {
        e.preventDefault();
        // envoi les données a la bdd
        // refresh le fetch
    }
  return (
    <>
        <form>
            <label>Nom de l'article</label>
            <input type="text"></input>
            
            <label>Contenu de l'article</label>
            <textfield></textfield>

            <button type='submit'></button>
        </form>
    </>
  )
}

export default ArticleForm