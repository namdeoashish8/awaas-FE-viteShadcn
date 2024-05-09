import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import snackBar from "@/utility/snackBar"
import { ValidateLoggedInUser } from "@/utility/protectRoutes";

const Signup = () => {
    //validate loggedin User
    ValidateLoggedInUser();
    
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [username, setusername] = useState('');
  const [password, setPwd] = useState('');

  const submit = async()=>{
    console.log(name, email, phone, username, password);   
    
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/auth/signup`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify({
        name, email, phone, username, password
      } )
    })

    const data = await response.json();
    if(response.status==201){
      snackBar('success', 'SignUp successful');
      resetForm();
    }
    else{
      snackBar('error', data.error);
    }
  }

  const resetForm=()=>{
    setName('')
    setPhone('')
    setEmail('')
    setusername('')
    setPwd('')
  }


  return (
    <div className="signup-container">
        <h1>Fill in details to sign up</h1>
        <div className="signup-form">
            <Input 
              type="name" 
              value={name} 
              onChange={e=> setName(e.target.value)} 
              placeholder="Name" 
              required
            />
            <Input 
                type="email" 
                value={email} 
                onChange={e=> setEmail(e.target.value)} 
                placeholder="Email address" 
                required 
            />
            <Input 
              type="number" 
              value={phone} 
              onChange={e=> setPhone(e.target.value)} 
              placeholder="Phone Number" 
              required 
            />
            <Input 
              type="username" 
              value={username} 
              onChange={e=> 
              setusername(e.target.value)} 
              placeholder="User Name" 
              required 
            />
            <Input 
              type="password"
              value={password} 
              onChange={e=> setPwd(e.target.value)} 
              placeholder="Password (atleast 6 characters" 
              required 
            />
            <Button onClick={resetForm}>Clear</Button>
            <Button onClick={submit}>Sign Up</Button>
        </div>
        {/* <Route 
          path='/login' 
          element={<Login/>}>
          <Button>Already registered ?, login instead</Button>
        </Route> */}
    </div>
  )
}

export default Signup
