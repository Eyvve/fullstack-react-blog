import {React, useState} from 'react'

function ArticleForm({IsLogged, currentUserId}) {

  
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [postMeta, setPostMeta] = useState({
      title : '',
      content : ''
    })

    const handleSend = (e) => {
      e.preventDefault()
      setPostMeta({
        title : title,
        content: content
      })
      console.log('YOHI')
      handleSubmit()
    }
  
    const handleSubmit = async() => {
      const data = postMeta
      await fetch("http://localhost:2345/addPost.php", {
        // crossDomain: true,
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(responseJSON => console.log(responseJSON))
    }

  return (
      <form>
      <br></br>
      <h2>Ajouter un article</h2>
        <label>Titre</label>
        <br></br>
        <input className='form-control' type="text" onChange={(e) => {setTitle(e.target.value)}}></input>
        <br></br>
        <label>Contenu</label>
        <br></br>
        <textarea className='form-control'  onChange={(e) => {setContent(e.target.value)}}></textarea>
        <br></br>
        <button className='btn btn-primary' onClick={(e) => {handleSend(e)}}>Poster</button>
        <br></br>
      </form>
  )
}

export default ArticleForm