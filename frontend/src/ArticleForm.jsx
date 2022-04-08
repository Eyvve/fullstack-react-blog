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
            <br></br>
            <input className='form-control' type="text"></input>
            <br></br>
            <label>Contenu de l'article</label>
            <br></br>
            <textarea className='form-control'></textarea>
            <br></br>
            <button className='btn btn-primary' type='submit'>Poster</button>
        </form>
    </>
  )
}

export default ArticleForm