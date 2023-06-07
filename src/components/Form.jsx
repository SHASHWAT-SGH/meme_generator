import React from 'react'
import "../css/Form.css"

export default function Form() {
  return (
    <form>
        <input type="text" className='form-input-text' placeholder='Upper Text'/>
        <input type="text" className='form-input-text' placeholder='Lower Text'/>
        <input type="button" value="Get a new Meme image" className='form-input-btn'/>
    </form>
  )
}
