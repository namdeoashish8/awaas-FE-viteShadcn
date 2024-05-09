import { UserContext } from "@/context/UserContext"
import { useContext } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {

    //Adding context to change UI once user logs in
    const {userInfo, setUserInfo} = useContext(UserContext);

    const logout=()=>{
        fetch(`${import.meta.env.VITE_BASE_URL}/auth/logout`, {credentials: 'include'})
        setUserInfo();//so that application knows to go back to logout state
    }

  return (
    <nav>
        <div className="nav-container">
            <div >
                <Link to='/'>
                    <div className="nav-left">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                        <h1>Awaas Vishwa</h1>
                    </div>
                </Link>
            </div>
            <div className="nav-right">
                {/* if user is not logged in then show below buttons */}
                { userInfo==undefined ?
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Sign Up</Link>
                    </> 
                // else show below code
                    : <>
                        <Link to="/list-property">List Property</Link>
                        <Link to="/profile">Profile</Link>
                        <Link onClick={logout}>Logout</Link>
                    </>
                }
                
            </div>
        </div>
    </nav>
  )
}

export default Navbar
