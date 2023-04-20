import React, { useContext, useState } from 'react'
import NewsContext from '../context/NewsContext'
import { getNews } from '../context/NewsAction'

const Navbar = () => {
  
  const {dispatch} = useContext(NewsContext)
  
  const [text , setText] = useState("")

  const handleSubmit = async(e) => {
    e.preventDefault()
    
    if(text === ""){
      window.alert("Please Type Something")
    }else{
      const data = await getNews(text)
    dispatch({
      type : "GET_NEWS",
      payload : data
    })
    }

    setText("")
  }
  
  return (
    <nav class="navbar navbar-expand-lg bg-danger">
  <div class="container-fluid">
    <a class="navbar-brand text-light" href="#">News Blog</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Sports</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Business</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Politics</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Tech</a>
        </li>
      </ul>
      <form class="d-flex" role="search" onSubmit={(e)=>handleSubmit(e)}>
        <input value={text} class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>setText(e.target.value)} required/>
        <button class="btn btn-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Navbar
