import React from 'react'
import "../css/Form.css"
import memeData from "../asstes/memeData"


export default function Form({seturl, setUpperText, setLowerText, setFontColor}) {
  
  const handleClick = () =>{
    seturl(memeData.data.memes[Math.floor(Math.random()*memeData.data.memes.length)].url)
  }

  return (
    <form>
        <input type="text" className='form-input-text' placeholder='Upper Text' onChange={(e)=>{setUpperText(e.target.value)}}/>
        <input type="text" className='form-input-text' placeholder='Lower Text' onChange={(e)=>{setLowerText(e.target.value)}}/>
        <input type="text" className='form-input-text' placeholder='Font Color (Black)' onChange={(e)=>{setFontColor(e.target.value)}}/>
        <input type="button" value="Get a new Meme image" className='form-input-btn' onClick={handleClick}/>
    </form>
  )
}
