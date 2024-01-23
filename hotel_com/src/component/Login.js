import React, { useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const Navigate =useNavigate()
   const {user_em}=useParams()
//    console.log(user_em)
//    console.log(email)

    const handleevent=(e)=>{
        e.preventDefault()

        if(email.length ===0 || password.length ===0)
        {
            alert("please fill the fields")
            return
        }

    

  
        fetch(" http://localhost:6315/userdata").
        then((res)=>{
            return res.json()
        }).then((data)=>{
            data.map((v)=>{

                if(v.email ==email ||v.password ==password)
                {
                    Navigate('/')
                }
                else
                {
                    Navigate('/login')
                }
                
            
                
            
            
                   

               

            })
        })

    }
    const [passwordVisible, setPasswordVisible] = useState(false);
    const handleTogglePassword = () => {
        setPasswordVisible(!passwordVisible);
      };
    return (
        <div>
            <div className='p-5 '>
                <div className='container login bg-danger d-flex justify-content-center p-5' >
                    <form className='' onSubmit={handleevent}>
                        <h1 className='text-center  text-white' style={{ fontFamily: "cursive" }}>Login</h1>
                        <table className='Table bg-dark text-white m-5 border'>
                            <tbody>
                                 <tr>
                                <td className='fs-3'>
                                    <b>
                                        Email:

                                    </b>

                                </td>
                                <td>
                                    <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />


                                </td>

                            </tr>
                            </tbody>


                            {/* <br /> */}
                            <tbody>                          
                                  <tr>
                                <td className='fs-3'>
                                    <b>
                                        Password:


                                    </b>


                                </td>
                                <td>
                                    <input type={passwordVisible ? 'text' :"password"} value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                                    
                                </td>
                                


                                 


                                {/* <br></br> */}
                            </tr>
                            </tbody>

                            <tbody>
                                <tr>
                                    <td>

                                    <input type='checkbox' id='showPassword ' name='showPassword' checked={passwordVisible} onChange={handleTogglePassword}/>
                            <label htmlFor='showPassword'> Show password</label>
                           
                                    </td>
                                </tr>
                            </tbody>

                           
                          
                          <tbody>
                            <tr>
                                <td className='d-flex justify-content-center ' colSpan={2}>
                                    <button type="submit" className='mt-3 bg-primary border-0 ' style={{ height: "40px", width: "80px" }}>Login</button>


                                </td>


                            </tr>
                            </tbody>

                            <tbody>

                            <tr >
                                <td className='text-center ' colSpan={2}>
                                    <h4>You have no Account ?</h4>
                                    <Link to='/register' className='fs-5'>Create New Account</Link>


                                </td>
                            </tr>
                            </tbody>


                        </table>

                    </form>

                </div>

            </div>

        </div>
    )
}

export default Login