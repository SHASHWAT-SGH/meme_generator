import React from 'react'
import "../css/Meme.css"

export default function Meme() {
  return (
    <div className='meme-container'>
      <img src={require("../asstes/image.jpg")} alt="" />
    </div>
  )
}
