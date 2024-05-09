import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useContext, useState } from "react"
import snackBar from "@/utility/snackBar"
import { UserContext } from "@/context/UserContext";
// import { validateLoggedInUser } from "@/utility/protectRoutes";

const Login = () => {


  const [username, setusername] = useState('');
  const [password, setPwd] = useState('');



  //to save the user info from context api
  const {setUserInfo}= useContext(UserContext);

  const submitLogin = async()=>{
    console.log(username, password);   
    
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify({username, password}),
      credentials: 'include'  //sending the credentials
    })

    const data = await response.json();
    if(response.status==200){
      console.log(data?.userInfo);
      setUserInfo(data?.userInfo);
      snackBar('success', data.message);
      resetForm();
    }
    else{
      snackBar('error', data.error);
    }
  }

  const resetForm=()=>{
    setusername('')
    setPwd('')
  }

  return (
    <div className="login-container-2">
      <h1>Login using your Username and password</h1>
      <div className="login-form">
        <Input
          type="name"
          value={username}
          onChange={(e) => setusername(e.target.value)}
          placeholder="User name"
          required
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => setPwd(e.target.value)}
          placeholder="Password"
          required
        />
        <Button onClick={resetForm}>Clear</Button>
        <Button onClick={submitLogin}>Login</Button>
      </div>
    </div>
  );
};

export default Login;
