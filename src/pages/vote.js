import React from 'react'
import './vote_css.css'
import Form from './form'
function Vote() {
  return (
   
    <div>
      <Form />     
      <div>
        <div  className="banner__img">
          <img
            className="home__image"
            src="https://cdn3.iconfinder.com/data/icons/city-lifestyle-filled-line/614/6496_-_Voting-512.png"
            alt="banner"
          />
        </div>
      </div>
      <div  className='vote'>
      <h2>Vote</h2>
      <div className='btn__vote'><button type="submit" className="btn_v">Aam Aadmi Party (AAP)</button></div>
      <div className='btn__vote'><button type="submit" className="btn_v">Bharatiya Janata Party (BJP)</button></div>
      <div className='btn__vote'><button type="submit" className="btn_v">Bahujan Samaj Party (BSP)</button></div>
      <div className='btn__vote'><button type="submit" className="btn_v">Communist Party of India (CPI)</button></div>
      <div className='btn__vote'><button type="submit" className="btn_v">Indian National Congress (INC)</button></div>
      <div className='btn__vote'><button type="submit" className="btn_v">None of the above (NOTA)</button></div>
      </div>

    </div>
   
  )
}

export default Vote
