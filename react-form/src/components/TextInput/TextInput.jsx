import React from 'react'

function TextInput({
    label,
    name,
    id,
    handleChange,
    handleBlur,
    type,
errorFields
}) {
  return (
    <div>
       <div className='input-section'>
        <label htmlFor="first-name">{label}</label>
        <input type={type} name={name} id={id} onChange={handleChange} onBlur={handleBlur}/>
        {errorFields[name] && <p className='danger'>{label} required</p>}
        </div>
    </div>
  )
}

export default TextInput
