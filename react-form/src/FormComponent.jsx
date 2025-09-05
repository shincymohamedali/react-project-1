
import { useState } from 'react'
import React from 'react'
import './FormComponent.css'
import TextInput from './components/TextInput/TextInput'
import RadioInput from './components/RadioInput/RadioInput'

function FormComponent() {
    const [fields,setFields]=useState({
        "first-name":"",
        "last-name":"",
        "gender":"",
        "country":""

    })
    const [errorFields,setErrorFields]=useState({
        "first-name":false,
        "last-name":false,
        "gender":false,
        "country":false
    })
    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log(isFormValid())
       if(isFormValid()){
        alert("form submitted")
       }else{
       }
    }

    const handleBlur=(event)=>{
        if(event.target.value==''){
            setErrorFields((prev)=>({
                ...prev,
                [event.target.name]:true
            }))
        }

    }

    const isFormValid=()=>{
 let errors={
            "first-name":false,
        "last-name":false,
        "gender":false,
        "country":false
        }
        event.preventDefault();
        if(fields['first-name']==''){
            errors['first-name']=true;
        }
         if(fields['last-name']==''){
            errors['last-name']=true;
        }
         if(fields['country']==''){
            errors['country']=true;
        }
         if(fields['gender']==''){
            errors['gender']=true;
        }
        console.log(Object.values(errors));
        setErrorFields(errors);
        if(Object.values(errors).includes(true)){
            return false;
        }
        return true;
    }
    const handleChange=(event)=>{
         if(event.target.value==''){
            setErrorFields((prev)=>({
                ...prev,
                [event.target.name]:true
            }))
        }
        else{
            setErrorFields((prev)=>({
        ...prev,
        [event.target.name]:false
    }))
        }
        setFields((prev)=>({
            ...prev,
            [event.target.name]:event.target.value
    }))
    

    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Registration Form</h1>
        <p className="caption">Please fill the form</p>
        <TextInput label="First Name" name="first-name" id="first-name" handleChange={handleChange} handleBlur={handleBlur} type="text" errorFields={errorFields}></TextInput>
        <TextInput label="Last Name" name="last-name" id="last-name" handleChange={handleChange} handleBlur={handleBlur} type="text" errorFields={errorFields}></TextInput>
        <div className='input-section radio-groups'>
        <label htmlFor="gender">Gender</label>

        <RadioInput value="male" label="Gender" name="gender" id="gender" handleChange={handleChange} handleBlur={handleBlur} type="radio" errorFields={errorFields}></RadioInput>
        <RadioInput value="female" label="Gender" name="gender" id="gender" handleChange={handleChange} handleBlur={handleBlur} type="radio" errorFields={errorFields}></RadioInput>

        </div>
       <div className='input-section dropdown-section'> 
        <label htmlFor="country">Country</label>
        <select name="country" id="country" onChange={handleChange} >
            <option value="select">select</option>
            <option value="india">India</option>
            <option value="uae">UAE</option>
        </select>
                        {errorFields.country && <p className='danger'>Country required</p>}

        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default FormComponent

