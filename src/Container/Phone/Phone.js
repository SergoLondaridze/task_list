import React , {useState} from 'react';

// regex to match numbers between 1 and 10 digits long
const validPhoneNumber = /^\d{0,10}$/;

function Phone(){
const [phone, setPhone]=useState("");

function handleChange({target}){
   const valid=validPhoneNumber.test(target.value);
   if(valid){
    setPhone(target.value);
   }
    
}
    return(
        <>
          <label for="phone">Phone Validation (number only): </label>
          <input type="text" value={phone} id='phone' onChange={handleChange}/>
        </>
    )
}

export  default Phone;