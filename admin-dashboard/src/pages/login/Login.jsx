import { useState } from 'react';
import { useDispatch } from "react-redux";
import { login } from "../../redux/apiCalls";
import "./login.css";

const Login = () => {
const [username,setUsername] = useState("");
const [password,setPassword] = useState("");
const dispatch = useDispatch();

const handleClick = (e) =>{
    e.preventDefault()
    login(dispatch,{username,password});
};

  return (
    <div className='back' style={{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh",flexDirection:"column"}}>
      <input style={{padding:10,marginBottom:20,width:300}} type="text" placeholder='username' onChange={(e)=>setUsername(e.target.value)}/>
      <input style={{padding:10,marginBottom:20,width:300}} type="password" placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
      <button onClick={handleClick}  style={{ padding:10,width:100,borderRadius:5}}>Login</button>
    </div>
  )
}

export default Login
