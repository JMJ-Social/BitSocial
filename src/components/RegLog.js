import React, {useState} from "react";
import Bitter from '../images/Bitter.png'
import { addUser } from "../api";

const RegLog = () => {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [action, setAction] = useState('register')
    const [errorMessage, setErroMessage] = useState('')
    const handleRegister = async(e) => {
        e.preventDefault()
        await addUser({ firstName, lastName, username, password, email })
        setErroMessage("The username or password you entered is incorrect!")
    }
    const handleLogin = async(e) => {
        e.preventDefault()
        setErroMessage("The username or password you entered is incorrect!")
    }
    return (
        <div className="regLogPage">
            <div className="formBox">
                
                <div className="leftBox">  
               
                
                <form className={`loginForm ${action}`}>
                    {action == 'register'?
                    <h1>Register for Bitter!</h1>
                    :
                    <h1>Login to Bitter!</h1>
                    }
                    <input value={email} onChange={(e) => setEmail(e.target.value)}placeholder="Email..."></input>
                    
                    {action == 'register' ? 
                    <>
                    <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username..."></input>
                    <input value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Firstname..."></input>
                    <input value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Lastname..."></input>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password..."></input>
                    <input value={password2} onChange={(e) => setPassword2(e.target.value)} placeholder="Confirm Password..."></input>
                    </>
                    : 
                    <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password..."></input>
                    }
                    {action == 'register'?
                    <button onClick={handleRegister} className="reglogButton">Create Account</button>
                    :
                    <button onClick={handleLogin} className="reglogButton">Login</button>
                    }
                    <h4 className="errorMessage">{errorMessage}</h4>
                </form>     
                </div>
                
                <div className="optionBox">
                {action == 'register'?
                    <>
                    <img className= 'bitterLogo' src={Bitter} />
                    <h1 className="alreadyAccount">Already Have an Account?</h1>
                    <button onClick={() => {setAction('login'),
                     setEmail('')
                     setUsername('')
                     setFirstName('')
                     setLastName('')
                     setPassword('')
                     setPassword2('')
                    }} 
                    className="alreadyAccount button">Login!</button>
                    </>
                    :
                    <>
                    <img className= 'bitterLogo' src={Bitter} />
                    <h1 className="alreadyAccount">Don't have an Account?</h1>
                    <button onClick={() => {setAction('register'),
                    setEmail('')
                    setUsername('')
                    setFirstName('')
                    setLastName('')
                    setPassword('')
                    setPassword2('')
                
                }} className="alreadyAccount button login">Register!</button>
                    </>
                    
                    }
                </div>
            </div>
        </div>
    )
}

export default RegLog