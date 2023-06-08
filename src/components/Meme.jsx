import React from 'react'
import "../css/Meme.css"

export default function Meme({url, upperText, lowerText, fontColor}) {
  return (
    <div className='meme-wrapper'>
    <div className='meme-container'>
      <img src={url} alt="" />
      <div className="text-wrapper"><span className='text upper-text' style={{color:fontColor}}>{upperText}</span></div>
      <div className="text-wrapper"><span className='text lower-text' style={{color:fontColor}}>{lowerText}</span></div>
    </div>
    </div>
  )
}
