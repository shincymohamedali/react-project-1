import React from 'react'

function RadioInput({label,value,name,id,handleChange,errorFields,type}) {
  return (
    <div>
            <input type={type} value={value} name={name} id={id} onChange={handleChange}/>
             <label htmlFor={name} className='radio-item'>{value}</label>
           
    </div>
  )
}

export default RadioInput
