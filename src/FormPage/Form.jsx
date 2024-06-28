import React from 'react'
import FormImage from '../Component/FormImage'
import FormInputs from '../Component/FormInputs'

const Form = () => {
  return (
    <>
    <div className='flex items-center justify-center gap-2 w-screen h-screen bg-orange-50'>
    <div className=' flex'>
    <FormInputs />
    <FormImage />
    </div>
    </div>
    </>
  )
}

export default Form