import './SignUpForm.css'
import user_icon from '../Assests/person.png'
import email_icon from '../Assests/email.png'
import password_icon from '../Assests/password.png'
import { useState } from 'react'


const SignUpForm = () => {

    const [action, setAction] = useState("Login")
  return (
    <div className="container">

        <div className="header">
            <div className='text'>{action}</div>
            <div className="underline"></div>
        </div>


        <div className="inputs">
              {action === "Login" ? <div></div> :  <div className="input">
                <img src={user_icon} alt="" srcset="" />
                <input type="text" placeholder='Name' required />
            </div>
             }
           

            <div className="input">
                <img src={email_icon} alt="" srcset="" />
                <input type="email" placeholder='Email Id' required />
            </div>

            <div className="input">
                <img src={password_icon} alt="" srcset="" />
                <input type="password" placeholder='password' required />
            </div>
        </div>
              {action === "Sign Up" ? <div></div> :  <div className="forgot-password">Forgot password? <span>Click here</span></div> }
       
          <div className="submit-container">
            <div className={action === "Login" ? "submit gray": "submit"} onClick={() => setAction("Sign Up")}>  Sign-Up</div>
            <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => setAction("Login")}>Login</div>
          </div>
    </div>
  )
}

export default SignUpForm