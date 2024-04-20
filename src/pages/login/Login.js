import './login.scss'
import {useContext, useState} from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";
import {useNavigate} from "react-router-dom";
import {authContext} from "../../context/authContext";


const Login = () => {

  const [error,setError] = useState(false);
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");


  const navigate = useNavigate()

  const {dispatch} = useContext(authContext)

    const handleLogin = (e)=>{
      e.preventDefault();

      signInWithEmailAndPassword(auth,email, password)
          .then((userCredential) => {
              const user = userCredential.user;
              dispatch({type:"LOGIN", payload:user})
              navigate("/")
          })
          .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
          } )

  }

  return (
      <div className={"login"}>
        <form onSubmit={handleLogin}>
          <input type={"email"} placeholder={"email"} onChange={e=>setEmail(e.target.value)}/>
          <input type={"password"} placeholder={"password"} onChange={e=>setPassword(e.target.value)}/>
          <button type={"submit"}>Login</button>
          {error && <span>Incorrect email or password!</span>}
        </form>
      </div>
  )
}

export default Login