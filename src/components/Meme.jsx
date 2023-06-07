import React from 'react'
import "../css/Meme.css"

export default function Meme({url, upperText, lowerText}) {
  return (
    <>
    <div className='meme-container'>
      <img src={url} alt="" />
      <div className="text-wrapper"><span className='text upper-text'>{upperText}</span></div>
      <div className="text-wrapper"><span className='text lower-text'>{lowerText}</span></div>
    </div>
    </>
  )
}
