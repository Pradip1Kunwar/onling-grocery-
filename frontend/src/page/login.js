import React, { useState } from 'react';
import signup from '../assest/signup.jpg';
import { BiShow, BiHide} from "react-icons/bi";
import { Link } from 'react-router-dom';

const Login = () => {
  const [showpassword,setShowpassword] = useState(false)
  const [data,setData] = useState ({
    firstName : '',
    lastName :'',
    email :'',
    password:'',
    confirmpassword:''
  });
  console.log(data);
  const handleshowpassword = () =>{
  setShowpassword (preve => !preve)
  };
  const handleOnChange = (e) =>{
    const {name, value} = e.target
    setData((preve)=>{
      return{
        ...preve,
        [name] : value
      }
    })
  }
  const handelSubmit= (e) =>{
    e.preventDefault()
    const {email,password} = data
    if(email && password){
        alert("successfull")
      }
    else{
      alert("please enter require field")
    }
  }
  return (
    <div className='p-3 md:p-4'>
        <div className='w-full max-w-sm bg-white m-auto flex flex-col p-4' > 
            <div className='w-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto'>
                <img src={signup} className='w-full'/>
            </div>
            <form className='w-full py-3 flex flex-col' onSubmit={handelSubmit}>
              <label htmlFor='email'>Email</label>
              <input type={'email'} id='email' name='email' className='mt-1 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300' value={data.email} onChange={handleOnChange}/>
            
              <label htmlFor='password'>Password</label>
              <div className='flex mt-1 px-2 py-1 rounded bg-slate-200 focus-within:outline focus-within:outline-blue-300'>
              <input type={ showpassword ?'text':'password'} id='password' name='password' className=' w-full bg-slate-200 border-none outline-none' value={data.password} onChange={handleOnChange} />
              <span className='flex text-xl cursor-Pointer' onClick={handleshowpassword}>{showpassword ?<BiShow/> : <BiHide />}</span>
              </div>

              <button type='submit' className='w-full max-w-[150px] m-auto w-full bg-red-500 hover:bg-red-600 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4'>Login </button>
            </form>
            <p className='text-left text-sm mt-2'> Don't have account? <Link to={"/Signup"} className='text-red-500 underline'>SignUp </Link> </p>
            
        </div>
    </div>
  )
}

export default Login