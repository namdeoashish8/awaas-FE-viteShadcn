import { createContext, useEffect, useState } from "react";
export const UserContext = createContext({});

export function UserContextProvider({children}) {
    const [userInfo, setUserInfo] = useState();

    useEffect(()=>{
        fetch(`${import.meta.env.VITE_BASE_URL}/auth/profile`, {credentials: 'include'})
        .then(response=> response.json())
        .then(data=> setUserInfo(data.userInfo))
    }, [])
    // This code fetches user profile information from an API endpoint (/auth/profile) on the initial render 
    // of the UserContextProvider. The fetched data (presumably containing user details) is then stored in 
    // the component's state using setUserInfo, making it accessible to child components that consume the 
    // context.
    return(
        <UserContext.Provider value={{userInfo, setUserInfo}}>
            {children}
        </UserContext.Provider>
    )
}