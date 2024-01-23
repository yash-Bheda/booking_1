import React, { useEffect, useState } from 'react'
import { json, useNavigate, useParams } from 'react-router-dom'

function Register() {
  const Navigate = useNavigate()

  const [fname, setfname] = useState("");
  const [lanme, setlanme] = useState("");
  const [Phone, setphone] = useState();
  const [email, setEmail] = useState("");
  const [pass, setpss] = useState("");

  const { user_em } = useParams();

  const regishandle = (e) => {
    e.preventDefault()
    const userdata = { fname, lanme, Phone, email, pass }

    if (fname.length === 0 || lanme.length === 0 || Phone.length === 0 || email.length === 0 || pass.length === 0) {
      alert("please fill all filelds")
    }

    fetch(" http://localhost:6315/userdata",
      {
        method: "post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(userdata)
      }
    ).then((res) => {
      return res.json()

    })
    Navigate('/login')

  }

  const [showpas, setshowpas] = useState('')

  const handleevent = () => {
    setshowpas(!showpas)

  }

  return (
    <div className=''>
      <div className='container register  '>
        <div className='d-flex justify-content-center  '>
          <form onSubmit={regishandle} className=''>
            <p className='fs-2 text-center' style={{ fontFamily: "cursive" }}>Register Form</p>

            <table className='table'>
              <tbody>
                <tr>
                  <td>First Name</td>
                  <td><input value={fname} onChange={(e) => { setfname(e.target.value) }} />

                  </td>

                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>
                    {
                      fname ? "" : <span className='text-danger fs-5'>*Enter First Name</span>
                    }


                  </td>
                </tr>
              </tbody>

              <tbody>
                <tr>
                  <td>Last Name</td>
                  <td><input value={lanme} onChange={(e) => { setlanme(e.target.value) }} /></td>


                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>
                    {
                      lanme ? "" : <span className='text-danger fs-5'>*Enter last Name</span>
                    }

                  </td>
                </tr>
              </tbody>



              <tbody>          
                  <tr>
                <td>Phone Number</td>
                <td><input value={Phone} onChange={(e) => { setphone(e.target.value) }} /></td>

              </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>

                    {
                      Phone ? "" : <span className='text-danger fs-5'>*Enter phone number</span>
                    }
                  </td>
                </tr>
              </tbody>

              <tbody>
                <tr>
                  <td>Email</td>
                  <td><input value={email} name='email' onChange={(e) => { setEmail(e.target.value) }} /></td>

                </tr>
              </tbody>

              <tbody>
                <tr>
                  <td>
                    {
                      email ? "" : <span className='text-danger fs-5'>*Enter email</span>
                    }
                  </td>
                </tr>
              </tbody>


              <tbody>
                <tr>

                  <td>Password</td>

                  <td><input type={showpas ? "text" : "password"} value={pass} onChange={(e) => { setpss(e.target.value) }} /></td>

                 

                </tr>
              </tbody>

              <tbody>
                <tr>
                  <td>
                  <input type='checkbox' id='showpas' onClick={handleevent} />
                  <label htmlFor='showpas'>Show Password</label>

                  </td>
                </tr>
              </tbody>
              
                 

              <tbody>
                <tr>
                  <td>
                    {
                      pass ? "" : <span className='text-danger fs-5'>*Enter password</span>
                    }
                  </td>
                </tr>
              </tbody>
               <tbody>

                <tr>





                  <td>

                    <button type='submit' className='bg-primary border-0 text-white m-2  ' style={{ height: "30px", width: "80px" }} >Submit</button>

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

export default Register