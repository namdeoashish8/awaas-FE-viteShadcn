import { UserContext } from "@/context/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export function ValidateLoggedInUser(){
    // logged in user redirect to home page
    const navigate= useNavigate();
    const {userInfo} = useContext(UserContext);
    if(userInfo){
        return navigate("/");
    }
}

export function ValidateNotLoggedInUser(){
    //not logged in user redirect to login page
    const navigate= useNavigate() ;
    const {userInfo} = useContext(UserContext);
    if(!userInfo){
        return navigate("/login");
    }
}
