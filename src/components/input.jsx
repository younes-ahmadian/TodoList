import React from 'react'

function Input({onChange, value, onSubmit, onClick}) {

  
  return (
    <div className="input">
    <h1 style={{color: "white"}}>What's your plans to do?</h1>
    <form className="d-flex justify-content-center" onSubmit={onSubmit}>
    <input 
    type="text"
    placeholder='Add an activity'
    value={value}
    name="text"
    onChange={onChange}
    className='w-100 m-1'
    />
    <button className="btn btn-primary m-1" onClick={onClick}>Add</button>
</form>
</div>
  )
}

export default Input