import React,{useState} from 'react'
import { useForm } from 'react-hook-form'


const Login = ({darkMode}) => {
    const [showPass, setShowPass] = useState(false)
    const [signUp, setSignUp] = useState(true)
    const { register, handleSubmit } = useForm()
    const onSubmit = (data)=>{
        console.log("form data ",data)
    }
  return (
    <div className={`h-screen flex flex-col items-center ${
        darkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'
      }`}>
       {signUp && 
       <div className='mt-10  rounded bg-gradient-to-r from-indigo-500 to-purple-600 flex flex-col items center px-6 py-4 '>
       <h2 className='text-center font-bold mb-3'>Sign In</h2>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3'>
            <input {...register("username",{required: "Username is required"})} type="text" placeholder='Username' className={`px-6 py-3  ${
        darkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'
      }`} />
            <input {...register("password",{required: "Password is required"})} type={showPass?"text":"password"} placeholder='password' className={`px-6 py-3 ${
        darkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'
      }`} />
            <p onClick={()=>{setShowPass(!showPass)}}className='cursor-pointer hover:text-blue-300 underline'>{showPass?"Hide password ?":"Show password ?"} </p>
            <button type='submit' className='font-bold cursor-pointer rounded bg-blue-400 hover:bg-blue-500 active:bg-blue-300'>Submit</button>
            <p>Don't have an account? <u className='hover:text-blue-400 cursor-pointer' onClick={()=>setSignUp(!signUp)} >Sign Up</u></p>
        </form>
       </div>}


       {!signUp && 
       <div className='mt-10  rounded bg-gradient-to-r from-indigo-500 to-purple-600 flex flex-col items center px-6 py-4 '>
       <h2 className='text-center font-bold mb-3'>Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3'>
            <input {...register("username",{required: "Username is required"})} type="text" placeholder='Username' className={`px-6 py-3  ${
        darkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'
      }`} />
        <input type="email" {...register("email",{required:"Email is required"})} className={`px-6 py-3  ${
        darkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'
      }`} placeholder='Email'/>
            <input {...register("password",{required: "Password is required"})} type={showPass?"text":"password"} placeholder='password' className={`px-6 py-3 ${
        darkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'
      }`} />
          
            <p onClick={()=>{setShowPass(!showPass)}}className='cursor-pointer hover:text-blue-300 underline'>{showPass?"Hide password ?":"Show password ?"} </p>
            <button type='submit' className='cursor-pointer rounded bg-blue-400'>Submit</button>
            <p>Already have an account? <u className='hover:text-blue-400 cursor-pointer' onClick={()=>setSignUp(!signUp)} >Sign In</u></p>
        </form>
       </div>}
    </div>
  )
}

export default Login
