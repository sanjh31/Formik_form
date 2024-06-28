import React from 'react'
import FormImage1 from "../assets/FormImage2.jpg"

const FormImage = () => {
  return (
    <>
    <div >
        <div  style={{ width: "400px"}}>
            <img src={FormImage1} alt=""  className='w-full h-full object-cover '/>
        </div>
    </div>
    </>
  )
}

export default FormImage