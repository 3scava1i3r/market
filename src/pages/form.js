import React from 'react'

function Form() {
  return(
    <div className="mycard">
      <div className="auth-card">
        <h2>Fill your Details</h2>
        <input className="input-field"
          type="text"
          placeholder="Full Name"
        />
        <input className="input-field"
          type="text"
          placeholder="Father's Name"
        />
        <input className="input-field"
          type="text"
          placeholder="Mother's name"
        />
        <input className="input-field"
          type="text" 
          placeholder="Aadhar Card Number"
        />
        <input className="input-field"
          type="text"
          placeholder="Age"
        />
        <input className="input-field"
          type="text"
          placeholder="Address"
        />
        <input className="input-field"
          type="text"
          placeholder="Your Voter-ID"
        />
        
        <button type="submit" className="btn_v">Submit</button>

      </div>
    </div>
  )
}

export default Form
