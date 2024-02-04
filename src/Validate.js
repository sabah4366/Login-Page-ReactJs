import {  useState } from "react";
import './style.css'


function Validate() { 
   const [username,setUsername] = useState('')
   const [email,setEmail] = useState('')
   const [password,setPassword] = useState('')
   const [confirmPassword,setConfirmPassword] = useState('')

   const [usernameColor,setUsernameColor] = useState('')
   const [emailColor,setEmailColor] = useState('')
   const [passwordColor,setPasswordColor] = useState('')
   const [ConfirmPasswordColor,setConfirmPasswordColor] = useState('')

   const [usernameError,setUsernamError] = useState('')
   const [emaiError,setEmailError] = useState('')
   const [passwordError,setPasswordError] = useState('')
   const [confirmPasswordError,setConfirmPasswordError] = useState('')

   function handleSubmit(e){
      e.preventDefault()
      
      if (username.length > 8 ){
         setUsernamError('')
         setUsernameColor('green')
      }else{
         setUsernamError('Must enter 8 or more charcter')
         setUsernameColor('red')

      }
      if (email.includes('@gmail.')){
         setEmailError('')
         setEmailColor('green')
      }else{
         setEmailError('Invalid email')
         setEmailColor('red')

      }
      if (password.length > 8){
         setPasswordError('')
         setPasswordColor('green')
      }else{
         setPasswordError('You must enter 8 or more characters')
         setPasswordColor('red')

      }
      if (confirmPassword ==  password && password != ''){
         setConfirmPasswordError('')
         setConfirmPasswordColor('green')
      }else{
         setConfirmPasswordError('Password doesnt match')
         setConfirmPasswordColor('red')

      }
   }

   

   return (<>
   <div className="container-fluid  content">
      <form >
         <div className="card">
            <div>
               <input style={{borderColor:usernameColor}} type="text" value={username} onChange={(e) => setUsername(e.target.value)} Placeholder="Username"/>
               <p className="error" style={{color:usernameColor}} >{usernameError}</p>
            </div>
            
            <div>
               <input  style={{borderColor:emailColor}} type="text" value={email} onChange={(e) => setEmail(e.target.value)} Placeholder="Email"/>
               <p className="error" style={{color:emailColor}} >{emaiError}</p>
            </div>
            <div>
               <input  style={{borderColor:passwordColor}} type="text" value={password} onChange={(e) => setPassword(e.target.value)} Placeholder="Password"/>
               <p className="error" style={{color:passwordColor}} >{passwordError}</p>
            </div>
            <div>
               <input  style={{borderColor:ConfirmPasswordColor}} type="text" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} Placeholder="Confirm Password"/>
               <p className="error" style={{color:ConfirmPasswordColor}} >{confirmPasswordError}</p>
            </div>
            <button className="submit-btn" onClick={(e) => handleSubmit(e)}>Submit</button>
         </div>
      </form>
      
   </div>
      
   </>)
}

export default Validate;