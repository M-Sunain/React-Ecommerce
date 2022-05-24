import React, { useState }  from 'react'
import LoginLogo from './LoginLogo'
import userIcon from './usericon.png'
import LoginassIcon from './loginpassicon.png'
import { useNavigate, useHistory } from 'react-router-dom'
import ForgetPassword from '../Modals/ForgetPassword/ForgetPassword'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginForm = () => {
    const [id, setid] = useState("")
    const [password, setpassword] = useState("")
    const navigate = useNavigate();
    // const History = useHistory();
    function checkValidate () {
        if (id === "" && password === "") {
            toast.error(<p className='m-0 font-px-15' style={{color:"#7b7878"}}>1. Invalid username or password.!</p>, {
                position: "top-center",
                autoClose: 8000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            // navigate('/')
        } 
        else if (id !== "Egsadmin" || password !== "Info@Edap543" ) {
            toast.error(<p className='m-0 font-px-15' style={{color:"#7b7878"}}>1. Invalid username or password.!</p>, {
                position: "top-center",
                autoClose: 8000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        else if (id === "Egsadmin" && password === "Info@Edap543") {
            navigate("/Dashboard")
        }
    }
    var state = false;
    var eyeIcon = document.getElementById("eyeicon")
        function toggle () { 
        if(state) {
            document.getElementById("validationCustom02").setAttribute("type","password");
            state = false;
            eyeIcon.classList.remove("fa-eye-slash")
            // eyeIcon.classList.add("fa-eye")
            eyeIcon.className = "fa-eye"
        }
        else {
            document.getElementById("validationCustom02").setAttribute("type","text");
            state = true
            eyeIcon.classList.remove("fa-eye")
            eyeIcon.classList.add("fa-eye-slash")
        }
    }
    const HandleSubmit = (e) => {
        e.preventDefault();
    }
  return (
      <div className='App-Login-Form'>
        <ToastContainer />
        <LoginLogo/>
        <form onSubmit={HandleSubmit}>
            <h4 className='m-t-0'>WELCOME</h4>
            <p className='m-t-0'>Please Enter your Id and password to login into Bacola Panel to view all the Bacola statistics</p>
            <div className='App-login-Input'>
                 <input 
                 title="Email"
                    type="text"
                    placeholder='Enter Your Email'
                    value={id}
                    onChange={ (e) => setid(e.target.value) }
                    className='font-px-14'
                 />
                 <img src={userIcon} alt=''/>
            </div>
            <div className='App-login-Input'>
                 <input 
                    title="Password"
                    type="password"
                    placeholder='Enter Your Password'
                    value={password}
                    onChange={ (e) => setpassword(e.target.value) }
                    className='font-px-14'
                    id='validationCustom02'
                 />
                 <img src={LoginassIcon} alt=''/>
                 <i className="fa-regular fa-eye-slash" onClick={toggle}></i>
            </div>
            <div className='App-Login-Btn'>
               <button
                 onClick={checkValidate}
                 type='submit'
                 >Sign in
                 </button>
            </div>
            <div className='App-Forget-Pass' title="Forget Password">
                <span data-bs-toggle="modal" data-bs-target="#forgetPass">Forget Password ?</span>
            </div>
        </form>
        <ForgetPassword/>
    </div>
  )
}

export default LoginForm
