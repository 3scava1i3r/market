import React, {useState} from 'react';
import './logout_css.css';
import { useHistory } from "react-router-dom";
import { Link } from 'gatsby'


function Login() {
 const history = useHistory();
 const [email,setEmail] = useState('');
 const [password,setPassword] = useState('');
  
 const login = event =>{
   event.preventDefault(); //this stops the refresh!!
   //do the login logic
   auth.signInWithEmailAndPassword(email,password)
   .then((auth) => {
       //logged in redirect to homepage
       history.push("/");
   })
   .catch(e => alert(e.message));
 };

 const register = event =>{
  event.preventDefault(); //this stops the refresh!!
  //do the register logic
  auth.createUserWithEmailAndPassword(email,password)
  .then((auth) => {
    //Created a user and logged in then to homepage
    history.push("/");
})
.catch(e => alert(e.message));
};

  return (
    <div className="login">
     <Link to="/">
       <img className ="login__logo" src="https://cdn-images-1.medium.com/max/184/1*AS5kT_59a6SFbFyY04NeFA@2x.png" alt=""/>
     </Link>
     <div className="login__container">
      <h1>Sign-in</h1>
      <form>
        <h5>Email</h5>
      <input value={email} onChange={event => setEmail(event.target.value)} type="email"></input>
        <h5>Password</h5>
        <input value={password} onChange={event => setPassword(event.target.value)} type="password"></input>
        <button onClick={login} type="submit" className="login__signInButton">Sign In</button>
      </form>
      
      <p>By continuing, you agree to Government Conditions of Use and Privacy Notice.</p>
      <button onClick={register} className="login__registerButton">Create your Account to Vote</button>
      </div>
    </div>
  )
}

export default Login

