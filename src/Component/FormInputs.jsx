import React, { useState } from 'react';
import { useFormik } from 'formik';
import SignupSchema from './Schema/SignupSchema';
import { IoEyeSharp } from "react-icons/io5";
import { PiEyeSlashFill } from "react-icons/pi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: ""
};

const FormInputs = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: SignupSchema,
        onSubmit: (values) => {
            toast.success("Registered Successfully");
        }
    });

    return (
        <>
            <div className='bg-white m-0 p-0'>
                <div className='form-container px-8 pt-8'>
                    <div className='form-content mb-8'>
                        <h1 className='text-lg font-semibold text-yellow-600'>Welcome!</h1>
                        <p className='text-sm font-medium text-gray-600'>to the Negi's Website for School.</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className='flex flex-col border border-gray-400 rounded py-1 px-2 mb-4'>
                            <label htmlFor="name" className='font-medium text-gray-600 text-sm'>Name <span className='text-red-700'>*</span> </label>
                            <input
                                type="text"
                                id='name'
                                name='name'
                                placeholder='Enter name'
                                className='w-80 text-xs border-none outline-none bg-transparent py-1'
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.name && touched.name ? (<p className='text-red-600 font-medium text-sm'>{errors.name}</p>) : null}
                        </div>
                        <div className='flex flex-col border border-gray-400 rounded py-1 px-2 mb-4'>
                            <label htmlFor="email" className='font-medium text-gray-600 text-sm'>Email Address<span className='text-red-700'>*</span> </label>
                            <input
                                type="email"
                                id='email'
                                name='email'
                                placeholder='Enter Email'
                                className='w-80 text-xs border-none outline-none bg-transparent py-1'
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.email && touched.email ? (<p className='text-red-600 font-medium text-sm'>{errors.email}</p>) : null}
                        </div>
                        <div className='flex flex-col border border-gray-400 rounded py-1 px-2 mb-4'>
                            <label htmlFor="password" className='font-medium text-gray-600 text-sm'>Password <span className='text-red-700'>*</span> </label>
                            <div className='flex items-center justify-between'>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id='password'
                                    name='password'
                                    placeholder='Enter Password'
                                    className='w-80 text-xs border-none outline-none bg-transparent py-1'
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <button type="button" onClick={togglePasswordVisibility} className='ml-2'>
                                    {showPassword ? <PiEyeSlashFill className='text-xl text-gray-800' /> : <IoEyeSharp className='text-xl text-gray-800' />}
                                </button>
                            </div>
                            {errors.password && touched.password ? (<p className='text-red-600 font-medium text-sm'>{errors.password}</p>) : null}
                        </div>
                        <div className='flex flex-col border border-gray-400 rounded py-1 px-2 mb-4'>
                            <label htmlFor="confirm_password" className='font-medium text-gray-600 text-sm'>Confirm Password <span className='text-red-700'>*</span> </label>
                            <div className='flex items-center justify-between'>
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    id='confirm_password'
                                    name='confirm_password'
                                    placeholder='Confirm Password'
                                    className='w-80 text-xs border-none outline-none bg-transparent py-1'
                                    value={values.confirm_password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <button type="button" onClick={toggleConfirmPasswordVisibility} className='ml-2'>
                                    {showConfirmPassword ? <PiEyeSlashFill className='text-xl text-gray-800' /> : <IoEyeSharp className='text-xl text-gray-800' />}
                                </button>
                            </div>
                            {errors.confirm_password && touched.confirm_password ? (<p className='text-red-600 font-medium text-sm'>{errors.confirm_password}</p>) : null}
                        </div>
                        <div className='register-btn flex items-center justify-between mt-10'>
                            <div className='text-sm font-medium text-yellow-600'> Want to Register, Click on the Btn!</div>
                            <button className='bg-yellow-600 text-white rounded px-2 py-1 hover:bg-yellow-800' type='submit'>Register</button>
                        </div>
                        <div className='register-btn flex items-center justify-center mt-7'>
                            <div className='text-sm font-medium text-gray-800'>Already Have an Account? <span className='text-yellow-600'>Login now</span></div>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </>
    );
}

export default FormInputs;
