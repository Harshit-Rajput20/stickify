import React from 'react'
import { useState } from 'react'
import loginIcons from '../assest/signin.gif'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import {Link} from 'react-router-dom'
import imageTobase64 from '../helpers/imageTobase64';



const SignUp = () => {
    const [showPassword , setShowPassword] = useState(false)
  const [data,setData] = useState({
    email:"",
    password : "",
    name:"",
    Confirmpassword:"",
    profilePic:""

  })

  const [showConPassword , setShowConPassword] = useState(false)
 

const handleOnChange = (e) =>{
  const { name , value } = e.target

      setData((preve)=>{
        return {
          ...preve,
          [name] : value
        }
      })
}

const handleUploadPic = async(e)=>{

  const file = e.target.files[0]
  const imagepic =  await imageTobase64(file)

   

  setData((preve)=>{
    return{
      ...preve,
      profilePic: imagepic
    }
  })


  
}

const handleSubmit = (e) =>{
  e.preventDefault()
}

console.log(data)
  return (
    <section id='signup'>

    <div className='mx-auto container p-5'>
            <div className='bg-white p-4 py-5 w-full max-w-sm mx-auto'>
            <div className='w-20 h-20 mx-auto relative overflow-hidden rounded-full'>
                  
                 <div>
                 <img src={ data.profilePic || loginIcons} alt='login icons'/>
                 </div>
                <form>
                  <label>
                  <div className=' text-xs bg-opacity-80  bg-slate-200 py-4  cursor-pointer text-center absolute bottom-0 w-full'>
                  upload photo
                 </div>
                    <input type='file' className='hidden' onChange={handleUploadPic}/>
                  </label>
                </form>


              </div>      
              <form className='pt-6 flex flex-col gap-2'  onSubmit={handleSubmit}>
              <div className='grid'>
                     <label>Name :</label>
                     <div className=' bg-slate-100 p-2'>
                      
                     <input type='text' required
                     name='name' value={data.name} onChange={handleOnChange} placeholder='enter names' className=' w-full h-full outline-none bg-transparent'/> 
                     </div>
                

                </div>
                <div className='grid'>
                     <label>Email:</label>
                     <div className=' bg-slate-100 p-2'>
                      
                     <input type='email' required name='email' value={data.email} onChange={handleOnChange} placeholder='enter email' className=' w-full h-full outline-none bg-transparent'/> 
                     </div>
                

                </div>
                <div>
                     <label>Password :</label>
                    <div className=' bg-slate-100 p-2 flex'>
                     <input name='password' onChange={handleOnChange} required  value={data.password} type={showPassword ? "" : "password"} placeholder='enter password' className=' w-full h-full outline-none bg-transparent'/>
                      <div className=' cursor-pointer text-xl' onClick={()=>setShowPassword((preve)=>!preve)}>
                        <span>
                          
                          {
                            showPassword ? (
                              <FaEyeSlash />

                            )
                            :
                            (
                              <FaEye />
                            )
                          }
                          
                          
                          </span>
                      </div>
                    </div>
                      
                  {/* <Link to={'/forgot-password'} className='block w-fit ml-auto hover:underline hover: text-red-600'>
                    Forgot password ?
                  </Link> */}

                </div>
                <div>
                     <label> Confirm Password :</label>
                    <div className=' bg-slate-100 p-2 flex'>
                     <input name='Confirmpassword' required onChange={handleOnChange}  value={data.Confirmpassword} type={showConPassword ? "" : "password"} placeholder='Confirm password' className=' w-full h-full outline-none bg-transparent'/>
                      <div className=' cursor-pointer text-xl' onClick={()=>setShowConPassword((preve)=>!preve)}>
                        <span>
                          
                          {
                            showConPassword ? (
                              <FaEyeSlash />

                            )
                            :
                            (
                              <FaEye />
                            )
                          }
                          
                          
                          </span>
                      </div>
                    </div>
{/*                       
                  <Link to={'/forgot-password'} className='block w-fit ml-auto hover:underline hover: text-red-600'>
                    Forgot password ?
                  </Link> */}

                </div>
                <button className=' bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full  hover:scale-110 transition-all mx-auto block mt-6'>Sign up</button>
              </form>

              <p className='my-5'>Already have account ?<Link to={"/login"} className=' text-red-600 hover:underline hover:text-red-700' >Login</Link> </p>

            </div>
    </div>
   </section>
  )
}

export default SignUp