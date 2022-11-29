import React, { useContext } from 'react'
import { AppContext } from '../App'
import axios from 'axios'
function FileForm() {
  const {latest, setLatest} = useContext(AppContext)
  function handleSubmit(e){
    e.preventDefault();
    const data = new FormData();
    data.append("post[title]", e.target.title.value)
    data.append("post[image]", e.target.image.files[0])
    submitToApi(data);
  }
  function Axios(data){
    console.log(data);
    axios.post("http://localhost:3001/posts",data)
  }
  function submitToApi(data){
    fetch('http://localhost:3001/posts',{
      method: 'POST',
      body: data,
    }).then(res=>res.json())
      .then(data=>{
        setLatest(data.image_url)
      })
      .catch((err) => console.log(err))
  }
  
  return (
    <div>
      <h1>File Form</h1>
      <form onSubmit={(e)=>handleSubmit((e))}>
        <label htmlFor="title">Title</label>
        <input type="text" name='title' id='title' />
        <label htmlFor="image">image</label>
        <input type="file" name="image" id="image" />
        <button type="submit">Create Post</button>
      
      </form>
    </div>
  )
}

export default FileForm